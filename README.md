# The Website of the Guggenmusik Art-Rose

Draft replacement for the WordPress site at [https://www.art-rose.ch](https://www.art-rose.ch).

## Agenda data

`src/app/site-config.ts`'s `SHEET_ID` points at the band's Google Sheet,
shared as "Anyone with the link" and read via its CSV export URL
(`/export?format=csv&gid=...`). Only the first column needs to be a
`DD.MM.YYYY` date; the rest are free-form and rendered under whatever name
the sheet uses — this one has `Datum`, `Event`, `Ort`, `Weiteres`, matching
the original WordPress table.

## Getting Started

Run the development server:

```bash
npm run dev
```

Deploy via GitHub Pages:

```bash
npm run deploy
```

## Scope of this draft

Ported from the WordPress site, with the News/blog post listing left out
(the homepage's "Unterwegs als Cruella De Vil" teaser is kept — it's the
site's own pinned homepage content, not one of the News posts):

- Home (hero, current-season teaser, recruiting, agenda, YouTube video),
  Agenda, Kontakt, Über Uns (+ Vorstand, Mitglieder)
- Bilder: only the current group photo — the season-by-season galleries
  (2018/19 through 2025/26) still need to be picked and brought over
- Kontakt form replaced with a `mailto:` link (no backend to send a form to)
