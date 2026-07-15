import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/types/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1">
        <li className="flex items-center gap-1">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-cream/50 hover:text-cream transition-colors"
            aria-label="Home"
          >
            <Home className="size-3.5" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="size-3.5 text-cream/25" aria-hidden />
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm text-cream/50 hover:text-cream transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gold-bright" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
