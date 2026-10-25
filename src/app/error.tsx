"use client";

import { useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[50vh] max-w-6xl flex-col items-start justify-center px-4 py-20 sm:px-6">
      <p className="text-sm tracking-wide text-[var(--danger)]">خطا</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight">
        مشکلی پیش آمد
      </h1>
      <p className="mt-4 max-w-lg text-[var(--fg-muted)] leading-8">
        صفحه موقتاً در دسترس نیست. دوباره تلاش کنید یا به خانه برگردید.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className={buttonVariants({ size: "lg" })}>
          تلاش مجدد
        </button>
        <a href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
          خانه
        </a>
      </div>
    </section>
  );
}
