import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SolutionCardProps {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];
  href: string;
  cta: string;
  className?: string;
}

export default function SolutionCard({
  eyebrow,
  title,
  description,
  points,
  href,
  cta,
  className,
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-5 rounded-[6px] p-7 lg:p-10 bg-ink-panel border border-line overflow-hidden transition-colors duration-200 hover:border-gold/50",
        className
      )}
    >
      {/* Gold corner accent */}
      <span className="absolute top-0 left-0 w-14 h-px bg-gold" aria-hidden />
      <span className="absolute top-0 left-0 w-px h-14 bg-gold" aria-hidden />

      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3 className="text-xl lg:text-2xl font-semibold text-cream leading-snug">
        {title}
      </h3>
      <p className="text-sm md:text-base text-stone leading-relaxed">{description}</p>

      {points && points.length > 0 && (
        <ul className="flex flex-col gap-2.5 mt-1">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-cream/75">
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
