import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { TimelineEntryData } from "@lib/timeline-data";
import { ChevronDown, ExternalIcon, TypeIcon } from "./icons";

interface TimelineNodeProps {
  entry: TimelineEntryData;
  expanded: boolean;
  onToggle: (id: string) => void;
  isLast: boolean;
  /**
   * How a newly-entering node animates in. "slide" is the default (fade + rise);
   * "fade" is an in-place crossfade used for Personal <-> Professional swaps,
   * where there are no shared entries to anchor a reflow.
   */
  enterMode?: "slide" | "fade";
}

const TYPE_LABEL: Record<TimelineEntryData["type"], string> = {
  role: "Role",
  project: "Project",
  education: "Education",
};

export default function TimelineNode({
  entry,
  expanded,
  onToggle,
  isLast,
  enterMode = "slide",
}: TimelineNodeProps) {
  const reduce = useReducedMotion();
  const panelId = `tl-panel-${entry.id}`;
  const showMediaPlaceholder = entry.type === "project" && entry.media.length === 0;

  const isFade = enterMode === "fade" && !reduce;

  const initial =
    reduce || enterMode === "fade"
      ? { opacity: 0 }
      : { opacity: 0, y: 12 };

  const EASE = [0.22, 1, 0.36, 1] as const;
  const EXIT_DURATION = 0.28;

  return (
    <motion.li
      className="tl-entry"
      data-track={entry.track}
      layout={!reduce && enterMode !== "fade"}
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: EXIT_DURATION, ease: EASE } }}
      transition={{
        duration: 0.32,
        ease: EASE,
        // On a track swap, hold the entrance until the outgoing nodes have fully
        // faded out, so new entries fade in cleanly in place (no overlap/jump).
        delay: isFade ? EXIT_DURATION + 0.06 : 0,
      }}
    >
      <div className="tl-date" aria-hidden="true">
        {entry.displayDate}
      </div>

      <div className="tl-rail">
        <button
          type="button"
          className="tl-node"
          data-expanded={expanded}
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => onToggle(entry.id)}
          title={`${entry.title} - ${entry.displayDate}`}
        >
          {entry.nodeImage ? (
            <img src={entry.nodeImage} alt="" />
          ) : (
            <TypeIcon type={entry.type} />
          )}
        </button>
        {!isLast && <span className="tl-connector" aria-hidden="true" />}
      </div>

      <div className="tl-body">
        <button
          type="button"
          className="tl-head"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => onToggle(entry.id)}
        >
          <span className="tl-kicker">
            <span className="tl-kicker__badge">{TYPE_LABEL[entry.type]}</span>
          </span>
          <span style={{ flex: 1 }}>
            <span className="tl-date--inline tl-date">{entry.displayDate}</span>
            <span className="tl-title">{entry.title}</span>
            <span className="tl-summary">{entry.summary}</span>
          </span>
          <motion.span
            className="tl-chevron"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <ChevronDown />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              className="tl-reveal"
              key="reveal"
              initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tl-reveal__inner">
                <div
                  className="tl-prose"
                  dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}
                />

                {entry.media.length > 0 && (
                  <div className="tl-media">
                    {entry.media.map((m) => (
                      <img
                        key={m.src}
                        src={m.src}
                        alt={m.alt}
                        loading="lazy"
                        style={m.width ? { width: `${m.width}%` } : undefined}
                      />
                    ))}
                  </div>
                )}

                {showMediaPlaceholder && (
                  <div className="tl-media">
                    <div className="placeholder tl-media__slot">
                      <span>screenshot / GIF</span>
                    </div>
                  </div>
                )}

                {entry.links.length > 0 && (
                  <div className="tl-links">
                    {entry.links.map((l) => (
                      <a
                        key={l.label}
                        className="tl-link"
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {l.label}
                        <ExternalIcon />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}
