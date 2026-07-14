import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  extractHeadings,
} from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/types/blog";

import StructuredData from "@/components/seo/StructuredData";
import CTASection from "@/components/shared/CTASection";
import ArticleBody from "@/components/blog/ArticleBody";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorBox from "@/components/blog/AuthorBox";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/seo.config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.seo?.title ?? `${post.title} | WeMoveStuff Blog`,
    description: post.seo?.description ?? post.excerpt,
    path: `/blog/${slug}`,
    ogImage: post.featuredImage,
  });
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post);
  const related = getRelatedPosts(post, 3);
  const categoryLabel = BLOG_CATEGORIES[post.category]?.name ?? post.category;

  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title },
        ])}
      />
      <StructuredData
        data={articleSchema({
          title: post.seo?.title ?? post.title,
          description: post.seo?.description ?? post.excerpt,
          url: `/blog/${post.slug}`,
          publishedDate: post.publishedDate,
          modifiedDate: post.updatedDate,
          imageUrl: post.featuredImage,
          authorName: post.author.name,
        })}
      />

      {/* Reading progress bar */}
      <ReadingProgressBar />

      {/* ── Article Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="article-title">
        <div className="max-container container-padding flex flex-col gap-5">
          {/* Back link */}
          <FadeUp>
            <Button
              render={<Link href="/blog" />}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white -ml-2"
            >
              <ArrowLeft className="size-4" />
              Back to blog
            </Button>
          </FadeUp>

          <FadeUp delay={0.05}>
            {/* Category */}
            <Link
              href={`/blog/category/${post.category}`}
              className="inline-flex items-center rounded-full bg-brand/20 border border-brand/30 px-2.5 py-0.5 text-[11px] font-semibold text-brand uppercase tracking-wide mb-4 hover:bg-brand/30 transition-colors"
            >
              {categoryLabel}
            </Link>

            <h1
              id="article-title"
              className="text-[28px] md:text-[40px] font-extrabold text-white leading-tight tracking-tight max-w-3xl"
            >
              {post.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/55">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(post.publishedDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readingTime} min read
              </span>
              <span>{post.author.name}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Article Body + Sidebar ────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">
            {/* Main content */}
            <FadeUp>
              {/* Mobile TOC */}
              {headings.length > 0 && (
                <div className="mb-8">
                  <TableOfContents headings={headings} />
                </div>
              )}

              <ArticleBody blocks={post.content} />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-light-grey/60 flex flex-wrap items-center gap-2">
                  <Tag className="size-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="inline-flex items-center rounded-full bg-[#F7F9FC] border border-light-grey/60 px-3 py-1 text-xs font-medium text-navy hover:bg-brand/10 hover:text-brand hover:border-brand/20 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Author box */}
              <div className="mt-8">
                <AuthorBox author={post.author} />
              </div>
            </FadeUp>

            {/* Desktop sidebar */}
            <div className="hidden lg:block">
              {headings.length > 0 && (
                <TableOfContents headings={headings} />
              )}

              {/* Related service CTA */}
              {post.relatedService && (
                <div className="mt-5 rounded-[14px] bg-navy text-white p-5 flex flex-col gap-3 sticky top-24">
                  <p className="text-sm font-semibold text-white/60 uppercase tracking-wide">
                    Need help moving?
                  </p>
                  <p className="text-base font-bold leading-snug">
                    Get a free quote from the WeMoveStuff team.
                  </p>
                  <Button render={<Link href="/quote" />} variant="primary" size="sm">
                    Get a Free Quote
                  </Button>
                  <Button
                    render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                    variant="whatsapp"
                    size="sm"
                  >
                    WhatsApp Us
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Articles ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#F7F9FC] section-padding">
          <div className="max-container container-padding">
            <FadeUp>
              <RelatedArticles posts={related} />
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <CTASection
        headline="Planning your move in Dubai?"
        body="Request a free, personalised quote from the WeMoveStuff team. We respond the same day."
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/blog/article-cta.jpg"
      />
    </>
  );
}
