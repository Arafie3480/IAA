import Link from "next/link";
import { company, nav } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold tracking-tight">{company.brand}</p>
          <p className="mt-2 text-[var(--fg-muted)]">{company.nameFa}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--fg-muted)]">
            موسسه علمی برای جذب نخبگان، حل مسئله‌های شرکت‌ها و هدایت تیم‌ها با
            اعتبار علمی و مسیر همکاری شفاف.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-[var(--fg)]">مسیرها</p>
          <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[var(--accent)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-[var(--fg)]">هویت حقوقی</p>
          <ul className="space-y-2 text-sm leading-7 text-[var(--fg-muted)]">
            <li>شماره ثبت: {company.registrationNo}</li>
            <li>شناسه ملی: {company.nationalId}</li>
            <li>{company.address}</li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-[var(--accent)]">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--fg-muted)]">
        © {new Date().getFullYear()} {company.brand} · {company.domain}
      </div>
    </footer>
  );
}
