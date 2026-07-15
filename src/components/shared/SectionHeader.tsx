import { cn } from "@/lib/utils";
import { unbreakable } from "@/lib/text";

interface SectionHeaderProps {
  headline: string;
  eyebrow?: string;
  subheadline?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
}

export default function SectionHeader({
  headline,
  eyebrow,
  subheadline,
  align = "center",
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-gold" aria-hidden />
          {eyebrow}
          {align === "center" && <span className="inline-block w-6 h-px bg-gold" aria-hidden />}
        </p>
      )}
      <h2
        id={id}
        className="text-[26px] md:text-[34px] lg:text-[42px] font-semibold text-cream leading-[1.12] tracking-tight text-balance"
      >
        {unbreakable(headline)}
      </h2>
      {subheadline && (
        <p className="text-base md:text-lg text-stone leading-relaxed max-w-2xl">
          {subheadline}
        </p>
      )}
    </div>
  );
}
