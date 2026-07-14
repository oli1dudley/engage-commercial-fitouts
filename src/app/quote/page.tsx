import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  DollarSign,
  User,
  Building2,
  MapPin,
  ThumbsUp,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import ServiceCard from "@/components/shared/ServiceCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import QuoteForm from "@/components/forms/QuoteForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Get a Moving Quote in Dubai | WeMoveStuff",
  description: "Request a free moving quote from WeMoveStuff. Tell us about your move in Dubai — apartment, villa or office — and we'll respond with a tailored, transparent quote.",
  path: "/quote",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Get Quote" },
];

const WHY_QUOTE_FEATURES = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "We respond to every quote request promptly so you can plan your move without waiting.",
  },
  {
    icon: DollarSign,
    title: "Clear Pricing",
    description: "Transparent quotations with no hidden fees or surprises on moving day.",
  },
  {
    icon: User,
    title: "Personalised Service",
    description: "Every quote is tailored to your specific move — property size, contents, location and requirements.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial Expertise",
    description: "We quote for apartments, villas, offices and commercial units across Dubai.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "We cover all major communities and districts across Dubai for both residential and commercial moves.",
  },
  {
    icon: ThumbsUp,
    title: "No Obligation",
    description: "Requesting a quote carries no commitment. Compare our pricing and decide at your own pace.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Quote Request Received",
    description: "Your request lands with our team immediately and is reviewed the same day.",
  },
  {
    title: "Team Reviews Requirements",
    description: "We assess your move type, property size, locations and any additional services required.",
  },
  {
    title: "We Contact You",
    description: "A member of our team contacts you by phone or WhatsApp with your personalised quotation.",
  },
  {
    title: "Move Planning Begins",
    description: "Once you confirm, we schedule your move and begin detailed planning to ensure everything goes smoothly.",
  },
];

const SERVICES = [
  {
    title: "Apartment Moving",
    description: "Full apartment relocation across Dubai — packing, loading, transport and setup.",
    href: "/services/apartment-moving",
    image: "/images/apartment-moving/apartment-hero.jpg",
  },
  {
    title: "Villa Moving",
    description: "End-to-end villa moves with furniture handling and careful transport.",
    href: "/services/villa-moving",
    image: "/images/villa-moving/villa-hero.jpg",
  },
  {
    title: "Commercial Moving",
    description: "Office and business relocations planned to minimise downtime.",
    href: "/services/commercial-moving",
    image: "/images/commercial-moving/commercial-hero.jpg",
  },
  {
    title: "Packing Services",
    description: "Professional packing using appropriate materials for every item type.",
    href: "/services/packing-services",
    image: "/images/packing-services/packing-hero-service.jpg",
  },
  {
    title: "Furniture Assembly",
    description: "Furniture dismantled, transported and reassembled at your new property.",
    href: "/services/furniture-assembly",
    image: "/images/furniture-assembly/furniture-assembly-hero.jpg",
  },
  {
    title: "TV Installation",
    description: "TV removal, transport support and professional reinstallation.",
    href: "/services/tv-installation",
    image: "/images/tv-installation/tv-installation-hero.jpg",
  },
];

const REVIEWS = [
  {
    name: "Tariq H.",
    review: "The quote process was quick and straightforward. Had a response within hours.",
  },
  {
    name: "Priya N.",
    review: "They explained everything clearly before the move. No surprises on the day.",
  },
  {
    name: "James W.",
    review: "Fast response and excellent communication from first quote to final delivery.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is the quote free?",
    answer:
      "Yes. All quotes from WeMoveStuff are completely free and carry no obligation. We provide a personalised quotation based on your specific move requirements without any charge.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to all quote requests on the same day, typically within a few hours during business hours. For urgent moves, you can also contact us directly via WhatsApp for a faster response.",
  },
  {
    question: "Can I request a quote through WhatsApp?",
    answer:
      "Yes. You can send your move details — property type, size, current location, destination and moving date — directly via WhatsApp and we'll provide a quote that way. Many customers find this the quickest option.",
  },
  {
    question: "Do I need to know my moving date?",
    answer:
      "No. Your moving date is optional on the quote form. We can provide a quotation without a confirmed date and schedule your move once you're ready. The quote remains valid for a reasonable period.",
  },
  {
    question: "Can I request multiple services?",
    answer:
      "Yes. You can include packing services, furniture assembly, TV installation and unpacking support alongside your main moving service. Simply tick the additional services you require on the quote form and we'll include them in your quotation.",
  },
  {
    question: "Do you provide commercial moving quotes?",
    answer:
      "Yes. We provide quotes for all types of commercial moves including offices, retail units, warehouses and other business premises. Select 'Commercial Move' as your move type and include any relevant details in the additional information field.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function QuotePage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Get a Quote", url: "/quote" },
        ])}
      />
      <StructuredData data={contactPageSchema()} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Get Your Free Moving Quote"
        subheadline="Tell us about your move and our team will provide a personalised quote."
        body="Whether you're moving an apartment, villa, office or commercial unit, WeMoveStuff can help plan your move and provide a clear quotation."
        primaryCTA={{ label: "Request My Quote", href: "#quote-form", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* ── Section 2: Main Quote Form ────────────────────────────────── */}
      <section
        id="quote-form"
        className="bg-[#F7F9FC] section-padding"
        aria-labelledby="form-heading"
      >
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">
            {/* Form card */}
            <FadeUp>
              <div className="rounded-[20px] bg-white shadow-[0_4px_32px_rgba(0,31,91,0.08)] border border-light-grey/60 p-6 md:p-10">
                <h2
                  id="form-heading"
                  className="text-[24px] md:text-[32px] font-extrabold text-navy leading-tight tracking-tight mb-6"
                >
                  Tell us about your move
                </h2>
                <QuoteForm />
              </div>
            </FadeUp>

            {/* Trust sidebar */}
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-5 lg:sticky lg:top-24">
                {/* Response promise */}
                <div className="rounded-[16px] bg-navy text-white p-6 flex flex-col gap-3">
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                    Our promise
                  </p>
                  <p className="text-base font-bold leading-snug">
                    Fast response. Clear pricing. No obligation.
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Every quote is personalised to your move. We respond the same day, typically within a few hours.
                  </p>
                </div>

                {/* What&apos;s covered */}
                <div className="rounded-[16px] bg-white border border-light-grey/60 p-6 flex flex-col gap-4">
                  <p className="text-sm font-semibold text-navy">Included in every quote</p>
                  <ul className="flex flex-col gap-2.5" aria-label="What is included">
                    {[
                      "Personalised to your move",
                      "All service types covered",
                      "Packing & assembly add-ons",
                      "Flexible moving dates",
                      "Residential & commercial",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-dark-text">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                          <svg
                            className="size-3 text-brand"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M2 6l3 3 5-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp shortcut */}
                <Button
                  render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  WhatsApp Us Instead
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Request a Quote ───────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="why-quote-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="why-quote-heading"
              headline="Why request a quote from WeMoveStuff?"
              subheadline="A straightforward quote process and honest pricing from a team that knows Dubai moves."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_QUOTE_FEATURES.map((feature) => (
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

      {/* ── Section 4: What Happens Next ──────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="What happens after you submit?"
              subheadline="From the moment you hit submit, here is what to expect."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Submit My Request", href: "#quote-form" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: Services Available ────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Services available"
              subheadline="Request a quote for any of our services — individually or as a combined package."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={service.image}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/services" />} variant="secondary" size="lg">
              View All Services
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: Customer Reviews ───────────────────────────────── */}
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
              headline="Customers who requested quotes"
              subheadline="What they said about the process."
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

      {/* ── Section 7: FAQ ────────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Quote Request FAQ" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 8: Final CTA ──────────────────────────────────────── */}
      <CTASection
        headline="Ready to plan your move?"
        body="Tell us about your move today and receive a personalised quote from the WeMoveStuff team."
        primaryCTA={{ label: "Get My Free Quote", href: "#quote-form", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
