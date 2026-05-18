# Portfolio 2026

A production-grade engineering portfolio built on the Next.js App Router, architected for high-fidelity system showcase. Designed with precise control over layout, typography, and interactive state — deployed continuously to Vercel.

---

## Environments

| Target | URL |
|--------|-----|
| Production | https://portfolio-2026-umber-psi.vercel.app |
| Local dev | http://localhost:3000 |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Tooling | Claude Code CLI |
| Deployment | Vercel |

---

## Key Features

**Interactive Client-Side Theme State Matrix**
A runtime accent-color switching system with three distinct visual modes. State is managed entirely client-side with no server round-trips, giving instant visual feedback across all themed surfaces.

**App Router Architecture**
Full adoption of the Next.js App Router — server components by default, layouts scoped at the route segment level, and streaming where applicable.

**Tailwind CSS v4**
Configured against the v4 CSS-first model with a custom design token layer for spacing, color, and typography scales.

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the running application.

---

## Deployment

Continuously deployed from `main` via Vercel. Every push to `main` triggers a production deployment automatically.
