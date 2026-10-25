# IAA Future — ایده آرای آرسس

Persian RTL marketing site for **IAA Company** (`iaafuture.com`) — Karlancer project #7246035.

Dark-theme Next.js app for attracting elites, companies with scientific/tech problems, and mentors. Primary CTA wording is locked to **اعلام آمادگی همکاری** (never «عضویت»).

## Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Vazirmatn (Persian) + Syne (display Latin)
- Hand-rolled UI primitives (`Button`, `Input`, `Textarea`, `Label`) — no shadcn CLI dependency
- Form POST → `/api/forms/[kind]` with validation + mock success (no SMTP required)

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

## Notes

- Forms validate client-side via API responses; submissions are logged server-side as a mock email fallback.
- Do not commit Webzi credentials or SMTP secrets to this repo.
