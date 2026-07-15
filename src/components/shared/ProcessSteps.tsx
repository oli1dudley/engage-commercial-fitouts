import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  title: string;
  description?: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  cta?: { label: string; href: string };
  /** "row" — compact numbered grid; "timeline" — large vertical stages */
  variant?: "row" | "timeline";
  className?: string;
}

const LG_COLS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
};

export default function ProcessSteps({
  steps,
  cta,
  variant = "row",
  className,
}: ProcessStepsProps) {
  if (variant === "timeline") {
    return (
      <div className={cn("flex flex-col items-center gap-12", className)}>
        <ol className="w-full max-w-3xl flex flex-col" role="list">
          {steps.map((step, i) => (
            <li key={i} className="relative flex gap-6 md:gap-10 pb-10 last:pb-0">
              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div className="absolute left-[27px] md:left-[31px] top-14 bottom-0 w-px bg-line" aria-hidden />
              )}
              <div
                className="relative z-10 flex size-14 md:size-16 shrink-0 items-center justify-center rounded-[4px] border border-gold/40 bg-ink-panel font-heading text-base md:text-lg font-semibold text-gold-bright"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="text-lg md:text-xl font-semibold text-cream">{step.title}</h3>
                {step.description && (
                  <p className="text-sm md:text-base text-stone leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        {cta && (
          <Button render={<Link href={cta.href} />} variant="primary" size="lg" className="w-full sm:w-auto">
            {cta.label}
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    );
  }

  const lgCols = LG_COLS[Math.min(steps.length, 7)] ?? "lg:grid-cols-5";

  return (
    <div className={cn("flex flex-col items-center gap-10", className)}>
      {/* Mobile: one continuous vertical journey; desktop: horizontal row */}
      <ol className={cn("grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0 sm:gap-y-8 w-full", lgCols)} role="list">
        {steps.map((step, i) => (
          <li key={i} className="relative flex sm:flex-col gap-4 sm:gap-3 pb-6 last:pb-0 sm:pb-0">
            {/* Mobile vertical connector */}
            {i < steps.length - 1 && (
              <div className="sm:hidden absolute left-[19px] top-11 bottom-0 w-px bg-line" aria-hidden />
            )}
            {/* Desktop horizontal connector */}
            {i < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-5 left-[52px] right-[-12px] h-px bg-line"
                aria-hidden
              />
            )}

            <div
              className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-[4px] border border-gold/40 bg-ink font-heading text-xs font-semibold text-gold-bright"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="flex flex-col gap-1 pt-2 sm:pt-0">
              <h3 className="text-sm font-semibold text-cream leading-snug">{step.title}</h3>
              {step.description && (
                <p className="text-xs text-stone leading-relaxed">{step.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {cta && (
        <Button render={<Link href={cta.href} />} variant="outline" size="lg" className="w-full sm:w-auto">
          {cta.label}
          <ArrowRight className="size-4" />
        </Button>
      )}
    </div>
  );
}
