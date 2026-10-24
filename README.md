# SAMA | GIS & Data Analytics

A bilingual personal portfolio in Geographic Information Systems, spatial analysis and data analytics, featuring work with ArcMap, Power BI and Excel.

**Live website:** https://sama-data-portfolio.netlify.app/

## Projects
- **Solar Energy Site Suitability — Al-Ahsa, Saudi Arabia:** GIS site suitability analysis, with 51 candidate locations identified. The original GIS map can be attached when available.
- **Saudi Intercity Shipping Analysis:** Power BI analysis of shipments, revenue, cancellations and delays. *In progress.*

## Website structure
The published portfolio is a lightweight, standalone site — no React, EmailJS or frontend framework is required:

- `index.html` — website layout, content, styles and Arabic/English translations.
- `public/assets/saudi-hero-approved.webp` — approved Saudi Arabia map illustration for the home page.
- `public/certificates/` — eight **privacy-redacted** PDF certificates. The Excel data analysis and Power BI intermediate certificates remain pending and have no attached files.
- `public/favicon.svg` — site icon.
- `scripts/build.mjs` — copies the published site to `dist/`.
- `scripts/serve.mjs` — local preview server.
- `netlify.toml` — Netlify build and publish settings.

## Run locally
Requires Node.js 22 or later.

```bash
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:4173 to preview the built site. `npm run dev` builds and starts the same local preview.

## Deployment
Netlify is connected to the `main` branch on GitHub and publishes the output of:

- Build command: `npm run build`
- Publish directory: `dist`

GitHub Actions also runs a build check. The contact form opens the visitor's email application; no API keys or external email service are needed.

## Updating the portfolio
Edit the source in `index.html`, keeping the English and Arabic translations aligned. Put approved public image files in `public/assets/` and privacy-checked certificate PDFs in `public/certificates/`, then link them in `index.html`. Never commit unredacted ID numbers, original certificates containing private details or private contact data. The existing eight public PDF files have already been prepared as privacy-redacted copies.

## Credits and license
Original portfolio template by [Aljazy Banaemah](https://github.com/aljazikb). The visible footer credit and the [LICENSE](LICENSE) are retained in accordance with its terms.
