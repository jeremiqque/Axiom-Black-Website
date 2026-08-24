# Axiom Black — Website

Marketing site for Axiom Black. Next.js (App Router) + Tailwind CSS v4 + TypeScript.
Animation: GSAP + Framer Motion. See `BUILD-PLAN.md` for the full plan.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm run start
```

## Deploy (Vercel)

1. Push this folder to a Git repo.
2. Import the repo at vercel.com → framework auto-detected as Next.js.
3. Deploy — free tier covers a site this size (custom domain, CDN, HTTPS).
   Every push gets a preview URL; `main` deploys to production.

## Fonts

Aeonik is the licensed brand typeface. Self-host it in production: drop the
`.woff2` files in `public/fonts/` and switch `src/app/layout.tsx` from
`next/font/google` (DM Sans) to `next/font/local`. DM Sans is the sanctioned
fallback until then.

## Status

Phase 0 — Foundation scaffold: tokens, fonts, animation stack, redirects,
token-check homepage. Next: component library + real Home (Phase 1).
