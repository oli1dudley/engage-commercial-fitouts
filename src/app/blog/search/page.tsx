"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

import { searchPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/types/blog";
import type { BlogCategory } from "@/types/blog";

import ArticleCard from "@/components/blog/ArticleCard";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "">("");

  const results = useMemo(() => {
    const base = searchPosts(query);
    if (!activeCategory) return base;
    return base.filter((p) => p.category === activeCategory);
  }, [query, activeCategory]);

  const categories = Object.entries(BLOG_CATEGORIES) as [BlogCategory, { name: string; description: string }][];

  return (
    <>
      {/* ── Search Hero ───────────────────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="search-heading">
        <div className="max-container container-padding flex flex-col gap-6">
          <FadeUp>
            <h1
              id="search-heading"
              className="text-[28px] md:text-[40px] font-extrabold text-white leading-tight tracking-tight text-center"
            >
              Search articles
            </h1>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40 pointer-events-none"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search moving tips, checklists, guides…"
                aria-label="Search articles"
                className="w-full rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 py-3 pl-12 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Filters ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-light-grey/60" aria-label="Filter by category">
        <div className="max-container container-padding py-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <button
              type="button"
              onClick={() => setActiveCategory("")}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeCategory === ""
                  ? "bg-navy text-white"
                  : "bg-[#F7F9FC] text-navy hover:bg-navy/10"
              }`}
            >
              All
            </button>
            {categories.map(([key, val]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(activeCategory === key ? "" : key)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === key
                    ? "bg-brand text-white"
                    : "bg-[#F7F9FC] text-navy hover:bg-brand/10 hover:text-brand"
                }`}
              >
                {val.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ───────────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-live="polite" aria-label="Search results">
        <div className="max-container container-padding flex flex-col gap-8">
          {/* Result count */}
          <p className="text-sm text-muted-foreground">
            {query || activeCategory
              ? `${results.length} ${results.length === 1 ? "article" : "articles"} found`
              : `${results.length} articles`}
          </p>

          {results.length > 0 ? (
            <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((post) => (
                <StaggerItem key={post.slug}>
                  <ArticleCard post={post} className="h-full" />
                </StaggerItem>
              ))}
            </StaggerGrid>
          ) : (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <p className="text-xl font-bold text-navy">No articles found</p>
              <p className="text-sm text-muted-foreground max-w-sm">
                Try a different search term or browse all articles by category.
              </p>
              <Link
                href="/blog"
                className="mt-2 text-sm font-semibold text-brand hover:underline"
              >
                ← Back to all articles
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
