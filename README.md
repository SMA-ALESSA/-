# SAMA. | GIS & Data Analytics

Personal portfolio showcasing GIS, spatial analysis and data analytics work.

## Current website — source of truth

**`index.html` is the active, customized portfolio.** It is a standalone HTML/CSS/JavaScript page. It includes the About, Projects, Skills, Certifications and Contact sections, English/Arabic switching, and dark/light themes.

The original React template under `src/` (including `src/content.js` and `src/App.jsx`) is **not connected to the active HTML page**. Those files are kept as legacy template source for now. Editing `src/content.js` will **not** update the published SAMA page. Do not deploy it as a separate React application without migrating the completed content first.

**No avatars, fake experience, or invented projects have been added.**

## Current content

- GIS solar-energy suitability study for Al-Ahsa: 51 candidate sites, with actual selection criteria described.
- Saudi intercity shipping Power BI project is clearly marked *In progress*.
- Ten certification cards with original supporting files still to be attached.
- Contact form opens the visitor's own email client via `mailto:`; there is **no EmailJS integration in the active page** and no EmailJS keys are needed.
- Fonts in the active page are Google Fonts with system fallbacks. The old template's Thmanyah fonts are not required for this page.
- Original template author attribution must remain visible in the footer, under [LICENSE](LICENSE).

## Pending before final publication

1. Add the user's **approved original final solar GIS map** at `public/assets/solar-map.png`. Do **not** use previous alternate maps or generated placeholders. The map panel is automatically hidden while this file is absent. Vite copies `public/` files to the site root, so it will be available as `/assets/solar-map.png`. If hosting at a repository subpath, adjust asset URLs or configure the Vite base accordingly.
2. Add and review the ten original certificates. Protect personal IDs before making files publicly accessible; attach download/view links to the certificate cards.
3. Add the reviewed CV (when ready) and any later finished projects.
4. Check English/Arabic content, dark/light mode, responsive layout, contact email, link targets and accessibility on desktop and mobile.
5. Run a production build and verify the deployed site in a real browser. Deployment and live URL are **not confirmed** by the repository contents alone.

## Local development

Requires Node.js compatible with Vite 8.

```bash
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` outputs the standalone site to `dist/`, which can be hosted on Vercel, Netlify or another static host. A build command existing in package.json is not proof that the build or public deployment has succeeded; check CI and hosting status.

## Publishing notes

- For GitHub Pages, configure a suitable publishing workflow that uploads `dist/`; simply serving the repository root is a separate deployment method. Set Vite `base` if deploying to a subpath.
- Do not commit personal/private documents, API secrets, or non-redistributable font files.
- If the contact form is later changed to EmailJS, configure allowed domains and rate limits. This is not currently required.
- Preserve the visible template attribution link to [Aljazy Banaemah](https://github.com/aljazikb) as required by the existing [LICENSE](LICENSE).

## Status

**Portfolio work in progress, not yet verified as publicly deployed.**

---

**بالعربية:** النسخة المستخدمة الآن هي `index.html`، وليست قالب React الموجود في `src/`. أضيفت المشاريع والمحتوى الأساسي، لكن الخريطة الأصلية والشهادات وملف السيرة الذاتية وفحص النشر النهائي لم تكتمل بعد. نموذج التواصل يفتح تطبيق البريد ولا يحتاج EmailJS. يجب إبقاء إشارة صاحبة القالب في تذييل الموقع وفق الرخصة.
