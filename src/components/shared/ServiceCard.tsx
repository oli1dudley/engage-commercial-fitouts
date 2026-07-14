import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  size?: "default" | "large";
  className?: string;
  ctaLabel?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
  imageAlt,
  size = "default",
  className,
  ctaLabel,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[16px] bg-white border border-light-grey/60 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-all duration-250 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className
      )}
      aria-label={`Learn more about ${title}`}
    >
      {/* Image — only rendered when an image src is provided */}
      {image && (
        <div className={cn("overflow-hidden", size === "large" ? "aspect-video" : "aspect-[4/3]")}>
          <Image
            src={image}
            alt={imageAlt ?? title}
            width={size === "large" ? 800 : 600}
            height={size === "large" ? 450 : 450}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className={cn("flex flex-col gap-3 p-6", size === "large" && "p-8")}>
        <h3
          className={cn(
            "font-bold text-navy group-hover:text-brand transition-colors",
            size === "large" ? "text-xl" : "text-base"
          )}
        >
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
        <div className="flex items-center gap-1.5 text-brand text-sm font-semibold mt-1 group-hover:gap-2.5 transition-all">
          {ctaLabel ?? "Learn More"}
          <ArrowRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}
