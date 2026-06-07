# PRD: Bjorn Claessens Personal Website

## 1. Overview

A personal brand landing page for **BC Consulting** (Bjorn Claessens, Freelance Data Engineer). The site serves as a professional storefront with a link to download the CV as a PDF.

## 2. Goals

- Present a professional, trustworthy online presence
- Provide a clear way to download the CV
- Enable contact without exposing email to scrapers
- Work seamlessly on mobile and desktop
- Support dark and light mode

## 3. Non-Goals

- No blog, no multi-page navigation
- No backend, no database, no server-side code
- No user authentication or accounts
- No CMS

## 4. Technical Constraints

- **Static site only** — no backend, no server-side rendering
- **Hosting:** Cloudflare Pages (free tier)
- **Domain:** bjornclaessens.com (~$9/year via Cloudflare Registrar)
- **Tech stack:** Pure HTML + CSS + vanilla JavaScript
- **No frameworks, no build tools, no npm dependencies**
- **No tracking scripts or third-party analytics** (unless explicitly added later)

## 5. Site Structure

Single-page layout with smooth-scrolling sections:

1. **Hero** — Company name, tagline, profile photo, CTA to download CV
2. **About** — Short bio (placeholder text for now)
3. **Services** — Two service cards: Data Engineering + Technical Consulting
4. **Contact** — JS-obfuscated email link, CV download link
5. **Footer** — Copyright + VAT number

## 6. Content

### 6.1 Brand

- **Company name:** BC Consulting
- **Tagline:** "Freelance Data Engineering & Consulting"
- **Domain:** bjornclaessens.com

### 6.2 Hero Section

- Company name: **BC Consulting**
- Tagline: Freelance Data Engineering & Consulting
- Profile photo: `/Users/bjorn/Downloads/b&w-bjorn.png` (black & white)
- CTA button: "Download CV" → links to PDF

### 6.3 About Section

- Placeholder text for Bjorn to fill in later
- Should be 2-3 sentences describing who he is and what he brings

### 6.4 Services Section

Two service cards:

1. **Data Engineering**
   - ETL pipelines, real-time & batch processing
   - PySpark, Kafka, Databricks

2. **Technical Consulting**
   - Architecture reviews, team mentoring
   - Proof of concepts, technical leadership

### 6.5 Contact Section

- Email: `bjorn.claessens@gmail.com` — **JS-obfuscated** (not plain text in HTML)
- CV download link: `/CV Bjorn Claessens - Freelance Data Engineer.pdf`

### 6.6 Footer

- Copyright line: `© 2026 BC Consulting`
- VAT number: `BE 0799.271.783`

## 7. Design & Styling

### 7.1 Color Palette

**Light Theme:**
| Role | Color | Hex |
|---|---|---|
| Background | Cream | `#F5F0E8` |
| Primary | Terracotta | `#C4663A` |
| Secondary | Sand | `#D4B896` |
| Accent | Sky Blue | `#5B9BD5` |
| Text | Dark | `#2D2A26` |

**Dark Theme:**
| Role | Color | Hex |
|---|---|---|
| Background | Navy | `#1A1F2E` |
| Text | Light | `#E8E4DC` |
| Primary | Terracotta | `#C4663A` |
| Accent | Sky Blue | `#5B9BD5` |

### 7.2 Typography

- Clean sans-serif font (system font stack or Google Fonts: Inter)
- Headings: bold, uppercase for section titles
- Body: readable size, comfortable line height

### 7.3 Layout

- Max content width: ~900px, centered
- Generous whitespace between sections
- Responsive: mobile-first approach
- Profile photo: circular or rounded rectangle in hero

### 7.4 Dark/Light Mode

- **Auto-detect** system preference on first visit via `prefers-color-scheme`
- **Manual toggle** button (sun/moon icon) in the header
- User preference stored in `localStorage` to persist across visits
- Smooth transition between themes

## 8. Functional Requirements

| # | Requirement | Notes |
|---|---|---|
| FR-1 | Site loads and renders correctly on mobile and desktop | No framework, pure HTML/CSS/JS |
| FR-2 | Dark/light mode toggle works | Auto-detect + manual override |
| FR-3 | Email is obfuscated in HTML source | Built from parts in JS, not plain text |
| FR-4 | CV PDF is downloadable | Direct link to PDF file |
| FR-5 | Smooth scrolling between sections | CSS `scroll-behavior: smooth` |
| FR-6 | Profile photo loads and displays | Responsive sizing |
| FR-7 | All text is readable and accessible | Proper contrast ratios in both themes |

## 9. File Structure

```
website/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Dark/light toggle, email obfuscation
├── assets/
│   └── photo.jpg       # Profile photo (copied from Downloads)
└── CV Bjorn Claessens - Freelance Data Engineer.pdf
```

## 10. Deployment

- **Platform:** Cloudflare Pages
- **Method:** Upload static files (no build step)
- **Domain:** bjornclaessens.com (registered via Cloudflare Registrar)
- **SSL:** Automatic via Cloudflare

## 11. Open Items / TODO

- [ ] Bjorn to write About section text
- [ ] Copy profile photo to `assets/` directory
- [ ] Copy CV PDF to project root
- [ ] Register domain bjornclaessens.com
- [ ] Deploy to Cloudflare Pages
