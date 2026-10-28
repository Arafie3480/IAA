import Image from "next/image";
import { cn } from "@/lib/utils";

/** Final client logo is navy-on-light; light plate keeps it readable on the dark header. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#f4f5f7] p-0.5 shadow-sm ring-1 ring-white/10",
        className,
      )}
    >
      <Image
        src="/logo-iaa.png"
        alt="IAA future"
        width={140}
        height={110}
        className="h-full w-auto object-contain"
        priority
      />
    </span>
  );
}
