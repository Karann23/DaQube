# DaQube — Enterprise AI Data Infrastructure Platform

[![React 19](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.28.0-CA4245.svg)](https://reactrouter.com/)
[![Production Status](https://img.shields.io/badge/Deployment-Vercel_Production-000000.svg)](https://da-qube.vercel.app/)
[![Security Headers](https://img.shields.io/badge/Security-A%2B_Hardened-success.svg)](https://da-qube.vercel.app/)

> **Live Website:** [https://da-qube.vercel.app/](https://da-qube.vercel.app/)

DaQube is a modern, high-performance web application representing an enterprise-grade AI data collection, annotation, and human-in-the-loop (HITL) multimodal training infrastructure platform. Built with **React 19**, **Vite 6**, and **Tailwind CSS**, it features deep interactive 3D visualizers, custom typography, full responsive design, and enterprise-grade security hardening.

---

## 🚀 Key Features & Capabilities

- **8 Core AI Capability Solutions:**
  - Image Data Collection (Visual perception & defect capture)
  - Video Data Collection (60/120 FPS action & egocentric AR)
  - Speech Data Collection (120+ languages, 1,000+ locales, multi-mic ASR & TTS)
  - Text Data & Labeling (Multilingual corpora, table OCR & NLP)
  - Image & Video Annotation (Sub-pixel polygon masks & 3D cuboids)
  - Audio Transcription (Verbatim speech-to-text & phonetic Praat tiers)
  - ADAS & LiDAR Annotation (128-beam 3D cuboids & sensor fusion)
  - Off-the-Shelf AI Datasets (Pre-collected commercial training sets)
- **14 Production Single-Page Routes:** Full client-side routing with clean URLs and Vercel edge rewrite fallback (`/`, `/services/:id`, `/services/:category/:subId`, `/network`, `/quality`, `/about`, `/case-studies`, `/case-studies/:id`, `/industries`, `/insights`, `/contact`, `/privacy`, `/terms`).
- **3D & Interactive Experiences:** Interactive 360-degree globe, Synaptic particle canvas, 3D services carousel, spatial domain stage, and interactive scoping architect.
- **Enterprise Security Hardened:** Strict Content Security Policy (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and restricted `Permissions-Policy`.
- **Custom Brand Typography & Styling:** SamsungOne and Samsung Sharp Sans typography integration with the signature DaQube dark aesthetic and neon cyan/orange accents.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | React 19 (`react`, `react-dom`) | Modern component architecture, functional hooks |
| **Bundler & Dev Server** | Vite 6 | Lightning-fast HMR and optimized Rollup production builds |
| **Routing** | React Router DOM 6.28.0 | Declarative client-side routing with deep link support |
| **Styling** | Tailwind CSS 3.4.17 + PostCSS | Utility-first tokens, dark theme palettes, responsive grid |
| **Icons & UI** | Lucide React | High-clarity SVG icon library |
| **Document/Media** | React Pageflip & Canvas 2D/3D | Interactive case study flipbooks and canvas animations |
| **Hosting & CI/CD** | Vercel | Global edge CDN, custom headers, immutable asset caching |

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher
- **Google Chrome** (default browser target for local development)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Karann23/0DaQube.git
cd 0DaQube
npm install
```

### Local Development

Start the Vite development server:

```bash
npm run dev
```

- The dev server starts on **`http://localhost:3000`**.
- It is configured in `vite.config.js` to automatically launch in **Google Chrome**.

#### Windows One-Click Launcher

For Windows workstations, run the batch script from the root folder:

```cmd
start-website.bat
```

---

## 📦 Build & Deployment

### Production Build

Create an optimized minified production bundle in `dist/`:

```bash
npm run build
```

### Local Production Preview

Preview the built application locally with production security headers:

```bash
npm run preview
```

### Automated Device & Regression Tests

Run the responsive screen and route auditor:

```bash
npm run test:devices
```

### Deployment to Vercel

The repository is configured for zero-config deployment to Vercel via Git integration:
- Production branch: `main`
- Build command: `vite build`
- Output directory: `dist`
- Security and routing rules: Configured in `vercel.json`

---

## 📂 Project Structure

```text
├── public/                     # Static assets served at root
│   ├── fonts/                  # SamsungOne & Samsung Sharp Sans webfonts
│   ├── images/                 # Solution visuals, modality cards, logos
│   ├── videos/                 # Background loops and demo clips
│   └── case-studies/           # Case study illustrations
├── src/
│   ├── components/             # Reusable UI widgets & interactive stages
│   │   ├── Interactive360Globe.jsx     # 3D spherical canvas projection
│   │   ├── SynapticParticleCanvas.jsx  # Interactive background particle mesh
│   │   ├── Services3DCarousel.jsx      # Interactive 3D modality rotator
│   │   ├── SpatialDomainStage.jsx      # ADAS / Autonomous domain visualizer
│   │   ├── dataset-estimator.jsx       # Project scoping architect form modal
│   │   ├── site-header.jsx             # Responsive navigation header
│   │   └── site-footer.jsx             # DaQube arch footer with legal links
│   ├── lib/                    # Content stores, taxonomies, and helpers
│   │   ├── content.js                  # Detailed copy, case studies, specs
│   │   ├── services-taxonomy.js        # 8 primary solutions and capability map
│   │   └── home-content.js             # Hero configuration and site metadata
│   ├── pages/                  # Route view components
│   │   ├── HomePage.jsx                # Landing page with full interactive stack
│   │   ├── ServiceCategoryPage.jsx     # Solution category overview
│   │   ├── ServiceDetailPage.jsx       # Detailed solution deep-dive
│   │   ├── CaseStudiesPage.jsx         # Case study index
│   │   ├── CaseStudyDetailPage.jsx     # In-depth case study reader
│   │   ├── NetworkPage.jsx             # Global contributor network & scale
│   │   ├── QualityPage.jsx             # ISO compliance & QA frameworks
│   │   ├── AboutPage.jsx               # Company mission, leadership & vision
│   │   ├── IndustriesPage.jsx          # Industry vertical applications
│   │   ├── InsightsPage.jsx            # Research articles and technical briefs
│   │   ├── ContactPage.jsx             # Inquiry and consultation dispatch
│   │   ├── PrivacyPage.jsx             # Privacy policy
│   │   └── TermsPage.jsx               # Terms of service
│   ├── App.jsx                 # Route definitions & layout wrappers
│   ├── main.jsx                # React root mount
│   └── index.css               # Core styling, fonts, and animation keyframes
├── index.html                  # HTML template with SEO metadata & preconnects
├── package.json                # Project dependencies and lifecycle scripts
├── tailwind.config.js          # Tailwind design tokens & brand palettes
├── vercel.json                 # Vercel SPA rewrites and hardened HTTP headers
├── vite.config.js              # Vite server, port 3000, Chrome launch, aliases
└── start-website.bat           # Windows quick-launch script
```

---

## ✍️ Content & Taxonomy Management

All website content is decoupled from layout components to allow easy copy and media updates:

| Content Element | File Path | Description |
|---|---|---|
| **AI Solutions & Categories** | `src/lib/services-taxonomy.js` | 8 core capabilities, icons, URLs, descriptions |
| **Service Detail Content** | `src/lib/content.js` (`services`) | Technical specs, workflows, deliverables |
| **Case Studies** | `src/lib/content.js` (`caseStudies`) | Client outcomes, metrics, methodology |
| **Articles & Insights** | `src/lib/content.js` (`articles`) | Industry perspectives, technical papers |
| **Site Navigation** | `src/components/site-header.jsx` | Header menus, dropdowns, and mobile navigation |
| **Footer & Legal Links** | `src/components/site-footer.jsx` | Social links, compliance seals, legal routes |
| **Interactive Scoping Architect** | `src/components/dataset-estimator.jsx` | Scoping modal fields, dropdowns, and submission logic |

---

## 🛡️ Security & HTTP Headers

DaQube employs defense-in-depth security configured in [vercel.json](file:///D:/0DaQube/vercel.json) and mirrored in [vite.config.js](file:///D:/0DaQube/vite.config.js):

- **Content-Security-Policy (CSP):**
  - Restricts script and resource execution to self.
  - Prevents clickjacking with `frame-ancestors 'none'`.
  - Whitelists only required external CDNs (Unsplash for images, Pexels for media).
  - Enforces `object-src 'none'`, `base-uri 'self'`, and `form-action 'self'`.
- **X-Frame-Options:** `DENY`
- **X-Content-Type-Options:** `nosniff`
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **Permissions-Policy:** Disabled sensitive browser APIs (`camera=(), microphone=(), geolocation=(), payment=()`).
- **Asset Caching:** 1-year immutable caching (`Cache-Control: public, max-age=31536000, immutable`) for fonts and compiled assets.

---

## 📄 License

Proprietary — All rights reserved by **DaQube AI**.
Unauthorized copying, modification, or distribution of any part of this codebase is strictly prohibited.
