import type { Metadata } from "next";
import { company } from "@/lib/company";

const base = `https://${company.domain}`;

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

/** Unique Persian title + canonical + Open Graph for each route. */
export function pageSeo({
  title,
  description,
  path,
  ogType = "website",
}: PageSeoInput): Metadata {
  const url = path === "/" ? base : `${base}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "fa-IR": path,
      },
    },
    openGraph: {
      title: `${title} | ${company.brand}`,
      description,
      url,
      locale: "fa_IR",
      type: ogType,
      siteName: company.brandFull,
      // opengraph-image.tsx / twitter-image.tsx supply 1200×630 assets.
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.brand}`,
      description,
    },
  };
}
