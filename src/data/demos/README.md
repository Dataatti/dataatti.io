# Demo pitch pages

Each JSON file here becomes a page at `https://dataatti.io/demo/<slug>/`.

- Pages are `noindex`, not in the sitemap and not linked from the site. Only people with the link find them.
- Files starting with `_` are examples. They build in Netlify deploy previews and local builds, never in production.
- Images for a page go in `public/demo/<slug>/` and are referenced as `/demo/<slug>/<file>`.
- To take a page down: delete its JSON (and image folder) and push.

## Schema

```jsonc
{
  "slug": "yritys-oy", // URL segment; lowercase, a–z 0–9 and hyphens
  "lang": "fi", // "fi" | "sv" | "en" — fixed labels follow this
  "company": "Yritys Oy",
  "contactName": "Maija", // optional; used in the greeting
  "headline": "…", // completes "Hei Maija, …"
  "intro": "…", // paragraphs separated by a blank line (\n\n)
  "currentState": ["…", "…"], // 2–4 concrete observations
  "examples": [
    // exactly two
    {
      "title": "…",
      "channel": "Instagram", // optional
      "before": {
        "headline": "…",
        "text": "…",
        "sourceUrl": "…",
        "date": "…",
        "image": "/demo/slug/x.jpg",
        "imageAlt": "…",
      },
      "after": { "headline": "…", "text": "…", "image": "/demo/slug/y.jpg", "imageAlt": "…" },
      "why": ["…", "…"],
    },
  ],
  "offer": { "title": "…", "text": "…", "points": ["…"] }, // title optional
  "cta": { "title": "…", "text": "…" }, // both optional
  "sender": { "name": "…", "role": "…", "email": "…", "phone": "…" }, // optional; defaults to Petro / hello@dataatti.io
}
```

Only `company`, `headline`, `intro` and `examples` are required. Every `headline`, `image`, `sourceUrl` and `date` inside an example is optional.
