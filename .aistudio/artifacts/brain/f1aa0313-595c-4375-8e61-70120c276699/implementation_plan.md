# Ruslan Kryzhanskiy — High-Impact Developer Portfolio & Case Studies

Transform the portfolio into a high-converting, recruiter-ready showcase engineered to "sell itself" through structured editorial design, deep case-study breakdowns, commercial freelance proof, and interactive skills visualization.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during Phase 1 interactive clarification and will guide the entire architecture:

- **Visual Aesthetic & Theme**: Dark developer editorial aesthetic with deep obsidian/charcoal surfaces (`#0a0e17`, `#111827`), crisp typography, subtle hairline borders (`rgba(255,255,255,0.08)`), and focused neon accents (emerald `#10b981` and electric cyan `#06b6d4` for status, live links, and interactive elements).
- **Project Presentation ("Selling Itself")**: Case-study model rather than simple image cards. Each project highlights **The Challenge & Context**, **Technical Implementation & Architecture**, **Key Engineering Highlights**, alongside immediate clickable **Live Demo** and **GitHub Code** buttons, plus an interactive Lightbox/modal preview for screenshots.
- **Featured CV Highlights**:
  - **Commercial Freelance Spotlight**: Prominent proof section showing delivered client websites under NDA and ongoing live fitness website modernization.
  - **Interactive Skills Matrix**: Categorized grid (Languages, Frameworks, UI/CSS Architecture, Developer Tools, AI Engineering Workflow) with filterable tags.
  - **Education & Credentials Timeline**: Dedicated career timeline featuring EPAM Systems certification, Mate Academy Full-Stack course, and ongoing competitive algorithm practice (Codewars, Exercism).
  - **Unique Value Proposition**: The Ibis Hotel (Accor) reservations background seamlessly woven into the narrative — demonstrating genuine user psychology, booking conversion empathy, and client communication.

---

## 1. Overview & Core Concept

- **What It Does**: A portfolio web application for Ruslan Kryzhanskiy, Junior Front-End & React Developer. It guides tech leads, recruiters, and engineering managers from immediate first-impression impact to verified technical evidence.
- **Target Audience / Persona**: Tech leads, hiring managers, and technical recruiters seeking a self-driven, detail-oriented front-end engineer proficient in React, TypeScript, and modern UI architectures.
- **Key Value Proposition**: Solves the "generic junior portfolio" problem by proving production-level commercial capabilities, architectural decision-making, and communication skills rather than merely listing tutorial projects.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero & First Impression**:
   - Clean top navigation with smooth anchor scrolling and a prominent "Get in Touch" / CV CTA.
   - Editorial split hero inspired by the Behance layout: Left column showcases name, role badge, immediate availability status ("Open to full remote / Kyiv"), and quick social badges (Telegram `@ruslan_num0`, GitHub, Email, LinkedIn). Right column features an interactive developer snapshot card with key metrics (2 commercial client launches, 6+ production projects, B2B user experience).
2. **Commercial Experience & Real-World Proof**:
   - Highlights commercial freelance projects under NDA and fitness platform revamp.
   - Highlights the Accor/Ibis customer-facing reservation experience, explaining how understanding user booking psychology elevates front-end conversion.
3. **Featured Projects & In-Depth Case Studies**:
   - Filter bar: "All", "React & TypeScript", "JavaScript DOM", "Commercial / NDA".
   - Each project card features:
     - High-resolution UI preview with click-to-enlarge modal.
     - Project title, category kicker, and technology badges.
     - **The Problem / Goal**: What was built and why.
     - **Technical Highlights**: Specific engineering feats (e.g., controlled form validation with blur states, 4-direction matrix math in 2048, BEM SCSS grid layouts).
     - **Action Bar**: Direct links to `Live ↗` and `GitHub ↗` with external link indicators.
4. **Interactive Technical Skills Matrix**:
   - Grouped into 5 clear domains:
     1. *Languages*: JavaScript (ES6+), TypeScript, HTML5, CSS3 / SCSS
     2. *Frameworks & State*: React (Hooks, controlled inputs, component architecture)
     3. *UI & Layout*: Responsive & mobile-first, Flexbox, CSS Grid, BEM, CSS animations, DOM manipulation
     4. *Developer Tools*: Git, GitHub, npm, Vite, Chrome DevTools, REST APIs
     5. *AI Workflow*: AI-assisted prototyping, refactoring, and code review
5. **Education & Career Timeline**:
   - Interactive milestones for EPAM Systems (Certificate of Completion), Mate Academy (Full-Stack Front-End), Codecademy, and ongoing algorithm challenges (Codewars, Exercism).
6. **Conversion Footer & Direct Contact**:
   - One-click contact points: Direct email (`kryzhanskiyruslan@gmail.com`), Telegram (`@ruslan_num0`), LinkedIn, Phone (`+380 98 463 70 16`), plus direct resume download.

### Visual Identity & Theme
- **Color Palette (60-30-10 Rule)**:
  - `60% Neutral Canvas`: Obsidian slate (`#090d16` and `#0d121f`).
  - `30% Structural Surfaces`: Dark card elevation (`#131b2e` and `#1a233a`), hairline dividers (`rgba(255, 255, 255, 0.08)`), muted secondary typography (`#94a3b8`).
  - `10% Neon Accent Budget`: Electric Cyan (`#06b6d4`), Emerald Green (`#10b981`), and warm Amber Gold (`#f59e0b`) strictly applied to active controls, live demo buttons, and verified status badges.
- **Typography**:
  - *Headings & Display*: Bold geometric sans (`Plus Jakarta Sans` / `Outfit`) with balanced line wrapping (`text-wrap: balance`) and tight tracking.
  - *Body Copy*: Clean, highly legible sans (`DM Sans` / system sans) at 15–16px with 1.6 line height.
  - *Data & Code Metrics*: Tabular figures with monospace accents (`font-mono`).
- **Interactive Feedback**:
  - Subtle hover lift on case-study cards (`translateY(-3px)` with smooth cubic bezier).
  - Clean active states for filter controls.
  - Lightbox modal with keyboard `Escape` support, backdrop blur, and scroll lock.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Case-Study Structure vs. Simple Thumbnail Grid**
  - *Approach*: Provide concise "Problem / Implementation / Key Feat" bullet breakdowns inside every project card, paired with direct `Live` and `GitHub` actions.
  - *Why*: Recruiters and hiring managers spend an average of 30 seconds scanning. Bulleted case studies immediately prove thought process and technical depth without requiring users to click away.
- **Decision 2: Highlighting the Non-Tech Experience (Ibis Hotel Reservations)**
  - *Approach*: Frame the hospitality reservation experience as a distinct competitive advantage for e-commerce and booking applications (empathy for user friction, international communication, booking conversion).
  - *Why*: In a crowded junior market, soft skills, user understanding, and business domain empathy differentiate candidates.
- **Decision 3: Integrated Project Image Modal (Lightbox)**
  - *Approach*: Retain and enhance the full-resolution screenshot lightbox with keyboard navigation (`Escape`, click outside), allowing visitors to inspect UI details without leaving the page.

---

## 4. Technical Architecture & Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                           App.jsx                               │
│  State: activeFilter, selectedImage (modal), activeTab          │
└────────────────┬────────────────────────────────────────────────┘
                 │
  ┌──────────────┼──────────────────────────────┐
  ▼              ▼                              ▼
┌─────────────┐┌─────────────────────────────┐┌─────────────────┐
│   Navbar    ││          Hero               ││ CommercialProof │
│ - Logo / RK ││ - Editorial intro & status  ││ - Freelance NDA │
│ - Nav links ││ - Quick contact buttons     ││ - Fitness revamp│
│ - CV Action ││ - Value metric strip        ││ - Hotel UX story│
└─────────────┘└─────────────────────────────┘└─────────────────┘
                 │                              │
  ┌──────────────┼──────────────────────────────┘
  ▼              ▼
┌────────────────────────────────────────────┐
│              ProjectsSection               │
│ - Category filter tabs (All, React, JS...) │
│ - CaseStudyCard list                       │
│   ├── UI Preview thumbnail (click to zoom) │
│   ├── Case study bullets (Problem/Solution)│
│   └── Action buttons (Live Demo & GitHub)  │
└────────────────┬───────────────────────────┘
                 │
  ┌──────────────┼──────────────────────────────┐
  ▼              ▼                              ▼
┌─────────────┐┌─────────────────────────────┐┌─────────────────┐
│ SkillsMatrix││      EducationTimeline      ││ ContactSection  │
│ - 5 domains ││ - EPAM Systems              ││ - Quick Telegram│
│ - Tech tags ││ - Mate Academy              ││ - Direct Email  │
│ - AI tooling││ - Codewars / Algorithms     ││ - LinkedIn/Phone│
└─────────────┘└─────────────────────────────┘└─────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────┐
│              Lightbox Modal                │
│ - Full-resolution preview                  │
│ - Esc key dismiss & backdrop click         │
└────────────────────────────────────────────┘
```

### Data Strategy
- `src/data/projects.js`: Enhanced with detailed case-study fields (`category`, `problem`, `solution`, `highlights`, `tags`, `live`, `github`, `image`).
- `src/data/cvData.js`: Centralized structured data for commercial experience, technical skills matrix, and education credentials for clean maintenance.
- Retain existing verified assets in `src/assets/images/` (`task-board.png`, `game-2048.png`, `movies-filter.png`, `landing-page.png`, `sortable-table.png`, `list-of-goods.png`).
