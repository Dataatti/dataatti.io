# dataatti.io

Single-page static site for Dataatti, built with [Astro](https://astro.build). No client framework,
no analytics, no cookies. Hosted on Netlify.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to dist/
npm run preview   # serve dist/ locally
npm run format    # prettier
```

Requires Node 22 or newer.

## Editing content

All copy lives in typed data files. Components contain no hardcoded text.

| What                                                 | Where                     |
| ---------------------------------------------------- | ------------------------- |
| SEO, nav, hero, how it works, about, contact, footer | `src/content/site.ts`     |
| Packages, price, VAT note, Holvi store URLs          | `src/content/packages.ts` |
| Profile photo (optimized at build time)              | `src/assets/petro.jpg`    |
| Logo, favicons, manifest, robots.txt, sitemap.xml    | `public/`                 |
| Colors, fonts, spacing tokens                        | `src/styles/global.css`   |

To swap the shop links when a new store opens, edit only `src/content/packages.ts`.

## Structure

```
src/
  assets/       images processed by Astro
  components/   Navbar, Hero, HowItWorks, Packages, About, Contact, Footer, Square, Icon
  content/      site.ts, packages.ts
  layouts/      Layout.astro (head, SEO, JSON-LD slot)
  pages/        index.astro, 404.astro
  styles/       global.css
```

## Deploy

Netlify runs `npm run build` and publishes `dist` (see `netlify.toml`). Legacy `/en`, `/fi` and
privacy-policy URLs redirect to `/`.
