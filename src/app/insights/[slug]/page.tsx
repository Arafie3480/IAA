import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/company";
import { getInsight, insights } from "@/lib/insights";
import { pageSeo } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) return { title: "یافت نشد" };
  return pageSeo({
    title: item.title,
    description: item.excerpt,
    path: `/insights/${item.slug}`,
    ogType: "article",
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs text-[var(--gold)]">{item.dateLabel}</p>
      <h1 className="mt-3 font-display text-3xl font-bold leading-relaxed tracking-tight sm:text-4xl">
        {item.title}
      </h1>
      <p className="mt-4 text-[var(--fg-muted)] leading-8">{item.excerpt}</p>
      <div className="mt-10 space-y-6 text-base leading-8 text-[var(--fg)]">
        {item.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3 border-t border-[var(--border)] pt-8">
        <Link href="/elites" className={buttonVariants()}>
          {company.cta}
        </Link>
        <Link href="/insights" className={buttonVariants({ variant: "outline" })}>
          بازگشت به بینش‌ها
        </Link>
      </div>
    </article>
  );
}
