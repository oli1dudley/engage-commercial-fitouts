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
  variant?: "default" | "light";
  className?: string;
}

const LG_COLS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export default function ProcessSteps({
  steps,
  cta,
  variant = "default",
  className,
}: ProcessStepsProps) {
  const isLight = variant === "light";
  const lgCols = LG_COLS[Math.min(steps.length, 5)] ?? "lg:grid-cols-5";

  return (
    <div className={cn("flex flex-col items-center gap-10", className)}>
      <ol className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6 w-full", lgCols)} role="list">
        {steps.map((step, i) => (
          <li key={i} className="relative flex flex-col items-center text-center gap-3">
            {/* Connector line (desktop only) */}
            {i < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-brand/20"
                aria-hidden
              />
            )}

            {/* Step number */}
            <div
              className={cn(
                "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold shadow-[0_0_0_4px_white]",
                isLight
                  ? "bg-white text-navy"
                  : "bg-brand text-white"
              )}
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1">
              <h3
                className={cn(
                  "text-sm font-semibold",
                  isLight ? "text-white" : "text-navy"
                )}
              >
                {step.title}
              </h3>
              {step.description && (
                <p
                  className={cn(
                    "text-xs leading-relaxed",
                    isLight ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {step.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {cta && (
        <Button render={<Link href={cta.href} />} variant="primary" size="lg">
          {cta.label}
          <ArrowRight className="size-4" />
        </Button>
      )}
    </div>
  );
}
