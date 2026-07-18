import { getCollection } from "astro:content";
import { byDate, type TimelineEntryData } from "./timeline-data";

export type { TimelineEntryData, Track, EntryType } from "./timeline-data";
export { byDate } from "./timeline-data";

/**
 * Loads every timeline entry and returns plain serializable objects, including
 * the body compiled to an HTML string. The React island stays a pure
 * presentation/interaction layer with no access to `astro:content`.
 */
export async function loadTimelineEntries(): Promise<TimelineEntryData[]> {
  const entries = await getCollection("timeline");

  const data = entries.map((entry) => {
    // Markdown bodies are pre-compiled by the content layer into an HTML string,
    // so no Container/renderer machinery is needed.
    const bodyHtml = entry.rendered?.html ?? "";
    const d = entry.data;
    return {
        id: entry.id,
        title: d.title,
        track: d.track,
        type: d.type,
        dateStart: d.dateStart,
        dateEnd: d.dateEnd,
        displayDate: d.displayDate,
        summary: d.summary,
        nodeImage:
          typeof d.nodeImage === "string" ? d.nodeImage : d.nodeImage?.src,
        media: d.media.map((m) => ({
          src: typeof m.src === "string" ? m.src : m.src.src,
          alt: m.alt,
          kind: m.kind,
          width: m.width,
        })),
        links: d.links,
        accent: d.accent,
        order: d.order,
        bodyHtml,
      } satisfies TimelineEntryData;
  });

  // Default base ordering: newest first. The island can re-sort live.
  return data.sort(byDate("newest"));
}
