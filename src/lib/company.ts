export const company = {
  nameFa: "ایده آرای آرسس",
  brand: "IAA",
  brandFull: "IAA Company",
  domain: "iaafuture.com",
  email: "info@iaafuture.com",
  registrationNo: "۹۷۷۶",
  nationalId: "۱۴۰۱۱۱۷۱۲۰۰",
  address:
    "شهرک صنعتی بهارستان، پارک علم و فناوری البرز، شرکت ایده آرای آرسس",
  // کلید اصلی طبق پیام کارفرما (۱۸:۱۱)
  cta: "اگر فکر می‌کنی می‌تونی متفاوت باشی با ما همراه شو",
  /** نسخه کوتاه برای هدر موبایل / دکمه‌های فشرده */
  ctaShort: "با ما همراه شو",
  ctaSub: "اعلام آمادگی همکاری · شروع مسیر نخبگی",
  ageRange: "۱۰ تا ۳۵ سال",
} as const;

export const nav = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره IAA" },
  { href: "/elites", label: "نخبه‌ها" },
  { href: "/companies", label: "شرکت‌ها" },
  { href: "/mentors", label: "اساتید" },
  { href: "/insights", label: "بینش‌ها" },
  { href: "/contact", label: "تماس" },
] as const;

export const achievements = [
  {
    title: "پودر حلزون خاورمیانه",
    description:
      "اولین تولیدکننده snail slime powder در خاورمیانه؛ گامی علمی در زیست‌فناوری کاربردی.",
  },
  {
    title: "عطرهای درمانی",
    description:
      "اولین تولیدکننده عطرهای درمانی در جهان؛ تلفیق علم، حس و سلامت.",
  },
  {
    title: "پروژه هیدروتنه",
    description:
      "ابداع‌کننده پروژه هیدروتنه؛ رویکردی نو برای حل مسئله‌های پیچیده در میدان عمل.",
  },
  {
    title: "ثبت اختراع‌های محرمانه",
    description:
      "چهار ثبت اختراع محرمانه در سبد فناوری IAA — جزئیات فقط در چارچوب همکاری رسمی.",
  },
] as const;

export const eliteProcess = [
  "ارسال درخواست و بررسی اولیه",
  "دسته‌بندی توانمندی‌ها و مسیر رشد",
  "همراهی در تلگرام و شبکه‌های آموزشی",
  "مصاحبه حضوری با مدیرعامل",
  "پیوستن رسمی به مسیر همکاری",
] as const;
