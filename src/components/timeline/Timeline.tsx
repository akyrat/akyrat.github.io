import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import type { TimelineEntryData } from "@lib/timeline-data";
import { byDate } from "@lib/timeline-data";
import FilterTabs, { type Filter, type SortDir } from "./FilterTabs";
import TimelineNode from "./TimelineNode";
import "./timeline.css";

interface TimelineProps {
  entries: TimelineEntryData[];
}

export default function Timeline({ entries }: TimelineProps) {
  const [filter, setFilter] = useState<Filter>("unified");
  const [sortDir, setSortDir] = useState<SortDir>("newest");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visible = useMemo(() => {
    const filtered =
      filter === "unified"
        ? entries
        : entries.filter((e) => e.track === filter);
    return [...filtered].sort(byDate(sortDir));
  }, [entries, filter, sortDir]);

  const toggle = (id: string) =>
    setExpandedId((cur) => (cur === id ? null : id));

  // Detect the kind of filter change so newly-entering nodes can animate
  // differently. A Personal <-> Professional swap (neither side is "unified")
  // has no shared entries, so we fade new entries in place instead of sliding
  // them up. Anything involving "unified" keeps the original slide-in.
  const prevFilter = useRef<Filter>(filter);
  const isTrackSwap =
    prevFilter.current !== "unified" &&
    filter !== "unified" &&
    prevFilter.current !== filter;
  const enterMode: "slide" | "fade" = isTrackSwap ? "fade" : "slide";

  useEffect(() => {
    prevFilter.current = filter;
  }, [filter]);

  return (
    <div className="timeline" data-sort={sortDir}>
      <FilterTabs
        filter={filter}
        sortDir={sortDir}
        onFilter={setFilter}
        onToggleSort={() =>
          setSortDir((d) => (d === "newest" ? "oldest" : "newest"))
        }
      />

      <LayoutGroup>
        <ul className="tl-list">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((entry, i) => (
              <TimelineNode
                key={entry.id}
                entry={entry}
                expanded={expandedId === entry.id}
                onToggle={toggle}
                isLast={i === visible.length - 1}
                enterMode={enterMode}
              />
            ))}
          </AnimatePresence>
        </ul>
      </LayoutGroup>
    </div>
  );
}
