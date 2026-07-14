import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  light?: boolean;
  id?: string;
  className?: string;
}

export default function SectionHeader({
  headline,
  subheadline,
  align = "center",
  light = false,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <h2
        id={id}
        className={cn(
          "text-[28px] md:text-[36px] lg:text-[48px] font-extrabold leading-tight tracking-tight text-balance",
          light ? "text-white" : "text-navy"
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
