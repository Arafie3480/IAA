import type { Metadata } from "next";
import { Syne, Vazirmatn } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.brand} | ${company.nameFa}`,
    template: `%s | ${company.brand}`,
  },
  description:
    "موسسه علمی ایده آرای آرسس — جذب نخبگان، همکاری با شرکت‌ها و هدایت تیم‌ها. شروع مسیر نخبگی.",
  metadataBase: new URL(`https://${company.domain}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable} ${syne.variable} site-bg flex min-h-screen flex-col antialiased`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
