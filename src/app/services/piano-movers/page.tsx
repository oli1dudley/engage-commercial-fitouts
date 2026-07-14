import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Wrench,
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
  title: "Piano Movers in Dubai | Specialist Piano Moving | WeMoveStuff",
  description:
    "Specialist piano moving services in Dubai. WeMoveStuff handles upright and grand piano relocations with the care and equipment required for safe transport.",
  path: "/services/piano-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Piano Movers" },
];

const FEATURES = [
  {
    icon: Package,
    title: "Specialist Piano Packing",
    description:
      "Pianos wrapped and protected using specialist materials before transport.",
  },
  {
    icon: Wrench,
    title: "Dismantling if Required",
    description:
      "Piano legs and other removable parts carefully dismantled for safer transport.",
  },
  {
    icon: Shield,
    title: "Careful Handling Throughout",
    description: "Your piano is handled with care at every stage of the move.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description:
      "Piano moving services across all major communities and areas in Dubai.",
  },
  {
    icon: Clock,
    title: "Planned to Your Schedule",
    description:
      "Piano moves planned carefully and executed at a time that suits you.",
  },
  {
    icon: ClipboardList,
    title: "Full Move Coordination",
    description:
      "We manage every stage of the piano relocation from planning to placement.",
  },
];

const INCLUDED_ITEMS = [
  "Move Planning",
  "Specialist Piano Wrapping",
  "Leg & Part Removal if Required",
  "Careful Loading",
  "Transport in Specialist Vehicle",
  "Careful Unloading",
  "Leg & Part Reassembly",
  "Placement at New Property",
];

const PROCESS_STEPS = [
  {
    title: "Get A Quote",
    description:
      "Tell us about your piano type, location and destination for a tailored quote.",
  },
  {
    title: "Move Planning",
    description:
      "We plan the full piano move, including access routes and vehicle requirements.",
  },
  {
    title: "Moving Day",
    description:
      "Careful wrapping, loading and transport of your piano to its new location.",
  },
  {
    title: "Placement & Setup",
    description: "Your piano is carefully placed and reassembled at your new property.",
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
    name: "Isabel M.",
    review:
      "Our grand piano was moved with incredible care. WeMoveStuff are the best piano movers in Dubai.",
  },
  {
    name: "David L.",
    review:
      "Specialist service with all the right equipment. Our upright piano arrived perfectly.",
  },
  {
    name: "Amira H.",
    review:
      "The team took great care of our piano from start to finish. Highly recommend their piano moving service.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you move grand pianos in Dubai?",
    answer:
      "Yes. We move both upright and grand pianos across Dubai. Grand pianos require specialist handling, wrapping and often leg removal — our team is experienced with all piano types.",
  },
  {
    question: "How much does piano moving cost in Dubai?",
    answer:
      "Piano moving costs depend on the type of piano, access at both properties, distance and floor levels. We provide a free, no-obligation quote once we know your piano type and move details.",
  },
  {
    question: "Do you dismantle the piano for moving?",
    answer:
      "For grand pianos, we typically remove the legs and pedal lyre for safer transport and reassemble at the destination. Upright pianos are moved intact where possible.",
  },
  {
    question: "How is the piano protected during the move?",
    answer:
      "Your piano is wrapped in specialist blankets and protective materials before loading. We handle every stage carefully to prevent damage during transport.",
  },
  {
    question: "Do you move digital pianos and keyboards?",
    answer:
      "Yes. We can also move digital pianos and electronic keyboards as part of a general move or as a standalone service.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function PianoMoversPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Piano Movers", url: "/services/piano-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Piano Movers Dubai",
          description:
            "Specialist piano moving services in Dubai. WeMoveStuff handles upright and grand piano relocations with the care and equipment required for safe transport.",
          url: "/services/piano-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Specialist Piano Movers In Dubai"
        subheadline="Safe, careful piano relocation services for upright and grand pianos across Dubai."
        body="WeMoveStuff provides specialist piano moving services in Dubai. Pianos require careful handling, specialist equipment and experienced movers — we provide all three."
        primaryCTA={{ label: "Get Piano Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Piano Specialists",
          "Upright & Grand Pianos",
          "Specialist Equipment",
          "Careful Handling",
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
                  Get Your Piano Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your piano and move details and we&apos;ll provide a clear, no-obligation quote.
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
              headline="Piano moving handled with care"
              subheadline="Specialist piano relocation services for upright and grand pianos across Dubai."
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
                  What&apos;s included in our piano moving service
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
                  { label: "Specialist", sublabel: "Equipment & handling" },
                  { label: "All Types", sublabel: "Upright & grand pianos" },
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
              headline="How piano moving works"
              subheadline="A careful four-step process for safe piano relocation across Dubai."
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
              headline="Piano movers across Dubai"
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
              headline="Piano moving reviews"
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
            <SectionHeader id="faq-heading" headline="Piano Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      <CTASection
        headline="Need to move a piano in Dubai?"
        body="Get a free quote from WeMoveStuff for your piano relocation across Dubai."
        primaryCTA={{ label: "Get Piano Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
