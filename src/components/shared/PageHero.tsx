"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "./Breadcrumbs";
import ImagePlaceholder from "./ImagePlaceholder";
import { whatsappUrl } from "@/lib/seo.config";
import type { BreadcrumbItem } from "@/types/seo";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "whatsapp";
  external?: boolean;
}

interface PageHeroProps {
  headline: string;
  subheadline?: string;
  body?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  trustBadges?: string[];
  image?: { src: string; alt: string; priority?: boolean };
  breadcrumbs?: BreadcrumbItem[];
  variant?: "split" | "centered";
}

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function PageHero({
  headline,
  subheadline,
  body,
  primaryCTA = { label: "Get Free Quote", href: "/quote", variant: "primary" },
  secondaryCTA = {
    label: "WhatsApp Us",
    href: whatsappUrl,
    variant: "whatsapp",
    external: true,
  },
  trustBadges,
  image,
  breadcrumbs,
  variant = "split",
}: PageHeroProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(36,144,255,0.05) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className={`max-container container-padding ${variant === "centered" ? "py-10 md:py-12 lg:py-14" : "py-14 md:py-16 lg:py-20"}`}>
        <div
          className={
            variant === "split"
              ? "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              : "flex flex-col items-center text-center max-w-3xl mx-auto gap-6"
          }
        >
          {/* Text */}
          <motion.div
            className={variant === "centered" ? "flex flex-col gap-5 items-center text-center" : "flex flex-col gap-5"}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {breadcrumbs && (
              <motion.div variants={item}>
                <Breadcrumbs items={breadcrumbs} />
              </motion.div>
            )}

            <motion.h1
              className="text-[36px] md:text-[42px] lg:text-[56px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              variants={item}
            >
              {headline}
            </motion.h1>

            {subheadline && (
              <motion.p
                className="text-lg md:text-xl font-medium text-dark-text leading-snug"
                variants={item}
              >
                {subheadline}
              </motion.p>
            )}

            {body && (
              <motion.p
                className="text-base text-muted-foreground leading-relaxed max-w-lg"
                variants={item}
              >
                {body}
              </motion.p>
            )}

            {/* CTAs */}
            <motion.div
              className={variant === "centered" ? "flex flex-col sm:flex-row items-center justify-center gap-3" : "flex flex-col sm:flex-row items-start sm:items-center gap-3"}
              variants={item}
            >
              {primaryCTA && (
                <Button
                  render={
                    primaryCTA.external ? (
                      <a href={primaryCTA.href} target="_blank" rel="noopener noreferrer" />
                    ) : (
                      <Link href={primaryCTA.href} />
                    )
                  }
                  variant={primaryCTA.variant ?? "primary"}
                  size="lg"
                >
                  {primaryCTA.label}
                  <ArrowRight className="size-4" />
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  render={
                    secondaryCTA.external ? (
                      <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer" />
                    ) : (
                      <Link href={secondaryCTA.href} />
                    )
                  }
                  variant={secondaryCTA.variant ?? "whatsapp"}
                  size="lg"
                >
                  <MessageCircle className="size-4" />
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>

            {/* Trust badges */}
            {trustBadges && trustBadges.length > 0 && (
              <motion.ul
                className="flex flex-wrap gap-x-5 gap-y-2 mt-1"
                variants={item}
                aria-label="Service highlights"
              >
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-1.5 text-sm font-medium text-dark-text"
                  >
                    <Check className="size-4 text-success shrink-0" aria-hidden />
                    {badge}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          {/* Image */}
          {variant === "split" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
              className="relative w-full"
            >
              {image ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-[20px] shadow-[0_24px_64px_rgba(0,31,91,0.15)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={image.priority ?? true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  ratio="16:9"
                  label="Hero image"
                  className="shadow-[0_24px_64px_rgba(0,31,91,0.12)]"
                />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
