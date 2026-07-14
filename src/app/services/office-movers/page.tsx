import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Package,
  Wrench,
  ClipboardList,
  MapPin,
  Clock,
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
  title: "Office Movers in Dubai | Office Relocation | WeMoveStuff",
  description:
    "Professional office movers in Dubai. WeMoveStuff handles office relocations of all sizes with careful packing, transport and setup to minimise downtime.",
  path: "/services/office-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Office Movers" },
];

const FEATURES = [
  {
    icon: Building2,
    title: "Office Move Specialists",
    description: "Experienced with small offices through to large commercial relocations.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "All office equipment and furniture packed securely using quality materials.",
  },
  {
    icon: Wrench,
    title: "Furniture Dismantling & Assembly",
    description: "Office furniture dismantled before the move and reassembled at your new space.",
  },
  {
    icon: ClipboardList,
    title: "Full Move Management",
    description: "We plan and coordinate every stage of the office relocation from start to finish.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Office moving services across all major business districts in Dubai.",
  },
  {
    icon: Clock,
    title: "Minimal Business Disruption",
    description: "Evening and weekend moves available to minimise impact on your business operations.",
  },
];

const INCLUDED_ITEMS = [
  "Move Planning",
  "Office Equipment Packing",
  "Furniture Dismantling",
  "Loading & Transport",
  "Furniture Reassembly",
  "IT Equipment Handling",
  "Setup at New Office",
  "Unpacking Support Available",
];

const PROCESS_STEPS = [
  { title: "Get A Quote", description: "Tell us about your office and we'll respond quickly with a tailored plan." },
  { title: "Plan The Move", description: "We agree a clear plan covering packing, transport, timing and setup." },
  { title: "Moving Day", description: "Efficient, organised transport of all office contents to your new location." },
  { title: "Setup & Completion", description: "Furniture reassembled, equipment placed and office ready to use." },
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
    name: "James L.",
    review: "The team moved our entire office over a weekend with zero disruption. Highly organised and professional.",
  },
  {
    name: "Fatima A.",
    review: "Excellent service — everything was packed, moved and reassembled exactly as planned.",
  },
  {
    name: "Marcus P.",
    review: "Our office relocation was seamless from start to finish. Would absolutely recommend WeMoveStuff.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does office moving cost in Dubai?",
    answer:
      "Office moving costs depend on the size of your office, volume of furniture and equipment, distance, and any additional services such as packing. We provide a free, no-obligation quote based on your specific requirements.",
  },
  {
    question: "Can you move our office over a weekend?",
    answer:
      "Yes. We offer weekend and out-of-hours office moves to minimise disruption to your business. Let us know when you get a quote and we'll plan accordingly.",
  },
  {
    question: "Do you handle IT equipment during the office move?",
    answer:
      "Yes. We carefully pack and transport IT equipment including computers, monitors and servers. We recommend backing up data before the move. If specialist IT relocation is required, let us know in advance.",
  },
  {
    question: "How far in advance should I book an office move in Dubai?",
    answer:
      "We recommend booking at least 5–7 days in advance for smaller offices, and 2–3 weeks ahead for larger commercial moves requiring detailed planning and coordination.",
  },
  {
    question: "Do you dismantle and reassemble office furniture?",
    answer:
      "Yes. We dismantle desks, storage units and other office furniture before the move and reassemble everything at your new office.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function OfficemoversPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Office Movers", url: "/services/office-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Office Moving Dubai",
          description:
            "Professional office movers in Dubai. WeMoveStuff handles office relocations of all sizes with careful packing, transport and setup to minimise downtime.",
          url: "/services/office-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero - centered variant */}
      <PageHero
        headline="Professional Office Movers In Dubai"
        subheadline="Efficient office relocation services with minimal disruption to your business."
        body="WeMoveStuff handles office relocations of all sizes across Dubai, from small offices to large commercial spaces. We manage the entire process so your business is back up and running quickly."
        primaryCTA={{ label: "Get Office Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Office Specialists",
          "Minimal Downtime",
          "Packing Available",
          "Furniture Assembly",
          "Weekend Moves Available",
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
                  Get Your Office Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your office move and we&apos;ll provide a clear, no-obligation quote.
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
              headline="Office moving made efficient"
              subheadline="Everything you need for a smooth, low-disruption office move in Dubai."
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
                  What&apos;s included in our office moving service
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
                  { label: "All Sizes", sublabel: "Small to large offices" },
                  { label: "100%", sublabel: "Fully managed moves" },
                  { label: "5★", sublabel: "Customer satisfaction" },
                  { label: "Weekend", sublabel: "Move dates available" },
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
              headline="How your office move works"
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
              headline="Office movers across Dubai"
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
              headline="Office moving reviews"
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
            <SectionHeader id="faq-heading" headline="Office Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready for a smooth office move?"
        body="Get a free quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Dubai office."
        primaryCTA={{ label: "Get Office Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
