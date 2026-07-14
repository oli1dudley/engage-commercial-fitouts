import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogCategory } from "@/types/blog";
import { BLOG_CATEGORIES } from "@/types/blog";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: BlogCategory;
  postCount: number;
  className?: string;
}

export default function CategoryCard({ category, postCount, className }: CategoryCardProps) {
  const { name, description } = BLOG_CATEGORIES[category];

  return (
    <Link
      href={`/blog/category/${category}`}
      className={cn(
        "group flex flex-col gap-3 rounded-[16px] bg-white border border-light-grey/60 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className
      )}
      aria-label={`Browse ${name} articles`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-navy group-hover:text-brand transition-colors leading-snug">
          {name}
        </h3>
        <span className="shrink-0 text-[11px] font-semibold text-white bg-navy rounded-full px-2 py-0.5">
          {postCount}
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

      <div className="flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
        Browse articles
        <ArrowRight className="size-3.5" />
      </div>
    </Link>
  );
}
