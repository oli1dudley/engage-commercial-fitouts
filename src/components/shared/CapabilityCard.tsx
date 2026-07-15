"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type CapabilitySymbol =
  | "shell"
  | "refurbishment"
  | "resale"
  | "leasing"
  | "business"
  | "reconfiguration"
  | "furniture"
  | "technical";

interface CapabilityDetail {
  label: string;
  value: string;
}

interface CapabilityCardProps {
  index?: number;
  title: string;
  symbol?: CapabilitySymbol;
  /** One-line summaries shown in the collapsed mobile state */
  summary?: { start: string; outcome: string };
  details: CapabilityDetail[];
  services?: { label: string; href: string }[];
  className?: string;
}

const LINE = "rgba(246,243,237,0.35)";
const FAINT = "rgba(246,243,237,0.18)";
const GOLD = "#B79A62";

/** Restrained per-capability line symbols drawn from plan language */
function Symbol({ symbol }: { symbol: CapabilitySymbol }) {
  const common = { fill: "none", strokeWidth: 1.5 } as const;
  return (
    <svg viewBox="0 0 56 40" className="w-14 h-auto shrink-0" aria-hidden focusable="false">
      {symbol === "shell" && (
        <>
          <rect x={4} y={4} width={48} height={32} stroke={LINE} strokeDasharray="5 5" {...common} />
          <line x1={4} y1={20} x2={18} y2={20} stroke={FAINT} strokeWidth={1} />
        </>
      )}
      {symbol === "refurbishment" && (
        <>
          <rect x={4} y={4} width={48} height={32} stroke={LINE} {...common} />
          <line x1={22} y1={4} x2={22} y2={36} stroke={FAINT} strokeWidth={1} />
          <rect x={30} y={10} width={16} height={20} stroke={GOLD} {...common} />
        </>
      )}
      {symbol === "resale" && (
        <>
          <rect x={4} y={4} width={30} height={32} stroke={LINE} {...common} />
          <rect x={40} y={8} width={12} height={24} stroke={GOLD} fill="rgba(183,154,98,0.16)" strokeWidth={1.5} />
          <path d="M34 20 h4 m-2 -3 l3 3 l-3 3" stroke={GOLD} {...common} />
        </>
      )}
      {symbol === "leasing" && (
        <>
          <rect x={4} y={4} width={48} height={32} stroke={LINE} {...common} />
          <rect x={10} y={10} width={16} height={9} stroke={FAINT} strokeWidth={1} fill="none" />
          <rect x={10} y={23} width={16} height={9} stroke={FAINT} strokeWidth={1} fill="none" />
          <rect x={32} y={10} width={14} height={22} stroke={GOLD} {...common} />
        </>
      )}
      {symbol === "business" && (
        <>
          <rect x={6} y={6} width={14} height={7} stroke={LINE} {...common} />
          <rect x={6} y={18} width={14} height={7} stroke={LINE} {...common} />
          <rect x={6} y={30} width={14} height={6} stroke={FAINT} strokeWidth={1} fill="none" />
          <ellipse cx={40} cy={20} rx={11} ry={7} stroke={GOLD} {...common} />
        </>
      )}
      {symbol === "reconfiguration" && (
        <>
          <rect x={4} y={4} width={48} height={32} stroke={LINE} {...common} />
          <line x1={26} y1={4} x2={26} y2={22} stroke={FAINT} strokeWidth={1} strokeDasharray="4 4" />
          <line x1={36} y1={18} x2={36} y2={36} stroke={GOLD} {...common} />
          <path d="M14 28 h8 m-3 -3 l4 3 l-4 3" stroke={GOLD} {...common} />
        </>
      )}
      {symbol === "furniture" && (
        <>
          <rect x={6} y={8} width={20} height={10} stroke={LINE} {...common} />
          <line x1={10} y1={24} x2={20} y2={24} stroke={LINE} {...common} />
          <rect x={34} y={10} width={16} height={20} rx={3} stroke={GOLD} {...common} />
        </>
      )}
      {symbol === "technical" && (
        <>
          <path d="M6 28 H26 V12 H50" stroke={LINE} strokeWidth={2.5} fill="none" />
          <circle cx={38} cy={26} r={4} stroke={GOLD} {...common} />
          <circle cx={48} cy={26} r={4} stroke={GOLD} {...common} />
        </>
      )}
    </svg>
  );
}

/**
 * Capability category card for the Projects page. Desktop shows the full
 * record with a plan-language symbol; mobile collapses to a two-line summary
 * that expands on demand (multiple cards may stay open). Structured so
 * genuine case studies can replace these categories later.
 */
export default function CapabilityCard({
  index,
  title,
  symbol,
  summary,
  details,
  services,
  className,
}: CapabilityCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = `capability-${index ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const heading = (
    <span className="flex items-baseline gap-4 min-w-0">
      {index !== undefined && (
        <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gold-bright shrink-0" aria-hidden>
          {String(index).padStart(2, "0")}
        </span>
      )}
      <span className="text-lg font-semibold text-cream leading-snug">{title}</span>
    </span>
  );

  return (
    <article
      className={cn(
        "flex flex-col rounded-[6px] bg-ink-panel border border-line transition-colors duration-200 hover:border-gold/40 overflow-hidden",
        className
      )}
    >
      {/* Desktop header — always expanded, no interaction */}
      <div className="hidden md:flex items-start justify-between gap-4 p-6 lg:p-7 pb-0 lg:pb-0">
        {heading}
        {symbol && <Symbol symbol={symbol} />}
      </div>

      {/* Mobile header — accessible expand toggle */}
      <h3 className="m-0 md:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-3 p-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-inset"
        >
          <span className="flex flex-col gap-2 min-w-0">
            {heading}
            {!open && summary && (
              <span className="flex flex-col gap-1">
                <span className="text-[13px] text-stone leading-snug">
                  <span className="text-cream/45 uppercase text-[10px] tracking-[0.14em] font-semibold mr-2">From</span>
                  {summary.start}
                </span>
                <span className="text-[13px] text-stone leading-snug">
                  <span className="text-cream/45 uppercase text-[10px] tracking-[0.14em] font-semibold mr-2">To</span>
                  {summary.outcome}
                </span>
              </span>
            )}
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-cream/50 shrink-0 mt-1.5 transition-transform duration-200 motion-reduce:transition-none",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </button>
      </h3>

      {/* Full record — always visible on desktop, expandable on mobile */}
      <div
        id={panelId}
        className={cn("px-5 pb-5 md:px-6 lg:px-7 md:pb-6 lg:pb-7 md:pt-4", !open && "hidden md:block")}
      >
        <dl className="flex flex-col divide-y divide-line m-0">
          {details.map((detail) => (
            <div key={detail.label} className="py-3 grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-3">
              <dt className="flex items-start gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-gold-bright/80 pt-0.5">
                <span className="mt-[7px] inline-block w-2.5 h-px bg-gold shrink-0" aria-hidden />
                {detail.label}
              </dt>
              <dd className="text-sm text-cream/80 leading-relaxed m-0">{detail.value}</dd>
            </div>
          ))}
        </dl>

        {services && services.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-xs font-medium text-gold-bright border border-gold/30 rounded-[2px] px-2.5 py-1.5 hover:bg-gold/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {service.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
