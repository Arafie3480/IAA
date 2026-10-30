import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "سایت ۲ — اسکلت فروشگاه لباس",
  description:
    "شروع اسکلت فروشگاه لباس قرارداد IAA؛ کاتالوگ واقعی پس از پاسخ بریف کارفرما.",
  robots: { index: false, follow: false },
};

const shell = [
  { title: "خانه", text: "برند · CTA فروشگاه · لینک اعتماد به Site A" },
  { title: "کاتالوگ", text: "≥۱ دسته · لیست با تصویر و قیمت ریال" },
  { title: "محصول", text: "سایز (±رنگ) · موجودی · افزودن به سبد" },
  { title: "سبد / تسویه", text: "تا ثبت سفارش آزمایشی COD یا سندباکس" },
  { title: "حقوقی", text: "ارسال · مرجوعی · حریم — متن مالک" },
] as const;

const blockers = [
  "برند فروشگاه، لوگو/رنگ، دامنه",
  "دسترسی امن WordPress/WooCommerce (رمز در چت عمومی ننویسید)",
  "فایل محصولات اولیه (نام، SKU، سایز، قیمت ریال، موجودی، تصویر)",
  "ارسال / مرجوعی",
  "درگاه پرداخت ایران + تماس پشتیبانی سفارش",
] as const;

export default function SiteBStarterPage() {
  return (
    <>
      <PageHero
        eyebrow="Site B · اسکلت شروع‌شده"
        title="فروشگاه لباس — اسکلت آماده، منتظر بریف"
        description="ساختار MVP و مسیر نصب مشخص است. بدون کاتالوگ و دسترسی WP واقعی، محصول جعلی اضافه نمی‌کنیم."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          شِل فروشگاه (MVP)
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shell.map((item) => (
            <li
              key={item.title}
              className="border-t border-[var(--border)] pt-4"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--fg-muted)]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-2xl font-bold tracking-tight">
          برای ادامه ساخت لازم است
        </h2>
        <ol className="mt-6 list-decimal space-y-2 ps-6 text-sm leading-7 text-[var(--fg-muted)]">
          {blockers.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--fg-muted)]">
          جزئیات:{" "}
          <code className="text-[var(--accent)]">content/SITE_B_PLAN.md</code> ·{" "}
          <code className="text-[var(--accent)]">content/SITE_B_IMPL.md</code> ·{" "}
          <code className="text-[var(--accent)]">content/SITE_B_QUESTIONS.md</code>
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            بازگشت به سایت ۱
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            تماس
          </Link>
        </div>
      </section>
    </>
  );
}
