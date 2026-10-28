import assert from "node:assert/strict";
import test from "node:test";

const base = process.env.SITE_TEST_URL || "http://127.0.0.1:43127";
assert.ok(
  ["localhost", "127.0.0.1", "[::1]"].includes(new URL(base).hostname),
  "Acceptance tests run only against a local server.",
);

const pages = [
  "/",
  "/about",
  "/elites",
  "/companies",
  "/mentors",
  "/path",
  "/contact",
  "/insights",
  "/insights/real-ability-over-gpa",
  "/insights/science-meets-market",
  "/insights/mentors-shape-teams",
];
const titles = new Set();
const internalLinks = new Set();

for (const path of pages) {
  test(`page ${path}: renders Persian content and SEO`, async () => {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /<html[^>]*lang="fa"[^>]*dir="rtl"/);
    assert.match(html, /<h1\b/);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.ok(
      html.includes(
        `rel="canonical" href="https://iaafuture.com${path === "/" ? "" : path}"`,
      ),
    );
    assert.ok(html.includes("اعلام آمادگی همکاری"));
    assert.ok(html.includes("mailto:ljannesar9140@gmail.com"));
    assert.doesNotMatch(html, /mailto:info@iaafuture\.com/);

    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title);
    assert.ok(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);

    for (const match of html.matchAll(/<a\b[^>]*\bhref="(\/[^"#]*)"/g)) {
      internalLinks.add(match[1]);
    }

    if (["/elites", "/companies", "/mentors", "/contact"].includes(path)) {
      assert.ok(html.includes("فرم پیش‌نمایش است"));
      assert.doesNotMatch(html, /type="file"/);
    }
  });
}

test("navigation: all rendered internal links resolve", async () => {
  assert.ok(internalLinks.size >= pages.length);
  for (const path of internalLinks) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, path);
  }
});

test("about: public FAQ and structured data describe institute services", async () => {
  const response = await fetch(new URL("/about", base));
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.doesNotMatch(html, /سایت دوم قرارداد/);
  const structuredData = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  const faq = structuredData.find((entry) => entry["@type"] === "FAQPage");
  assert.ok(faq);
  assert.equal(faq.mainEntity.length, 4);
  for (const question of faq.mainEntity) {
    assert.ok(html.includes(question.name));
    assert.ok(html.includes(question.acceptedAnswer.text));
  }
  assert.ok(faq.mainEntity.some((entry) => entry.name === "شرکت‌ها چگونه مسئله خود را مطرح کنند؟"));
});

test("SEO: sitemap includes public pages and excludes site B", async () => {
  const response = await fetch(new URL("/sitemap.xml", base));
  assert.equal(response.status, 200);
  const xml = await response.text();
  for (const path of pages) {
    assert.ok(xml.includes(`https://iaafuture.com${path === "/" ? "" : path}</loc>`));
  }
  assert.doesNotMatch(xml, /\/site-b/);
});

test("SEO: robots excludes internal and API routes", async () => {
  const response = await fetch(new URL("/robots.txt", base));
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.match(text, /Disallow: \/site-b/);
  assert.match(text, /Disallow: \/api\//);
});

for (const path of [
  "/manifest.webmanifest",
  "/opengraph-image",
  "/twitter-image",
  "/logo-iaa.png",
  "/favicon.ico",
]) {
  test(`asset ${path}: available`, async () =>
    assert.equal((await fetch(new URL(path, base))).status, 200),
  );
}

for (const path of ["/missing-page", "/insights/missing-article"]) {
  test(`missing resource ${path}: returns 404`, async () =>
    assert.equal((await fetch(new URL(path, base))).status, 404),
  );
}

test("site B placeholder: remains noindex", async () => {
  const response = await fetch(new URL("/site-b", base));
  assert.equal(response.status, 200);
  assert.match(await response.text(), /name="robots" content="noindex/);
});

const fixtures = {
  elite: {
    fullName: "Acceptance test",
    age: "۲۵",
    achievements: "Test research",
    motivation: "Test motivation",
    goals: "Test goals",
    difference: "Test experience",
    phone: "۰۹۱۲۱۲۳۴۵۶۷",
    email: "test@example.com",
  },
  company: {
    entityType: "حقوقی",
    intro: "Test company",
    project: "Test project",
    budget: "Test budget",
    phone: "02188776655",
    email: "test@example.com",
  },
  mentor: {
    fullName: "Test mentor",
    motivation: "Test mentoring",
    achievements: "Test research",
    phone: "09121234567",
    email: "test@example.com",
  },
  contact: {
    fullName: "Test contact",
    email: "test@example.com",
    message: "Acceptance test only",
  },
};

for (const [kind, entries] of Object.entries(fixtures)) {
  test(`API ${kind}: reports preview without claiming delivery`, async () => {
    const data = new FormData();
    for (const [name, value] of Object.entries(entries)) data.set(name, value);
    const response = await fetch(new URL(`/api/forms/${kind}`, base), {
      method: "POST",
      body: data,
    });
    assert.equal(response.status, 200);
    const result = await response.json();
    assert.equal(result.ok, true);
    assert.equal(result.delivery, "preview");
    assert.ok(result.message.includes("ایمیل نشده"));
  });

  test(`API ${kind}: rejects an empty request`, async () => {
    const response = await fetch(new URL(`/api/forms/${kind}`, base), {
      method: "POST",
      body: new FormData(),
    });
    assert.equal(response.status, 400);
    const result = await response.json();
    assert.equal(result.ok, false);
    assert.ok(Object.keys(result.fieldErrors).length > 0);
  });
}

test("API: rejects unknown form kind", async () => {
  const response = await fetch(new URL("/api/forms/unknown", base), {
    method: "POST",
    body: new FormData(),
  });
  assert.equal(response.status, 404);
});

test("API: rejects malformed request", async () => {
  const response = await fetch(new URL("/api/forms/contact", base), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });
  assert.equal(response.status, 400);
});
