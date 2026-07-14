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
  title: "Movers in Dubai Marina | Apartment & Villa Moving | WeMoveStuff",
  description:
    "Professional movers in Dubai Marina for apartment and villa relocations. WeMoveStuff handles packing, lift access, building permits, transport and setup in Dubai Marina towers.",
  path: "/locations/dubai-marina-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Apartment Moving",
    description: "Full apartment relocation with packing, transport and setup.",
    href: "/services/apartment-moving",
    image: "/images/locations/marina-apartment.jpg",
  },
  {
    title: "Villa Moving",
    description: "Professional villa moves with careful handling and reassembly.",
    href: "/services/villa-moving",
    image: "/images/locations/marina-villa.jpg",
  },
  {
    title: "Commercial Moving",
    description: "Office and business relocations with minimal disruption.",
    href: "/services/commercial-moving",
    image: "/images/locations/marina-commercial.jpg",
  },
  {
    title: "Packing Services",
    description: "Full packing and unpacking using quality materials.",
    href: "/services/packing-services",
    image: "/images/locations/marina-packing.jpg",
  },
  {
    title: "Furniture Assembly",
    description: "Furniture dismantling and reassembly by experienced movers.",
    href: "/services/furniture-assembly",
    image: "/images/locations/marina-furniture.jpg",
  },
  {
    title: "TV Installation",
    description: "TV removal, transport and wall reinstallation at your new home.",
    href: "/services/tv-installation",
    image: "/images/locations/marina-tv.jpg",
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
    icon: Wrench,
    title: "Furniture dismantling and reassembly",
    description: "Full furniture dismantle before the move and reassembly at your new property.",
  },
  {
    icon: MapPin,
    title: "Dubai-wide coverage",
    description: "Moving services across all major communities and areas in Dubai.",
  },
  {
    icon: Building2,
    title: "Lift and building access planning",
    description: "We coordinate service lift bookings and building access requirements for you.",
  },
  {
    icon: Clock,
    title: "Reliable scheduling",
    description: "Moves planned to your timeline with clear communication throughout.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you handle high-rise apartment moves in Dubai Marina?",
    answer:
      "Yes. We have experience moving apartments in high-rise towers across Dubai Marina. We coordinate service lift bookings, building permits and loading access as part of the move process.",
  },
  {
    question: "Do you need a building move permit in Dubai Marina?",
    answer:
      "Many buildings in Dubai Marina require a move permit from building management. We can advise on this as part of the planning process and help coordinate access requirements.",
  },
  {
    question: "Can you pack and unpack as part of the Dubai Marina move?",
    answer:
      "Yes. We offer full packing and unpacking services as part of your move. Our team uses quality packing materials to protect your belongings during transport.",
  },
  {
    question: "How far in advance should I book movers in Dubai Marina?",
    answer:
      "We recommend booking at least 2–3 days in advance for smaller apartment moves and 5–7 days ahead for larger moves or moves involving multiple lifts and permits.",
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
    title: "Furniture Assembly",
    description: "Furniture dismantling before the move and reassembly at your new home.",
    href: "/services/furniture-assembly",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function DubaiMarinaMoversPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Dubai Marina Movers", url: "/locations/dubai-marina-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Movers in Dubai Marina",
          description:
            "Professional movers in Dubai Marina for apartment and villa relocations including packing, lift access, building permits, transport and setup.",
          url: "/locations/dubai-marina-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Movers in Dubai Marina"
        subheadline="Professional apartment and villa moving services across Dubai Marina, including packing, furniture dismantling, lift access coordination and full setup at your new home."
        body="WeMoveStuff provides reliable moving support for residents across Dubai Marina. We understand the specific requirements of high-rise buildings — from service lift bookings to building management permits — and plan every move accordingly."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Dubai Marina Coverage",
          "High-Rise Specialists",
          "Packing Available",
          "Lift Access Coordination",
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
                  Dubai Marina Movers
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
                  Moving in Dubai Marina
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Dubai Marina is one of Dubai&apos;s most popular residential areas, with a mix of high-rise apartment towers, waterfront properties and a small number of villas and townhouses. Moving in Dubai Marina requires careful planning — building move permits, service lift bookings, parking and loading access all need to be arranged in advance.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  WeMoveStuff supports moves in and out of Dubai Marina towers, handling packing, furniture dismantling, transport and reassembly so residents can focus on settling into their new home.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,31,91,0.10)]">
                <Image
                  src="/images/locations/dubai-marina.webp"
                  alt="Dubai Marina movers"
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
              headline="Moving Services in Dubai Marina"
              subheadline="A full range of moving services for apartments, villas and offices across Dubai Marina."
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
              headline="How your Dubai Marina move works"
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
              headline="Why choose WeMoveStuff in Dubai Marina"
              subheadline="Professional moving support built around the specific requirements of Dubai Marina residents."
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
            <SectionHeader id="faq-heading" headline="Dubai Marina Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move in Dubai Marina?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Dubai Marina property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
