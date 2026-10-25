import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "سایت دوم — در انتظار بریف",
  description: "جایگاه داخلی سایت دوم قرارداد IAA؛ موضوع هنوز از کارفرما دریافت نشده است.",
  robots: { index: false, follow: false },
};

export default function SiteBPlaceholderPage() {
  return (
    <>
      <PageHero
        eyebrow="Site B · noindex"
        title="سایت دوم قرارداد — هنوز تعریف نشده"
        description="طبق توافق کارفرما، سایت دوم بعد از تحویل سایت اول شروع می‌شود. بدون بریف کتبی محصولی اختراع نمی‌کنیم."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl space-y-4 text-[var(--fg-muted)] leading-8">
          <p>
            پرسش‌های اسکوپ و برنامه داخلی در ریپو آماده است:
          </p>
          <ul className="list-disc space-y-2 ps-6">
            <li>
              <code className="text-[var(--accent)]">content/SITE_B_QUESTIONS.md</code>
            </li>
            <li>
              <code className="text-[var(--accent)]">content/SITE_B_PLAN.md</code>
            </li>
          </ul>
          <p>این صفحه فقط برای تیم فریلنسر است و در sitemap/robots ایندکس نمی‌شود.</p>
        </div>
        <Link href="/" className={buttonVariants({ size: "lg", className: "mt-10" })}>
          بازگشت به سایت ۱
        </Link>
      </section>
    </>
  );
}
