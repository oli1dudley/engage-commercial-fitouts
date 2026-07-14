import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Truck,
  Zap,
  Check,
  Wrench,
  Package,
  Tv,
  Home,
  Tag,
  AlertCircle,
  Clock,
  Box,
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
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import FurnitureAssemblyForm from "@/components/forms/FurnitureAssemblyForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Furniture Assembly Dubai | Furniture Dismantling Dubai | WeMoveStuff",
  description:
    "Professional furniture dismantling and assembly services in Dubai. Beds, wardrobes, desks and office furniture handled carefully by WeMoveStuff.",
  path: "/services/furniture-assembly",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Furniture Assembly" },
];

const WHY_HANDLE_FEATURES = [
  {
    icon: Shield,
    title: "Protect The Furniture",
    description:
      "Proper dismantling prevents scratches, snapped joints and damaged panels that happen when large furniture is moved whole.",
  },
  {
    icon: Truck,
    title: "Move Safely",
    description:
      "Dismantled pieces are easier to carry, load and transport without damaging doorframes, stairwells or the furniture itself.",
  },
  {
    icon: Zap,
    title: "Set Up Faster",
    description:
      "Our team reassembles everything at your new location so you can move in immediately without a pile of flat-pack chaos.",
  },
];

const FURNITURE_ITEMS = [
  "Beds",
  "Wardrobes",
  "Dining Tables",
  "Desks",
  "Office Workstations",
  "Cabinets",
  "Shelving Units",
  "TV Units",
  "Children's Furniture",
  "Flat-Pack Furniture",
  "Meeting Tables",
  "Household Furniture",
];

const ASSEMBLY_SERVICES = [
  {
    title: "Bed Dismantling & Assembly",
    description: "All bed types dismantled carefully and reassembled securely at your new location.",
    href: "/quote",
  },
  {
    title: "Wardrobe Dismantling & Assembly",
    description: "Large wardrobes taken apart, protected in transit and put back together properly.",
    href: "/quote",
  },
  {
    title: "Desk & Table Assembly",
    description: "Desks, dining tables and meeting tables dismantled and assembled without fuss.",
    href: "/quote",
  },
  {
    title: "Office Furniture Assembly",
    description: "Workstations, storage units and office furniture set up ready to use.",
    href: "/quote",
  },
  {
    title: "Furniture Moving Support",
    description: "We handle the physical moving of large, heavy pieces your team cannot manage alone.",
    href: "/quote",
  },
  {
    title: "Flat-Pack Furniture Support",
    description: "IKEA and flat-pack furniture dismantled, transported and reassembled correctly.",
    href: "/quote",
  },
];

const PROCESS_STEPS = [
  { title: "Tell Us What Needs Moving", description: "Share the furniture details — type, size and any access considerations." },
  { title: "Prepare The Service", description: "We confirm the job, bring the right tools and allocate an experienced team." },
  { title: "Careful Dismantling", description: "Furniture is taken apart methodically with all fittings kept together and labelled." },
  { title: "Transport & Protection", description: "Panels and components are wrapped, loaded carefully and protected in transit." },
  { title: "Reassembly & Placement", description: "Everything is put back together at your destination and placed exactly where you want it." },
];

const FULL_MOVE_SERVICES = [
  {
    title: "Apartment Moves",
    description: "Furniture assembly included as part of your apartment moving service.",
    href: "/services/apartment-moving",
    image: "/images/apartment-moving/apartment-hero.jpg",
  },
  {
    title: "Villa Moves",
    description: "Large villa furniture handled, dismantled and reassembled by our team.",
    href: "/services/villa-moving",
    image: "/images/villa-moving/villa-hero.jpg",
  },
  {
    title: "Commercial Moves",
    description: "Office and commercial furniture set up efficiently at your new location.",
    href: "/services/commercial-moving",
    image: "/images/commercial-moving/commercial-hero.jpg",
  },
];

const PARTS_CHECKLIST = [
  "Screws and fittings kept together",
  "Parts handled carefully",
  "Panels protected",
  "Furniture wrapped where required",
  "Placement planned at destination",
];

const WHY_CHOOSE_ITEMS = [
  "Moving Experience",
  "Careful Handling",
  "Residential & Commercial",
  "Clear Pricing",
  "Faster Setup",
  "WhatsApp Communication",
];

const REVIEWS = [
  {
    name: "Omar A.",
    review: "The team dismantled and reassembled our furniture perfectly. Saved us a full day of work.",
  },
  {
    name: "Leila S.",
    review: "Very useful service during our apartment move. Everything was reassembled quickly.",
  },
  {
    name: "Karan D.",
    review: "Our office furniture was moved and assembled efficiently. The team knew exactly what they were doing.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you dismantle furniture before moving?",
    answer:
      "Yes. We can dismantle large furniture items including beds, wardrobes, desks, tables and shelving units before a move. Our team brings all necessary tools and keeps all fittings, screws and parts together and labelled so reassembly is straightforward.",
  },
  {
    question: "Do you reassemble furniture after moving?",
    answer:
      "Yes. Reassembly at the destination is included as part of our furniture service. Our team will put every item back together in the correct position and ensure everything is secure before they leave.",
  },
  {
    question: "Can you move wardrobes?",
    answer:
      "Yes. We regularly dismantle and move wardrobes of all sizes — from standard single-door units to large built-in style wardrobes. We dismantle them at origin, protect all panels and doors, transport everything carefully, and reassemble at the destination.",
  },
  {
    question: "Can you assemble office furniture?",
    answer:
      "Yes. We assemble office workstations, desks, meeting tables, storage units and other commercial furniture. This service can be added to a commercial office move or booked as a standalone job to set up new furniture.",
  },
  {
    question: "Can I book assembly without a full move?",
    answer:
      "Yes. Furniture assembly and dismantling can be booked as a standalone service, completely separate from a move. If you have new furniture to assemble, existing furniture to dismantle or pieces to relocate within the same property, we can help.",
  },
  {
    question: "Can I send photos before getting a quote?",
    answer:
      "Yes. Sending photos of the furniture you need dismantled or assembled is very helpful. You can send images via WhatsApp and we'll give you an accurate quote based on what you need done.",
  },
  {
    question: "Do you handle IKEA-style furniture?",
    answer:
      "Yes. We have extensive experience with IKEA and other flat-pack furniture. Whether it needs assembling for the first time, dismantling for a move, or reassembling at a new location, our team can handle it efficiently and correctly.",
  },
  {
    question: "Can you assemble flat-pack furniture I've just purchased?",
    answer:
      "Yes. If you've just bought new furniture and need it assembled at your home or office, we can do this as a standalone service without any moving involved. Just share the furniture details and we'll provide a quote.",
  },
  {
    question: "What furniture can't be dismantled?",
    answer:
      "Some furniture is built in one solid piece and cannot be taken apart — for example, certain solid wood cabinets, upholstered sofas with fixed frames, or custom-built built-in furniture. If in doubt, send us a photo before booking and we can advise on the best approach.",
  },
  {
    question: "How long does furniture assembly typically take?",
    answer:
      "A single bed frame typically takes 30–60 minutes. A large wardrobe takes 1–2 hours. A full apartment worth of furniture can take half a day or a full day depending on the volume. We give time estimates when you book based on the specific items.",
  },
];

const FURNITURE_TYPES_DETAIL = [
  {
    icon: Box,
    title: "Wardrobes",
    description: "All wardrobe types — single door, double door, sliding door and built-in style. Panels wrapped individually, mirrors protected and hinges bagged and labelled.",
  },
  {
    icon: Home,
    title: "Beds & Bed Frames",
    description: "Single, double, king and super-king bed frames. Storage beds, divan bases and wooden or metal frames. Slat sets removed and kept together.",
  },
  {
    icon: Wrench,
    title: "Desks & Dining Tables",
    description: "Office desks, L-shaped desks, dining tables and extending tables. Legs removed, glass tops wrapped separately and extension leaves kept together.",
  },
  {
    icon: Package,
    title: "Bookshelves & Shelving",
    description: "Freestanding and modular shelving units dismantled cleanly, with shelf pins and fixings bagged by unit.",
  },
  {
    icon: Tv,
    title: "TV Units & Media Consoles",
    description: "TV stands and media units with or without glass doors. Door hinges and cable management components kept together.",
  },
  {
    icon: Clock,
    title: "Children's Furniture",
    description: "Bunk beds, cabin beds, cots and high-sleepers — all dismantled safely and reassembled securely with every bolt torqued correctly.",
  },
];

const DISMANTLE_GUIDANCE = [
  {
    scenario: "Move whole",
    examples: "Small side tables, solid single-piece chairs, ottomans, small bedside tables",
    reason: "These fit through doorways and lifts without risk of damage and are faster to handle intact.",
  },
  {
    scenario: "Dismantle before moving",
    examples: "Wardrobes, large bed frames, extending dining tables, modular shelving, L-shaped desks",
    reason: "These are too large to safely carry through doorways, lifts or stairwells without risking damage to the furniture or the building.",
  },
  {
    scenario: "Assess on the day",
    examples: "Large sofas, heavy corner units, custom furniture",
    reason: "Some items depend on the specific layout of the apartment or villa — doorframe widths, lift dimensions and stairwell turns. We assess these on site before deciding the best approach.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function FurnitureAssemblyPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Furniture Assembly", url: "/services/furniture-assembly" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Furniture Assembly Dubai",
          description:
            "Professional furniture dismantling and assembly services in Dubai. Beds, wardrobes, desks and office furniture handled carefully.",
          url: "/services/furniture-assembly",
          serviceType: "FurnitureAssemblyService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Furniture Assembly & Dismantling Dubai"
        subheadline="Large furniture moved properly, dismantled carefully and reassembled at your new home or office."
        body="From beds and wardrobes to desks and office furniture, WeMoveStuff helps dismantle, protect, move and reassemble furniture across Dubai."
        primaryCTA={{ label: "Get Furniture Assembly Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Beds & Wardrobes",
          "Office Furniture",
          "Careful Dismantling",
          "Reassembly Support",
          "Residential & Commercial",
        ]}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/furniture-assembly/furniture-assembly-hero.jpg",
          alt: "Furniture assembly service in Dubai.",
          priority: true,
        }}
        variant="split"
      />

      {/* ── Section 2: Quick Quote Form ──────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="quote-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2
                  id="quote-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Get Your Furniture Assembly Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us what furniture needs moving, dismantling or assembling and we&apos;ll provide a clear, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Standalone or part of a full move",
                    "Residential and commercial furniture",
                    "All furniture types including flat-pack",
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
              <FurnitureAssemblyForm headline="" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Furniture Needs Proper Handling ───────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-handle-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <div className="flex flex-col gap-4 items-center text-center max-w-2xl mx-auto">
              <h2
                id="why-handle-heading"
                className="text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Large furniture needs careful dismantling
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Moving large furniture in one piece through doorways, lifts and stairwells risks damage to the furniture, the building and the people carrying it. Proper dismantling makes the whole process safer and faster.
              </p>
            </div>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {WHY_HANDLE_FEATURES.map((feature) => (
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

      {/* ── Section 4: Furniture We Dismantle & Reassemble ───────────── */}
      <section className="bg-white section-padding" aria-labelledby="furniture-types-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="furniture-types-heading"
              headline="Furniture we dismantle and reassemble"
              subheadline="A full breakdown of the furniture types we handle across residential and commercial properties."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FURNITURE_TYPES_DETAIL.map((item) => (
              <StaggerItem key={item.title}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: What We Can Dismantle & Assemble ──────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="furniture-list-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="furniture-list-heading"
              headline="Furniture we can help with"
              subheadline="We work with all common furniture types across apartments, villas and offices."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"
              aria-label="Furniture types we handle"
            >
              {FURNITURE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-[12px] bg-white border border-light-grey/60 px-4 py-3 text-sm font-medium text-dark-text"
                >
                  <Check className="size-4 text-brand shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/quote" />} variant="primary" size="lg">
              Book Furniture Support
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: When to Dismantle vs Move Whole ───────────────── */}
      <section className="bg-white section-padding" aria-labelledby="dismantle-guidance-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="dismantle-guidance-heading"
              headline="When to dismantle vs move whole"
              subheadline="Not every piece of furniture needs to be taken apart. Here's how we think about it."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DISMANTLE_GUIDANCE.map((item) => (
              <StaggerItem key={item.scenario}>
                <div className="flex flex-col gap-4 rounded-[16px] bg-[#F7F9FC] border border-light-grey/60 p-6 h-full">
                  <div className="flex items-center gap-2">
                    <span className="flex size-2 rounded-full bg-brand shrink-0" aria-hidden />
                    <h3 className="text-base font-bold text-navy">{item.scenario}</h3>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-semibold text-brand uppercase tracking-wide">Examples</p>
                    <p className="text-sm text-dark-text">{item.examples}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Why</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.reason}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 7: Services We Offer ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Furniture assembly services we provide"
              subheadline="From a single bed to a full office fit-out, our team handles it all."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ASSEMBLY_SERVICES.map((service) => (
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

      {/* ── Section 8: Our Process ────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How furniture assembly works"
              subheadline="A clear process from first contact to final placement."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Start My Furniture Service", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: Furniture As Part of a Full Move ──────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="full-move-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="full-move-heading"
              headline="Add furniture assembly to your move"
              subheadline="Book furniture dismantling and reassembly alongside your moving service for a fully managed move."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FULL_MOVE_SERVICES.map((service) => (
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
            <Button render={<Link href="/quote" />} variant="secondary" size="lg">
              Add Assembly To My Move
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10: Parts Management ──────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="parts-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-6 max-w-3xl">
              <h2
                id="parts-heading"
                className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
              >
                How we keep parts organised
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                The difference between furniture that reassembles perfectly and furniture that doesn&apos;t often comes down to how fittings and small parts are managed during a move. Our approach is systematic.
              </p>
              <ul className="flex flex-col gap-3" aria-label="Parts management approach">
                {[
                  "Screws, bolts and fittings placed in labelled bags immediately on removal",
                  "Each bag labelled with the furniture item it belongs to",
                  "Small bags taped to the relevant furniture panel where possible",
                  "Instruction manuals kept with the furniture if available",
                  "Allen keys and tools brought to every job — no reliance on customer-supplied tools",
                  "All fixings checked at destination before reassembly begins",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                    <Check className="size-4 text-[#4ade80] shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                render={<Link href="/quote" />}
                variant="primary"
                size="lg"
                className="self-start"
              >
                Book Furniture Service
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 11: Why Choose WeMoveStuff ────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Why customers choose WeMoveStuff"
              subheadline="Furniture moved carefully, assembled correctly and set up ready to use."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              aria-label="Why choose WeMoveStuff for furniture assembly"
            >
              {WHY_CHOOSE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[14px] bg-[#F7F9FC] border border-light-grey/60 px-5 py-4 text-sm font-semibold text-dark-text shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Check className="size-4 text-brand" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 12: Customer Reviews ─────────────────────────────── */}
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
              headline="Furniture moved and assembled properly"
              subheadline="Real feedback from customers who used our furniture service."
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

      {/* ── Section 13: FAQ ───────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Furniture Assembly FAQ" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 14: Related Services ─────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="related-services-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="related-services-heading"
              headline="Related services"
              subheadline="Combine furniture assembly with a full moving service for a seamless relocation."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Apartment Moving",
                description: "Full apartment relocation with furniture dismantling and reassembly included as part of the service.",
                href: "/services/apartment-moving",
                icon: Home,
              },
              {
                title: "Villa Moving",
                description: "Large villa furniture handled carefully — dismantled, transported and reassembled at your new villa.",
                href: "/services/villa-moving",
                icon: Package,
              },
              {
                title: "TV Installation",
                description: "TVs removed from the wall, protected during your move and reinstalled in the correct position at your new property.",
                href: "/services/tv-installation",
                icon: Tv,
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="group flex flex-col gap-4 rounded-[16px] bg-white border border-light-grey/60 p-6 hover:border-brand/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all h-full"
                >
                  <span className="flex size-10 items-center justify-center rounded-[10px] bg-brand/10">
                    <service.icon className="size-5 text-brand" aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-base font-bold text-navy group-hover:text-brand transition-colors">{service.title}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{service.description}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-brand mt-auto">
                    Learn more <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 15: Final CTA ─────────────────────────────────────── */}
      <CTASection
        headline="Need furniture moved or assembled?"
        body="Send us the furniture details and we'll provide a clear quote and service plan."
        primaryCTA={{ label: "Get Furniture Assembly Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/furniture-assembly/furniture-final-cta.jpg"
      />
    </>
  );
}
