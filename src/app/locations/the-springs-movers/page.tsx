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
  title: "Movers in The Springs | Villa Moving | WeMoveStuff",
  description:
    "Professional villa movers in The Springs, Dubai. WeMoveStuff handles full villa relocations across The Springs with packing, furniture dismantling, transport and setup.",
  path: "/locations/the-springs-movers",
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
  { icon: Building2, title: "Villa moving in gated communities", description: "We have experience with villa moves in gated communities like The Springs, including access coordination." },
  { icon: MapPin, title: "Dubai-wide coverage", description: "Moving services across all major communities and areas in Dubai." },
  { icon: Clock, title: "Reliable scheduling", description: "Moves planned to your timeline with clear communication throughout." },
];

const FAQ_ITEMS: FAQItem[] = [
  { question: "Do you move villas in The Springs?", answer: "Yes. We handle full villa moves across The Springs, including careful packing, furniture dismantling, transport and reassembly at your new property." },
  { question: "Do you coordinate community access for The Springs moves?", answer: "Yes. We plan around community entry requirements as part of the move planning process for The Springs." },
  { question: "How do you handle large villa furniture in The Springs?", answer: "We dismantle large furniture before the move and reassemble it at your new property. Our team brings all tools required." },
  { question: "How do I get a moving quote for The Springs?", answer: "Submit a quote request through our website or contact us directly. We'll respond quickly with a tailored quote for your Springs move." },
];

export default function TheSpringsMoversPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "The Springs Movers", url: "/locations/the-springs-movers" }])} />
      <StructuredData data={serviceSchema({ name: "Movers in The Springs", description: "Professional villa moving services across The Springs, Dubai.", url: "/locations/the-springs-movers", serviceType: "MovingService" })} />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      <PageHero
        headline="Movers in The Springs"
        subheadline="Professional villa moving services across The Springs, including careful packing, furniture dismantling, transport and full setup."
        body="The Springs is a popular villa community in Dubai. WeMoveStuff provides professional villa moving support for The Springs residents."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={["The Springs Coverage", "Villa Specialists", "Packing Available", "Furniture Assembly"]}
        variant="centered"
      />

      <section className="bg-white border-b border-light-grey/60">
        <div className="max-container container-padding py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-navy transition-colors">Home</Link></li>
              <li className="text-light-grey mx-1" aria-hidden>/</li>
              <li><span className="font-medium text-navy" aria-current="page">The Springs Movers</span></li>
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
                Moving in The Springs
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">The Springs is a gated villa community in Dubai's Emirates Living area, popular with families for its quiet environment, lakes and parks. The community features spacious townhouses and villas that are well-suited for family living.</p>
              <p className="text-base text-muted-foreground leading-relaxed">WeMoveStuff provides professional villa moving support for The Springs residents. We handle careful packing, furniture dismantling, transport and reassembly, coordinating community access as part of the move planning.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="services-heading" headline="Moving Services in The Springs" subheadline="Professional villa and residential moving services across The Springs." /></FadeUp>
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
          <FadeUp><SectionHeader id="process-heading" headline="How your The Springs move works" subheadline="A straightforward three-step process from first contact to move completion." /></FadeUp>
          <FadeUp delay={0.1}><ProcessSteps steps={PROCESS_STEPS} cta={{ label: "Get a Quote", href: "/quote" }} /></FadeUp>
        </div>
      </section>

      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp><SectionHeader id="why-heading" headline="Why choose WeMoveStuff in The Springs" subheadline="Professional moving support built around the specific requirements of The Springs residents." /></FadeUp>
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
          <FadeUp><SectionHeader id="faq-heading" headline="The Springs Moving FAQ" /></FadeUp>
          <FadeUp delay={0.08}><FAQAccordion items={FAQ_ITEMS} /></FadeUp>
        </div>
      </section>

      <CTASection
        headline="Ready to move in The Springs?"
        body="Get a quote from WeMoveStuff and let our team handle the planning, packing and moving process for your The Springs property."
        primaryCTA={{ label: "Get a Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
