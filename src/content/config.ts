import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Timeline collection - the spine of the site.
 *
 * Each entry is one `.md` file in `src/content/timeline/`. The frontmatter
 * (below) powers the collapsed node, filtering and sorting; the Markdown body is
 * the expand-in-place reveal. Adding an entry = adding one file. No layout code.
 */
const timeline = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/timeline" }),
  schema: ({ image }) =>
    z.object({
      // Short label shown on/next to the node.
      title: z.string(),
      // Filtering happens on `track`. University counts as "professional".
      track: z.enum(["professional", "personal"]),
      // Drives icon + subtle styling only - NOT filtering.
      type: z.enum(["role", "project", "education"]),
      // ISO-ish sort key, e.g. "2024-05". Drives chronological ordering.
      dateStart: z.string(),
      // Omit for ongoing entries ("present").
      dateEnd: z.string().optional(),
      // Human-facing label rendered beside the node, e.g. "2024–present".
      displayDate: z.string(),
      // One-liner shown while collapsed.
      summary: z.string(),
      // Small visual cue in the node. Optional - falls back to a type icon.
      // Use `image()` so Astro can optimize files placed in src/, or a string
      // path for things in /public.
      nodeImage: image().optional(),
      // Media slots for the expanded reveal (you'll supply the files).
      media: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            kind: z.enum(["image", "gif", "video"]).default("image"),
            /** Display width as a % of the media container (default 100). */
            width: z.number().min(1).max(100).optional(),
          })
        )
        .default([]),
      // External / download links, e.g. dissertation PDF, GitHub, live demo.
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
          })
        )
        .default([]),
      // Opt-in extra arcade flourish on this specific node.
      accent: z.boolean().default(false),
      // Manual override if two entries share a date and you want a fixed order.
      order: z.number().optional(),
    }),
});

export const collections = { timeline };
