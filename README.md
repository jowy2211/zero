# Neo-Brutalist Developer Portfolio

Nuxt 4 + Tailwind CSS v4, statically generated.

## Quick start

```bash
npm install
npm run dev
```

## Customize

- All content (name, bio, skills, projects, certifications, experience, socials): `app/data/profile.ts`
- Colors / shadows (design tokens): `app/assets/css/main.css` (`@theme`)
- Replace `public/profile.webp` (hero photo) and `public/og-image.png` (1200x630)
- Set the production URL for canonical, sitemap, robots and Open Graph:

```bash
NUXT_PUBLIC_SITE_URL=https://yourdomain.com npm run generate
```

Deploy `.output/public` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## SEO and performance

- Prerendered HTML, semantic landmarks, single `h1`, skip link
- `useSeoMeta` (title, description, Open Graph, Twitter), canonical, JSON-LD (`Person`, `WebSite`)
- Dynamic `/sitemap.xml` and `/robots.txt`
- Self-hosted fonts via `@nuxt/fonts` (preloaded, `font-display: swap`)
- Icons bundled at build time (no runtime icon API requests); list new icon names in `nuxt.config.ts` > `icon.clientBundle.icons`
- Inlined critical CSS, gzip/brotli assets, immutable cache headers for `/_nuxt/**`
- No images beyond inline SVG, so LCP is text; CLS-safe layout
- Respects `prefers-reduced-motion`; visible focus styles; carousel is keyboard and screen-reader friendly
