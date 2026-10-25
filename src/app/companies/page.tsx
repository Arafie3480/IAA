import type { Metadata } from "next";
import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "شرکت‌ها",
  description:
    "سپردن مسئله علمی یا فنی به شبکه متخصصان IAA — فرم همکاری شرکتی.",
  path: "/companies",
});

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="اولویت دوم مخاطبان"
        title="همکاری با شرکت‌ها"
        description="مسئله علمی یا فنی دارید؟ پروژه را بسپارید تا در صورت تأیید، به متخصص مرتبط در شبکه IAA وصل شوید."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <ApplyForm kind="company" />
      </section>
    </>
  );
}
