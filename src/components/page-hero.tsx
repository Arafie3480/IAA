import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

export function PageHero({ title, description, eyebrow, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-[var(--border)]", className)}>
      <div className="pointer-events-none absolute -start-20 top-0 h-56 w-56 rounded-full bg-[var(--accent-soft)] blur-3xl animate-pulse-glow" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow ? (
          <p className="mb-3 text-sm tracking-wide text-[var(--gold)] animate-fade-up">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl animate-fade-up">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--fg-muted)] sm:text-lg animate-fade-up-delay">
          {description}
        </p>
      </div>
    </section>
  );
}
