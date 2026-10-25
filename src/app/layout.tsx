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

const siteDescription =
  "موسسه علمی ایده آرای آرسس — جذب نخبگان، همکاری با شرکت‌ها و هدایت تیم‌ها. شروع مسیر نخبگی.";

export const metadata: Metadata = {
  title: {
    default: `${company.brand} | ${company.nameFa}`,
    template: `%s | ${company.brand}`,
  },
  description: siteDescription,
  metadataBase: new URL(`https://${company.domain}`),
  applicationName: company.brand,
  authors: [{ name: company.brandFull }],
  publisher: company.brandFull,
  keywords: [
    "IAA",
    "ایده آرای آرسس",
    "نخبگان",
    "موسسه علمی",
    company.domain,
  ],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: company.brandFull,
    title: `${company.brand} | ${company.nameFa}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.brand} | ${company.nameFa}`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: company.nameFa,
      alternateName: company.brand,
      url: `https://${company.domain}`,
      logo: `https://${company.domain}/logo-iaa.svg`,
      email: company.email,
      address: company.address,
      identifier: [
        { "@type": "PropertyValue", name: "registration", value: company.registrationNo },
        { "@type": "PropertyValue", name: "nationalId", value: company.nationalId },
      ],
    },
    {
      "@type": "WebSite",
      name: company.brand,
      url: `https://${company.domain}`,
      inLanguage: "fa-IR",
      publisher: { "@type": "Organization", name: company.nameFa },
    },
  ],
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
        <a href="#main-content" className="skip-link">
          پرش به محتوای اصلی
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
