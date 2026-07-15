import { cn } from "@/lib/utils";

type Ratio = "16:9" | "4:3" | "1:1" | "3:2" | "21:9";

const ratioClasses: Record<Ratio, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "3:2": "aspect-[3/2]",
  "21:9": "aspect-[21/9]",
};

interface ImagePlaceholderProps {
  ratio?: Ratio;
  label?: string;
  className?: string;
}

/**
 * Restrained temporary image container used until approved Engage project
 * photography is available. Renders an abstract architectural treatment
 * rather than stock or fake project imagery.
 */
export default function ImagePlaceholder({
  ratio = "16:9",
  label,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[6px] bg-ink-raised border border-line grid-texture",
        ratioClasses[ratio],
        className
      )}
      role="img"
      aria-label={label ?? "Concept image placeholder"}
    >
      {/* Abstract architectural elevation */}
      <div className="absolute inset-0 flex items-end justify-center gap-[6%] px-[12%] pb-0" aria-hidden>
        <div className="w-full h-[62%] border-t border-x border-cream/15 bg-gradient-to-b from-cream/[0.05] to-transparent" />
        <div className="w-full h-[82%] border-t border-x border-gold/40 bg-gradient-to-b from-gold/[0.10] to-transparent" />
        <div className="w-full h-[48%] border-t border-x border-cream/15 bg-gradient-to-b from-cream/[0.05] to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold/50" aria-hidden />
      {label && (
        <span className="absolute top-3 left-4 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/35 select-none">
          {label}
        </span>
      )}
    </div>
  );
}
