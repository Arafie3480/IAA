import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${company.domain}`;
  const now = new Date();

  // /site-b is an internal placeholder (noindex) — keep it out of the sitemap.
  const routes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/elites",
    "/companies",
    "/mentors",
    "/insights",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/elites" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/elites" ? 0.9 : 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((item) => ({
    url: `${base}/insights/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...insightRoutes];
}
