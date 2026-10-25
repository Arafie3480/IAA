# بخش فریلنسر — وضعیت انجام

**آمادگی فریلنسرساید سایت ۱: ≈ ۹۵٪** · دمو: [`DEMO.md`](./DEMO.md)

## انجام‌شده (بدون نیاز به کارفرما)
- [x] استخراج و قفل بریف کارلنسر
- [x] پیش‌نمایش کامل سایت RTL تم تیره (Next.js)
- [x] صفحات خانه / درباره / نخبه‌ها / شرکت‌ها / اساتید / بینش‌ها / تماس
- [x] CTA قفل: «اعلام آمادگی همکاری» (همان متن در هدر دسکتاپ و موبایل)
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

## آن‌بلاک انتشار (push) — به‌روز ادامه محلی bc-e7fe436a
- **GitHub `origin` (`Arafie3480/IAA`):** ریپوی تحویل — `git push origin main` یا Credential Manager / PAT با scope `repo`.
- **Origin `proj-scope`:** ممکن است `403` بدهد؛ برای کارفرما لینک GitHub اولویت دارد.
- راهنما: [`SYNC_LOCAL.md`](./SYNC_LOCAL.md)
- شکاف‌های بسته‌شده در این ادامه: `opengraph-image` · `WEBZI_COPY` · `/site-b` · ۴۰۴/error/loading · manifest · JSON-LD · skip-link · عنوان خانه absolute · هم‌راستایی CTA در docs · `logo` در JSON-LD · `aria-invalid` روی select
