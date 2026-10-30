#!/usr/bin/env node
/** Quick live HTML checks for Site A staging punch-list. */
import https from "node:https";

const url = `https://6adb33304ae68.mywebzi.ir/?v=${Date.now()}`;

function get(u) {
  return new Promise((resolve, reject) => {
    https
      .get(u, (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(d));
      })
      .on("error", reject);
  });
}

const html = await get(url);
const checks = [
  ["نخبگان title", html.includes("نخبگان")],
  ["استاد هستم", html.includes("استاد هستم")],
  ["شرکت‌ها", html.includes("شرکت‌ها")],
  ["hero line", html.includes("ما توانمندی‌های شما را می‌بینیم")],
  ["IAA future", html.includes("IAA future")],
  ["old رشد استعداد", !html.includes("رشد استعدادهای جوان")],
  ["old چندوجهی", !html.includes("توانمندی‌های چندوجهی")],
  ["header logo png", /uploads\/[a-f0-9]+\.w_160,h_88[^"']*\.png/.test(html)],
  ["old white jpg logo", !html.includes("e788efc59cde44b4aeaa1f8985c18848")],
  ["path CTA present", html.includes("/path/")],
];

for (const [name, ok] of checks) {
  console.log(`${ok ? "OK" : "FAIL"}  ${name}`);
}
const logo = html.match(/uploads\/[a-f0-9]+\.w_160,h_88[^"']*/);
console.log("logo:", logo?.[0] ?? "(none)");
