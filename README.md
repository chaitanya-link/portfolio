# chaitanya.dev

**Live: [chaitanya-portfolio-virid.vercel.app](https://chaitanya-portfolio-virid.vercel.app)**

Static portfolio site. No framework, no build step, no package manager, no dependencies.

## Stack

- **HTML5** — `index.html`, single page
- **CSS3** — `styles.css`, custom properties for theming, no preprocessor
- **Vanilla JavaScript (ES5/ES6, no libraries)** — `script.js`
- Assets are plain `.jpg`/`.pdf` files served statically, no image pipeline or CDN transform

No React/Vue/Next.js, no bundler (Webpack/Vite/esbuild), no CSS framework (Tailwind/Bootstrap), no npm dependencies at all. The entire site is three source files plus static assets.

## Structure

```
.
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── chaitanya-hero.jpg
    ├── Chaitanya_Joshi_CV.pdf
    ├── project-autopitch-side.jpg
    ├── project-neuralthreads-1.jpg
    ├── project-neuralthreads-2.jpg
    └── project-meanedge.jpg
```

## Deployment

- **Hosting:** [Vercel](https://vercel.com) — static deployment, no build command (framework preset: Other)
- **Live URL:** https://chaitanya-portfolio-virid.vercel.app
- **Source:** https://github.com/chaitanya-link/portfolio

## Running locally

```bash
python -m http.server 8090
# http://localhost:8090
```
