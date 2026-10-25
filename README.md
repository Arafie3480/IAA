# IAA Future — ایده آرای آرسس

Persian RTL marketing site for **IAA Company** (`iaafuture.com`) — Karlancer project #7246035.

Dark-theme Next.js app for attracting elites, companies with scientific/tech problems, and mentors. Primary CTA wording is locked to **اگر فکر می‌کنی می‌تونی متفاوت باشی با ما همراه شو** (header short: **با ما همراه شو**; never «عضویت»).

## Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Vazirmatn (Persian) + Syne (display Latin)
- Hand-rolled UI primitives (`Button`, `Input`, `Textarea`, `Label`)
- Form POST → `/api/forms/[kind]` with validation + mock success (no SMTP required)

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43127](http://127.0.0.1:43127)

**Quick status:** [`DEMO.md`](./DEMO.md) · Site A freelancerside ≈ **92%**.

## Company facts (locked)

- Name: ایده آرای آرسس / IAA Company
- Registration: ۹۷۷۶ · National ID: ۱۴۰۱۱۱۷۱۲۰۰
- Address: شهرک صنعتی بهارستان، پارک علم و فناوری البرز

## Freelancer package

See `STAGES.md`, `DELIVERY.md`, `DEPLOY_WEBZI.md`, `REPLY_TO_CLIENT.md`, `content/WEBZI_COPY.md`, `content/FORMS_SPEC.md`, `content/PAGE_CHECKLIST.md`, `content/SITE_B_QUESTIONS.md`.

## Notes

- Forms use mock email until client provides SMTP destination.
- Do not commit Webzi credentials or SMTP secrets.
- Full `src/` tree may still be syncing via MCP; local branch `cursor/iaa-freelancerside-ship-0159` is the complete source of truth.
