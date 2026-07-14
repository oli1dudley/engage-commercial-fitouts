import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { BLOG_CATEGORIES } from "@/types/blog";
import type { BlogPostSummary } from "@/types/blog";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  post: BlogPostSummary;
  className?: string;
  size?: "default" | "compact";
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ArticleCard({ post, className, size = "default" }: ArticleCardProps) {
  const categoryLabel = BLOG_CATEGORIES[post.category]?.name ?? post.category;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-[16px] bg-white border border-light-grey/60 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-all duration-250 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className
      )}
      aria-label={post.title}
    >
      {/* Content */}
      <div className={cn("flex flex-col gap-3 flex-1", size === "compact" ? "p-5" : "p-6")}>
        {/* Category badge */}
        <span className="inline-flex self-start items-center rounded-full bg-brand/8 px-2.5 py-0.5 text-[11px] font-semibold text-brand uppercase tracking-wide">
          {categoryLabel}
        </span>

        <h3 className={cn("font-bold text-navy leading-snug group-hover:text-brand transition-colors", size === "compact" ? "text-sm" : "text-base")}>
          {post.title}
        </h3>

        {size !== "compact" && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1 border-t border-light-grey/60 mt-auto">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" />
            {formatDate(post.publishedDate)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {post.readingTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
