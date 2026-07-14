import type { BlogPostSummary } from "@/types/blog";
import ArticleCard from "./ArticleCard";
import { cn } from "@/lib/utils";

interface RelatedArticlesProps {
  posts: BlogPostSummary[];
  className?: string;
}

export default function RelatedArticles({ posts, className }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className={cn("flex flex-col gap-6", className)} aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="text-xl md:text-2xl font-extrabold text-navy tracking-tight"
      >
        Related articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
