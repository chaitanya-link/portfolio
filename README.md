# chaitanya.dev

Personal portfolio site for Chaitanya Joshi — software developer working across RAG pipelines, LLM-powered tools, and full-stack web development.

Built as a static site: no framework, no build step, no dependencies. Just HTML, CSS, and vanilla JS.

## Features

- **Liquid animated background** — gooey, drifting blobs (SVG filter + CSS animation) that run behind the entire page, not just the hero, with a cursor-tracked parallax and spotlight glow.
- **Scroll reveals** with a hard fallback — content degrades gracefully if JS fails or `IntersectionObserver` is unavailable.
- **Dark/light aware** — respects the viewer's OS/browser theme via CSS custom properties.
- **Fully responsive** — tested down to 375px, including a dedicated stacking layout for the split project cards.
- **Zero build tooling** — open `index.html` directly or serve the folder with any static file server.

## Structure

```
.
├── index.html                 # all page markup
├── styles.css                 # design tokens + all styling
├── script.js                  # scroll reveals, cursor/spotlight effects, magnetic button
└── assets/
    ├── chaitanya-hero.jpg     # hero portrait
    ├── Chaitanya_Joshi_CV.pdf # downloadable resume
    ├── project-autopitch-side.jpg
    ├── project-neuralthreads-1.jpg
    ├── project-neuralthreads-2.jpg
    └── project-meanedge.jpg   # custom-generated candlestick chart (not a screenshot)
```

## Sections

- **Hero** — intro, role, primary CTA.
- **Work** — [AutoPitch](https://frontend-chaitu11106-coders-projects.vercel.app) (agentic RAG cold-outreach engine), [NeuralThreads](https://neuralthreads-462e2.web.app/) (cross-platform AI memory layer), and [Mean Edge](https://github.com/chaitu11106-coder/MeanEdge) (C++17 trading simulator).
- **About** — bio, layered experience timeline, compact education.
- **Contact** — email, GitHub, LinkedIn, CV download.

## Running locally

Any static file server works:

```bash
python -m http.server 8090
# then open http://localhost:8090
```

## License

Personal project — all rights reserved.
