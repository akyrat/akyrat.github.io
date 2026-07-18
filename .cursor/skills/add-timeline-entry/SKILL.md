---
name: add-timeline-entry
description: Add a new entry to the portfolio timeline. Use when Andreas wants to add a role, project, or education item to the timeline, mentions a new timeline entry, or pastes content to turn into one.
---

# Add a timeline entry

A timeline entry is one Markdown file in `src/content/timeline/`. Adding one =
creating that file. No component changes. The schema is the source of truth:
`src/content/config.ts`.

## Workflow

1. **Collect the details** from what Andreas gave you. Map them to the fields
   below. Don't invent facts (dates, metrics, employers) — if a **required**
   field is missing or ambiguous, ask a short question. Don't block on optional
   fields; offer to add them later.
2. **Pick a filename**: `YYYY-slug.md` (e.g. `2027-acme-engineer.md`), `YYYY`
   from `dateStart`.
3. **Write the file** using the template below.
4. **Confirm briefly** and let the dev server hot-reload it.

## Required fields

| Field | Notes |
|-------|-------|
| `title` | Shown by the node, e.g. `"Software Engineer - Company"`. |
| `track` | `professional` or `personal`. Education counts as `professional`. Drives the filter tabs. |
| `type` | `role` \| `project` \| `education`. Icon + badge only. |
| `dateStart` | Sort key, `"YYYY-MM"` (e.g. `"2027-01"`). |
| `displayDate` | Human label, e.g. `"2027–present"` or `"2027"`. |
| `summary` | One line shown while collapsed. |

## Optional fields

`dateEnd` (omit if ongoing) · `links` (`{ label, href }`) · `media`
(`{ src, alt, kind }` — put files in `src/assets/timeline-content/`, path relative
to the `.md`) · `nodeImage` · `accent` (true for extra flourish) ·
`order` (tie-breaker for same `dateStart`).

## Template

```md
---
title: ""
track: "professional"
type: "role"
dateStart: "YYYY-MM"
displayDate: ""
summary: ""
links:
  - { label: "", href: "" }
---

Markdown body = the expand-in-place detail. Use bold/lists as needed.
```

## Conventions

- **Use regular hyphens (`-`), never em-dashes (`—`)** in titles and prose.
- **Attachments** (PDFs etc.): put the file in `public/`, link as `/file.pdf`.
- **Images**: optimized ones go in `src/assets/`; otherwise `public/`.
- **Node logo** (`nodeImage`): put in `src/assets/logos/`, reference relative to
  the `.md`, e.g. `"../../assets/logos/company.png"`. Omit to use the type icon.
- Keep copy tight; Andreas expands detail in later passes.
