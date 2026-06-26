# Interactive Developer Portfolio

A premium, highly interactive, and production-ready portfolio website designed for software engineers and AI developers. Built with a modern dark-mode aesthetic, sleek glassmorphism panels, smooth cursor tracking glows, and fully custom animations.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62B)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 🔗 Live Demo
Explore the live website here: **[Live Portfolio Link Placeholder](https://pravalikapalle.dev/)**

---

## ✨ Feature Highlights

- 🌟 **Dynamic Dark-Mode Aesthetic**: Curated deep-space color palettes, neon accents, and smooth gradient overlays.
- 🖱️ **Interactive Cursor Tracking Glow**: A premium backdrop glow spot that dynamically follows the user's cursor pointer on desktop.
- ⌨️ **Typewriter Title Sequence**: Dynamic cycling job titles in the Hero section with smooth caret blink micro-animations.
- 📱 **Fully Responsive Layout**: Built mobile-first and audited on viewports from `320px` to `1440px` with zero horizontal overflow.
- 🗺️ **Interactive CSS Mockups**: Visually rich simulation cards showcasing code, charts, graphs, and visual paths directly in the Projects section.
- 📑 **Integrated PDF Resume Options**: Seamlessly toggle between opening the official PDF resume in a new tab or initiating a direct download.
- 🔍 **SEO & Indexing Ready**: Out-of-the-box metadata schema, Open Graph (OG) tags, Twitter Card tags, `robots.txt`, and a `sitemap.xml` structure.
- ♿ **Accessibility (A11y) Focused**: Restored clear keyboard focus borders (`focus-visible`) on key interface buttons, and mapped full screen-reader label contexts.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, JavaScript (ES6+), HTML5, CSS3
- **Build Engine & Server**: Vite 8, PostCSS, `@tailwindcss/vite`
- **Animations & Gestures**: Framer Motion 12
- **Icon Suite**: Lucide React
- **Formatting & Linters**: Oxlint

---

## 📂 Project Structure

```text
Portfolio/
├── .vscode/                 # Workspace-specific editor settings
│   └── settings.json        # Suppresses custom CSS at-rule warnings
├── public/                  # Static assets copied directly to build root
│   ├── Pravalika_Palle_Resume.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/                     # Core React application source code
│   ├── assets/              # Icons and image elements
│   ├── components/          # Reusable UI component modules
│   │   ├── About.jsx        # About summary & core focus layout
│   │   ├── Certifications.jsx # Verified credential cards
│   │   ├── Contact.jsx      # Message form & contact cards
│   │   ├── Experience.jsx   # Timeline milestones & intern roles
│   │   ├── Footer.jsx       # Attribution footer details
│   │   ├── Hero.jsx         # Intro typewriter & interactive CTAs
│   │   ├── Navbar.jsx       # Sticky scrolling header & drawer
│   │   ├── Projects.jsx     # Project mockups & repository actions
│   │   ├── Resume.jsx       # Digital credentials board
│   │   └── Skills.jsx       # Organized technology Split-Grids
│   ├── App.jsx              # Main parent layout & scroll progress
│   ├── config.js            # Central contact/data config file
│   ├── index.css            # Tailwind V4 import & custom CSS theme
│   └── main.jsx             # React DOM renderer entrypoint
├── index.html               # Main HTML wrapper & SEO header scripts
├── package.json             # Scripts & dependency definitions
└── vite.config.js           # Vite configuration & plugin integrations
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 📥 1. Installation
Clone the repository and install the project dependencies:
```bash
git clone https://github.com/pravalika2307/Portfolio.git
cd Portfolio
npm install
```

### 💻 2. Running Locally
Launch the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to: `http://localhost:5173/`

### 🏗️ 3. Production Build
Compile and bundle the project assets for deployment:
```bash
npm run build
```
The optimized production output will be generated inside the `/dist` directory.

---

## 🌐 Deployment Instructions (Vercel)

This project is fully compatible with [Vercel](https://vercel.com/) for instant edge-hosting:

1. Sign in to your Vercel Dashboard.
2. Click **New Project** and import your GitHub repository.
3. Configure the build parameters:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Vercel will automatically build the site and provide a SSL-secured live domain.

---

## 📸 Screenshots

*(Placeholder section to add screenshots of your stunning dark-mode UI)*

| Desktop View | Mobile View |
| :---: | :---: |
| ![Desktop Screenshot Placeholder](https://placehold.co/600x400/030014/ffffff?text=Desktop+Portfolio+Preview) | ![Mobile Drawer Placeholder](https://placehold.co/300x500/030014/ffffff?text=Mobile+Menu+Preview) |

---

## 👤 Author

**Pravalika Palle**  
- **GitHub**: [github.com/pravalika2307](https://github.com/pravalika2307)
- **LinkedIn**: [linkedin.com/in/pravalikapalle23](https://www.linkedin.com/in/pravalikapalle23/)
- **Email**: [pravalikareddy722@gmail.com](mailto:pravalikareddy722@gmail.com)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
