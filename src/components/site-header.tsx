"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { company, nav } from "@/lib/company";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(7,11,18,0.82)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label={`${company.brandFull} — ${company.nameFa}`}
        >
          <BrandMark className="h-10 w-auto max-w-[9.5rem] sm:h-11 sm:max-w-[11rem]" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[10px] text-[var(--fg-muted)]">
              {company.nameFa}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="منوی اصلی">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                  ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "text-[var(--fg-muted)] hover:bg-[var(--surface)] hover:text-[var(--fg)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/elites" className={buttonVariants({ size: "sm" })}>
            {company.cta}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--fg)] md:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="منوی موبایل">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm",
                  pathname === item.href
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-[var(--fg-muted)]",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/elites"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "default" }), "mt-2 w-full")}
            >
              {company.cta}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
