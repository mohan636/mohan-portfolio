# K. Mohan Reddy — Personal Portfolio

A modern, high-performance developer portfolio with a **Retro-Modern Editorial** aesthetic, built with React, Vite, Framer Motion, and Custom CSS.

Live Demo & Resume: [https://teamtasks-nine.vercel.app](https://teamtasks-nine.vercel.app) • [Resume PDF](public/resume.pdf)

---

## ✦ Overview

This portfolio showcases the software development background, projects, technical skills, work experience, education, and certifications of **K. Mohan Reddy**, an entry-level **MERN Stack Developer**.

### Key Features
- **Retro-Modern Editorial Design**: Warm cream (`#F4EFE5`), charcoal (`#252A27`), rust (`#9A5738`), olive (`#65705D`), and sand (`#D8CBB5`) palette.
- **Theme Engine**: Complete Dark and Light mode support with system preference auto-detection, instant toggle, and `localStorage` persistence.
- **Interactive Developer Terminal**: Fully functional simulated console with command execution (`whoami`, `skills`, `projects`, `experience`, `contact`, `help`, `clear`), command history (`↑` / `↓` arrows), and one-click quick suggestion pills.
- **Sticky & Responsive Navigation**: Live scroll-spy active section highlighting, responsive mobile navigation drawer with backdrop blur, and body scroll lock.
- **Framer Motion Micro-Interactions**: Subtle, accessible entrance reveals and card hover effects adhering strictly to `prefers-reduced-motion`.
- **Accessible & Semantic**: WCAG 2.1 compliant heading structure, visible focus rings, skip-to-content anchor, and verified color contrast ratios.
- **Vercel & Production Ready**: Pre-configured for automated continuous deployment with clean asset bundling.

---

## ✦ Tech Stack

- **Framework**: React 19 (JavaScript ES6+)
- **Build Tool**: Vite 8
- **Styling**: Modern Custom CSS (CSS Variables, Grid, Flexbox, Media Queries)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (*DM Serif Display*, *Playfair Display*, *DM Sans*, *JetBrains Mono*)

---

## ✦ Project Structure

```
mohan-portfolio/
├── public/
│   ├── favicon.svg          # Custom retro-modern monogram vector icon
│   └── resume.pdf           # Curriculum Vitae PDF document
├── src/
│   ├── components/
│   │   ├── About.jsx        # Professional summary & dossier card
│   │   ├── BackToTop.jsx    # Smooth floating return-to-top button
│   │   ├── Certifications.jsx # Tap Academy credential showcase
│   │   ├── Contact.jsx      # Transmission section with profile links
│   │   ├── Education.jsx    # Academic history timeline
│   │   ├── Experience.jsx   # ZikraByte Solutions internship timeline
│   │   ├── GithubIcon.jsx   # Accessible vector GitHub brand mark
│   │   ├── Hero.jsx         # Introduction, CTAs & architecture specs
│   │   ├── Navbar.jsx       # Sticky header with theme toggle & mobile menu
│   │   ├── Projects.jsx     # TeamTasks & GourmetFlow project cards
│   │   ├── Skills.jsx       # Categorized technical skill tags
│   │   └── Terminal.jsx     # Interactive CLI developer console
│   ├── data/
│   │   ├── portfolioData.js # Navigation anchors & hero metadata
│   │   └── resumeData.js    # Structured resume data (experience, projects, skills)
│   ├── hooks/
│   │   ├── useActiveSection.js # Scroll-spy active link tracking
│   │   └── useTheme.js      # Light/dark mode state & persistence
│   ├── styles/
│   │   ├── global.css       # Resets, typography, skip link, grain texture
│   │   ├── hero.css         # Hero layout, badge, and card styling
│   │   ├── navbar.css       # Header, active states, and mobile drawer
│   │   ├── responsive.css   # Multi-device media queries (360px to 1440px)
│   │   ├── sections.css     # Common section layouts, cards, and timelines
│   │   ├── terminal.css     # Monospace window styling and output tables
│   │   └── variables.css    # Design tokens, color palette, transitions
│   ├── App.jsx              # Main page orchestration
│   └── main.jsx             # React DOM root entry point
├── index.html               # Semantic HTML5 entry with comprehensive SEO & OG tags
├── package.json             # Scripts and dependencies
└── vite.config.js           # Vite build and plugin configurations
```

---

## ✦ Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### 1. Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/mohan636/mohan-portfolio.git
cd mohan-portfolio
npm install
```

### 2. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Code Quality & Linting
Run ESLint to check for code consistency and standard compliance:

```bash
npm run lint
```

### 4. Production Build
Compile and bundle optimized static assets for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✦ Deployment to Vercel

This repository is optimized for zero-configuration deployment on [Vercel](https://vercel.com):

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete production-ready portfolio"
   git push origin main
   ```
2. **Import to Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New...** → **Project**.
   - Select your `mohan-portfolio` repository.
3. **Configure Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Vercel will build and assign a global CDN URL (e.g. `mohan-portfolio.vercel.app`).

---

## ✦ Author & Contact

**K. Mohan Reddy**  
- **Role**: MERN Stack Developer  
- **Email**: [kmohanr00@gmail.com](mailto:kmohanr00@gmail.com)  
- **Phone**: [+91 7207529338](tel:+917207529338)  
- **GitHub**: [github.com/mohan636](https://github.com/mohan636)  
- **LinkedIn**: [linkedin.com/in/mohan-reddy-818651282](https://www.linkedin.com/in/mohan-reddy-818651282)  
- **Projects**:
  - [TeamTasks Live Demo](https://teamtasks-nine.vercel.app)
  - [GourmetFlow Repository](https://github.com/mohan636/food-delivery-react)

---

## ✦ License

This project is licensed under the [MIT License](LICENSE).
