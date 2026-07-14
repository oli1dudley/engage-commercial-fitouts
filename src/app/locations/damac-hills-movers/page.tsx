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
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = generatePageMetadata({
  title: "Movers in Damac Hills | Villa & Apartment Moving | WeMoveStuff",
  description:
    "Professional movers in Damac Hills. WeMoveStuff handles villa and apartment relocations across Damac Hills with packing, furniture assembly, transport and full setup.",
  path: "/locations/damac-hills-movers",
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
    description: "We review your requirements, coordinate access, timing and logistics.",
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
    title: "All Damac Hills property types covered",
    description: "We handle villas, townhouses and apartments across Damac Hills and Damac Hills 2.",
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
    question: "Do you move villas and apartments in Damac Hills?",
    answer:
      "Yes. We handle all property types in Damac Hills — villas, townhouses and apartments. Each move is planned around your specific requirements.",
  },
  {
    question: "Do you offer packing services in Damac Hills?",
    answer:
      "Yes. Full packing and unpacking services are available. We bring all packing materials and protect every item during transport.",
  },
  {
    question: "How do you handle large villa furniture in Damac Hills?",
    answer:
      "We dismantle large furniture before the move and reassemble it at your new Damac Hills property. Our team carries all tools required.",
  },
  {
    question: "How do I get a moving quote for Damac Hills?",
    answer:
      "Submit a quote request through our website or contact us directly. We'll respond quickly with a tailored quote for your Damac Hills move.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function DamacHillsMoversPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Damac Hills Movers", url: "/locations/damac-hills-movers" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Movers in Damac Hills",
          description:
            "Professional movers in Damac Hills handling villa and apartment relocations with packing, furniture assembly, transport and full setup.",
          url: "/locations/damac-hills-movers",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <PageHero
        headline="Movers in Damac Hills"
        subheadline="Professional villa and apartment moving services across Damac Hills, including packing, furniture dismantling, transport and full setup."
        body="Damac Hills is a master-planned community in Dubai. WeMoveStuff provides professional moving support for Damac Hills residents across all property types."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Damac Hills Coverage",
          "Villas & Apartments",
          "Packing Available",
          "Furniture Assembly",
        ]}
        variant="centered"
      />

      {/* Breadcrumb */}
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
                  Damac Hills Movers
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2
                id="intro-heading"
                className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Moving in Damac Hills
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Damac Hills is a large master-planned community in Dubai featuring a mix of villas, townhouses and apartments set around a championship golf course. The community is a popular choice for families looking for spacious properties outside central Dubai.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                WeMoveStuff provides moving support for Damac Hills residents across all property types. We handle packing, furniture dismantling, transport and reassembly so your move is organised and efficient from start to finish.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Moving Services in Damac Hills"
              subheadline="A full range of moving services for villas and apartments across Damac Hills."
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

      {/* Process */}
      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your Damac Hills move works"
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

      {/* Why WeMoveStuff */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-heading"
              headline="Why choose WeMoveStuff in Damac Hills"
              subheadline="Professional moving support for all property types across Damac Hills."
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

      {/* FAQ */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Damac Hills Moving FAQ" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to move in Damac Hills?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Damac Hills property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
