# Cedar & Stone Landscaping — sample site

A one-page marketing site for a (fictional) West Island landscaping company,
built from the design mockup. Cream, sand and forest green, a tight grotesque
for headings and a serif wordmark.

Built with an eye on [Google's Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance)
and the Core Web Vitals: no JavaScript on first load, self-hosted fonts, a
preloaded AVIF/WebP hero, and accessible form and navigation patterns.

## Stack

Same as `business_restaurant_sample`:

- [Astro](https://astro.build) 6 (static output, file-based routing)
- React 19 for the single interactive island (the estimate form)
- Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js`; tokens live
  in `src/styles/global.css`)
- Typed, hand-rolled i18n dictionaries (`src/i18n`) with English and French
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server on `localhost:4321`     |
| `npm run build`   | Build the static site to `./dist/`           |
| `npm run preview` | Preview the production build                 |

## Performance and accessibility notes

What the site does, and why:

- **Zero initial JavaScript.** The header's mobile menu is a native `<details>`
  disclosure with a ~10-line enhancement script (close on link, Escape, or
  outside click). The estimate form hydrates with `client:visible`, so React
  only loads when the contact section approaches the viewport.
- **LCP image is preloaded** with `imagesrcset`/`imagesizes` and a matching
  `fetchpriority="high"` `<img>`. Only the AVIF candidate is preloaded — adding
  a WebP preload too made the browser download the hero twice.
- **Modern formats with fallbacks.** Every photo is a `<picture>` with AVIF,
  WebP and a JPEG fallback (`<Picture>` from `astro:assets`), with `sizes`
  tuned to the real grid so phones do not fetch desktop-sized files.
- **Fonts are self-hosted** (`@fontsource-variable/inter-tight`,
  `@fontsource/source-serif-4`), subset to Latin, with one preload and
  `font-size-adjust: from-font` so the fallback swap does not shift layout.
- **CSS is inlined** (`build.inlineStylesheets: 'always'`) so there is no
  render-blocking stylesheet request on a two-page site.
- **Accessibility:** skip link, landmark regions, 48px buttons and fields,
  16px inputs (no iOS zoom), visible `:focus-visible` rings, `:user-invalid`
  field styling, required-field hints for screen readers, and colour tokens
  audited to at least 4.5:1 for body text.
- **Reduced motion** is respected (`prefers-reduced-motion` kills the smooth
  scroll and transitions), and `color-scheme: light` keeps UA controls in sync.

Lighthouse (local production build, Chrome 158):

| Preset  | Performance | Accessibility | Best practices | SEO | LCP  | CLS |
| :------ | :---------- | :------------ | :------------- | :-- | :--- | :-- |
| Desktop | 100         | 100           | 100            | 100 | 0.8s | 0   |
| Mobile  | 93          | 100           | 100            | 100 | 3.2s | 0   |

The mobile LCP is the hero image under Lighthouse's throttled mobile profile;
the other gallery images are lazy-loaded with `fetchpriority="low"` and only
download as the page is scrolled.

## Structure

```text
src/
├── assets/photos/        # source photography (optimised at build time)
├── components/
│   ├── EstimateForm.tsx  # the only React island (contact form, no backend yet)
│   ├── Footer.astro      # static footer with language links
│   ├── Header.astro      # native <details> mobile menu, no hydration
│   └── icons.tsx         # inline SVG marks used across the site
├── i18n/                 # en/fr dictionaries, typed via content.ts
├── layouts/Layout.astro  # html shell, fonts, metadata, header/footer
├── lib/url.ts            # GitHub Pages base-path helpers
├── pages/[...lang]/
│   └── index.astro       # `/` (en) and `/fr/`
├── styles/global.css     # Tailwind import + design tokens/utilities
└── env.d.ts              # Astro/Vite client types for ?url imports
```

## Notes

- The site is deployed under the `/business-landscape-sample` subpath, so links
  go through `src/lib/url.ts` (`localeLink`, `sectionLink`, `assetUrl`).
- The estimate form is a front-end only demo: it validates with native HTML
  constraints and shows a confirmation state. Wire `action`/an endpoint when a
  backend exists.
- Photography lives in `src/assets/photos` and is served through `astro:assets`
  (AVIF/WebP/JPEG with responsive `srcset`), not as raw PNGs.
