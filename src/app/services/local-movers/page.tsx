import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Package,
  Wrench,
  Clock,
  Building2,
  ClipboardList,
  Check,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import AreaPills from "@/components/shared/AreaPills";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import QuoteForm from "@/components/forms/QuoteForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Local Movers in Dubai | Same-City Moving | WeMoveStuff",
  description:
    "Professional local movers in Dubai for same-city relocations. WeMoveStuff provides efficient, reliable moving services across all Dubai communities.",
  path: "/services/local-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Local Movers" },
];

const FEATURES = [
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Moving services across all communities, from Dubai Marina to Dubai South.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "Quality packing materials and experienced hands to protect your belongings.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Furniture dismantling and reassembly included as required.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Moves planned around your schedule with clear communication throughout.",
  },
  {
    icon: Building2,
    title: "All Property Types",
    description: "We move apartments, villas, offices and all property types across Dubai.",
  },
  {
    icon: ClipboardList,
    title: "Full Move Management",
    description: "We handle every stage from packing to final placement at your new home.",
  },
];

const INCLUDED_ITEMS = [
  "Move Planning",
  "Packing Services",
  "Furniture Dismantling",
  "Loading & Transport",
  "Furniture Reassembly",
  "Unpacking Support",
  "Placement of Furniture",
  "TV Removal & Reinstallation Support",
];

const PROCESS_STEPS = [
  { title: "Get A Quote", description: "Tell us your move details and we'll respond quickly with a tailored quote." },
  { title: "Plan The Move", description: "We agree a clear plan covering every stage of the local move." },
  { title: "Moving Day", description: "Professional transport of all your belongings across Dubai." },
  { title: "Setup & Completion", description: "Furniture reassembled and placed at your new home." },
];

const AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JVC",
  "JLT",
  "Palm Jumeirah",
  "Dubai Hills",
  "Al Barsha",
  "Mirdif",
  "Damac Hills",
  "The Springs",
  "Silicon Oasis",
];

const REVIEWS = [
  {
    name: "Sarah K.",
    review: "Quick, reliable and professional. They made our move across Dubai totally stress-free.",
  },
  {
    name: "Ahmed M.",
    review: "The team arrived on time and moved everything carefully. Great local movers in Dubai.",
  },
  {
    name: "Claire T.",
    review: "Very efficient service. Everything was packed, moved and set up exactly as expected.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What areas do you cover for local moves in Dubai?",
    answer:
      "We cover all major communities and areas in Dubai, including Dubai Marina, Downtown Dubai, JVC, JLT, Business Bay, Al Barsha, Mirdif, Dubai Hills, Silicon Oasis and more. Contact us to confirm availability for your specific area.",
  },
  {
    question: "How much does a local move in Dubai cost?",
    answer:
      "Local moving costs depend on the volume of furniture and belongings, distance within Dubai, and any additional services such as packing. We provide a free quote tailored to your requirements.",
  },
  {
    question: "How far in advance should I book a local move?",
    answer:
      "We recommend booking at least 2–3 days in advance for smaller moves, and 5–7 days for larger homes or moves requiring full packing.",
  },
  {
    question: "Do you provide packing materials for local moves?",
    answer:
      "Yes. We supply all packing materials including boxes, bubble wrap, furniture blankets and tape. Full and partial packing services are available.",
  },
  {
    question: "Can you help with same-day local moves in Dubai?",
    answer:
      "Yes, subject to availability. Contact us directly for same-day move requests and we'll do our best to accommodate your requirements.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function LocalMoversPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Local Movers", url: "/services/local-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Local Movers Dubai",
          description:
            "Professional local movers in Dubai for same-city relocations. WeMoveStuff provides efficient, reliable moving services across all Dubai communities.",
          url: "/services/local-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero - centered variant */}
      <PageHero
        headline="Professional Local Movers In Dubai"
        subheadline="Reliable same-city moving services across all Dubai communities with full packing and setup support."
        body="WeMoveStuff provides local moving services for apartments, villas and offices across Dubai. Whether you're moving a few streets away or across the city, we handle every stage of the move."
        primaryCTA={{ label: "Get Local Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Dubai-Wide Coverage",
          "Packing Available",
          "Furniture Assembly",
          "Same-Day Availability",
          "Fully Managed Moves",
        ]}
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* Quote Form Section - navy bg */}
      <section className="bg-navy section-padding" aria-labelledby="quote-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="quote-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Get Your Local Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your local move and we&apos;ll provide a clear, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Fast response — usually within the hour",
                    "Transparent pricing, no hidden fees",
                    "Tailored to your requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                <QuoteForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Local moving made simple"
              subheadline="Everything you need for a smooth same-city move anywhere in Dubai."
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* What's Included - navy bg */}
      <section className="bg-navy section-padding" aria-labelledby="included-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="included-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  What&apos;s included in our local moving service
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Included services">
                  {INCLUDED_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button render={<Link href="/quote" />} variant="primary" size="lg" className="self-start">
                  Request My Quote
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "All Areas", sublabel: "Dubai-wide coverage" },
                  { label: "100%", sublabel: "Fully managed moves" },
                  { label: "5★", sublabel: "Customer satisfaction" },
                  { label: "Fast", sublabel: "Response & quotes" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 rounded-[16px] bg-white/10 border border-white/15 p-5"
                  >
                    <span className="text-[24px] font-extrabold text-white leading-none">{item.label}</span>
                    <span className="text-sm text-white/70">{item.sublabel}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your local move works"
              subheadline="A clear four-step process from first contact to completion."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ProcessSteps steps={PROCESS_STEPS} cta={{ label: "Book My Move", href: "/quote" }} />
          </FadeUp>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Local movers across Dubai"
              subheadline="We serve all major communities and residential areas in Dubai."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <AreaPills areas={AREAS} cta={{ label: "Check Availability", href: "/contact" }} />
          </FadeUp>
        </div>
      </section>

      {/* Reviews - navy bg */}
      <section className="relative bg-navy section-padding overflow-hidden" aria-labelledby="reviews-heading">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 10% 50%, rgba(36,144,255,0.4) 0%, transparent 60%), radial-gradient(ellipse at 90% 50%, rgba(0,31,91,0.9) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="reviews-heading"
              headline="Local moving reviews"
              subheadline="What our customers say about WeMoveStuff."
              light
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((review) => (
              <StaggerItem key={review.name}>
                <ReviewCard
                  name={review.name}
                  review={review.review}
                  rating={5}
                  variant="light"
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Local Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready for a smooth local move?"
        body="Get a free quote from WeMoveStuff and let our team handle your local move across Dubai."
        primaryCTA={{ label: "Get Local Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
