import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Clock,
  ClipboardList,
  Wrench,
  Package,
  Calendar,
  MapPin,
  Check,
  Building2,
  TrendingUp,
  Zap,
  Monitor,
  Store,
  Warehouse,
  Users,
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
import AreaPills from "@/components/shared/AreaPills";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import CommercialQuoteForm from "@/components/forms/CommercialQuoteForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Office & Commercial Movers in Dubai | WeMoveStuff",
  description: "Professional office and commercial movers in Dubai. WeMoveStuff handles office relocations, retail moves and commercial relocations with packing, transport and setup.",
  path: "/services/commercial-moving",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Commercial Moving" },
];

const FEATURES = [
  {
    icon: Clock,
    title: "Minimise Downtime",
    description: "Moves planned around your business hours to keep operations running.",
  },
  {
    icon: ClipboardList,
    title: "Organised Planning",
    description: "Structured relocation process with clear timelines and coordination.",
  },
  {
    icon: Wrench,
    title: "Furniture Setup",
    description: "Office furniture dismantling, transport and reassembly included.",
  },
  {
    icon: Package,
    title: "Packing Support",
    description: "Professional packing of equipment, workstations and office contents.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Weekend and off-peak moves available to minimise business disruption.",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Coverage",
    description: "Commercial relocations across all major business districts in Dubai.",
  },
];

const COMMERCIAL_TYPES = [
  {
    title: "Office Relocations",
    description: "Full office moves including workstations, furniture and equipment.",
    href: "/quote",
  },
  {
    title: "Retail Relocations",
    description: "Retail store moves with careful handling of fixtures and stock.",
    href: "/quote",
  },
  {
    title: "Commercial Units",
    description: "Commercial unit and business premises relocations across Dubai.",
    href: "/quote",
  },
  {
    title: "Corporate Offices",
    description: "Large-scale corporate office relocations with full project management.",
    href: "/quote",
  },
  {
    title: "Medical Practices",
    description: "Specialist moves for clinics, dental practices and medical facilities.",
    href: "/quote",
  },
  {
    title: "Multi-Floor Offices",
    description: "Coordinated multi-floor office moves with phased planning.",
    href: "/quote",
  },
];

const INCLUDED_ITEMS = [
  "Relocation Planning",
  "Office Packing",
  "Furniture Dismantling",
  "Equipment Transport",
  "Furniture Reassembly",
  "Workspace Setup",
  "Weekend Moves",
  "Move Coordination",
];

const PROCESS_STEPS = [
  { title: "Consultation & Quote", description: "We discuss your requirements and provide a tailored quote." },
  { title: "Relocation Planning", description: "A structured plan is agreed covering every stage of the move." },
  { title: "Packing & Preparation", description: "Professional packing of all office contents and furniture." },
  { title: "Move Execution", description: "Efficient, coordinated transport to your new premises." },
  { title: "Workspace Setup", description: "Furniture reassembly and workspace setup at your new location." },
];

const BUSINESS_DISTRICTS = [
  "Business Bay",
  "Downtown Dubai",
  "DIFC",
  "Dubai Internet City",
  "Dubai Media City",
  "JLT",
  "Dubai Marina",
  "Al Quoz",
  "Dubai South",
  "Dubai Investment Park",
  "Silicon Oasis",
  "Jebel Ali",
];

const CONTINUITY_BENEFITS = [
  "Planned Relocations",
  "Clear Communication",
  "Furniture Assembly",
  "Flexible Scheduling",
  "Commercial Experience",
  "Fast Response Times",
];

const REVIEWS = [
  {
    name: "James P.",
    review: "Our office move was completed with minimal disruption and excellent planning throughout.",
  },
  {
    name: "Fatima A.",
    review: "The team coordinated everything professionally and kept communication clear at every stage.",
  },
  {
    name: "Richard K.",
    review: "We relocated our workspace over the weekend and were fully operational the next morning.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does an office move cost?",
    answer:
      "Office moving costs depend on the size of your premises, the volume of furniture and equipment, distance, and additional services required. We provide a free, no-obligation commercial moving quote tailored to your business. Contact us to get started.",
  },
  {
    question: "Can you move outside business hours?",
    answer:
      "Yes. We offer weekend moves, evening moves and off-peak scheduling to minimise disruption to your business operations. We'll work around your business hours to ensure the relocation is as smooth as possible.",
  },
  {
    question: "Do you provide packing services?",
    answer:
      "Yes. We provide full office packing services including workstations, filing systems, equipment, furniture and general office contents. We use appropriate materials to protect all items during transport.",
  },
  {
    question: "Can you dismantle office furniture?",
    answer:
      "Yes. Our team dismantles desks, shelving units, partitions and other office furniture before the move and fully reassembles and sets up everything at your new premises.",
  },
  {
    question: "How do you minimise downtime?",
    answer:
      "We plan every commercial relocation carefully to reduce disruption. This includes phased moving plans, weekend scheduling, clear communication with your team, and efficient workspace setup on arrival so your business can resume operations as quickly as possible.",
  },
  {
    question: "Do you move commercial units and retail stores?",
    answer:
      "Yes. We move all types of commercial premises including retail stores, commercial units, warehouses, medical practices, and multi-floor office spaces across Dubai.",
  },
  {
    question: "Can you move our IT equipment?",
    answer:
      "We transport IT hardware — monitors, towers, servers and peripherals — carefully packed and protected. We work alongside your IT team or IT provider who handles cabling, data and system configuration. We do the physical moving; your IT team handles the technical setup at the new location.",
  },
  {
    question: "How long does an office relocation take?",
    answer:
      "This depends on the size of your office and the volume of furniture, equipment and files. A small office of 5–10 people typically takes a day. A larger office of 20–50 people may require a weekend. We'll give you a realistic timeline during the planning stage.",
  },
  {
    question: "Do you handle phased moves?",
    answer:
      "Yes. For larger businesses, a phased move — where departments or floors are relocated in stages — is often the best way to keep operations running. We plan phased relocations carefully and coordinate timing so each phase happens without disrupting the others.",
  },
];

const MOVE_TYPES = [
  {
    icon: Users,
    title: "Small Office Moves",
    description: "Businesses with 5–15 people. Fast, efficient and often completed in a single day including setup.",
  },
  {
    icon: Building2,
    title: "Large Office Moves",
    description: "Offices of 20 or more staff. Phased planning and weekend scheduling to avoid operational disruption.",
  },
  {
    icon: Store,
    title: "Retail Relocations",
    description: "Shop fittings, display units, stock and fixtures moved carefully with minimum time off the floor.",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Storage",
    description: "Racking, shelving, equipment and stock relocated to new warehouse or storage premises.",
  },
];

const MOVING_DAY_STEPS = [
  { title: "Team Arrives On Site", description: "Our crew arrives at the agreed time with all equipment, tools and packing materials ready." },
  { title: "Systematic Packing", description: "Office contents are packed by zone or department and clearly labelled for unpacking at the new location." },
  { title: "Furniture Dismantled", description: "Desks, shelving and other furniture are carefully dismantled and loaded onto the vehicle." },
  { title: "Transport & Delivery", description: "Everything is transported to your new premises and delivered to the correct floor and zone." },
  { title: "Workspace Reassembly", description: "Furniture is reassembled, positioned and your workspace is set up ready for your team." },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function CommercialMovingPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Commercial Moving", url: "/services/commercial-moving" },
        ])}
      />
      <StructuredData
        data={serviceSchema({
          name: "Commercial Moving Dubai",
          description:
            "Professional office relocations, retail relocations and business moving services with planning, packing and setup support across Dubai.",
          url: "/services/commercial-moving",
          serviceType: "MovingService",
        })}
      />
      <StructuredData data={faqPageSchema(FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Commercial & Office Relocation Services Dubai"
        subheadline="Professional business relocation services designed to minimise disruption and keep your operations moving."
        body="From office relocations to retail and commercial unit moves, WeMoveStuff provides organised planning, packing, transport and setup support across Dubai."
        primaryCTA={{ label: "Get Commercial Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        trustBadges={[
          "Office Relocations",
          "Commercial Units",
          "Furniture Setup",
          "Weekend Moves Available",
          "Dubai-Wide Coverage",
        ]}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/commercial-moving/commercial-hero.jpg",
          alt: "Professional office movers relocating a business in Dubai.",
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
                  Get Your Commercial Moving Quote
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Tell us about your business move and we&apos;ll provide a tailored, no-obligation quote.
                </p>
                <ul className="flex flex-col gap-3 mt-1" aria-label="Quote benefits">
                  {[
                    "Fast response — usually within the hour",
                    "Transparent commercial pricing",
                    "Weekend and off-peak slots available",
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
              <CommercialQuoteForm headline="" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Choose WeMoveStuff ──────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="why-us-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="why-us-heading"
              headline="Commercial relocations planned properly"
              subheadline="We treat every business move as a project — planned, coordinated and executed to minimise disruption."
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

      {/* ── Section 4: Types of Commercial Moves ─────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="move-types-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="move-types-heading"
              headline="Types of commercial moves we handle"
              subheadline="From a small office to a large warehouse, we have the experience and team for every business relocation."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MOVE_TYPES.map((type) => (
              <StaggerItem key={type.title}>
                <FeatureCard
                  icon={type.icon}
                  title={type.title}
                  description={type.description}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: Commercial Moves We Handle ───────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="types-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="types-heading"
              headline="Commercial relocation services"
              subheadline="We handle every type of business relocation across Dubai."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMERCIAL_TYPES.map((type) => (
              <StaggerItem key={type.title}>
                <ServiceCard
                  title={type.title}
                  description={type.description}
                  href={type.href}
                  ctaLabel="Get a Quote"
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 6: What's Included ───────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="included-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="included-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  What&apos;s included in our commercial moving service
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Included services">
                  {INCLUDED_ITEMS.map((item) => (
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
                  Request My Quote
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "6+", label: "Business types covered" },
                  { number: "12+", label: "Business districts served" },
                  { number: "7 days", label: "Flexible scheduling" },
                  { number: "100%", label: "Managed relocations" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 rounded-[16px] bg-white/10 border border-white/15 p-5"
                  >
                    <span className="text-[28px] font-extrabold text-white leading-none">{stat.number}</span>
                    <span className="text-sm text-white/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 7: What Happens on Moving Day ────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="moving-day-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="moving-day-heading"
              headline="What happens on moving day"
              subheadline="A step-by-step breakdown of how we execute your commercial relocation."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={MOVING_DAY_STEPS}
              cta={{ label: "Book My Commercial Move", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 8: IT Equipment Note ──────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="it-note-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="rounded-[20px] bg-[#F7F9FC] border border-light-grey/60 p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 md:gap-10">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-brand/10">
                <Monitor className="size-6 text-brand" aria-hidden />
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <h2 id="it-note-heading" className="text-xl md:text-2xl font-extrabold text-navy leading-tight">
                  IT equipment and infrastructure
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  We carefully pack, protect and transport monitors, desktop towers, servers, printers and other hardware as part of your commercial relocation. We work alongside your IT team or IT provider, who handles cabling, network configuration and system setup at the new premises. Our role is the physical move — their role is the technical setup. If you don&apos;t have an IT team, we can recommend trusted partners in Dubai.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: Our Commercial Moving Process ─────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How your business relocation works"
              subheadline="A structured five-step process built around your business requirements."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={PROCESS_STEPS}
              cta={{ label: "Book My Commercial Move", href: "/quote" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10: Business Districts We Serve ───────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Commercial movers across Dubai"
              subheadline="We cover all major business districts and commercial zones in Dubai."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaPills
              areas={BUSINESS_DISTRICTS}
              cta={{ label: "Check Availability", href: "/contact" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 11: Customer Reviews ─────────────────────────────── */}
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
              headline="Commercial relocation reviews"
              subheadline="What businesses say about relocating with WeMoveStuff."
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

      {/* ── Section 12: FAQ ────────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Commercial Moving FAQ" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 13: Built Around Business Continuity ─────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="continuity-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-6 max-w-3xl">
              <h2
                id="continuity-heading"
                className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-navy leading-tight tracking-tight text-balance"
              >
                Built around business continuity
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Commercial relocations require planning, communication and organisation. WeMoveStuff focuses on keeping disruption to a minimum while ensuring your business assets are relocated efficiently.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Business continuity features">
                {CONTINUITY_BENEFITS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-dark-text">
                    <Check className="size-4 text-brand shrink-0" aria-hidden />
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
                Get Commercial Quote
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Partnership Callout ─────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="partners-callout-heading">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="rounded-[20px] bg-white border border-[#E5EBF5] shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-xs font-semibold text-brand uppercase tracking-wider">Property Professionals</p>
                <h2 id="partners-callout-heading" className="text-xl md:text-2xl font-extrabold text-navy leading-tight">
                  Do you manage commercial properties or relocate businesses?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                  WeMoveStuff works with property managers, commercial property teams and relocation companies who need reliable moving support for business clients. If you regularly coordinate commercial moves, we can discuss how to work together.
                </p>
              </div>
              <div className="shrink-0">
                <Button render={<Link href="/partnerships" />} variant="secondary" size="md">
                  View Partnerships
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 14: Related Services ─────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="related-services-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="related-services-heading"
              headline="Related services"
              subheadline="Add these services to your commercial move for a fully managed relocation."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Packing Services",
                description: "Professional packing of workstations, filing systems, equipment and office contents using appropriate protective materials.",
                href: "/services/packing-services",
                icon: Package,
              },
              {
                title: "Furniture Assembly",
                description: "Office desks, shelving, meeting tables and storage units dismantled before the move and fully reassembled at your new premises.",
                href: "/services/furniture-assembly",
                icon: Wrench,
              },
              {
                title: "TV & Screen Installation",
                description: "Meeting room displays, reception screens and office monitors installed and positioned at your new premises.",
                href: "/services/tv-installation",
                icon: Monitor,
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="group flex flex-col gap-4 rounded-[16px] bg-[#F7F9FC] border border-light-grey/60 p-6 hover:border-brand/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all h-full"
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
        headline="Planning an office or commercial move?"
        body="Speak with our team today and receive a tailored commercial relocation quote for your business."
        primaryCTA={{ label: "Get Commercial Moving Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/commercial-moving/commercial-moving-final-cta.jpg"
      />
    </>
  );
}
