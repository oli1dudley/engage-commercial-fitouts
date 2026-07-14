"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TocHeading } from "@/types/blog";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: TocHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const links = (
    <ul className="flex flex-col gap-0.5">
      {headings.map(({ id, text, level }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={() => setOpen(false)}
            className={cn(
              "block py-1 text-sm leading-snug transition-colors hover:text-brand",
              level === 3 ? "pl-4 text-[13px]" : "pl-0",
              activeId === id ? "text-brand font-semibold" : "text-muted-foreground"
            )}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile: collapsible */}
      <nav
        className="lg:hidden rounded-[14px] border border-light-grey/60 bg-white shadow-sm overflow-hidden"
        aria-label="Table of contents"
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-navy"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span>In this article</span>
          <ChevronDown
            className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
          />
        </button>
        {open && <div className="px-5 pb-4">{links}</div>}
      </nav>

      {/* Desktop: sticky sidebar */}
      <nav
        className="hidden lg:block sticky top-24"
        aria-label="Table of contents"
      >
        <div className="rounded-[14px] border border-light-grey/60 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            In this article
          </p>
          {links}
        </div>
      </nav>
    </>
  );
}
