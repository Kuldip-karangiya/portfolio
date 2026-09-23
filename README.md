# Kuldip Karangiya — Portfolio

A Next.js portfolio for an AI/ML developer: floating pill navigation with light/dark and motion toggles, a hero with floating tool tiles, sticky-stacking project cards that open into case-study pages, a sticky toolkit with a 3D technology marquee, a journey timeline, and a contact form.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Scripts use Webpack mode because the Turbopack CSS worker cannot bind a local port in this environment.

## Verify

```bash
npm run typecheck
npm run lint
npm run build
```

## Content

All editable content lives in `src/content/portfolio.ts`: hero copy, ticker, skill groups, experience, journey, about, and every project including its case-study sections (problem, architecture, workflow, decisions, outcome). `src/content/skills.ts` lists the tools that have official logos; `src/components/SkillIcon.tsx` maps them to icons.

## Environment

- `NEXT_PUBLIC_SITE_URL` — deployed origin, used for canonical URLs, Open Graph, sitemap, and robots.
- `RESEND_API_KEY` and `CONTACT_TO_EMAIL` — enable the contact form via Resend (free tier). Without them the form returns a clear "not connected" message and points to the email address. Optional `CONTACT_FROM_EMAIL` for a verified sender.

## Structure

- `src/app/` — layout (fonts, theme bootstrap, header, footer), home page, `projects/[slug]` case studies, `api/contact`, Open Graph image, sitemap, robots, stylesheet (design tokens at the top, light theme via `[data-theme="light"]`).
- `src/components/` — one component per section plus `ScrollEffects` (reveal-on-scroll and project-card stacking), `ThemeControls`, `ContactForm`.
