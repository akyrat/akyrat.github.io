# Andreas Kyratzis — Portfolio

A personal portfolio / CV site built as a chronological timeline of professional
work and personal projects. Static, fast, and deployed to GitHub Pages at
**https://akyrat.github.io**.

> Maintainability is the point: almost everything you'll want to change is
> **content/data**, edited without touching layout or styling code.

---

## Tech stack

- **[Astro](https://astro.build)** — static site generator
- **React island** — only the interactive timeline ships JS
- **Framer Motion** — timeline filter/sort/expand animations
- **TypeScript** + **Markdown content collections**

---

## Running it locally

Requires **Node 20+**.

```bash
npm install      # first time only
npm run dev      # start dev server (http://localhost:4321)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

---

## Project structure

```text
src/
  content/timeline/   ← ONE .md file per timeline entry  (edit these most)
  content/config.ts   ← the entry schema (frontmatter validation)
  data/site.ts        ← name, role, tagline, contact links, skills list
  components/
    timeline/         ← the interactive timeline (React island + CSS)
    sections/         ← Hero, About, Skills, Contact, Footer (.astro)
  lib/                ← loads + shapes timeline data for the island
  styles/             ← tokens.css (colors/spacing) + global.css
  pages/index.astro   ← the single page, composes the sections
public/               ← favicon, PDFs, and any file linked by URL
src/assets/           ← images that get optimized at build
```

---

## Adding / editing a timeline entry

Create a new file in `src/content/timeline/`, e.g. `2027-new-thing.md`. The
filename is just an id (a `YYYY-slug` convention keeps the folder tidy). That's
the whole job — no component changes.

> **Tip:** there's a Cursor skill for this. In a Cursor chat, just say something
> like *"add a new project entry for X"* and the `add-timeline-entry` skill
> (`.cursor/skills/`) will fill in what it can and ask you for the rest.

### Frontmatter fields

| Field | Required | Notes |
|-------|----------|-------|
| `title` | ✅ | Shown next to the node. |
| `track` | ✅ | `professional` or `personal`. **This is what the filter tabs use.** University/education counts as `professional`. |
| `type` | ✅ | `role` \| `project` \| `education`. Controls the icon + badge label only (not filtering). |
| `dateStart` | ✅ | Sort key, ISO-ish e.g. `"2024-05"`. |
| `dateEnd` | optional | Omit for ongoing entries. |
| `displayDate` | ✅ | Human label beside the node, e.g. `"2024–present"`. |
| `summary` | ✅ | One-liner shown under the title while collapsed. |
| `links` | optional | List of `{ label, href }` (GitHub, PDF, demo…). |
| `media` | optional | Screenshots/GIFs when expanded. Put files in `src/assets/timeline-content/`, reference relative to the `.md`. Optional `width` (1–100, % of container; default 100). |
| `nodeImage` | optional | Small image inside the node circle; falls back to a type icon. |
| `accent` | optional | `true` for an extra accent flourish on that node. |
| `order` | optional | Tie-breaker when two entries share a `dateStart`. |

The **Markdown body** below the frontmatter is the expand-in-place reveal — write
normal Markdown (headings, bold, lists).

### Example

```md
---
title: "Some Role - Company"
track: "professional"
type: "role"
dateStart: "2027-01"
displayDate: "2027–present"
summary: "One line about what this was."
links:
  - { label: "Company", href: "https://example.com" }
---

The longer write-up goes here. **Bold**, lists, etc. all work.
```

The schema lives in `src/content/config.ts` — that's the source of truth if you
forget a field name.

---

## Adding pictures

Two cases:

1. **Images that should be optimized** (hero, About cards, node images): drop the
   file in `src/assets/`, then `import` it and render with Astro's `<Image>`.
   Astro resizes + converts to WebP at build (big files shrink dramatically).
   See `src/components/sections/About.astro` for the pattern.
2. **Quick/unprocessed images**: put them in `public/` and reference by URL
   (`/my-image.jpg`). No optimization, zero wiring.

> Provide images at roughly the aspect ratio you want displayed — the About
> cards size to each image's natural ratio.

### Node logos (the timeline circles)

Each timeline entry can show a small logo in its circular node via the optional
`nodeImage` field (it falls back to a type icon if omitted). Put logos in
`src/assets/logos/` and reference them **relative to the entry `.md` file**:

```yaml
nodeImage: "../../assets/logos/autodesk-logo.png"
```

Logos can be any size/shape — they're centered and contained on a white circle,
so the whole mark shows. Use `src/assets` (not `public/`), since the schema
resolves these with Astro's `image()`.

---

## Adding file attachments (e.g. a PDF)

Put the file in **`public/`** (it's served from the site root, untouched), then
link it from an entry's `links`:

```md
links:
  - { label: "Download full dissertation (PDF)", href: "/LoRaChord_Dissertation.pdf" }
```

Clicking opens it in the browser's viewer (where the user can save it). Keep
large files in mind — they live in the git repo.

---

## Editing other sections

- **Name / role / tagline / contact copy / GitHub + LinkedIn / skills:** `src/data/site.ts`
- **Hero, About prose, Skills, Contact, Footer:** the matching file in
  `src/components/sections/`
- **Colors, spacing, fonts:** `src/styles/tokens.css` (change a token once, it
  applies everywhere)

---

## How it works (architecture)

1. **Content layer.** Each `.md` in `src/content/timeline/` is validated against
   the schema in `config.ts` and its body is compiled to HTML at build time.
2. **Loader.** `src/lib/timeline.ts` reads every entry, pulls in the compiled
   body HTML, and returns plain serializable objects (sorted newest-first).
3. **Island.** `index.astro` passes that array to the React `Timeline` component
   (`client:load`). The island owns the interactive state — active filter
   (Unified / Professional / Personal), sort direction, and which node is
   expanded — and uses Framer Motion for the animated reflow and expand reveal.
   Connector arrows always point toward the more recent entry.

The split (`timeline-data.ts` = client-safe types/helpers, `timeline.ts` =
server-only loader) keeps `astro:content` out of the browser bundle.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages — no manual steps per deploy.

One-time setup (already done): repo named `akyrat.github.io`, and **Settings →
Pages → Build and deployment → Source = GitHub Actions**.

---

## Conventions for AI agents

Working style and project rules live in `.cursor/rules/` so Cursor stays
consistent: be brief and collaborative, ask before assuming, and keep content
separated from presentation.

Reusable workflows live in `.cursor/skills/`:

- **`add-timeline-entry`** — adds a new timeline entry collaboratively (gathers
  missing details, writes the `.md` file).
