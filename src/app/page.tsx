import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2, GraduationCap, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { achievements, company } from "@/lib/company";
import { insights } from "@/lib/insights";
import { pageSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  ...pageSeo({
    title: "خانه",
    description:
      "موسسه علمی ایده آرای آرسس — جذب نخبگان، همکاری با شرکت‌ها و هدایت تیم‌ها. شروع مسیر نخبگی.",
    path: "/",
  }),
  // Avoid "%s | IAA" stacking on the root brand title.
  title: {
    absolute: `${company.brand} | ${company.nameFa}`,
  },
};

const paths = [
  {
    href: "/elites",
    icon: Sparkles,
    title: "نخبه‌ها",
    text: "اگر می‌توانید تغییر ایجاد کنید — حتی بدون معدل درخشان یا مدرک رسمی — خودتان را معرفی کنید.",
    priority: "اولویت اول",
  },
  {
    href: "/companies",
    icon: Building2,
    title: "شرکت‌ها",
    text: "مسئله علمی یا فنی دارید؟ آن را بسپارید تا به متخصص شبکه IAA وصل شوید.",
    priority: "اولویت دوم",
  },
  {
    href: "/mentors",
    icon: GraduationCap,
    title: "اساتید",
    text: "مهارت و تجربه خود را برای هدایت تیم‌های توانمند در اختیار مسیر IAA بگذارید.",
    priority: "اولویت سوم",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(61,184,160,0.22),transparent_50%),radial-gradient(ellipse_at_10%_80%,rgba(201,166,107,0.12),transparent_45%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -start-24 top-24 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl animate-pulse-glow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute end-0 bottom-10 h-64 w-64 rounded-full bg-[var(--gold-soft)] blur-3xl animate-drift"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
          <p className="font-display text-6xl font-bold tracking-tight text-[var(--fg)] sm:text-8xl animate-fade-up">
            {company.brand}
          </p>
          <p className="mt-3 text-lg text-[var(--gold)] sm:text-xl animate-fade-up-delay">
            {company.nameFa}
          </p>
          <h1 className="mt-8 max-w-2xl text-2xl font-medium leading-relaxed text-[var(--fg)] sm:text-3xl animate-fade-up-delay">
            جایی که توانمندی واقعی دیده می‌شود — نه فقط مدرک.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--fg-muted)] animate-fade-up-delay-2">
            {company.ctaSub}. موسسه علمی برای جذب افراد توانمند، حل مسئله‌های
            شرکت‌ها و هدایت تیم‌ها با اعتبار علمی.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up-delay-2">
            <Link href="/elites" className={buttonVariants({ size: "lg" })}>
              {company.cta}
              <ArrowLeft className="size-4" />
            </Link>
            <Link
              href="/about"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              درباره IAA
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            سه مسیر ورود
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--fg-muted)]">
            مخاطب اصلی ما نخبه‌ها هستند؛ شرکت‌ها و اساتید مسیرهای مکمل همکاری‌اند.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {paths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group block border-t border-[var(--border)] pt-6 transition-colors hover:border-[var(--accent)]"
              >
                <p className="text-xs tracking-wide text-[var(--gold)]">
                  {path.priority}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <path.icon className="size-5 text-[var(--accent)]" />
                  <h3 className="text-xl font-semibold group-hover:text-[var(--accent)]">
                    {path.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--fg-muted)]">
                  {path.text}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-[var(--fg-muted)]">
            از اعلام آمادگی تا مصاحبه مدیرعامل —{" "}
            <Link
              href="/path"
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              مسیر همکاری را ببینید
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            اعتبار علمی در میدان عمل
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--fg-muted)]">
            دستاوردهایی که هویت {company.brand} را شکل داده‌اند — بدون افشای
            جزئیات محرمانه.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {achievements.map((item) => (
              <li key={item.title} className="border-s-2 border-[var(--accent)] ps-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--fg-muted)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "outline" }), "mt-10 inline-flex")}
          >
            داستان کامل IAA
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                بینش‌ها
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--fg-muted)]">
                یادداشت‌های نمونه درباره مسیر نخبگی و علم کاربردی.
              </p>
            </div>
            <Link
              href="/insights"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              همه بینش‌ها
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {insights.map((item) => (
              <li key={item.slug} className="border-t border-[var(--border)] pt-6">
                <p className="text-xs text-[var(--gold)]">{item.dateLabel}</p>
                <h3 className="mt-3 text-lg font-semibold leading-8">
                  <Link
                    href={`/insights/${item.slug}`}
                    className="hover:text-[var(--accent)]"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--fg-muted)]">
                  {item.excerpt}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm tracking-wide text-[var(--gold)]">
              {company.ctaSub}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              آماده ورود به مسیر IAA هستید؟
            </h2>
            <p className="mt-3 max-w-xl text-[var(--fg-muted)]">
              اولین گام، اعلام آمادگی همکاری است — نه عضویت معمولی.
            </p>
          </div>
          <Link href="/elites" className={buttonVariants({ size: "lg" })}>
            {company.cta}
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
