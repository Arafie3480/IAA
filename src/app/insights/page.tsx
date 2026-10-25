import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { insights } from "@/lib/insights";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "بینش‌ها و اخبار",
  description: "مقالات نمونه درباره مسیر نخبگی، علم کاربردی و هدایت تیم‌ها در IAA.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="محتوای نمونه"
        title="بینش‌ها و اخبار"
        description="سه یادداشت کوتاه برای شروع بخش مقالات — قابل جایگزینی با محتوای نهایی کارفرما."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <ul className="grid gap-8 md:grid-cols-3">
          {insights.map((item) => (
            <li key={item.slug} className="border-t border-[var(--border)] pt-6">
              <p className="text-xs text-[var(--gold)]">{item.dateLabel}</p>
              <h2 className="mt-3 text-xl font-semibold leading-8">
                <Link
                  href={`/insights/${item.slug}`}
                  className="hover:text-[var(--accent)]"
                >
                  {item.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--fg-muted)]">
                {item.excerpt}
              </p>
              <Link
                href={`/insights/${item.slug}`}
                className="mt-4 inline-block text-sm text-[var(--accent)] hover:underline"
              >
                ادامه مطلب
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
