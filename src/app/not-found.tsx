import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-4 py-20 sm:px-6">
      <p className="text-sm tracking-wide text-[var(--gold)]">۴۰۴</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        این صفحه پیدا نشد
      </h1>
      <p className="mt-4 max-w-lg text-[var(--fg-muted)] leading-8">
        مسیر اشتباه است یا صفحه جابه‌جا شده. از خانه یا مسیرهای اصلی ادامه دهید.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          بازگشت به خانه
        </Link>
        <Link href="/elites" className={buttonVariants({ variant: "outline", size: "lg" })}>
          مسیر نخبه‌ها
        </Link>
      </div>
    </section>
  );
}
