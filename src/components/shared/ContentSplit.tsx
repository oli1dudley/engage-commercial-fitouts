import Image from "next/image";
import { cn } from "@/lib/utils";
import ImagePlaceholder from "./ImagePlaceholder";

interface ContentSplitProps {
  children: React.ReactNode;
  visualLabel?: string;
  /** Which side the visual sits on at desktop widths */
  visualSide?: "left" | "right";
  /**
   * Approved imagery. When provided it replaces the architectural
   * placeholder — pass real, approved photography only.
   */
  image?: { src: string; alt: string };
  className?: string;
}

/**
 * Image/content split section. Uses the restrained architectural
 * placeholder until approved Engage imagery is available.
 */
export default function ContentSplit({
  children,
  visualLabel = "Concept visual",
  visualSide = "right",
  image,
  className,
}: ContentSplitProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
        className
      )}
    >
      <div className={cn("flex flex-col gap-6", visualSide === "left" && "lg:order-2")}>
        {children}
      </div>
      <div className={cn(visualSide === "left" && "lg:order-1")}>
        {image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] border border-line">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : (
          <ImagePlaceholder ratio="4:3" label={visualLabel} />
        )}
      </div>
    </div>
  );
}
