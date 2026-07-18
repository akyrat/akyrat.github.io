import { motion } from "framer-motion";
import { SortArrow } from "./icons";

export type Filter = "unified" | "professional" | "personal";
export type SortDir = "newest" | "oldest";

const TABS: { id: Filter; label: string }[] = [
  { id: "unified", label: "Unified" },
  { id: "professional", label: "Professional" },
  { id: "personal", label: "Personal" },
];

interface FilterTabsProps {
  filter: Filter;
  sortDir: SortDir;
  onFilter: (f: Filter) => void;
  onToggleSort: () => void;
}

export default function FilterTabs({
  filter,
  sortDir,
  onFilter,
  onToggleSort,
}: FilterTabsProps) {
  return (
    <div className="tl-controls">
      <div className="tl-tabs" role="tablist" aria-label="Filter timeline">
        {TABS.map((tab) => {
          const active = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              data-active={active}
              className="tl-tab"
              onClick={() => onFilter(tab.id)}
            >
              {active && (
                <motion.span
                  layoutId="tl-tab-pill"
                  className="tl-tab__pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="tl-sort"
        data-dir={sortDir}
        onClick={onToggleSort}
        aria-label={`Sort ${sortDir === "newest" ? "newest first" : "oldest first"}. Click to toggle.`}
      >
        <SortArrow />
        {sortDir === "newest" ? "Newest first" : "Oldest first"}
      </button>
    </div>
  );
}
