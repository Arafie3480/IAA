import Image from "next/image";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-iaa.svg"
      alt="IAA ایده آرای آرسس"
      width={140}
      height={36}
      className={className}
      priority
    />
  );
}
