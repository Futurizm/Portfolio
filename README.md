# Aristid Popandopulo — Portfolio

Minimalist, editorial personal portfolio for **Aristid Popandopulo** — Software Engineer × AI Developer. Built with Next.js (App Router), TypeScript, React, Framer Motion and Lucide icons. Fully localized in **English, Russian and Kazakh**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to the locale detected from your
browser (`/en`, `/ru` or `/kz`); English is the default.

### Production

```bash
npm run build
npm start
```

## Internationalization

- All copy lives in typed dictionaries under `lib/dictionaries/` (`en.ts`, `ru.ts`, `kz.ts`).
- Components read strings from a React context (`components/LocaleProvider.tsx`) and never
  duplicate markup per language.
- The language switcher performs a client-side navigation between `/en`, `/ru`, `/kz` and
  stores the choice in `localStorage` + a `NEXT_LOCALE` cookie.
- `middleware.ts` redirects `/` to the best-matching locale using the cookie, then the
  `Accept-Language` header (falling back to English).
- Each locale exposes localized `<title>`, meta description, Open Graph tags, `hreflang`
  alternates and JSON-LD structured data.

To edit content, change the dictionary files — no component changes required.

## Project structure

```
app/
  [locale]/
    layout.tsx        # html/body, metadata, theme bootstrap, JSON-LD
    page.tsx          # section composition
  globals.css         # design system (tokens, layout, components)
  icon.svg            # favicon
  robots.ts, sitemap.ts
components/            # reusable UI (header, hero, sections, footer, ...)
lib/
  i18n.ts              # locale types + dictionary interface
  content.ts           # structural project/achievement data + contact links
  dictionaries/        # en / ru / kz content
middleware.ts          # locale detection & redirect
```

## Editing projects & achievements

Shared, non-translatable facts (slugs, numbering, tags, links) live in `lib/content.ts`.
The user-facing text for each item lives in the dictionaries under `projects.items` and
`achievements.items`, keyed by slug.

## Deploying to Vercel

Import the repository and deploy — no configuration required. Optionally set
`NEXT_PUBLIC_SITE_URL` to your production URL so canonical links, Open Graph URLs,
`sitemap.xml` and `robots.txt` use the correct host.

## Notes

- Dark theme is the default; a light theme is available via the header toggle and is
  persisted in `localStorage`. The theme is applied before first paint to avoid flashing.
- Respects `prefers-reduced-motion` — scroll reveals and transitions are disabled.
- No stock photography: the visual language is typography, hairlines and a single
  restrained accent color.
