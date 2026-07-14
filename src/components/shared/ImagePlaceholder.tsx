import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Ratio = "16:9" | "4:3" | "1:1" | "3:2";

const ratioClasses: Record<Ratio, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "3:2": "aspect-[3/2]",
};

interface ImagePlaceholderProps {
  ratio?: Ratio;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  ratio = "16:9",
  label,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-navy/10 via-brand/10 to-navy/5 flex items-center justify-center",
        ratioClasses[ratio],
        className
      )}
      role="img"
      aria-label={label ?? "Image placeholder"}
    >
      <div className="flex flex-col items-center gap-2 text-navy/30 select-none">
        <ImageIcon className="size-8 md:size-10" />
        {label && (
          <span className="text-xs font-medium text-center max-w-[140px] leading-snug">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
