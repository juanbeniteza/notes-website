# Notes by Juan Benitez

A minimal Astro notes site with a reading layout that matches [juanbenitez.dev](https://juanbenitez.dev/). Content lives in `src/content/notes/` and is published to Vercel.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

The index lists published notes by date and shows a short coming-soon message when there are none. The original article is retained as a draft; draft notes and future-dated notes are excluded from both the index and article routes. Canonical and social URLs use `notes.juanbenitez.dev`.
