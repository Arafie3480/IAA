export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M10 28V12h6.2c3.6 0 5.9 2.1 5.9 5.2 0 3.2-2.3 5.3-5.9 5.3H14.8V28H10Zm4.8-9.2h1.2c1.5 0 2.4-.8 2.4-2.1s-.9-2-2.4-2H14.8v4.1Z"
        fill="currentColor"
      />
      <path
        d="M24.2 28V12h3.6l5.1 10.2h.1V12H37v16h-3.6l-5.1-10.3h-.1V28h-3.9Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <circle cx="32" cy="10" r="2.2" fill="#3db8a0" />
    </svg>
  );
}
