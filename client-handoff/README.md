# پکیج تحویل قابل لمس برای کارفرما

Karlancer `#7246035` · NM781WP0540 · ۲۹ اکتبر ۲۰۲۶

## دو سایت قرارداد — وضعیت شفاف

| سایت (طبق آگهی) | وضعیت امروز |
|-----------------|-------------|
| مؤسسه علمی / آموزشی (`iaafuture.com`) | **DONE سمت فریلنسر** — staging زنده: https://6adb33304ae68.mywebzi.ir/ |
| فروشگاه لباس آنلاین (WooCommerce / Elementor) | **شروع نشده** — منتظر پذیرش Site A + بریف |

راهنمای کامل کارفرما: [`../CLIENT_HANDOFF.md`](../CLIENT_HANDOFF.md)  
مدیریت پنل: [`OWNER_GUIDE.md`](./OWNER_GUIDE.md)  
برنامه فروشگاه: [`../content/SITE_B_PLAN.md`](../content/SITE_B_PLAN.md)

## همین الان چه بفرستید

1. متن: [`MESSAGE_FOR_CLIENT.txt`](./MESSAGE_FOR_CLIENT.txt) → کپی در میزکار  
2. چهار اسکرین از [`screenshots/`](./screenshots/) معرفی طراحی پیش‌نمایش‌اند؛ **نسخهٔ زنده را از staging باز کنید**

## باقی‌مانده فقط کارفرما

1. تست Inbox/Spam سه فرم → `ljannesar9140@gmail.com`
2. تعویض رمز پنل وبزی
3. پس از پذیرش: DNS/SSL برای `iaafuture.com`
4. برای فروشگاه: پاسخ [`../content/SITE_B_QUESTIONS.md`](../content/SITE_B_QUESTIONS.md)

## بسته منبع (اختیاری)

`npm.cmd run package:handoff` → ZIP در `artifacts/delivery/` (بدون `.env`/رمز).

کد: https://github.com/Arafie3480/IAA · لوکال: `npm install && npm run dev` → http://127.0.0.1:43127
