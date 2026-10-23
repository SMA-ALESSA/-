# SAMA | GIS & Data Analytics

A personal portfolio featuring GIS, spatial analysis, and data analytics projects using ArcMap, Power BI, and Excel.

## Projects

**Solar Energy Site Suitability — Al-Ahsa, Saudi Arabia**  
GIS analysis of vacant land parcels using area, slope, solar irradiation, and road proximity. The final selection includes 51 candidate sites.

**Saudi Intercity Shipping Analysis**  
Power BI project focusing on shipping performance, revenue, cancellations, and delays. *In progress.*

## About the site

The portfolio has five sections: About, Projects, Skills, Certifications, and Contact. It supports Arabic and English, with light and dark themes.

The customized website is in `index.html`. The files under `src/` are from the original React template and are not used by this page. To change portfolio content, edit `index.html`, not `src/content.js`.

The contact form opens the visitor's email application. No EmailJS setup is required.

## Run locally

```bash
npm ci
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

The build creates a `dist/` folder. An automatic GitHub Actions workflow checks that the project builds successfully.

## Before publishing

- Add the approved original GIS map at `public/assets/solar-map.png` and confirm the image path in `index.html`.
- Attach the original certificates after checking for personal details.
- Add the CV when finalized.
- Check the site on mobile and desktop, test both languages and themes, and verify all links.
- Confirm the hosting URL and deployment configuration.

## Credits

Original template by [Aljazy Banaemah](https://github.com/aljazikb). The footer credit is retained as required by the [license](LICENSE).

---

**SAMA** — بورتفوليو شخصي لمشاريع نظم المعلومات الجغرافية والتحليل المكاني وتحليل البيانات. الموقع باللغتين العربية والإنجليزية، مع وضعين فاتح وداكن. المشروع الأساسي الحالي لتحليل ملاءمة مواقع الطاقة الشمسية في الأحساء (51 موقعًا)، ومشروع تحليل الشحن بين المدن السعودية قيد العمل.
