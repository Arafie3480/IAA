import Image from "next/image";
import { cn } from "@/lib/utils";

/** Light transparent PNG for dark header — no white plate. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden",
        className,
      )}
    >
      <Image
        src="/logo-iaa-light.png"
        alt="IAA future"
        width={160}
        height={88}
        className="h-full w-auto object-contain"
        priority
      />
    </span>
  );
}
