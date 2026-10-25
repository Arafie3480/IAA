import type { MetadataRoute } from "next";
import { company, nav } from "@/lib/company";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${company.domain}`;
  const now = new Date();

  const pages = nav.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));

  const articles = insights.map((item) => ({
    url: `${base}/insights/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...pages, ...articles];
}
