# بخش فریلنسر — وضعیت انجام

**آمادگی فریلنسرساید سایت ۱: ≈ ۹۲٪** · دمو: [`DEMO.md`](./DEMO.md)

## انجام‌شده (بدون نیاز به کارفرما)
- [x] استخراج و قفل بریف کارلنسر
- [x] پیش‌نمایش کامل سایت RTL تم تیره (Next.js)
- [x] صفحات خانه / درباره / نخبه‌ها / شرکت‌ها / اساتید / بینش‌ها / تماس
- [x] CTA قفل: «اگر فکر می‌کنی می‌تونی متفاوت باشی با ما همراه شو» (هدر کوتاه: با ما همراه شو)
- [x] فرم‌ها + اعتبارسنجی استثنای سنی + حالت‌های idle/loading/success/error
- [x] مشخصات حقوقی ۹۷۷۶ / ۱۴۰۱۱۱۷۱۲۰۰ (بلاک مشترک درباره/تماس)
- [x] CTA موبایل همیشه در هدر (نسخه کوتاه)
- [x] کپی آماده وبزی: `content/WEBZI_COPY.md`
- [x] مشخصات فرم Elementor: `content/FORMS_SPEC.md`
- [x] چک‌لیست صفحه‌به‌صفحه Elementor: `content/PAGE_CHECKLIST.md`
- [x] راهنمای استقرار: `DEPLOY_WEBZI.md`
- [x] چک‌لیست تحویل: `DELIVERY.md`
- [x] مراحل سئو و تحویل: `STAGES.md`
- [x] پیام میزکار آماده: `REPLY_TO_CLIENT.md`
- [x] لوگوی موقت SVG: `public/logo-iaa.svg` و `public/icon.svg`
- [x] سئوی پایه: metadata یکتا · canonical · OG داینامیک · robots · sitemap · JSON-LD · FAQ
- [x] پولیش دسترسی/تایپوگرافی/فرم/موبایل/error/۴۰۴
- [x] سایت ۲: `content/SITE_B_PLAN.md` + `/site-b` placeholder (noindex)
- [x] راهنمای دمو: `CLIENT_DEMO.md` · `DEMO.md`
- [x] Web app manifest + metadata غنی‌تر (authors/publisher/lang)

## منتظر کارفرما (بدون این‌ها استقرار دامنه کامل نمی‌شود)
- [ ] لوگو نهایی (+ رنگ سازمانی)
- [ ] ایمیل مقصد فرم‌ها / تأیید ایمیل وبزی
- [ ] دسترسی فعال پنل وبزی هنگام اتصال DNS
- [ ] موضوع سایت دوم قرارداد

## اقدام فوری شما در کارلنسر
1. ارسال پیام از `REPLY_TO_CLIENT.md`
2. بعد از لوگو/ایمیل: ورود وبزی، تعویض رمز، نصب ویدا، پیست کپی از `content/`
3. راهنمایی DNS طبق `DEPLOY_WEBZI.md`

## آن‌بلاک انتشار (push) — به‌روز ۱۴۰۴/۰۸
- **origin (Cursor Origin):** `403` — دسترسی به `amir-hossein-z42bm/proj-scope` نیست؛ remote را حذف نکنید.
- **github (`Arafie3480/IAA`):** Github MCP write اکنون کار می‌کند (`push_files` / `create_or_update_file` به‌عنوان `Arafie3480`). `git push github` از شل هنوز بدون PAT شکست می‌خورد.
  - درخت کامل در حال sync از طریق MCP؛ در صورت ناقص بودن: از ویندوز طبق `SYNC_LOCAL.md` یا `GITHUB_TOKEN` با scope `repo`.
- لینک GitHub را بعد از تأیید فایل‌های اصلی در ریپو بفرستید.
- کامیت محلی: `cursor/iaa-freelancerside-ship-0159`
