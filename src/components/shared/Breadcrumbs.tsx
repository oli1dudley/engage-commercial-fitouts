import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/types/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1">
        <li className="flex items-center gap-1">
          <Link
            href="/"
            className={`flex items-center gap-1 text-sm transition-colors ${
              light
                ? "text-white/70 hover:text-white"
                : "text-muted-foreground hover:text-navy"
            }`}
            aria-label="Home"
          >
            <Home className="size-3.5" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight
              className={`size-3.5 ${light ? "text-white/40" : "text-light-grey"}`}
              aria-hidden
            />
            {item.href ? (
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                  light
                    ? "text-white/70 hover:text-white"
                    : "text-muted-foreground hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`text-sm font-medium ${
                  light ? "text-white" : "text-navy"
                }`}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
