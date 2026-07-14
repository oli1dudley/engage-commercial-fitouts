import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  location?: string;
  review: string;
  rating?: number;
  variant?: "default" | "light";
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ReviewCard({
  name,
  location,
  review,
  rating = 5,
  variant = "default",
  className,
}: ReviewCardProps) {
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-[16px] p-6",
        isLight
          ? "bg-white/10 border border-white/15 backdrop-blur-sm"
          : "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-light-grey/60",
        className
      )}
    >
      {/* Stars */}
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < rating
                ? "fill-[#F59E0B] text-[#F59E0B]"
                : isLight
                ? "text-white/30"
                : "text-light-grey"
            )}
            aria-hidden
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className={cn("text-sm leading-relaxed flex-1", isLight ? "text-white/90" : "text-dark-text")}>
        &ldquo;{review}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-1 border-t border-current/10">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
            isLight ? "bg-white/20 text-white" : "bg-navy/10 text-navy"
          )}
          aria-hidden
        >
          {getInitials(name)}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className={cn("text-sm font-semibold", isLight ? "text-white" : "text-navy")}>
            {name}
          </span>
          {location && (
            <span className={cn("text-xs", isLight ? "text-white/50" : "text-muted-foreground")}>
              {location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
