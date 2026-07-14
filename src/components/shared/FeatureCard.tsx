import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "navy";
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: FeatureCardProps) {
  const isNavy = variant === "navy";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-[16px] p-6 transition-all duration-200 hover:-translate-y-1",
        isNavy
          ? "bg-navy/5 hover:bg-navy/8 border border-navy/10"
          : "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-light-grey/60",
        className
      )}
    >
      <div
        className={cn(
          "flex size-11 items-center justify-center rounded-[12px]",
          isNavy ? "bg-navy/10" : "bg-brand/10"
        )}
      >
        <Icon className={cn("size-5", isNavy ? "text-navy" : "text-brand")} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className={cn("text-base font-semibold", isNavy ? "text-navy" : "text-dark-text")}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
