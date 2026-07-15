import { cn } from "@/lib/utils";
import Link from "next/link";

interface CapabilityDetail {
  label: string;
  value: string;
}

interface CapabilityCardProps {
  index?: number;
  title: string;
  details: CapabilityDetail[];
  services?: { label: string; href: string }[];
  className?: string;
}

/**
 * Capability category card for the Projects page. Presents typical starting
 * condition, scope and outcome — structured so genuine case studies can
 * replace these categories later.
 */
export default function CapabilityCard({
  index,
  title,
  details,
  services,
  className,
}: CapabilityCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-[6px] p-6 lg:p-8 bg-ink-panel border border-line transition-colors duration-200 hover:border-gold/40",
        className
      )}
    >
      <div className="flex items-baseline gap-4">
        {index !== undefined && (
          <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gold-bright" aria-hidden>
            {String(index).padStart(2, "0")}
          </span>
        )}
        <h3 className="text-lg font-semibold text-cream leading-snug">{title}</h3>
      </div>

      <dl className="flex flex-col divide-y divide-line">
        {details.map((detail) => (
          <div key={detail.label} className="py-3 grid grid-cols-[130px_1fr] gap-3">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-cream/40 pt-0.5">
              {detail.label}
            </dt>
            <dd className="text-sm text-stone leading-relaxed">{detail.value}</dd>
          </div>
        ))}
      </dl>

      {services && services.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="text-xs font-medium text-gold-bright border border-gold/30 rounded-[2px] px-2.5 py-1.5 hover:bg-gold/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
