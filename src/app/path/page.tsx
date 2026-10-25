import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { company, eliteProcess } from "@/lib/company";

export const metadata: Metadata = {
  title: "مسیر همکاری",
  description:
    "از اعلام آمادگی تا مصاحبه مدیرعامل — مسیر شفاف پیوستن به شبکه IAA.",
};

export default function PathPage() {
  return (
    <>
      <PageHero
        eyebrow="فرایند شفاف"
        title="مسیر همکاری با IAA"
        description="اعلام آمادگی همکاری، آغاز بررسی است؛ نه پایان مسیر. هر مرحله هدف مشخص دارد تا استعداد واقعی به پروژه و تیم درست برسد."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {eliteProcess.map((step, index) => (
            <li
              key={step}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <span className="font-display text-3xl font-bold text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-sm leading-7 text-[var(--fg)]">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-2xl space-y-4 text-sm leading-7 text-[var(--fg-muted)]">
          <p>
            مخاطب اصلی این مسیر نخبه‌ها هستند؛ شرکت‌ها و اساتید نیز از طریق فرم
            اختصاصی وارد می‌شوند و پس از بررسی به شبکه مناسب وصل می‌گردند.
          </p>
          <p>
            جزئیات اختراعات محرمانه فقط در چارچوب همکاری رسمی مطرح می‌شود. در
            سایت فقط به وجود ثبت‌ها اشاره می‌کنیم.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/elites" className={buttonVariants({ size: "lg" })}>
            {company.cta}
            <ArrowLeft className="size-4" />
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            تماس با IAA
          </Link>
        </div>
      </section>
    </>
  );
}
