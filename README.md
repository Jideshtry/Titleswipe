# TitleSwipe — Marketing Website

**AI Work Product Platform for U.S. Real Estate Lawyers**  
*Faster Titles. Clearer Decisions.*

---

## Project Overview

This is the TitleSwipe marketing website — a static HTML/CSS/JS site, fully ready for deployment on Vercel (or any static host) with zero build step required.

**Stack:** Pure HTML5 · CSS3 (custom properties) · Vanilla JS  
**Framework:** None — no Node.js, no bundler, no build process  
**Font:** Inter Variable (self-hostable or via Google Fonts CDN fallback)

---

## Project Structure

```
titleswipe/
├── index.html              # Main page
├── vercel.json             # Vercel routing, headers, and cache config
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap (update URL before launch)
├── .gitignore
│
├── css/
│   └── styles.css          # All styles (design tokens → components → responsive)
│
├── js/
│   └── main.js             # Scroll reveal, FAQ accordion, nav, animations
│
├── fonts/
│   ├── README.md           # Font licensing and setup instructions
│   ├── download-fonts.sh   # One-time font download script (run after clone)
│   ├── inter-variable.woff2         # (download via script — not in repo)
│   └── inter-variable-italic.woff2  # (download via script — not in repo)
│
└── images/
    ├── favicon.svg         # Browser tab icon (SVG, all browsers)
    ├── apple-touch-icon.svg # iOS home screen icon
    └── og-image.svg        # Open Graph / social share image (1200×630)
```

---

## Deployment — Vercel

### Option A: Deploy via GitHub (recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects the static site — no build settings needed
5. Click **Deploy**

> **Settings to confirm in Vercel:**
> - Framework Preset: **Other**
> - Build Command: *(leave blank)*
> - Output Directory: `.` (root)
> - Install Command: *(leave blank)*

### Option B: Deploy via Vercel CLI

```bash
npm install -g vercel
cd titleswipe
vercel --prod
```

---

## Self-Hosting Fonts (Optional but Recommended)

The site works immediately via Google Fonts CDN fallback. For production, self-hosting eliminates a third-party font request and improves load performance:

```bash
bash fonts/download-fonts.sh
```

Then commit the `.woff2` files and redeploy. The CSS already references them at `../fonts/inter-variable.woff2`.

---

## Pre-Launch Checklist

### Content
- [ ] Replace all `href="#"` placeholder links with real URLs
- [ ] Replace fictional testimonials with real client quotes (with permission)
- [ ] Replace fictional case study with real client case study
- [ ] Update pricing with actual pricing (or remove amounts if contact-only)
- [ ] Add real resource PDFs/links for white paper, case study, practice guide

### Technical
- [ ] Update `sitemap.xml` with production domain
- [ ] Update canonical URL in `index.html` (`https://titleswipe.com/`)
- [ ] Update Open Graph URLs in `index.html`
- [ ] Convert `og-image.svg` to `og-image.png` (1200×630) for better social sharing
- [ ] Convert `apple-touch-icon.svg` to `apple-touch-icon.png` (180×180)
- [ ] Add Google Analytics / Plausible / Fathom tracking snippet
- [ ] Test on mobile (iOS Safari, Chrome Android)
- [ ] Test all FAQ accordion items
- [ ] Test floating demo CTA (appears after 500px scroll)
- [ ] Run Lighthouse audit — target 90+ on all metrics

### Domain
- [ ] Add custom domain in Vercel dashboard
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Set up `www` → apex redirect or vice versa

---

## Customisation

### Brand Colours (CSS custom properties in `css/styles.css`)
```css
--navy:   #0B1E3D   /* Primary brand navy */
--gold:   #C9A24E   /* Primary brand gold */
```

### Adding Pages
Create new `.html` files in the root directory. The `vercel.json` rewrite rule (`"/(.*)" → "/index.html"`) handles SPA-style routing — remove or adjust this if you want true multi-page behaviour.

### Contact / Demo Form
The "Book a Demo" buttons currently link to `#demo` (the CTA section). To wire up a real form:
1. Use [Formspree](https://formspree.io), [Tally](https://tally.so), or [Calendly](https://calendly.com)
2. Replace the `href="#demo"` anchor with the form embed or external link
3. Or embed a Calendly widget directly in the `#demo` section

---

## License

© 2026 TitleSwipe, Inc. All rights reserved.  
Website design and code: proprietary — not for redistribution.

Inter font: SIL Open Font License 1.1 — https://rsms.me/inter
