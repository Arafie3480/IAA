import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.brand} — ${company.nameFa}`,
    short_name: company.brand,
    description:
      "موسسه علمی ایده آرای آرسس — جذب نخبگان، همکاری با شرکت‌ها و هدایت تیم‌ها.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b12",
    theme_color: "#070b12",
    lang: "fa-IR",
    dir: "rtl",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
