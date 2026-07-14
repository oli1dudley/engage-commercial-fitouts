import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Home,
  Building2,
  Briefcase,
  Package,
  Wrench,
  Tv,
  ShieldCheck,
  Heart,
  MessageSquare,
  Star,
  ClipboardList,
  MessageCircle,
  Truck,
  Users,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import SectionHeader from "@/components/shared/SectionHeader";
import AreaPills from "@/components/shared/AreaPills";
import ReviewCard from "@/components/shared/ReviewCard";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generatePageMetadata({
  title: "About WeMoveStuff | Moving Company Dubai",
  description:
    "Learn more about WeMoveStuff, a Dubai-based moving and relocation company providing apartment, villa and commercial moving services across Dubai.",
  path: "/about",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    step: "01",
    era: "Founded",
    title: "WeMoveStuff Established",
    description:
      "Started with a focus on apartment and villa moving in Dubai Marina, Downtown Dubai and Business Bay.",
  },
  {
    step: "02",
    era: "Growth",
    title: "Service Expansion",
    description:
      "Expanded to include packing services, furniture assembly, TV installation and commercial relocations.",
  },
  {
    step: "03",
    era: "Coverage",
    title: "Dubai-Wide Operations",
    description:
      "Extended coverage to all major communities and districts across Dubai, from JVC to Palm Jumeirah.",
  },
  {
    step: "04",
    era: "Today",
    title: "Trusted Moving Partner",
    description:
      "Providing complete relocation support for residents, businesses and property professionals across Dubai.",
  },
];

const WHAT_SETS_US_APART = [
  {
    icon: ShieldCheck,
    title: "Fully Insured Service",
    description:
      "Every move we carry out is covered. Your belongings are protected from the moment we start packing to the final placement at your new property.",
  },
  {
    icon: Package,
    title: "Professional Packing Materials",
    description:
      "We use high-quality boxes, bubble wrap, furniture blankets and tape — each selected for the specific items being packed and moved.",
  },
  {
    icon: Wrench,
    title: "Furniture Dismantling & Assembly",
    description:
      "Our team dismantles furniture before the move and reassembles it at your new property. All tools and technical expertise included.",
  },
  {
    icon: Home,
    title: "Apartment & Villa Specialists",
    description:
      "Experienced in residential moves of all sizes — from studios to large villas across all of Dubai's major communities.",
  },
  {
    icon: Building2,
    title: "Building Access & Permit Support",
    description:
      "We coordinate building access, service lift bookings and move permits as part of the planning process so you don't have to.",
  },
  {
    icon: Truck,
    title: "Secure Transportation Across Dubai",
    description:
      "Equipped vehicles and experienced drivers ensure your belongings reach your new property safely, on time and in perfect condition.",
  },
];

const HOW_WE_WORK = [
  {
    step: "01",
    title: "Request Your Quote",
    description:
      "Tell us your move details — property type, location, date and services needed. We respond with a clear, tailored and transparent quote.",
  },
  {
    step: "02",
    title: "Move Planning & Scheduling",
    description:
      "We plan building access, lift coordination, parking and timing so moving day is organised from start to finish.",
  },
  {
    step: "03",
    title: "Professional Packing & Transportation",
    description:
      "Our team packs carefully using quality materials, loads securely and transports everything safely to your new property.",
  },
  {
    step: "04",
    title: "Delivery, Assembly & Placement",
    description:
      "We unload, reassemble furniture and place items exactly where you need them so you can settle in immediately.",
  },
];

const COMMITMENT = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We arrive on time and communicate clearly throughout the move.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Every item is packed, protected and handled with attention.",
  },
  {
    icon: MessageSquare,
    title: "Transparency",
    description:
      "Clear quotations with no hidden surprises.",
  },
  {
    icon: Star,
    title: "Professionalism",
    description:
      "Trained teams, proper equipment and consistent service standards.",
  },
];

const SERVICES = [
  {
    icon: Home,
    title: "Apartment Moving",
    description:
      "Full apartment relocation — packing, loading, transport and setup.",
    href: "/services/apartment-moving",
  },
  {
    icon: Building2,
    title: "Villa Moving",
    description:
      "End-to-end villa moves with furniture dismantling and careful handling.",
    href: "/services/villa-moving",
  },
  {
    icon: Briefcase,
    title: "Commercial Moving",
    description:
      "Office and business relocations managed to minimise disruption.",
    href: "/services/commercial-moving",
  },
  {
    icon: Package,
    title: "Packing Services",
    description:
      "Professional packing using appropriate materials for every item type.",
    href: "/services/packing-services",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description:
      "Furniture dismantled, transported and reassembled at your new property.",
    href: "/services/furniture-assembly",
  },
  {
    icon: Tv,
    title: "TV Installation",
    description:
      "TV removal, transport support and professional reinstallation.",
    href: "/services/tv-installation",
  },
];

const TEAM_STANDARDS = [
  {
    icon: Users,
    title: "Trained Movers",
    description:
      "Every mover on our team is trained to handle your belongings professionally.",
  },
  {
    icon: ShieldCheck,
    title: "Background Checked",
    description:
      "All team members are vetted before joining the WeMoveStuff team.",
  },
  {
    icon: Package,
    title: "Properly Equipped",
    description:
      "Professional tools, materials and protection for every move type.",
  },
  {
    icon: Heart,
    title: "Customer-Focused",
    description:
      "We adapt to your needs and timeline — not the other way around.",
  },
  {
    icon: ClipboardList,
    title: "Organised Process",
    description:
      "Structured workflows ensure nothing is missed across every move.",
  },
];

const DUBAI_AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JVC",
  "JLT",
  "Palm Jumeirah",
  "JVT",
  "Dubai Hills",
  "Arabian Ranches",
  "Al Barsha",
  "Mirdif",
  "Damac Hills",
  "The Springs",
  "The Meadows",
  "Dubai Sports City",
  "Motor City",
  "Dubai Creek Harbour",
  "Silicon Oasis",
  "Town Square",
  "Dubai South",
];

const REVIEWS = [
  {
    name: "Ahmed R.",
    review:
      "Professional, organised and easy to deal with. The move went exactly as planned.",
  },
  {
    name: "Sarah M.",
    review:
      "The move was smooth from start to finish. Everything arrived in perfect condition.",
  },
  {
    name: "Omar K.",
    review:
      "Excellent communication and careful handling of furniture throughout the whole move.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What services does WeMoveStuff provide?",
    answer:
      "WeMoveStuff provides a full range of moving and relocation services in Dubai including apartment moving, villa moving, commercial office moves, packing services, furniture dismantling and assembly, and TV mounting and installation. Services can be booked individually or as a combined package.",
  },
  {
    question: "Do you move apartments and villas?",
    answer:
      "Yes. We move all types of residential properties across Dubai — from studio apartments to large multi-bedroom villas. Our team manages the full process including packing, furniture handling, loading, transport and setup.",
  },
  {
    question: "Do you provide packing services?",
    answer:
      "Yes. Our packing service is available as a standalone booking or as part of a full move. We supply all packing materials and pack everything systematically so unpacking at your new property is straightforward.",
  },
  {
    question: "Do you move offices and businesses?",
    answer:
      "Yes. We provide commercial moving services for offices, retail units and other business premises across Dubai, planned to minimise downtime and disruption to your operations.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About WeMoveStuff", url: "/about" },
        ])}
      />
      <StructuredData data={organizationSchema()} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden pt-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, rgba(36,144,255,0.05) 0%, transparent 50%)",
          }}
          aria-hidden
        />

        <div className="max-container container-padding py-14 md:py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-navy transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-navy">About</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Heading + intro + CTAs */}
            <FadeUp className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-[36px] md:text-[42px] lg:text-[56px] font-extrabold text-navy leading-tight tracking-tight text-balance">
                  About WeMoveStuff
                </h1>
                <p className="text-lg md:text-xl font-medium text-dark-text leading-snug">
                  Helping people and businesses move across Dubai with less
                  stress and more confidence.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                  WeMoveStuff was built around a simple idea: moving should be
                  organised, reliable and far less stressful than most people
                  expect. We handle apartments, villas and offices across Dubai
                  with the same care and professionalism every time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  render={<Link href="/quote" />}
                  variant="primary"
                  size="lg"
                >
                  Get Free Quote
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  render={
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Us
                </Button>
              </div>

              <ul
                className="flex flex-wrap gap-x-5 gap-y-2"
                aria-label="Service highlights"
              >
                {[
                  "Apartment Moving",
                  "Villa Moving",
                  "Commercial Moving",
                  "Packing Services",
                  "Dubai-Wide Coverage",
                ].map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-1.5 text-sm font-medium text-dark-text"
                  >
                    <Check className="size-4 text-success shrink-0" aria-hidden />
                    {badge}
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Right: Services card */}
            <FadeUp delay={0.15}>
              <div className="rounded-[20px] border border-[#E5EBF5] shadow-[0_8px_40px_rgba(0,31,91,0.10)] overflow-hidden">
                <div className="bg-navy px-7 py-5">
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                    What We Handle
                  </p>
                </div>
                <div className="bg-white p-7 md:p-8 flex flex-col gap-4">
                  {[
                    { icon: Home, label: "Apartment Moving" },
                    { icon: Building2, label: "Villa Moving" },
                    { icon: Briefcase, label: "Commercial Moving" },
                    { icon: Package, label: "Packing Services" },
                    { icon: Wrench, label: "Furniture Assembly" },
                    { icon: Tv, label: "TV Installation" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                        <Icon
                          className="size-4 text-brand"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </div>
                      <span className="text-sm font-semibold text-navy">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 2: Our Story — Timeline ──────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="story-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="story-heading"
              headline="Our story"
              subheadline="How WeMoveStuff grew into Dubai's trusted residential and commercial moving company."
            />
          </FadeUp>

          <div className="relative">
            <div
              className="absolute left-5 top-5 bottom-5 w-px bg-[#E5EBF5] hidden sm:block"
              aria-hidden
            />
            <div className="flex flex-col gap-0">
              {TIMELINE.map((milestone, index) => (
                <FadeUp key={milestone.title} delay={index * 0.08}>
                  <div className="flex gap-6 items-start pb-10 last:pb-0">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center z-10 shadow-[0_0_0_4px_#F7F9FC] ring-1 ring-[#E5EBF5]">
                      <span className="text-[11px] font-extrabold text-white tracking-tight">
                        {milestone.step}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-1.5">
                      <span className="text-xs font-semibold text-brand uppercase tracking-wider">
                        {milestone.era}
                      </span>
                      <h3 className="text-[18px] md:text-[20px] font-extrabold text-navy leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: What Sets Us Apart ────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="apart-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="apart-heading"
              headline="What sets us apart"
              subheadline="The capabilities and commitments that make WeMoveStuff the trusted choice for Dubai relocations."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_SETS_US_APART.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group flex flex-col gap-4 rounded-[16px] bg-white border border-[#E5EBF5] shadow-[0_2px_12px_rgba(0,31,91,0.06)] p-6 h-full transition-all duration-300 ease-out hover:shadow-[0_10px_32px_rgba(0,31,91,0.13)] hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                    <item.icon
                      className="size-5 text-brand"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[16px] font-extrabold text-navy leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 4: How We Work ────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="process-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              headline="How we work"
              subheadline="A clear, organised process from your first contact to final setup at your new property."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_WE_WORK.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="flex flex-col gap-5 rounded-[16px] bg-white border border-[#E5EBF5] shadow-[0_2px_12px_rgba(0,31,91,0.06)] p-6 h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                      <span className="text-[11px] font-extrabold text-white tracking-tight">
                        {step.step}
                      </span>
                    </div>
                    {index < HOW_WE_WORK.length - 1 && (
                      <div
                        className="hidden lg:block flex-1 h-px bg-[#E5EBF5]"
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[16px] font-extrabold text-navy leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp className="flex justify-center">
            <Button render={<Link href="/quote" />} variant="primary" size="lg">
              Start Your Move
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: Our Commitment ─────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="commitment-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="commitment-heading"
              headline="Our commitment"
              subheadline="The principles that shape how we plan every move and serve every customer."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {COMMITMENT.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col gap-5 rounded-[20px] bg-white border border-[#E5EBF5] shadow-[0_4px_24px_rgba(0,31,91,0.07)] p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                    <item.icon
                      className="size-6 text-brand"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[20px] font-extrabold text-navy leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 6: Our Services ───────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="services-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              headline="Complete relocation services"
              subheadline="Everything you need for a managed, stress-free move — all from one company."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="group flex items-start gap-4 rounded-[16px] bg-white border border-[#E5EBF5] shadow-[0_2px_8px_rgba(0,31,91,0.05)] p-5 h-full transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,31,91,0.10)] hover:border-brand/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center shrink-0 mt-0.5">
                    <service.icon
                      className="size-5 text-brand"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <h3 className="text-[15px] font-extrabold text-navy leading-tight group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1 text-brand text-xs font-semibold mt-2 group-hover:gap-2 transition-all duration-200">
                      Learn more
                      <ArrowRight className="size-3" aria-hidden />
                    </div>
                  </div>
                </Link>
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

      {/* ── Section 7: Our Team Standards ────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="team-heading">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              id="team-heading"
              headline="Our team standards"
              subheadline="Every WeMoveStuff mover is held to these standards on every job."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_STANDARDS.map((standard) => (
              <StaggerItem key={standard.title}>
                <div className="flex flex-col items-center text-center gap-4 rounded-[16px] bg-white border border-[#E5EBF5] shadow-[0_2px_8px_rgba(0,31,91,0.05)] p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                    <standard.icon
                      className="size-6 text-brand"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[16px] font-extrabold text-navy leading-tight">
                      {standard.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 8: Built For Dubai Moves ─────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="dubai-heading">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <h2
                  id="dubai-heading"
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight text-balance"
                >
                  Built for Dubai moves
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Moving in Dubai has specific requirements — high-rise access,
                  service lift bookings, gated community entry and building
                  permits all need coordinating. We understand how Dubai moves
                  work and we plan every job accordingly.
                </p>
                <ul
                  className="flex flex-col gap-3"
                  aria-label="Dubai moving expertise"
                >
                  {[
                    "Apartment and villa moving across Dubai",
                    "High-rise building and lift access coordination",
                    "Gated community and compound access support",
                    "Parking and loading access planning",
                    "Furniture dismantling for high-rise moves",
                    "Building management coordination where needed",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-white/90"
                    >
                      <Check
                        className="size-4 text-[#4ade80] shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Button
                    render={<Link href="/services" />}
                    variant="primary"
                    size="lg"
                  >
                    View Our Services
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    render={<Link href="/partnerships" />}
                    variant="secondary"
                    size="lg"
                  >
                    Partnerships
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col gap-6">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  Coverage Across Dubai
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {DUBAI_AREAS.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 text-sm font-medium text-white/80"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                        aria-hidden
                      />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 9: Areas We Serve ─────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Moving services across Dubai"
              subheadline="We cover all major communities and districts across the emirate."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaPills
              areas={DUBAI_AREAS}
              cta={{ label: "Check Availability", href: "/contact" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10: Customer Reviews ──────────────────────────────── */}
      <section
        className="relative bg-navy section-padding overflow-hidden"
        aria-labelledby="reviews-heading"
      >
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
              headline="What customers say"
              subheadline="Feedback from customers who trusted WeMoveStuff with their home and office moves."
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

      {/* ── Section 11: FAQ ───────────────────────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="faq-heading">
        <div className="max-container container-padding flex flex-col gap-10 max-w-3xl mx-auto">
          <FadeUp>
            <SectionHeader id="faq-heading" headline="Frequently Asked Questions" />
          </FadeUp>

          <FadeUp delay={0.08}>
            <FAQAccordion items={FAQ_ITEMS} />
          </FadeUp>

          <FadeUp className="flex justify-center" delay={0.12}>
            <Button render={<Link href="/faq" />} variant="secondary" size="md">
              View Full FAQ
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 12: Final CTA ─────────────────────────────────────── */}
      <CTASection
        headline="Ready to Move With Confidence?"
        body="Get a fast, transparent quote from Dubai's trusted moving specialists."
        primaryCTA={{ label: "Get Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{
          label: "WhatsApp Us",
          href: whatsappUrl,
          variant: "whatsapp",
          external: true,
        }}
      />
    </>
  );
}
