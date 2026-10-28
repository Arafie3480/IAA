# IAA Future — ایده آرای آرسس

## برای کارفرما / Employer preview

**فارسی:** این ریپو پیش‌نمایش **سایت مؤسسه علمی** (`iaafuture.com`) است — نه فروشگاه لباس. صفحات اصلی را بعد از `npm install && npm run dev` در http://127.0.0.1:43127 ببینید (`/` · `/elites` · `/about` · `/contact`). دکمه اصلی قفل است روی **اعلام آمادگی همکاری**. اسکرین: `artifacts/client-demo/` · راهنمای کامل: [`CLIENT_HANDOFF.md`](./CLIENT_HANDOFF.md). فروشگاه لباس (سایت دیگر قرارداد) هنوز شروع نشده و منتظر بریف شماست.

**English:** This repo is the **scientific institute** site preview only (not the clothing store). Run locally on port **43127**. CTA locked to **اعلام آمادگی همکاری**. Full client handoff: [`CLIENT_HANDOFF.md`](./CLIENT_HANDOFF.md).

---

Persian RTL marketing site for **IAA Company** (`iaafuture.com`) — Karlancer project #7246035.

Dark-theme Next.js app for attracting elites, companies with scientific/tech problems, and mentors. Primary CTA wording is locked to **اعلام آمادگی همکاری** (never «عضویت»).

## Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Vazirmatn (Persian) + Syne (display Latin)
- Hand-rolled UI primitives (`Button`, `Input`, `Textarea`, `Label`) — no shadcn CLI dependency
- Form POST → `/api/forms/[kind]` validates preview requests; it does not store or send data

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero, 3 audience paths, achievements, CTA |
| `/about` | Company story, legal IDs, FAQ + JSON-LD |
| `/elites` | Elite application form + process note |
| `/companies` | Corporate collaboration form |
| `/mentors` | Mentor / teacher form |
| `/path` | Collaboration journey (elites process) |
| `/insights` | Sample articles (news/insights) |
| `/insights/[slug]` | Article detail |
| `/contact` | Address + IDs + contact form |
| `/site-b` | Internal Site B placeholder (noindex) |

SEO helpers: `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, Open Graph / Twitter images.

Delivery tracker: [`DELIVERY_STATUS.md`](./DELIVERY_STATUS.md) · stages: [`STAGES.md`](./STAGES.md)  
Webzi: [`DEPLOY_WEBZI.md`](./DEPLOY_WEBZI.md) · copy pack: [`content/WEBZI_COPY.md`](./content/WEBZI_COPY.md)  
Karlancer reply: [`REPLY_TO_CLIENT.md`](./REPLY_TO_CLIENT.md)

## Run locally

```bash
npm install
npm run dev
```

Dev server binds to [http://127.0.0.1:43127](http://127.0.0.1:43127) (`0.0.0.0:43127`).

```bash
npm run build
npm start
```

## Company facts (locked)

- Name: ایده آرای آرسس / IAA Company
- Address: شهرک صنعتی بهارستان، پارک علم و فناوری البرز
- Registration: ۹۷۷۶ · National ID: ۱۴۰۱۱۱۷۱۲۰۰
- Optional hero subtitle: شروع مسیر نخبگی

## Form preview and checks

- Preview forms validate requests but do not save, upload, or email submissions. They link to the confirmed contact address instead.
- `npm run test:forms` checks validation. `npm run test:site` checks routes, assets, SEO, and preview API behavior against a local server.
- Webzi email delivery, form privacy notice, data handling, and live domain have not been verified. Confirm them with the site owner before launch.
- Do not commit Webzi credentials or SMTP secrets to this repo.

## Delivery package

`npm run package:handoff` creates a dated ZIP and staging folder under `artifacts/delivery/`.
On Windows PowerShell, use `npm.cmd run package:handoff` if script execution is restricted.
The command uses Windows `tar.exe`; other systems need `bsdtar` with ZIP support.
It packages source, the npm lockfile, public assets, copy, instructions and prior demo screenshots.
Every archived file is checked against its SHA-256 manifest; runtime `.env` files, private keys,
Git data, dependencies and build output are excluded. The archive is a source handoff, not an installable Webzi template.

Webzi uses its native editor for the institute site. Follow `DEPLOY_WEBZI.md`,
`content/WEBZI_COPY.md`, `content/FORMS_SPEC.md` and `content/FORM_PRIVACY_DRAFT.md`.
Live publication, domain setup and actual email receipt remain separate acceptance items.
