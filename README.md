# Abdullah Alshaati — Portfolio

Personal portfolio site: computer engineering student at Portland State University, with internship experience at Boeing and Genentech.

**Live:** https://portfolio-2026-umber-psi.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- Tailwind CSS v4 (CSS-first config, design tokens in `app/globals.css`)
- TypeScript
- [lucide-react](https://lucide.dev) icons
- Deployed on Vercel — every push to `main` goes to production

## Design

Warm editorial light theme: cream paper background, espresso ink text, and a terracotta accent, with Fraunces serif display headings over Geist body text. A navbar switcher cycles the accent color (terracotta / olive / clay) and persists the choice to `localStorage`, applied before hydration to avoid a flash.

All page content lives in one typed module, `app/content.ts` — edit that file to update copy, jobs, projects, or skills without touching components.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```
