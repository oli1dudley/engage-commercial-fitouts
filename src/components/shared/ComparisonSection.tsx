import { cn } from "@/lib/utils";

interface ComparisonColumn {
  heading: string;
  eyebrow?: string;
  points: string[];
}

interface ComparisonSectionProps {
  left: ComparisonColumn;
  right: ComparisonColumn;
  className?: string;
}

/**
 * Side-by-side comparison of two project approaches
 * (e.g. investor-led vs occupier-led delivery).
 */
export default function ComparisonSection({ left, right, className }: ComparisonSectionProps) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-6", className)}>
      {[left, right].map((column, i) => (
        <div
          key={column.heading}
          className={cn(
            "flex flex-col gap-6 rounded-[6px] p-7 lg:p-10 border",
            i === 0
              ? "bg-ink-panel border-gold/35"
              : "bg-ink-panel border-line"
          )}
        >
          <div className="flex flex-col gap-2">
            {column.eyebrow && <p className="eyebrow">{column.eyebrow}</p>}
            <h3 className="text-lg lg:text-xl font-semibold text-cream">{column.heading}</h3>
          </div>
          <ul className="flex flex-col divide-y divide-line">
            {column.points.map((point) => (
              <li key={point} className="flex items-start gap-3 py-3.5 text-sm text-cream/75 leading-relaxed">
                <span className="mt-[9px] inline-block w-4 h-px bg-gold shrink-0" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
