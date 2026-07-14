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
  title: "Movers in Downtown Dubai | Apartment Moving | WeMoveStuff",
  description:
    "Professional apartment movers in Downtown Dubai. WeMoveStuff handles packing, building access, lift coordination, transport and setup for high-rise apartment moves in Downtown Dubai.",
  path: "/locations/downtown-dubai-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Apartment Moving",
    description: "Full apartment relocation with packing, transport and setup.",
    href: "/services/apartment-moving",
    image: "/images/locations/downtown-apartment.jpg",
  },
  {
    title: "Villa Moving",
    description: "Professional villa moves with careful handling and reassembly.",
    href: "/services/villa-moving",
    image: "/images/locations/downtown-villa.jpg",
  },
  {
    title: "Commercial Moving",
    description: "Office and business relocations with minimal disruption.",
    href: "/services/commercial-moving",
    image: "/images/locations/downtown-commercial.jpg",
  },
  {
    title: "Packing Services",
    description: "Full packing and unpacking using quality materials.",
    href: "/services/packing-services",
    image: "/images/locations/downtown-packing.jpg",
  },
  {
    title: "Furniture Assembly",
    description: "Furniture dismantling and reassembly by experienced movers.",
    href: "/services/furniture-assembly",
    image: "/images/locations/downtown-furniture.jpg",
  },
  {
    title: "TV Installation",
    description: "TV removal, transport and wall reinstallation at your new home.",
    href: "/services/tv-installation",
    image: "/images/locations/downtown-tv.jpg",
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
    title: "Lift and building access planning",
    description: "We coordinate service lift bookings and building access requirements for you.",
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
    question: "Do you move apartments in Downtown Dubai towers?",
    answer:
      "Yes. We handle apartment moves across the major towers in Downtown Dubai, including packing, furniture dismantling, transport and setup.",
  },
  {
    question: "How do you handle building access for Downtown Dubai moves?",
    answer:
      "We coordinate with building management for service lift bookings and move permits as part of the planning process. We advise on what is needed for your specific building.",
  },
  {
    question: "Do you offer packing services in Downtown Dubai?",
    answer:
      "Yes. Full packing and unpacking services are available. We bring all packing materials and protect every item for transport.",
  },
  {
    question: "Can you move a studio or one-bedroom apartment in Downtown Dubai?",
    answer:
      "Yes. We handle all apartment sizes in Downtown Dubai, from studios to large 3 and 4-bedroom apartments.",
  },
];

const RELATED_SERVICES = [
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
  {
    title: "TV Installation",
    description: "TV removal and reinstallation at your new Downtown Dubai apartment.",
    href: "/services/tv-installation",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function DowntownDubaiMoversPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Downtown Dubai Movers", url: "/locations/downtown-dubai-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Movers in Downtown Dubai",
          description:
            "Professional apartment movers in Downtown Dubai handling packing, building access, lift coordination, transport and setup for high-rise apartment moves.",
          url: "/locations/downtown-dubai-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Movers in Downtown Dubai"
        subheadline="Professional apartment moving services across Downtown Dubai, including packing, building access planning, lift coordination and full setup at your new home."
        body="Downtown Dubai is home to some of the city's most iconic high-rise towers. WeMoveStuff handles apartment moves in Downtown Dubai with careful planning for building access, service lifts, parking and move-in permits."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Downtown Dubai Coverage",
          "High-Rise Apartment Moves",
          "Packing Available",
          "Building Access Coordination",
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
                  Downtown Dubai Movers
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
                  Moving in Downtown Dubai
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Downtown Dubai is a high-density residential and mixed-use area with large apartment towers and strict building management requirements. Moving into or out of a Downtown Dubai apartment requires planning around service lift availability, building move permits and parking access for loading vehicles.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  WeMoveStuff handles apartment moves across Downtown Dubai, managing logistics and building coordination so the move runs smoothly and on schedule.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,31,91,0.10)]">
                <Image
                  src="/images/locations/downtown-dubai.png"
                  alt="Downtown Dubai movers"
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
              headline="Moving Services in Downtown Dubai"
              subheadline="A full range of moving services for apartments and offices across Downtown Dubai."
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
              headline="How your Downtown Dubai move works"
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
              headline="Why choose WeMoveStuff in Downtown Dubai"
              subheadline="Professional moving support built around the specific requirements of Downtown Dubai residents."
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
            <SectionHeader id="faq-heading" headline="Downtown Dubai Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move in Downtown Dubai?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Downtown Dubai apartment."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
