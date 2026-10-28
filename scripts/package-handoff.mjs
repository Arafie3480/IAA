import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { copyFile, lstat, mkdir, mkdtemp, readFile, readdir, realpath, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = await realpath(fileURLToPath(new URL("..", import.meta.url)));
const sourceDirectories = ["src", "public", "content", "scripts", "client-handoff"];
const sourceFiles = [
  "package.json", "package-lock.json", "next.config.ts", "tsconfig.json",
  "postcss.config.mjs", "eslint.config.mjs", ".env.example", ".gitignore",
];
for (const entry of await readdir(projectRoot, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".md") && !["AGENTS.md", "CLAUDE.md", "SYNC_LOCAL.md"].includes(entry.name)) {
    sourceFiles.push(entry.name);
  }
}

async function collect(relativePath) {
  const absolutePath = path.join(projectRoot, relativePath);
  const stat = await lstat(absolutePath);
  if (stat.isSymbolicLink()) throw new Error(`Linked paths cannot be packaged: ${relativePath}`);
  const resolvedPath = await realpath(absolutePath);
  const relativeResolvedPath = path.relative(projectRoot, resolvedPath);
  if (relativeResolvedPath.startsWith("..") || path.isAbsolute(relativeResolvedPath)) {
    throw new Error(`Source is outside the project: ${relativePath}`);
  }
  if (stat.isDirectory()) {
    for (const entry of await readdir(absolutePath)) await collect(path.join(relativePath, entry));
  } else if (stat.isFile()) {
    const basename = path.basename(relativePath);
    if ((/^\.env/i.test(basename) && relativePath !== ".env.example") || /\.(pem|key|pfx|p12)$/i.test(basename)) {
      throw new Error(`Private configuration cannot be packaged: ${relativePath}`);
    }
    packagedFiles.add(relativePath);
  } else {
    throw new Error(`Unsupported file type: ${relativePath}`);
  }
}

const packagedFiles = new Set();
for (const sourcePath of [...sourceDirectories, ...sourceFiles]) await collect(sourcePath);
const packageName = `IAA-preview-${new Date().toISOString().replace(/[:.]/g, "-")}`;
const outputRoot = path.join(projectRoot, "artifacts", "delivery");
await mkdir(outputRoot, { recursive: true });
const stagingRoot = path.join(outputRoot, packageName);
await mkdir(stagingRoot);
const archivePath = `${stagingRoot}.zip`;
const pendingArchivePath = `${stagingRoot}.pending.zip`;
const manifest = {
  package: packageName,
  createdAt: new Date().toISOString(),
  scope: "IAA institute source preview and Webzi handoff; live delivery and clothing store remain open.",
  files: [],
};
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
for (const relativePath of [...packagedFiles].sort()) {
  const destination = path.join(stagingRoot, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(path.join(projectRoot, relativePath), destination);
  const bytes = await readFile(destination);
  manifest.files.push({ path: relativePath.split(path.sep).join("/"), bytes: bytes.length, sha256: sha256(bytes) });
}
await writeFile(path.join(stagingRoot, "MANIFEST.json"), `${JSON.stringify(manifest, null, 2)}\n`);

const archiveTool = process.platform === "win32" ? "tar.exe" : "bsdtar";
execFileSync(archiveTool, ["-a", "-cf", pendingArchivePath, "-C", stagingRoot, "."], { stdio: "pipe" });
const archiveEntries = execFileSync(archiveTool, ["-tf", pendingArchivePath], { encoding: "utf8" })
  .trim().split(/\r?\n/).filter((entry) => !entry.endsWith("/"));
const expectedEntries = new Set(["./MANIFEST.json", ...manifest.files.map((entry) => `./${entry.path}`)]);
if (archiveEntries.length !== expectedEntries.size || archiveEntries.some((entry) => !expectedEntries.has(entry))) {
  throw new Error("The archive contents do not match the delivery manifest.");
}
const verificationRoot = await mkdtemp(path.join(outputRoot, ".verify-"));
try {
  execFileSync(archiveTool, ["-xf", pendingArchivePath, "-C", verificationRoot], { stdio: "pipe" });
  for (const entry of manifest.files) {
    const bytes = await readFile(path.join(verificationRoot, entry.path));
    if (bytes.length !== entry.bytes || sha256(bytes) !== entry.sha256) {
      throw new Error(`Archive verification failed: ${entry.path}`);
    }
  }
  const archivedManifest = await readFile(path.join(verificationRoot, "MANIFEST.json"), "utf8");
  if (JSON.stringify(JSON.parse(archivedManifest)) !== JSON.stringify(manifest)) {
    throw new Error("The archive manifest could not be verified.");
  }
} finally {
  if (path.dirname(verificationRoot) !== outputRoot || !path.basename(verificationRoot).startsWith(".verify-")) {
    throw new Error("The verification cleanup path is outside its expected directory.");
  }
  await rm(verificationRoot, { recursive: true });
}
await rename(pendingArchivePath, archivePath);
console.log(`Verified ${manifest.files.length} packaged files against their SHA-256 hashes.`);
console.log(archivePath);
console.log(`Archive SHA-256: ${sha256(await readFile(archivePath))}`);
