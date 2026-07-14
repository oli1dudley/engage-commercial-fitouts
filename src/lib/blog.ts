import type { BlogPost, BlogPostSummary, BlogCategory, TocHeading } from "@/types/blog";
import { BLOG_POSTS as CORE_POSTS } from "@/data/blog-posts";
import { BLOG_POSTS as BATCH2_POSTS } from "@/data/blog-posts-batch2";
import { BLOG_POSTS as BATCH3_POSTS } from "@/data/blog-posts-batch3";

const BLOG_POSTS: BlogPost[] = [...CORE_POSTS, ...BATCH2_POSTS, ...BATCH3_POSTS];

// ─── Helpers ──────────────────────────────────────────────────────────────

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function extractHeadings(post: BlogPost): TocHeading[] {
  return post.content
    .filter((b) => b.type === "h2" || b.type === "h3")
    .map((b) => ({
      id: slugifyHeading((b as { type: "h2" | "h3"; text: string }).text),
      text: (b as { type: "h2" | "h3"; text: string }).text,
      level: (b.type === "h2" ? 2 : 3) as 2 | 3,
    }));
}

export function getPostSummary(post: BlogPost): BlogPostSummary {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { content: _, ...summary } = post;
  return summary;
}

// ─── Queries ──────────────────────────────────────────────────────────────

export function getAllPosts(): BlogPostSummary[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .map(getPostSummary);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPostSummary[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): BlogPostSummary[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function searchPosts(query: string): BlogPostSummary[] {
  const q = query.toLowerCase().trim();
  if (!q) return getAllPosts();

  return getAllPosts().filter((p) => {
    return (
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      BLOG_POSTS.find((bp) => bp.slug === p.slug)?.content.some((b) => {
        if ("text" in b) return (b as { text: string }).text.toLowerCase().includes(q);
        if ("items" in b) return (b as { items: string[] }).items.some((i) => i.toLowerCase().includes(q));
        return false;
      })
    );
  });
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPostSummary[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);

  const scored = others.map((p) => {
    let score = 0;
    if (p.category === post.category) score += 3;
    post.tags.forEach((tag) => {
      if (p.tags.includes(tag)) score += 1;
    });
    if (p.relatedService === post.relatedService) score += 1;
    return { post: p, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export function getFeaturedPost(): BlogPostSummary | undefined {
  const featured = BLOG_POSTS.find((p) => p.featured);
  return featured ? getPostSummary(featured) : getPostSummary(BLOG_POSTS[0]);
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  BLOG_POSTS.forEach((p) => {
    p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1));
  });
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getAllCategories(): BlogCategory[] {
  return [...new Set(BLOG_POSTS.map((p) => p.category))];
}
