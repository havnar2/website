# Resume Page — PRD

## Goal
Create a static HTML page (`resume.html`) in the `website` project that displays Bjorn Claessens' CV. It lives alongside the existing single-page website (bjornclaessens.com) and is deployed on GitHub Pages.

## Source of Truth
- **Resume data**: `/Users/bjorn/interactive-resume/src/data/resume-config.ts` (do NOT edit the React app)
- **Photo**: `/Users/bjorn/projects/website/assets/photo.jpg` (reuse existing)
- **Existing PDF**: `/Users/bjorn/projects/website/CV Bjorn Claessens - Freelance Data Engineer.pdf` (for reference, may be reused or replaced)

## Branch
All work on `dev` branch, NOT `main`.

---

## Layout

### Two-column card layout (match the React app's visual style)
- A centered card (max-width ~900px, rounded corners, shadow)
- **Sidebar** (~38% width): gradient background, contains photo, contact, skills, hobbies
- **Main content** (~62% width): name/title header, professional experience, education

### Sidebar (left on desktop, stacked on mobile)
1. **Photo** — circular, `assets/photo.jpg`, no flip animation, no emoji fallback
2. **Contact section** — email, phone, location, LinkedIn (with icons)
3. **Skills section** — categories with badges/text
4. **Hobbies section** — grid of hobby titles

### Main Content (right on desktop, stacked on mobile)
1. **Header** — name (uppercase, bold), title (uppercase, lighter), subtitle
2. **Professional Experience** — all 6 entries, expandable details
3. **Education** — 2 entries

---

## Content (from resume-config.ts)

### Personal
- **Name**: Bjorn Claessens
- **Title**: Senior Data Engineer
- **Subtitle**: Senior Data Engineer specializing in distributed systems and real-time data pipelines. Passionate about building scalable data platforms that power enterprise decision-making.
- **Location**: Vosselaar, Belgium

### Contact
| Type | Label |
|------|-------|
| email | bjorn.claessens@gmail.com |
| phone | +32 472 18 42 24 |
| location | Vosselaar, Belgium |
| linkedin | Bjorn Claessens (https://www.linkedin.com/in/bjorn-claessens/) |

### Skills

**Languages** (type: languages)
- Dutch: Native
- English: Professional

**Big Data & Cloud** (type: badges)
- PySpark, Kafka, Eventhub, AWS, Azure, Databricks, Snowflake, Unity Catalog, Hadoop, Cloudera, Airflow, Kubernetes

**Languages & Scripting** (type: badges)
- Python, Scala, Java, SQL, Bash

**DevOps & Tools** (type: badges)
- Linux, Wsl, Git, CI/CD, Azure DevOps, Jenkins, Puppet, Terraform, Docker, Copilot, Mistral, Local LLMs

**Methodologies & Soft Skills** (type: text)
- Agile (SAFe), Scrum, Team Leadership, Cross-team Collaboration, Technical Mentorship, Problem Solving, Effective Communication, Pragmatic Approach to Complexity

### Experiences (all 6)

1. **ASML** — Freelance Data Engineer (04/2023 - Present)
   - Data engineering for complex machine data processing.
   - Tech: PySpark, Python, Azure, Snowflake, Databricks, Kubernetes, Azure DevOps, Linux
   - Highlighted: Yes
   - Details:
     - Context: Eindhoven, NL - Freelance role within ASML's data migration art
     - Tasks: Complex machine data parsing using medallion architecture; Data engineering for real-time and batch-based solutions
     - Env: PySpark / Python / Scala / AWS / Snowflake / Kubernetes / Azure DevOps / Linux

2. **Nike** — Senior Data Engineer / Tech Lead (10/2019 - 04/2023)
   - Technical lead for a data squad building scalable, reusable data pipelines.
   - Tech: PySpark, Hadoop, Airflow, AWS, Python, Linux
   - Details:
     - Context: Laakdal, Belgium - Senior Data Engineer and Tech Lead for a data squad within Nike.
     - Tasks: Built scalable and reusable data pipelines to provide foundational data aligned to global data model; Core commit to inner-sourced ETL framework (infra as code, metadata driven, built on PySpark); Technical lead of squad - defined and upheld best practices; PoC new possible tech stacks / solutions; Active community of practice member; Assisted in architectural decision making; Cross-team data integrations
     - Env: PySpark / Kafka / Hadoop / Airflow / Azure / Python / Linux

3. **Dynapps N.V. (client Johnson & Johnson)** — Big Data Consultant (04/2016 - 10/2019)
   - Consultancy for Big Data projects - ETL at scale (batch and NRT).
   - Tech: Kafka, Hadoop, Scala, Python, Linux
   - Details:
     - Context: Geel / Beerse, Belgium - Consulting role at Dynapps working with Johnson & Johnson on large-scale Big Data projects.
     - Tasks: ETL at scale (batch and NRT); ML pilots; AB deployment of datasets; Cost management
     - Env: Hadoop / Python / Linux

4. **Cronos** — Big Data Consultant (07/2014 - 03/2016)
   - Development, Operations & DevOps consultancy for Big Data projects.
   - Tech: Hadoop, Cloudera, Python, Apache Spark, Titan Distributed Graph, HBase, Solr, MapReduce, Java, Linux
   - Details:
     - Context: Kontich, Belgium - Consultancy covering the full stack of Big Data project delivery. Also developed a B2B content asset management service for Belga providing searchable, aggregated source of live news feeds, public domain media and archives.
     - Tasks: Cloudera cluster deployment & administration; DevOps for Big Data infrastructure
     - Env: Hadoop / Cloudera / Apache Spark / MapReduce / Java / Linux

5. **[Cronos] Telenet** — Cloudera Hadoop Cluster Administrator (10/2014–03/2016)
   - Administrator of Cloudera Hadoop cluster for Telenet — Belgium's largest cable broadband provider (analog/digital TV, fixed & mobile telephone).
   - Tech: Cloudera Hadoop, Puppet, HP ILO, Linux
   - Details:
     - Context: Belgium — Managed enterprise Hadoop infrastructure for a major telecom provider.
     - Env: Cloudera Hadoop / Puppet / Linux

6. **Hewlett Packard (HP)** — First Line Service Desk Agent (07/2010 - 07/2011)
   - First line IT support and service desk operations.
   - Tech: IT Support

### Education
1. **Thomas More Kempen** — Bachelor in Applied Informatics (Cum Laude), 2011–2014
   - Specialty: Internship in Beijing, China
2. **Thomas More Kempen** — Bachelor in Teaching — IT and Biology, 2007–2010

### Hobbies
Automation, Technology, Cars, Reading, Personal Finance, AI

---

## Visual Design

### Color Palette (match React app's "ocean" preset aesthetic)
- **Light theme**: bg `#fafaf9`, card `#ffffff`, text `#1c1c1c`, secondary `#6b6b6b`, primary `#171717`, sidebar gradient `#f4f4f4` → `#ebebeb`
- **Dark theme**: bg `#1A1F2E`, card `#222838`, text `#E8E4DC`, secondary `#9A9590`, primary `#C4663A`, sidebar gradient `#1A1F2E` → `#222838`
- Accent for badges/links: `#C4663A` (warm orange, matches website)
- Border: `#e0e0e0` (light), `#2E3548` (dark)

### Typography
- Font: system-ui, -apple-system, sans-serif (same as website)
- Name: uppercase, bold, large (2rem+)
- Section headers: uppercase, small, bold, tracking-wide, with a bottom border accent
- Body: 0.9rem, line-height 1.6

### Sidebar
- Gradient background (light: `#f4f4f4` → `#ebebeb`, dark: `#1A1F2E` → `#222838`)
- Padding: 2rem
- Photo: 128px circle, centered at top
- Section titles: uppercase, small, bold, margin-bottom
- Contact items: icon + text, vertical spacing
- Skill badges: small rounded pills, inline-flex, subtle background
- Hobbies: 2-column grid

### Main Content
- Padding: 2rem
- Header: centered, name large + uppercase, title smaller + uppercase, subtitle in accent color
- Experience items:
  - Each item: period (right-aligned, muted) + company + role
  - Description below
  - Tech tags as small badges
  - Expandable details section (see below)
  - Highlighted items (ASML) get a subtle left border accent
- Education: school, degree, period, specialty

---

## Interactivity

### Expandable Experience Details
- Use HTML `<details>` / `<summary>` elements
- **All sections open by default** (`<details open>`)
- Clicking a `<summary>` toggles it closed/open
- Style `<summary>` to look like a clickable row (remove default triangle, use a custom chevron icon via CSS)
- When closed, show a "more..." hint
- Details include: context, tasks (bullet list), tech environment

### Theme Toggle
- Match the existing website's dark/light toggle (same SVG icons, same behavior)
- Use the same CSS variable approach (`data-theme` attribute on `<html>`)
- Toggle should be visible in the top-right corner of the page

### Download PDF Button
- Button text: "Download PDF"
- Links to `resume.pdf` (to be created)
- Position: top-left area of the page (opposite the theme toggle)
- Style: subtle, matching the site's button style

---

## Print / PDF Styles

### Critical Requirements
1. **Hide interactive elements**: theme toggle button, download PDF button, any "click to expand" hints
2. **Force light theme**: all print styles must use light theme colors (no dark theme variables)
3. **Single continuous page**: no page breaks within sections, no splitting content across pages
4. **Photo must render**: use `print-color-adjust: exact` and `-webkit-print-color-adjust: exact`
5. **No background color waste**: keep backgrounds light/white for ink efficiency
6. **Full content visible**: all experience details expanded, no collapsed sections

### Print CSS Rules
```css
@media print {
  /* Hide buttons */
  .no-print { display: none !important; }
  
  /* Force light theme */
  html { --bg: #fafaf9; --text: #1c1c1c; ... all light theme vars ... }
  
  /* Single page flow */
  body { background: white; }
  .card { box-shadow: none; border: 1px solid #ddd; }
  
  /* Ensure photo prints */
  img { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  
  /* Prevent page breaks */
  details, .experience-item, .education-item { break-inside: avoid; }
  
  /* All details open */
  details { display: block !important; }
}
```

---

## Technical Requirements

### File Structure
```
website/
  resume.html          ← new file
  resume.pdf           ← new file (generated after resume.html is built)
  assets/
    photo.jpg          ← existing, reuse
  css/
    style.css          ← existing, may extend
  js/
    main.js            ← existing, may extend (or inline JS for theme toggle)
```

### CSS
- **Plain CSS only** — no Tailwind, no build step, no dependencies
- Can be inline in `<style>` tag or in a separate file (e.g., `css/resume.css`)
- Use CSS custom properties for theming (light/dark)
- Responsive: stack columns on mobile (max-width 768px)

### JavaScript
- Minimal: only for theme toggle (read/write `data-theme` attribute)
- Can be inline in a `<script>` tag at the bottom of the HTML
- Or extend the existing `js/main.js`

### Icons
- Use inline SVGs for: email, phone, location, LinkedIn, chevron (expand/collapse), sun, moon
- Keep SVGs minimal and clean

### Responsive
- Desktop: two-column (sidebar left, main right)
- Mobile (≤768px): single column, sidebar on top (photo, contact, skills, hobbies, then main content)

---

## What NOT to Do
- Do NOT edit the React app (`/Users/bjorn/interactive-resume/`)
- Do NOT use React, Tailwind, or any build tools
- Do NOT add language toggle (English only for now)
- Do NOT add photo flip animation
- Do NOT use emoji fallback for photo
- Do NOT add dark theme to print output

---

## Deliverables
1. `resume.html` — complete, self-contained HTML page
2. `resume.pdf` — generated PDF of the page (print to PDF with light theme)
3. Commit on `dev` branch

---

## Notes
- The existing website's `css/style.css` and `js/main.js` can be extended or the resume page can be self-contained with inline styles/scripts
- The resume page does NOT need to share CSS/JS with the main site — it can be fully self-contained
- The PDF should be generated AFTER the HTML is finalized, by opening in browser and printing to PDF (light theme, no buttons visible)
