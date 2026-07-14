import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_CATEGORIES } from "@/types/blog";
import type { BlogPostSummary } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ArticleHeroProps {
  post: BlogPostSummary;
  className?: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleHero({ post, className }: ArticleHeroProps) {
  const categoryLabel = BLOG_CATEGORIES[post.category]?.name ?? post.category;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] bg-navy min-h-[400px] flex flex-col justify-end",
        className
      )}
    >
      {/* Background image */}
      <Image
        src="/images/blog/featured-bg.avif"
        alt=""
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 1200px"
        priority
        aria-hidden
      />

      {/* Gradient overlay — sits above image, below content */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent pointer-events-none"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-brand/20 border border-brand/30 px-2.5 py-0.5 text-[11px] font-semibold text-brand uppercase tracking-wide">
            Featured
          </span>
          <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/70 uppercase tracking-wide">
            {categoryLabel}
          </span>
        </div>

        <h2 className="text-xl md:text-3xl font-extrabold text-white leading-tight tracking-tight max-w-2xl">
          {post.title}
        </h2>

        <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-xl line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 text-xs text-white/55">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {formatDate(post.publishedDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readingTime} min read
            </span>
          </div>

          <Button
            render={<Link href={`/blog/${post.slug}`} />}
            variant="primary"
            size="sm"
          >
            Read Article
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
