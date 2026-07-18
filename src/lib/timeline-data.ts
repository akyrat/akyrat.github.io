/**
 * Client-safe timeline types and pure helpers. No `astro:content` imports here,
 * so this module is safe to bundle into the React island. The server-only
 * loader (./timeline.ts) builds objects of this shape.
 */
export type Track = "professional" | "personal";
export type EntryType = "role" | "project" | "education";

export interface TimelineEntryData {
  id: string;
  title: string;
  track: Track;
  type: EntryType;
  dateStart: string;
  dateEnd?: string;
  displayDate: string;
  summary: string;
  nodeImage?: string;
  media: { src: string; alt: string; kind: "image" | "gif" | "video"; width?: number }[];
  links: { label: string; href: string }[];
  accent: boolean;
  order?: number;
  /** Pre-rendered MDX body for the expand-in-place reveal. */
  bodyHtml: string;
}

export function byDate(dir: "newest" | "oldest") {
  return (a: TimelineEntryData, b: TimelineEntryData) => {
    const cmp = a.dateStart.localeCompare(b.dateStart);
    const primary = dir === "newest" ? -cmp : cmp;
    if (primary !== 0) return primary;
    // Tie-break with explicit order if provided.
    return (a.order ?? 0) - (b.order ?? 0);
  };
}
