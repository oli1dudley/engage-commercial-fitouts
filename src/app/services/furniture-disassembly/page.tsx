import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Package,
  Shield,
  MapPin,
  Clock,
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
  title: "Furniture Disassembly Service in Dubai | WeMoveStuff",
  description:
    "Professional furniture disassembly and reassembly in Dubai. WeMoveStuff dismantles and rebuilds wardrobes, beds, shelving and all assembled furniture.",
  path: "/services/furniture-disassembly",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Furniture Disassembly" },
];

const FEATURES = [
  {
    icon: Wrench,
    title: "All Furniture Types",
    description:
      "We dismantle and reassemble wardrobes, beds, desks, shelving, sofas and more.",
  },
  {
    icon: Package,
    title: "Tools & Equipment Provided",
    description:
      "Our team brings all tools and fixings required for every disassembly job.",
  },
  {
    icon: Shield,
    title: "Careful Handling",
    description:
      "Every piece of furniture is handled carefully to prevent damage during disassembly and reassembly.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description:
      "Furniture disassembly services across all major communities and areas in Dubai.",
  },
  {
    icon: Clock,
    title: "Fast & Efficient",
    description:
      "Our experienced team works quickly and efficiently without compromising on care.",
  },
  {
    icon: ClipboardList,
    title: "Standalone or Part of a Move",
    description:
      "Available as a standalone service or combined with a full moving service.",
  },
];

const INCLUDED_ITEMS = [
  "Pre-Move Disassembly",
  "All Tools Provided",
  "Hardware Labelling & Storage",
  "Careful Transport if Required",
  "Reassembly at New Property",
  "Flat-Pack Furniture",
  "Wardrobes & Bed Frames",
  "Desks, Shelving & Storage",
];

const PROCESS_STEPS = [
  {
    title: "Get A Quote",
    description:
      "Tell us what furniture needs to be dismantled and we'll provide a quick quote.",
  },
  {
    title: "Assess & Plan",
    description:
      "We review the furniture and plan the most efficient disassembly approach.",
  },
  {
    title: "Disassembly",
    description:
      "Furniture carefully dismantled with all hardware labelled and stored safely.",
  },
  {
    title: "Reassembly",
    description: "Everything reassembled at your new location, ready to use.",
  },
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
    name: "Mark T.",
    review:
      "The team dismantled and reassembled all our furniture quickly and perfectly. Great service.",
  },
  {
    name: "Layla K.",
    review:
      "WeMoveStuff handled our IKEA furniture like professionals. Everything reassembled exactly right.",
  },
  {
    name: "Peter W.",
    review:
      "Excellent furniture disassembly service. Fast, careful and all tools provided. Would use again.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What furniture can you dismantle and reassemble?",
    answer:
      "We handle all types of furniture including wardrobes, bed frames, desks, bookshelves, dining tables, sofas, TV units and flat-pack furniture from brands like IKEA, Pan Emirates and others.",
  },
  {
    question: "Do you bring your own tools?",
    answer:
      "Yes. Our team brings all tools and equipment required for furniture disassembly and reassembly. You don't need to provide anything.",
  },
  {
    question: "Can you reassemble furniture at my new property?",
    answer:
      "Yes. Reassembly at your new property is included as part of the service. We label all hardware during disassembly so everything goes back together correctly.",
  },
  {
    question: "Is furniture disassembly available without a full move?",
    answer:
      "Yes. We offer furniture disassembly and reassembly as a standalone service, separate from any moving service.",
  },
  {
    question: "How much does furniture disassembly cost in Dubai?",
    answer:
      "Pricing depends on the number and type of furniture pieces. We provide a free, no-obligation quote based on your specific requirements.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function FurnitureDisassemblyPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Furniture Disassembly", url: "/services/furniture-disassembly" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Furniture Disassembly Dubai",
          description:
            "Professional furniture disassembly and reassembly in Dubai. WeMoveStuff dismantles and rebuilds wardrobes, beds, shelving and all assembled furniture.",
          url: "/services/furniture-disassembly",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Furniture Disassembly & Reassembly In Dubai"
        subheadline="Professional furniture dismantling and reassembly services for apartments, villas and offices across Dubai."
        body="WeMoveStuff provides furniture disassembly and reassembly services as a standalone service or as part of a full move. Our experienced team handles all types of furniture quickly and carefully."
        primaryCTA={{ label: "Get Furniture Disassembly Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "All Furniture Types",
          "Tools Provided",
          "Experienced Team",
          "Flat-Pack Experts",
          "Dubai-Wide Coverage",
        ]}
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* Quote form - navy bg */}
      <section className="bg-navy section-padding" aria-labelledby="quote-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="quote-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Get Your Furniture Disassembly Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your furniture and we&apos;ll provide a clear, no-obligation quote.
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

      {/* Features */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Furniture disassembly made easy"
              subheadline="Professional dismantling and reassembly for all furniture types across Dubai."
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

      {/* What's Included - navy */}
      <section className="bg-navy section-padding" aria-labelledby="included-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="included-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  What&apos;s included in our furniture disassembly service
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
                  { label: "All Types", sublabel: "Any furniture handled" },
                  { label: "Tools", sublabel: "All equipment provided" },
                  { label: "5★", sublabel: "Customer satisfaction" },
                  { label: "Dubai", sublabel: "Wide coverage" },
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

      {/* Process */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How furniture disassembly works"
              subheadline="A straightforward four-step process from disassembly to reassembly."
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
              headline="Furniture disassembly across Dubai"
              subheadline="We serve all major communities and residential areas in Dubai."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <AreaPills areas={AREAS} cta={{ label: "Check Availability", href: "/contact" }} />
          </FadeUp>
        </div>
      </section>

      {/* Reviews */}
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
              headline="Furniture disassembly reviews"
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
            <SectionHeader id="faq-heading" headline="Furniture Disassembly FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      <CTASection
        headline="Need furniture dismantled or reassembled?"
        body="Get a free quote from WeMoveStuff for furniture disassembly and reassembly anywhere in Dubai."
        primaryCTA={{ label: "Get Furniture Disassembly Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
