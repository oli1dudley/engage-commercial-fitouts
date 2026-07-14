import type { Metadata } from "next";
import Link from "next/link";
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
import AreaPills from "@/components/shared/AreaPills";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = generatePageMetadata({
  title: "Movers in Bluewaters Island Dubai | WeMoveStuff",
  description:
    "Professional movers in Bluewaters Island Dubai. WeMoveStuff handles apartment moves in Bluewaters with packing, lift coordination, transport and full setup.",
  path: "/locations/bluewaters-movers",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Apartment Moving",
    description: "Full apartment relocation with packing, transport and setup.",
    href: "/services/apartment-moving",
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
    description: "We coordinate building access, lift bookings, island parking and move logistics.",
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
    icon: Building2,
    title: "Building access coordination",
    description: "We manage lift bookings, move permits and island access requirements on your behalf.",
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
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you coordinate lift bookings for Bluewaters Island moves?",
    answer:
      "Yes. Bluewaters Island buildings require lift bookings and move permits from building management. We coordinate these as part of the move planning process so you don't have to manage the administration yourself.",
  },
  {
    question: "Is vehicle access straightforward on Bluewaters Island?",
    answer:
      "Bluewaters Island has specific access arrangements and parking provisions for moving vehicles. We plan vehicle access and positioning in advance to ensure the move runs smoothly without unexpected delays.",
  },
  {
    question: "Do you offer packing services for Bluewaters Island moves?",
    answer:
      "Yes. Full packing and unpacking services are available. We use quality materials to protect all items during transport to or from Bluewaters Island.",
  },
  {
    question: "How do I book movers for Bluewaters Island?",
    answer:
      "Submit a quote request through our website or contact us directly. We'll review your move details and provide a tailored quote for your Bluewaters Island move.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function BluewatersMoversPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: "Bluewaters Island Movers", url: "/locations/bluewaters-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Movers in Bluewaters Island",
          description:
            "Professional apartment moving services in Bluewaters Island with packing, lift coordination, transport and full setup.",
          url: "/locations/bluewaters-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Movers in Bluewaters Island"
        subheadline="Professional apartment moving services in Bluewaters Island — packing, transport and setup for island living."
        body="Bluewaters Island is a premium waterfront development near JBR. WeMoveStuff handles apartment moves in Bluewaters with full access coordination and careful handling."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Bluewaters Coverage",
          "High-Rise Specialists",
          "Packing Available",
          "Building Access",
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
                <Link href="/locations" className="text-muted-foreground hover:text-navy transition-colors">
                  Locations
                </Link>
              </li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li>
                <span className="font-medium text-navy" aria-current="page">
                  Bluewaters Island Movers
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── Section 3: Intro ─────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2
                id="intro-heading"
                className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Moving in Bluewaters Island
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Bluewaters Island is a prestigious residential and leisure destination off the coast of JBR, home to Ain Dubai and a collection of premium residential towers. Moving into or out of Bluewaters requires coordination with building management for lift bookings, parking permits and move-in procedures. The island&apos;s access arrangements mean logistical planning is particularly important.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                WeMoveStuff manages apartment moves in Bluewaters Island with full coordination of building access, lift bookings and parking. Our team handles packing, loading, transport and setup so your move to this unique island community runs smoothly.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 4: Services ──────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Moving Services in Bluewaters Island"
              subheadline="A full range of moving services for apartments in Bluewaters Island."
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
              headline="How your Bluewaters Island move works"
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
              headline="Why choose WeMoveStuff in Bluewaters Island"
              subheadline="Professional moving support built around the specific requirements of Bluewaters Island residents."
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
            <SectionHeader id="faq-heading" headline="Bluewaters Island Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 8: Area Pills ────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Other areas we cover in Dubai"
              subheadline="WeMoveStuff provides moving services across all major Dubai communities."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <AreaPills />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Ready to move in Bluewaters Island?"
        body="Get a quote from WeMoveStuff and let our team handle your Bluewaters Island move from start to finish."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
