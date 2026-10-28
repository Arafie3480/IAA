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
| Forms: elites / companies / mentors / contact (preview only; no storage/email) | ✅ |
| SEO: metadata, OG/Twitter images, robots, sitemap, JSON-LD, FAQ | ✅ |
| a11y + mobile header CTA + form idle/loading/success/error/empty | ✅ |
| Webzi handoff: copy, forms spec, page checklist, deploy guide | ✅ |
| Site B: questions + plan + `/site-b` noindex placeholder (no invented product) | ✅ |
| Karlancer reply draft | ✅ `REPLY_TO_CLIENT.md` |

**Code preview: ready. Webzi publication remains pending** (page setup, owner-approved form privacy and delivery, DNS/SSL).

---

## Waiting on client / credentials

1. Confirm the logo and scientific/medical claims before public release
2. Confirm the Webzi form privacy notice, retention, recipient, and email testing
3. Rotate the Webzi password before release; keep credentials out of the repo
4. Supply the Site B brief in `content/SITE_B_QUESTIONS.md`
5. Configure domain DNS/SSL when Webzi pages are approved (`DEPLOY_WEBZI.md`)

Do **not** invent Site B product copy. Do **not** commit Webzi passwords or SMTP secrets.
