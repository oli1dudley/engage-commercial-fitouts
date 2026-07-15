import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  index?: number;
  title: string;
  description: string;
  href: string;
  cta?: string;
  className?: string;
}

export default function ServiceCard({
  index,
  title,
  description,
  href,
  cta = "Explore this service",
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-4 rounded-[6px] p-6 lg:p-8 bg-ink-panel border border-line transition-colors duration-200 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
        className
      )}
    >
      {index !== undefined && (
        <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h3 className="text-lg lg:text-xl font-semibold text-cream leading-snug">
        {title}
      </h3>
      <p className="text-sm text-stone leading-relaxed flex-1">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-bright mt-1">
        {cta}
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
