# Axiom Black — Website Build Plan

**Stack:** Next.js (App Router, latest) + Tailwind CSS v4 + TypeScript
**Deploy:** Vercel (free tier), custom domain, global CDN, HTTPS
**Source of truth:** `axiom-redesign-brief.pdf` (scope/IA) · `axiomblack-design_system.md` (visual system) · Figma `Axiom Black UI`
**Goal:** Replace Framer with an owned, fast, SEO-strong marketing site that leads with water-infrastructure / public-sector positioning — brand carried over exactly, not redesigned.

> This is a **plan to align on before any code is written**. Nothing here is built yet. Sections marked 🔗 depend on content the team must supply (Section 9).

---

## 1. Guiding principles

1. **Brand is fixed, platform changes.** Black canvas dominates every surface; the three sub-brand colors (blue = Engineering, orange = Technology, green = Consulting) are *discipline signals*, never decoration. No fourth chromatic, no second typeface.
2. **Discipline-signal system drives page scoping.** Each solution page uses exactly one accent. Home / About / Career / Blog stay black-only; the three colors appear together only in the "Engineering · Technology · Consulting" tagline.
3. **Static-first for speed + SEO.** Every page is statically generated (SSG). No client-side data fetching for content.
4. **Build the system once, then compose pages.** Tokens → primitives → components → sections → pages. New solution pages should be a data file + a template, not a fresh build.
5. **Accessibility + reduced-motion are requirements, not extras.** Semantic HTML, keyboard nav, `prefers-reduced-motion` on the wireframe animation.

---

## 2. Architecture decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js App Router | SSG/metadata/routing control; industry-standard, not locked to one dev |
| Language | TypeScript | Safer refactors as pages/components grow |
| Styling | Tailwind v4 `@theme` | Design system already ships v4 tokens — paste them in directly |
| Rendering | SSG (`generateStaticParams`) | Content is static; fastest + best for crawlers |
| Fonts | Self-hosted Aeonik via `next/font/local`; DM Sans fallback | Aeonik is licensed — self-host in prod; DM Sans (Google) as fallback |
| Icons | Local single-weight outlined SVG set (Silver stroke) | System mandates single-weight outline icons, never multicolor |
| Blog content | **Deferred** — abstract behind a `getPosts()`/`getPost()` content layer | Lets us ship MDX now and swap a headless CMS later without touching pages |
| Solution pages | Single template + per-page data objects | Seven+ pages share one skeleton (Section 6) |
| Animation | **GSAP** (scroll/timeline, SVG draw) + **Framer Motion** (React component transitions) | GSAP for the wireframe `stroke-dashoffset` draw, vertex highlights, and scroll-triggered reveals; Framer Motion for nav/mega-menu, card hover/lift, and page/element enter transitions. Both gated by `prefers-reduced-motion` |
| Linting/format | ESLint + Prettier + Tailwind plugin | Consistency across the component library |

---

## 3. Information architecture (from brief §4)

New six-item top nav, replacing the old three-dropdown layout:

- **Solutions** ▾ — two-column mega-menu: Engineering group (blue) + Technology group (orange), each item with a one-line descriptor
- **Products** — AxiomLabs (direct link; expandable later)
- **About** — story, GROW framework, leadership, registrations
- **Career** — positioning, openings, hiring process
- **Blog** — promoted to top level
- **Contact** — filled CTA button, separated from informational links

### Route map

```
/                                 Home
/solutions                        Solutions index
/solutions/water                  Engineering (blue)
/solutions/design                 Engineering (blue)
/solutions/modeling               Engineering (blue)
/solutions/risk-assessment        Engineering (blue)
/solutions/ai-machine-learning    Technology (orange)
/solutions/digital-transformation Technology (orange)
/solutions/software-development   Technology (orange)
/products/axiomlabs               Products (orange)
/about                            About (green / black)
/careers                          Career (green)
/blog                             Blog index
/blog/[slug]                      Blog post
/contact                          Contact
/privacy  /terms                  Legal
```

### Redirects (brief §4.3) — `next.config` permanent (308) redirects

```
/water-page-axiom-black            → /solutions/water
/open-position                     → /careers
/risk-management-software-system   → /solutions/risk-assessment
```
Audit the live Framer site for any other legacy URLs before launch and add them here.

---

## 4. Project structure

```
axiom-black-website/
├─ app/
│  ├─ layout.tsx               # <html>, fonts, nav, footer, JSON-LD Organization
│  ├─ page.tsx                 # Home
│  ├─ globals.css              # Tailwind + @theme tokens + base
│  ├─ solutions/
│  │  ├─ page.tsx              # index
│  │  └─ [slug]/page.tsx       # template, generateStaticParams from data
│  ├─ products/axiomlabs/page.tsx
│  ├─ about/page.tsx
│  ├─ careers/page.tsx
│  ├─ blog/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ contact/page.tsx
│  ├─ privacy/page.tsx
│  ├─ terms/page.tsx
│  ├─ sitemap.ts              # next sitemap route
│  └─ robots.ts
├─ components/
│  ├─ primitives/             # Button, GhostButton, Tag, Eyebrow, Input, SectionShell
│  ├─ nav/                    # Navbar, MegaMenu, MobileNav
│  ├─ cards/                  # ServiceCard, ProcessStep, StatBlock
│  ├─ sections/               # Hero, FeatureBand, FAQ, CTA, RelatedSolutions, DefinitionTable
│  ├─ motif/                  # WireframeCube (inline SVG + draw animation)
│  └─ Footer.tsx
├─ content/
│  ├─ solutions/*.ts          # per-page data (copy, accent, capabilities, steps, faq)
│  ├─ nav.ts                  # nav + mega-menu taxonomy
│  └─ blog/*.mdx              # (or CMS adapter — deferred)
├─ lib/
│  ├─ seo.ts                  # metadata + JSON-LD helpers
│  └─ content.ts              # getPosts/getPost abstraction (swap-in point for CMS)
├─ public/fonts/              # Aeonik (self-hosted, licensed)
├─ public/icons/              # outlined SVG icon set
├─ tailwind / postcss config
└─ next.config.ts             # redirects, image config
```

---

## 5. Design tokens & foundation (Phase 1)

1. Drop the design system's **Tailwind v4 `@theme` block** verbatim into `globals.css` (colors, type scale, spacing, radius, shadows). Source: `axiomblack-design_system.md` "Tailwind v4" section.
2. Register **Aeonik** with `next/font/local` (weights 300/400/500/700/900); DM Sans fallback via `next/font/google`. Expose as `--font-ab`.
3. Base layer: `body { background: #000; color: var(--ab-body); }`, selection color, focus-visible (hairline, **no chromatic ring** — border lightens instead).
4. Build **type/utility helpers** matching the scale: eyebrow (12px/500/uppercase/+0.18em), display (76–88px/700/−0.028em), two-tone headline (white lead + `#5c5c5c` second clause).
5. `prefers-reduced-motion` global guard.

**Definition of done for Phase 1:** tokens live, fonts loading, a styleguide route (`/_styleguide`, dev-only) rendering every primitive.

---

## 6. Component library (Phase 1 → reused everywhere)

Built to the exact specs in the design system's Components section:

| Component | Key spec |
|---|---|
| `Button` (Filled Light) | white fill, black text, 10px radius, 12/22 pad, 14px/700, arrow +3px on hover, active 0.97 — only bright block on page |
| `GhostButton` | transparent, white text, 1px `#3a3a3a` border → `#6e6e6e` hover; pairs right of filled |
| `Navbar` | fixed, `rgba(0,0,0,0.72)` + backdrop-blur, hairline bottom border; wordmark left, 6 links + Contact CTA right; hamburger < 960px |
| `MegaMenu` | two columns (Eng blue / Tech orange), 7px accent dot + 11px uppercase group label, two-line items, fades + lifts 6px |
| `ServiceCard` | `#0a0a0a`, 16px radius, 1px `#1e1e1e`, 28/24 pad, min 230px, 38px silver icon, "Explore →" in accent; hover translateY(−4px) + border → accent 55% |
| `ProcessStep` | numbered "01" in accent/700, title 17/700, body 13.5 muted; 4-across → 2 → 1 |
| `StatBlock` | bordered row, 38–56px Aeonik **900**, unit as muted superscript, label ≤22ch |
| `DefinitionTable` | hairline top + per-row dividers, muted label left / white value right, 18px row pad |
| `FAQ` (accordion) | native `<details>`, hairline dividers, CSS plus→minus (no chevron/color), question 16/500, answer ≤58ch |
| `FeatureBand` | `#070707`, single radial accent glow, 24px radius, 64–72 pad, copy left + floating tilted UI mock right on float shadow; stacks on tablet |
| `Tag` / status pill | 100px radius, 11px/700 uppercase, accent border + tinted accent text |
| `Input` | `#0a0a0a` fill, 1px `#2e2e2e` → `#5a5a5a` focus, no chromatic ring |
| `Footer` | black continues canvas, hairline top, brand column + link columns, tri-color tagline in bottom bar |
| `WireframeCube` | inline SVG, 1.1px strokes, grey gradient; **GSAP** drives `stroke-dashoffset` draw + 1–3 accent vertex highlights; static under reduced-motion |

**Animation stack conventions:**
- **GSAP** (+ `ScrollTrigger`): wireframe draw-on, scroll-triggered section reveals, stat count-ups, SVG timelines. Register plugins client-side only; kill triggers on unmount.
- **Framer Motion**: mega-menu fade/lift (6px), mobile nav, `ServiceCard` hover translateY(−4px), `FeatureBand` mock entrance, staggered card grids. Use `variants` + `whileInView`.
- **Reduced-motion:** a single `useReducedMotion()` guard (Framer) and `gsap.matchMedia()` branch (GSAP) — motion collapses to instant/static, never removed content.
- Keep animation in small client components; pages stay server components (SSG) with `"use client"` islands only where motion lives.

Each ships with props for **accent** (blue/orange/green/none) so the same card renders correctly per discipline.

---

## 7. Page-by-page plan

**Solution page skeleton (fixed, from design system):**
`hero → capabilities grid → differentiator band → process steps → spec/decision table → related solutions → FAQ → CTA → footer`

| Page | Phase | Accent | Notes |
|---|---|---|---|
| **Home** | 1 | black only | Hero (two-tone 88px headline over wireframe, eyebrow pill, filled+ghost), credentials strip (UEI/CAGE/NAICS), solutions overview, AxiomLabs feature band (orange glow), stats 🔗, proof/reference 🔗, FAQ, CTA |
| **Solutions index** | 2 | black | Two groups (Eng blue / Tech orange), all seven cards with descriptors |
| **Water, Design, Modeling, Risk Assessment** | 2 | blue | Solution skeleton; regulatory language 🔗 (engineering team confirms) |
| **AI/ML, Digital Transformation, Software Development** | 2 | orange | Solution skeleton |
| **Products / AxiomLabs** | 3 | orange | Product overview; real lineup 🔗 |
| **About** | 3 | green/black | "Beyond consulting" hero, GROW framework cards, leadership 🔗, registrations (DefinitionTable) |
| **Career** | 3 | green | Positioning, openings 🔗 (or open-application), hiring process steps |
| **Blog index + post** | 3 | black | Card grid + post template (Tag pills, prose styles) via content layer |
| **Contact** | 5 | black | Form (Input components), org details; form POST target TBD |
| **Privacy / Terms** | 5 | black | Legal templates |

---

## 8. SEO & structured data (brief §3.2, §5.2)

- Per-page `metadata` (unique title + description) via Next Metadata API; `metadataBase`, Open Graph, Twitter card.
- **JSON-LD:** `Organization` (in root layout), `Service` (each solution page), `BreadcrumbList`, `FAQPage` (pages with FAQ).
- `app/sitemap.ts` + `app/robots.ts` generated from the route map.
- Clean `/solutions/*` URLs + 308 redirects (Section 3).
- Titles fix the current "AxiomBlack"-only tag; lead with water-infrastructure / public-sector terms.
- Perf budget: Lighthouse ≥ 95 across the board; static HTML, `next/image`, self-hosted fonts with `display: swap`.

---

## 9. Content dependencies 🔗 (needed from team before launch — brief §3.3)

- **Project proof:** ≥1 outcome/client reference for Home + solution pages
- **Key stats:** verified years of experience, projects delivered
- **Leadership:** names, titles, bios, photos (About)
- **Careers:** open positions, or confirm open-application-only
- **Products:** real AxiomLabs lineup, names, status
- **Regulatory language:** confirmed by engineering team

All the above are built with clearly-marked placeholders so structure ships without blocking on content.

---

## 10. Phasing (aligned to brief §6)

| Phase | Focus | Output |
|---|---|---|
| **0 — Setup** | Repo, Next.js scaffold, Tailwind tokens, fonts, deploy pipeline to Vercel | Green "hello world" on a preview URL |
| **1 — Foundation** | Design tokens, full component library, styleguide route, **Home** | Approved brand system + homepage draft |
| **2 — Solutions** | Solutions index + 7 solution pages via template | Full Solutions section, consistent |
| **3 — Company** | About, Career, Blog (index+post), Products | Remaining core pages drafted |
| **4 — Content** 🔗 | Replace placeholders with verified proof, stats, team, openings | Real content in place |
| **5 — Launch** | Contact form, redirects, SEO audit, a11y + cross-device QA, domain migration off Framer, go-live | Site live on Vercel; Framer retired |

**Verification each phase:** Lighthouse (perf/SEO/a11y), keyboard-only pass, reduced-motion check, 360→1440px responsive check, and a design-system compliance pass (no fourth color, no shadows on cards, black dominant).

---

## 11. Open questions to resolve

1. **Blog CMS** — deferred; confirm MDX-in-repo vs headless before Phase 3 completes (affects `lib/content.ts` only).
2. **Contact form backend** — where do submissions go? (email service / form endpoint / CRM). Needed for Phase 5.
3. **Aeonik license** — confirm we hold web-font license to self-host; otherwise ship DM Sans as primary.
4. **Analytics** — Vercel Analytics vs none (privacy-first preferred).
5. **Full legacy-URL list** — crawl live Framer site to complete the redirect map.

---

## 12. Immediate next step (on approval)

Phase 0 + start of Phase 1: scaffold Next.js in `Axiom Black website/`, wire Tailwind v4 tokens and fonts, and build the primitives + Navbar/Footer + WireframeCube — then the Home hero — so you get a reviewable homepage on a Vercel preview URL first.
