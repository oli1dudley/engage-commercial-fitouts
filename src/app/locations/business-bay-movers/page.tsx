import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  Wrench,
  MapPin,
  Building2,
  CheckCircle2,
  Clock,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import ServiceCard from "@/components/shared/ServiceCard";
import ProcessSteps from "@/components/shared/ProcessSteps";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = generatePageMetadata({
  title: "Movers in Business Bay | Apartment & Office Moving | WeMoveStuff",
  description:
    "Professional movers in Business Bay for apartment and office relocations. WeMoveStuff handles packing, building access, transport and setup for residential and commercial moves in Business Bay.",
  path: "/locations/business-bay-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Apartment Moving",
    description: "Full apartment relocation with packing, transport and setup.",
    href: "/services/apartment-moving",
    image: "/images/locations/bb-apartment.jpg",
  },
  {
    title: "Villa Moving",
    description: "Professional villa moves with careful handling and reassembly.",
    href: "/services/villa-moving",
  },
  {
    title: "Commercial Moving",
    description: "Office and business relocations with minimal disruption.",
    href: "/services/commercial-moving",
  },
  {
    title: "Packing Services",
    description: "Full packing and unpacking using quality materials.",
    href: "/services/packing-services",
  },
  {
    title: "Furniture Assembly",
    description: "Furniture dismantling and reassembly by experienced movers.",
    href: "/services/furniture-assembly",
  },
  {
    title: "TV Installation",
    description: "TV removal, transport and wall reinstallation at your new home.",
    href: "/services/tv-installation",
  },
];

const PROCESS_STEPS = [
  {
    title: "Request a Quote",
    description: "Tell us your move details and we'll respond quickly with a tailored quote.",
  },
  {
    title: "We Plan Your Move",
    description: "We review your requirements, coordinate building access, timing and logistics.",
  },
  {
    title: "We Pack, Move & Set Up",
    description: "Our team handles packing, transport, reassembly and setup at your new property.",
  },
];

const FEATURES = [
  {
    icon: CheckCircle2,
    title: "End-to-end moving support",
    description: "We manage every stage of the move from initial planning through to final setup.",
  },
  {
    icon: Package,
    title: "Professional packing",
    description: "Quality packing materials and experienced hands to protect your belongings.",
  },
  {
    icon: Building2,
    title: "Apartment, villa and commercial capability",
    description: "We handle residential and commercial moves of all sizes in Business Bay.",
  },
  {
    icon: MapPin,
    title: "Dubai-wide coverage",
    description: "Moving services across all major communities and areas in Dubai.",
  },
  {
    icon: Clock,
    title: "Reliable scheduling",
    description: "Moves planned to your timeline with clear communication throughout.",
  },
  {
    icon: Wrench,
    title: "Furniture dismantling and reassembly",
    description: "Full furniture dismantle before the move and reassembly at your new property.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you handle apartment moves in Business Bay?",
    answer:
      "Yes. We handle apartment moves across Business Bay towers, from packing and furniture dismantling through to setup and placement at your new home.",
  },
  {
    question: "Can you move an office in Business Bay?",
    answer:
      "Yes. We provide office and commercial relocation services in Business Bay, including furniture handling, packing, transport and setup. Weekend moves are available to minimise disruption.",
  },
  {
    question: "Do you coordinate building access for Business Bay moves?",
    answer:
      "Yes. We plan around service lift availability, building move permits and parking for loading vehicles as part of every Business Bay move.",
  },
  {
    question: "How do I get a moving quote for Business Bay?",
    answer:
      "Use our online quote form or contact us directly. We'll review your move details and respond with a tailored quote for your Business Bay move.",
  },
];

const RELATED_SERVICES = [
  {
    title: "Commercial Moving",
    description: "Office and commercial relocation services across Dubai.",
    href: "/services/commercial-moving",
  },
  {
    title: "Apartment Moving",
    description: "Specialist apartment relocation services across Dubai.",
    href: "/services/apartment-moving",
  },
  {
    title: "Packing Services",
    description: "Professional packing and unpacking to protect your belongings.",
    href: "/services/packing-services",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function BusinessBayMoversPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Business Bay Movers", url: "/locations/business-bay-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Movers in Business Bay",
          description:
            "Professional movers in Business Bay for apartment and office relocations including packing, building access, transport and setup.",
          url: "/locations/business-bay-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Movers in Business Bay"
        subheadline="Professional apartment and office moving services across Business Bay, including packing, lift access, transport and full setup."
        body="Business Bay is a mixed residential and commercial district with a large number of apartment towers and office buildings. WeMoveStuff provides reliable moving support for both residential and commercial customers across Business Bay."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Business Bay Coverage",
          "Residential & Commercial",
          "Packing Available",
          "Office Relocations",
        ]}
        variant="centered"
      />

      {/* ── Section 2: Breadcrumbs ───────────────────────────────────── */}
      <section className="bg-white border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-navy transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li>
                <span className="font-medium text-navy" aria-current="page">
                  Business Bay Movers
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── Section 3: Intro ─────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="intro-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance"
                >
                  Moving in Business Bay
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Business Bay is one of Dubai&apos;s most active residential and commercial districts. The area has a high concentration of apartment towers and office buildings, making it a common location for both residential moves and office relocations.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  WeMoveStuff supports apartment moves, office relocations and commercial moves across Business Bay. We plan around service lift access, parking, building permits and access requirements for both residential towers and commercial buildings.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,31,91,0.10)]">
                <Image
                  src="/images/locations/business-bay.jpg"
                  alt="Business Bay movers"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 4: Services ──────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Moving Services in Business Bay"
              subheadline="Residential and commercial moving services for Business Bay apartments, offices and properties."
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: How It Works ──────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your Business Bay move works"
              subheadline="A straightforward three-step process from first contact to move completion."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Get a Quote", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: Why WeMoveStuff ───────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-heading"
              headline="Why choose WeMoveStuff in Business Bay"
              subheadline="Professional moving support for residential and commercial customers across Business Bay."
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

      {/* ── Section 7: FAQ ───────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Business Bay Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move in Business Bay?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Business Bay property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
