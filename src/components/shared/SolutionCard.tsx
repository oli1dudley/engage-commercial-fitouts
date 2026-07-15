import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SolutionMark = "investor" | "occupier";

interface SolutionCardProps {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];
  href: string;
  cta: string;
  /** Restrained line symbol differentiating the two commercial routes */
  mark?: SolutionMark;
  /** Short label rendered beside the mark, e.g. "Market-ready asset" */
  markLabel?: string;
  className?: string;
}

/** Asset/property-oriented line symbol: floor plate with a gold-ready zone */
function InvestorMark() {
  return (
    <svg viewBox="0 0 48 34" className="w-12 h-auto" aria-hidden focusable="false">
      <rect x="1.5" y="1.5" width="45" height="31" fill="none" stroke="rgba(246,243,237,0.35)" strokeWidth="1.5" />
      <line x1="1.5" y1="17" x2="20" y2="17" stroke="rgba(246,243,237,0.2)" strokeWidth="1" />
      <rect x="28" y="6" width="13" height="22" fill="rgba(183,154,98,0.16)" stroke="#B79A62" strokeWidth="1.5" />
    </svg>
  );
}

/** Workplace/team-oriented line symbol: desks around a gold meeting table */
function OccupierMark() {
  return (
    <svg viewBox="0 0 48 34" className="w-12 h-auto" aria-hidden focusable="false">
      <rect x="3" y="4" width="12" height="7" fill="none" stroke="rgba(246,243,237,0.35)" strokeWidth="1.5" />
      <rect x="3" y="16" width="12" height="7" fill="none" stroke="rgba(246,243,237,0.35)" strokeWidth="1.5" />
      <rect x="3" y="28" width="12" height="4" fill="none" stroke="rgba(246,243,237,0.2)" strokeWidth="1" />
      <ellipse cx="33" cy="17" rx="11" ry="7" fill="none" stroke="#B79A62" strokeWidth="1.5" />
      <line x1="26" y1="4" x2="31" y2="4" stroke="rgba(246,243,237,0.35)" strokeWidth="1.5" />
      <line x1="35" y1="4" x2="40" y2="4" stroke="rgba(246,243,237,0.35)" strokeWidth="1.5" />
      <line x1="26" y1="30" x2="31" y2="30" stroke="rgba(246,243,237,0.35)" strokeWidth="1.5" />
      <line x1="35" y1="30" x2="40" y2="30" stroke="rgba(246,243,237,0.35)" strokeWidth="1.5" />
    </svg>
  );
}

export default function SolutionCard({
  eyebrow,
  title,
  description,
  points,
  href,
  cta,
  mark,
  markLabel,
  className,
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 sm:gap-5 rounded-[6px] p-5 sm:p-7 lg:p-9 bg-ink-panel border border-line overflow-hidden transition-colors duration-200 hover:border-gold/50",
        className
      )}
    >
      {/* Gold corner accent */}
      <span className="absolute top-0 left-0 w-14 h-px bg-gold" aria-hidden />
      <span className="absolute top-0 left-0 w-px h-14 bg-gold" aria-hidden />

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          {eyebrow && <p className="eyebrow m-0">{eyebrow}</p>}
        </div>
        {mark && (
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            {mark === "investor" ? <InvestorMark /> : <OccupierMark />}
            {markLabel && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/40">
                {markLabel}
              </span>
            )}
          </div>
        )}
      </div>

      <h3 className="text-xl lg:text-2xl font-semibold text-cream leading-snug m-0 -mt-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-stone leading-relaxed m-0">{description}</p>

      {points && points.length > 0 && (
        <ul className="flex flex-col gap-2.5 mt-1 m-0 p-0">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-cream/75 list-none">
              <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
              {point}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold-bright mt-auto pt-2 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-[2px] w-fit"
      >
        {cta}
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      </Link>
    </div>
  );
}
