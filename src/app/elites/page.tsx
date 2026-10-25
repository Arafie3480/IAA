import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/page-hero";
import { company, eliteProcess } from "@/lib/company";

export const metadata: Metadata = {
  title: "نخبه‌ها",
  description: `${company.cta} — جامعه نخبگان IAA؛ بازه سنی ${company.ageRange} با امکان استثنا.`,
};

export default function ElitesPage() {
  return (
    <>
      <PageHero
        eyebrow="اولویت اول مخاطبان"
        title="جامعه نخبگان IAA"
        description={`اگر می‌توانید تغییر ایجاد کنید، خودتان را معرفی کنید. بازه اصلی ${company.ageRange} است؛ موارد استثنا با توضیح پذیرفته می‌شود. معدل یا مدرک رسمی الزامی نیست.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <ol className="mb-10 grid gap-3 sm:grid-cols-5">
          {eliteProcess.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-4 text-center"
            >
              <span className="font-display text-sm font-bold text-[var(--accent)]">
                {index + 1}
              </span>
              <p className="mt-2 text-xs leading-6 text-[var(--fg-muted)]">
                {step}
              </p>
            </li>
          ))}
        </ol>
        <p className="mb-8 max-w-2xl text-sm leading-7 text-[var(--fg-muted)]">
          جزئیات کامل در{" "}
          <Link href="/path" className="text-[var(--accent)] underline-offset-4 hover:underline">
            مسیر همکاری
          </Link>
          . پس از ارسال، درخواست بررسی می‌شود و در صورت پیشرفت به مصاحبه مدیرعامل
          می‌رسد.
        </p>
        <ApplyForm kind="elite" />
      </section>
    </>
  );
}
