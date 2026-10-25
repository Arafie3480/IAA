export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-6xl items-center justify-center px-4">
      <div
        className="h-10 w-10 animate-pulse rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]"
        role="status"
        aria-label="در حال بارگذاری"
      />
    </div>
  );
}
