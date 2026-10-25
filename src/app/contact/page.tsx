import type { Metadata } from "next";
import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/company";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "تماس",
  description: `آدرس و اطلاعات حقوقی ${company.nameFa} — ${company.address}`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={company.domain}
        title="تماس با IAA"
        description="آدرس پارک علم و فناوری، شناسه‌های حقوقی و فرم پیام مستقیم."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">
            اطلاعات شرکت
          </h2>
          <dl className="mt-6 space-y-5 text-sm leading-7">
            <div>
              <dt className="text-[var(--fg-muted)]">نام</dt>
              <dd className="mt-1 text-[var(--fg)]">
                {company.nameFa} ({company.brandFull})
              </dd>
            </div>
            <div>
              <dt className="text-[var(--fg-muted)]">آدرس</dt>
              <dd className="mt-1 text-[var(--fg)]">{company.address}</dd>
            </div>
            <div>
              <dt className="text-[var(--fg-muted)]">شماره ثبت</dt>
              <dd className="mt-1 text-[var(--fg)]">{company.registrationNo}</dd>
            </div>
            <div>
              <dt className="text-[var(--fg-muted)]">شناسه ملی</dt>
              <dd className="mt-1 text-[var(--fg)]">{company.nationalId}</dd>
            </div>
            <div>
              <dt className="text-[var(--fg-muted)]">ایمیل</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${company.email}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="mb-6 font-display text-2xl font-bold tracking-tight">
            پیام مستقیم
          </h2>
          <ApplyForm kind="contact" />
        </div>
      </section>
    </>
  );
}
