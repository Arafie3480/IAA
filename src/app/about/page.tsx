import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { achievements, company } from "@/lib/company";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "درباره IAA",
  description: `داستان و هویت حقوقی ${company.nameFa} — ${company.brand}`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={company.brandFull}
        title={`درباره ${company.nameFa}`}
        description="موسسه‌ای علمی برای دیدن توانمندی واقعی — جایی که نخبگی با میدان عمل گره می‌خورد، نه فقط با مدرک."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl space-y-6 text-base leading-8 text-[var(--fg-muted)]">
          <p>
            <span className="font-display text-[var(--fg)]">{company.brand}</span>{" "}
            ({company.nameFa}) حضور آنلاینی می‌سازد برای جذب افراد توانمند، حل
            مسئله‌های علمی و فنی شرکت‌ها، و هدایت تیم‌ها با اعتبار علمی.
          </p>
          <p>
            هدف ما فروش مستقیم نیست؛ هدف ساخت مسیری شفاف برای همکاری با کسانی
            است که می‌توانند تغییر ایجاد کنند — حتی اگر معدل درخشان یا مدرک
            رسمی نداشته باشند.
          </p>
          <p>
            لحن برند ما قوی، نخبه‌محور و علمی است: پذیرش در این مسیر یعنی ورود به
            یک میدان جدی، نه یک فرم عضویت معمولی.
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-[var(--border)] pt-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              هویت حقوقی
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--fg-muted)]">
              <li>
                <span className="text-[var(--fg)]">نام شرکت:</span>{" "}
                {company.nameFa} ({company.brandFull})
              </li>
              <li>
                <span className="text-[var(--fg)]">شماره ثبت:</span>{" "}
                {company.registrationNo}
              </li>
              <li>
                <span className="text-[var(--fg)]">شناسه ملی:</span>{" "}
                {company.nationalId}
              </li>
              <li>
                <span className="text-[var(--fg)]">آدرس:</span> {company.address}
              </li>
              <li>
                <span className="text-[var(--fg)]">دامنه:</span> {company.domain}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              دستاوردها
            </h2>
            <ul className="mt-6 space-y-6">
              {achievements.map((item) => (
                <li key={item.title} className="border-s-2 border-[var(--accent)] ps-4">
                  <h3 className="font-semibold text-[var(--fg)]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-[var(--fg-muted)]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/elites" className={buttonVariants({ size: "lg" })}>
            {company.cta}
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            تماس با ما
          </Link>
        </div>
      </section>
    </>
  );
}
