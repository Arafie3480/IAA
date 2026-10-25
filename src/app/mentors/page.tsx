import type { Metadata } from "next";
import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "اساتید",
  description: "اعلام آمادگی هدایت تیم‌ها در مسیر علمی IAA.",
  path: "/mentors",
});

export default function MentorsPage() {
  return (
    <>
      <PageHero
        eyebrow="اولویت سوم مخاطبان"
        title="اساتید و هدایت تیم"
        description="مهارت و تجربه خود را برای هدایت تیم‌های توانمند در اختیار مسیر IAA بگذارید."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <ApplyForm kind="mentor" />
      </section>
    </>
  );
}
