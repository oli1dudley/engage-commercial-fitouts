"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScopeGroup {
  heading: string;
  /** Optional one-line framing for the group */
  note?: string;
  items: string[];
}

interface ScopeGroupsProps {
  groups: ScopeGroup[];
  /** Desktop column count */
  columns?: 2 | 3 | 4;
  className?: string;
}

const COLS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/**
 * Grouped service-scope panels. Replaces long runs of identical cards with
 * meaningful groups of compact list rows. Every group is collapsible
 * (multiple may stay open) and open by default, so the full scope is
 * visible without interaction while mobile readers can shorten the page.
 */
export default function ScopeGroups({ groups, columns = 2, className }: ScopeGroupsProps) {
  const [closed, setClosed] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className={cn("grid grid-cols-1 gap-4 items-start", COLS[columns], className)}>
      {groups.map((group, i) => {
        const open = !closed.has(i);
        const panelId = `scope-${group.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
        return (
          <section
            key={group.heading}
            className="rounded-[6px] bg-ink-panel border border-line overflow-hidden"
          >
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer hover:bg-cream/[0.03] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-inset"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-cream">{group.heading}</span>
                </span>
                <span className="flex items-center gap-2.5 shrink-0">
                  <span className="text-xs text-cream/40">{group.items.length}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-cream/50 transition-transform duration-200 motion-reduce:transition-none",
                      open && "rotate-180"
                    )}
                    aria-hidden
                  />
                </span>
              </button>
            </h3>
            <div id={panelId} hidden={!open} className="px-5 pb-5">
              {group.note && (
                <p className="text-xs text-cream/45 leading-relaxed mb-3 mt-0">{group.note}</p>
              )}
              <ul className="flex flex-col divide-y divide-line m-0 p-0">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-2.5 text-sm text-cream/80 leading-snug list-none">
                    <span className="mt-[8px] inline-block w-3.5 h-px bg-gold shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
