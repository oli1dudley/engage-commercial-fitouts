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
  title: "Movers in Silicon Oasis | Apartment & Villa Moving | WeMoveStuff",
  description:
    "Professional movers in Dubai Silicon Oasis. WeMoveStuff handles apartment and villa moves across Silicon Oasis with packing, furniture assembly, transport and full setup.",
  path: "/locations/silicon-oasis-movers",
});

const SERVICES = [
  { title: "Apartment Moving", description: "Full apartment relocation with packing, transport and setup.", href: "/services/apartment-moving" },
  { title: "Villa Moving", description: "Professional villa moves with careful handling and reassembly.", href: "/services/villa-moving" },
  { title: "Commercial Moving", description: "Office and business relocations with minimal disruption.", href: "/services/commercial-moving" },
  { title: "Packing Services", description: "Full packing and unpacking using quality materials.", href: "/services/packing-services" },
  { title: "Furniture Assembly", description: "Furniture dismantling and reassembly by experienced movers.", href: "/services/furniture-assembly" },
  { title: "TV Installation", description: "TV removal, transport and wall reinstallation at your new home.", href: "/services/tv-installation" },
];

const PROCESS_STEPS = [
  { title: "Request a Quote", description: "Tell us your move details and we'll respond quickly with a tailored quote." },
  { title: "We Plan Your Move", description: "We review your requirements, coordinate access, timing and logistics." },
  { title: "We Pack, Move & Set Up", description: "Our team handles packing, transport, reassembly and setup at your new property." },
];

const FEATURES = [
  { icon: CheckCircle2, title: "End-to-end moving support", description: "We manage every stage of the move from initial planning through to final setup." },
  { icon: Package, title: "Professional packing", description: "Quality packing materials and experienced hands to protect your belongings." },
  { icon: Wrench, title: "Furniture dismantling and reassembly", description: "Full furniture dismantle before the move and reassembly at your new property." },
  { icon: Building2, title: "All Silicon Oasis property types", description: "We handle apartments and villas across Dubai Silicon Oasis and the surrounding community." },
  { icon: MapPin, title: "Dubai-wide coverage", description: "Moving services across all major communities and areas in Dubai." },
  { icon: Clock, title: "Reliable scheduling", description: "Moves planned to your timeline with clear communication throughout." },
];

const FAQ_ITEMS: FAQItem[] = [
  { question: "Do you move apartments and villas in Silicon Oasis?", answer: "Yes. We handle all property types in Dubai Silicon Oasis — apartments and villas. Each move is planned around your specific requirements." },
  { question: "Do you offer packing services in Silicon Oasis?", answer: "Yes. Full packing and unpacking services are available for Silicon Oasis moves. We supply all materials and protect every item during transport." },
  { question: "Can you dismantle and reassemble furniture in Silicon Oasis?", answer: "Yes. Furniture dismantling and reassembly is included as part of the full moving service. We bring all tools and handle all assembly at your new Silicon Oasis property." },
  { question: "How do I book movers in Silicon Oasis?", answer: "Submit a quote request through our website or contact us directly. We'll review your move details and respond quickly with a tailored quote for your Silicon Oasis move." },
];

export default function SiliconOasisMoversPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Silicon Oasis Movers", url: "/locations/silicon-oasis-movers" }])} />
      <StructuredData data={serviceSchema({ name: "Movers in Silicon Oasis", description: "Professional apartment and villa moving services across Dubai Silicon Oasis.", url: "/locations/silicon-oasis-movers", serviceType: "MovingService" })} />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Movers in Silicon Oasis"
        subheadline="Professional apartment and villa moving services across Dubai Silicon Oasis, including packing, furniture dismantling, transport and setup."
        body="Silicon Oasis is a technology park and residential community in Dubai. WeMoveStuff provides full moving support for Silicon Oasis residents across all property types."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={["Silicon Oasis Coverage", "Apartments & Villas", "Packing Available", "Furniture Assembly"]}
        variant="centered"
      />

      <section className="bg-white border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-navy transition-colors">Home</Link></li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li><span className="font-medium text-navy" aria-current="page">Silicon Oasis Movers</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Single-column intro - NO IMAGE */}
      <section className="bg-white section-padding" aria-labelledby="intro-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2 id="intro-heading" className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance">
                Moving in Silicon Oasis
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">Dubai Silicon Oasis is a free zone and integrated technology park that also includes a residential community with apartments and villas. The community is popular with tech professionals and families looking for a quieter area with good connectivity.</p>
              <p className="text-base text-muted-foreground leading-relaxed">WeMoveStuff provides full moving support for Silicon Oasis residents. We handle packing, furniture dismantling, transport and reassembly so your move is efficient and stress-free from start to finish.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="services-heading" headline="Moving Services in Silicon Oasis" subheadline="A full range of moving services for apartments and villas across Dubai Silicon Oasis." /></FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard title={service.title} description={service.description} href={service.href} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="process-heading" headline="How your Silicon Oasis move works" subheadline="A straightforward three-step process from first contact to move completion." /></FadeUp>
          <FadeUp delay={0.1}><ProcessSteps steps={PROCESS_STEPS} cta={{ label: "Get a Quote", href: "/quote" }} /></FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="why-heading" headline="Why choose WeMoveStuff in Silicon Oasis" subheadline="Professional moving support for all property types across Dubai Silicon Oasis." /></FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp><SectionHeader id="faq-heading" headline="Silicon Oasis Moving FAQ" /></FadeUp>
          <FadeUp delay={0.08}><FAQAccordion items={FAQ_ITEMS} /></FadeUp>
        </div>
      </section>

      <CTASection
        headline="Ready to move in Silicon Oasis?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your Silicon Oasis property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
