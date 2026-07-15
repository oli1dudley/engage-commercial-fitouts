import Image from "next/image";
import { cn } from "@/lib/utils";
import ArchitecturalVisual, { type ArchitecturalVariant } from "./ArchitecturalVisual";
import type { ApprovedImage } from "@/types/images";

interface ContentSplitProps {
  children: React.ReactNode;
  /** Page-specific architectural fallback drawing */
  visual?: ArchitecturalVariant;
  /** Which side the visual sits on at desktop widths */
  visualSide?: "left" | "right";
  /**
   * Approved imagery. When provided it replaces the architectural
   * visual — pass real, approved photography only.
   */
  image?: ApprovedImage;
  className?: string;
}

/**
 * Image/content split section. Renders the page-specific architectural
 * drawing until approved Engage imagery is supplied.
 */
export default function ContentSplit({
  children,
  visual = "commercial-transformation",
  visualSide = "right",
  image,
  className,
}: ContentSplitProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
        className
      )}
    >
      <div className={cn("flex flex-col gap-6", visualSide === "left" && "lg:order-2")}>
        {children}
      </div>
      <div className={cn(visualSide === "left" && "lg:order-1")}>
        {image ? (
          <figure className="m-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] border border-line">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                style={image.focal ? { objectPosition: image.focal } : undefined}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {image.illustrative && (
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/70 bg-ink/70 px-2 py-1 rounded-[2px]">
                  Illustrative
                </span>
              )}
            </div>
            {image.caption && (
              <figcaption className="mt-2 text-xs text-cream/45">{image.caption}</figcaption>
            )}
          </figure>
        ) : (
          <ArchitecturalVisual variant={visual} />
        )}
      </div>
    </div>
  );
}
