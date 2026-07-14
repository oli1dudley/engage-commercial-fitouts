import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllTags, getPostsByTag } from "@/lib/blog";

import StructuredData from "@/components/seo/StructuredData";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import ArticleCard from "@/components/blog/ArticleCard";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/seo.config";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const formatted = tag.replace(/-/g, " ");
  return generatePageMetadata({
    title: `${formatted} Articles | WeMoveStuff Blog`,
    description: `Browse all articles tagged "${formatted}" on the WeMoveStuff blog.`,
    path: `/blog/tag/${tag}`,
  });
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) notFound();

  const formatted = tag.replace(/-/g, " ");

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: formatted },
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="tag-heading">
        <div className="max-container container-padding flex flex-col gap-4">
          <FadeUp>
            <Button
              render={<Link href="/blog" />}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white -ml-2 mb-2"
            >
              <ArrowLeft className="size-4" />
              All articles
            </Button>
            <p className="text-xs font-semibold text-brand uppercase tracking-wider">Tag</p>
            <h1
              id="tag-heading"
              className="text-[28px] md:text-[40px] font-extrabold text-white leading-tight tracking-tight capitalize"
            >
              {formatted}
            </h1>
            <p className="text-sm text-white/45 mt-2">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Articles ─────────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="tag-articles-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader id="tag-articles-heading" headline={`Articles: ${formatted}`} />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <ArticleCard post={post} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <CTASection
        headline="Planning your move in Dubai?"
        body="Request a free, personalised quote from the WeMoveStuff team."
        primaryCTA={{ label: "Get a Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/blog/blog-cta.jpg"
      />
    </>
  );
}
