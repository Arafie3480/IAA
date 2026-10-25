# همگام‌سازی محلی IAA

Cloud Agent مرجع: `bc-e7fe436a-a64e-4320-b67e-1172eb227aed` (پاسخ فوری کارفرما IAA)

| نقش | مسیر |
|-----|------|
| تحویل GitHub | `C:\Users\amirr\OneDrive\Documents\GitHub\IAA` → `https://github.com/Arafie3480/IAA` |
| فضای کار Origin | `C:\Users\amirr\OneDrive\Desktop\projects\Teaching\proj-scope` → Origin `amir-hossein-z42bm/proj-scope` |

## از ویندوز

```powershell
cd C:\Users\amirr\OneDrive\Documents\GitHub\IAA
npm install
npm run build
npm run dev   # http://127.0.0.1:43127

git status
git push origin main
```

اگر `git push` بدون PAT شکست خورد: از GitHub MCP (`push_files`) یا Git Credential Manager با scope `repo` استفاده کنید.

## کپی انتخابی به proj-scope

فایل‌های تحویل‌محور که فقط در IAA هستند را در صورت نیاز کپی کنید:

- `content/*` · `STAGES.md` · `DELIVERY.md` · `DEMO.md` · `CLIENT_DEMO.md` · `FREELANCER_TODO.md`
- `src/app/opengraph-image.tsx` · `not-found.tsx` · `error.tsx` · `loading.tsx` · `site-b/` · `manifest.ts` · `src/lib/seo.ts`

Origin push ممکن است `403` بدهد؛ برای کارفرما لینک GitHub اولویت دارد.
