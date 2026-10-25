# Demo — IAA Site A (Karlancer #7246035)

## Run

```bash
npm install
npm run dev
```

Open **http://127.0.0.1:43127** (binds `0.0.0.0:43127`).

```bash
npm run build && npm start   # production check on same port
```

Full walkthrough script: [`CLIENT_DEMO.md`](./CLIENT_DEMO.md)

---

## Done (freelancerside — Site A)

| Area | Status |
|------|--------|
| Dark RTL Next.js preview (home → contact + insights) | ✅ |
| Locked CTA + short header CTA | ✅ |
| Legal IDs ۹۷۷۶ / ۱۴۰۱۱۱۷۱۲۰۰ | ✅ |
| Forms: elites / companies / mentors / contact (mock email) | ✅ |
| SEO: metadata, OG/Twitter images, robots, sitemap, JSON-LD, FAQ | ✅ |
| a11y + mobile header CTA + form idle/loading/success/error/empty | ✅ |
| Webzi handoff: copy, forms spec, page checklist, deploy guide | ✅ |
| Site B: questions + plan + `/site-b` noindex placeholder (no invented product) | ✅ |
| Karlancer reply draft | ✅ `REPLY_TO_CLIENT.md` |

**Site A freelancerside readiness: ~95%** (remaining % is client assets + Webzi deploy + real SMTP).

---

## Waiting on client / credentials

1. Final logo (PNG/SVG) + optional brand colors  
2. Form destination email (after Webzi email check; suggest `join@iaafuture.com`)  
3. Webzi panel access when DNS is ready (advise password change; never store credentials here)  
4. Site B brief — four questions in `content/SITE_B_QUESTIONS.md`  
5. Domain DNS steps — only when Webzi build is ready (`DEPLOY_WEBZI.md`)

Do **not** invent Site B product copy. Do **not** commit Webzi passwords or SMTP secrets.
