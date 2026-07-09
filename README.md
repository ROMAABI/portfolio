# Portfolio — Abimanyu A

Personal portfolio showcasing projects, skills, and experience as a Front-End Engineer.

## Sections

- **Hero** — Name, tagline, tech badges, avatar with frame corners and orbit dots
- **About** — Background, stats, download resume
- **Skills** — 6 category cards: Front-End, Backend, AI/LLM, Database, Mobile, Dev Env
- **Projects** — Featured projects with image slideshow + lightbox
- **Experience** — Timeline layout for work history
- **Contact** — 2-column form card with social links
- **Footer** — Copyright and credit

## Built With

- **Vite** + **React** (JSX)
- All styles in a single `index.css` using CSS custom properties
- Fluid `clamp()` typography and spacing — scales progressively from mobile → desktop
- `ScrollReveal` component for fade-in/slide-up on scroll
- `ParticlesCanvas` for background particle effect

## Design

Dark theme with accent colors pulled from CSS variables (`--c1` through `--c6`). Full-width fluid layout with no rigid `max-width` breakpoints — content grows with viewport using `clamp()` and percentage widths.

Original design reference: `/home/spix/portfolio_fixed/style.css`

## Getting Started

```bash
npm install
npm run dev     # dev server
npm run build   # production build
npm run preview # preview build
```

## Deploy

Build outputs to `dist/`. Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages).
