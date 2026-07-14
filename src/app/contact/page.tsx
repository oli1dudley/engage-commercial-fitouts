import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  Tag,
  Package,
  Briefcase,
  Wrench,
  Tv,
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, contactPageSchema, organizationSchema } from "@/lib/schema";
import { siteConfig, whatsappUrl, phoneHref } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import AreaPills from "@/components/shared/AreaPills";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "@/components/forms/ContactForm";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact WeMoveStuff | Dubai Moving Company",
  description: "Contact WeMoveStuff for apartment moving, villa moving, office relocations, packing and furniture assembly services across Dubai.",
  path: "/contact",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team. The fastest way to discuss your move and get answers immediately.",
    action: { label: "Call Now", href: phoneHref, external: false },
    detail: siteConfig.phone,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    description: "Send us photos, move details and questions instantly. We respond quickly via WhatsApp.",
    action: { label: "WhatsApp Us", href: whatsappUrl, external: true },
    detail: "Available 7 days a week",
  },
  {
    icon: FileText,
    title: "Request A Quote",
    description: "Submit your moving details online and we'll come back to you with a personalised quotation.",
    action: { label: "Get Quote", href: "/quote", external: false },
    detail: "Free, no obligation",
  },
];

const BUSINESS_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Dubai, UAE",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Monday – Sunday",
    subValue: "07:00 – 20:00",
    href: null,
  },
];

const CONTACT_AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JVC",
  "JLT",
  "Dubai Hills",
  "Arabian Ranches",
  "Palm Jumeirah",
  "DIFC",
  "Al Barsha",
  "Mirdif",
  "Damac Hills",
];

const WHY_CONTACT_FEATURES = [
  {
    icon: HelpCircle,
    title: "Moving Advice",
    description: "Not sure where to start? Our team can walk you through what's involved and what to expect.",
  },
  {
    icon: Tag,
    title: "Quote Requests",
    description: "Get a personalised quote for any move type — apartment, villa, commercial or specialist service.",
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Ask about full packing, partial packing, fragile item protection or unpacking support.",
  },
  {
    icon: Briefcase,
    title: "Commercial Relocations",
    description: "Discuss your office move timeline, requirements and business continuity plan with our team.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Enquire about furniture dismantling, assembly or relocation as a standalone or add-on service.",
  },
  {
    icon: Tv,
    title: "TV Installation",
    description: "Ask about TV removal, wall mounting, reinstallation or office screen setup.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly do you respond?",
    answer:
      "We aim to respond to all enquiries on the same day, typically within a few hours during business hours (Monday to Sunday, 07:00–20:00). For urgent enquiries, WhatsApp is the fastest way to reach us.",
  },
  {
    question: "Can I get a quote through WhatsApp?",
    answer:
      "Yes. Send your move details — property type, size, current location, destination and preferred date — via WhatsApp and we'll provide a quote directly in the conversation. It's one of the most popular ways customers contact us.",
  },
  {
    question: "Do you provide moving services across Dubai?",
    answer:
      "Yes. We cover all major communities and districts across Dubai including Dubai Marina, Downtown, Business Bay, JVC, JLT, Dubai Hills, Arabian Ranches, Palm Jumeirah, DIFC, Al Barsha, Mirdif and more. Contact us to confirm availability for your area.",
  },
  {
    question: "Do you move offices and commercial spaces?",
    answer:
      "Yes. We provide commercial moving services for offices, retail units, warehouses and other business premises. Contact us to discuss your requirements, timeline and how we can minimise disruption to your business during the move.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact WeMoveStuff", url: "/contact" },
        ])}
      />
      <StructuredData data={contactPageSchema()} />
      <StructuredData data={organizationSchema()} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Contact WeMoveStuff"
        subheadline="Questions about your move? Our team is ready to help."
        body="Whether you're planning an apartment move, villa relocation, office move or simply need packing support, we're here to answer your questions."
        primaryCTA={{ label: "Call Now", href: phoneHref, variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* ── Section 2: Contact Options ────────────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="contact-options-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <h2
              id="contact-options-heading"
              className="text-[24px] md:text-[32px] font-extrabold text-white leading-tight tracking-tight text-center"
            >
              Choose the easiest way to reach us
            </h2>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <StaggerItem key={method.title}>
                  <div className="flex flex-col gap-4 rounded-[20px] bg-white/10 border border-white/20 p-6 md:p-7 h-full hover:bg-white/15 transition-colors">
                    <div className="flex size-12 items-center justify-center rounded-[14px] bg-white/15">
                      <Icon className="size-6 text-white" aria-hidden />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <h3 className="text-base font-bold text-white">{method.title}</h3>
                      <p className="text-sm text-white/75 leading-relaxed">{method.description}</p>
                      {method.detail && (
                        <p className="text-xs font-medium text-white/50 mt-1">{method.detail}</p>
                      )}
                    </div>
                    <div className="mt-auto pt-2">
                      {method.action.external ? (
                        <Button
                          render={
                            <a
                              href={method.action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          }
                          variant="primary"
                          size="md"
                          className="w-full"
                        >
                          {method.action.label}
                          <ArrowRight className="size-4" />
                        </Button>
                      ) : (
                        <Button
                          render={<Link href={method.action.href} />}
                          variant="primary"
                          size="md"
                          className="w-full"
                        >
                          {method.action.label}
                          <ArrowRight className="size-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 3: Contact Form ───────────────────────────────────── */}
      <section
        id="contact-form"
        className="bg-[#F7F9FC] section-padding"
        aria-labelledby="form-heading"
      >
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
            {/* Form card */}
            <FadeUp>
              <div className="rounded-[20px] bg-white shadow-[0_4px_32px_rgba(0,31,91,0.08)] border border-light-grey/60 p-6 md:p-10">
                <h2
                  id="form-heading"
                  className="text-[24px] md:text-[30px] font-extrabold text-navy leading-tight tracking-tight mb-6"
                >
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </FadeUp>

            {/* Side panel */}
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-4 lg:sticky lg:top-24">
                {/* Prefer direct contact */}
                <div className="rounded-[16px] bg-navy text-white p-6 flex flex-col gap-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                    Prefer direct contact?
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={phoneHref}
                      className="flex items-center gap-3 rounded-[12px] bg-white/10 border border-white/20 px-4 py-3 hover:bg-white/15 transition-colors group"
                      aria-label={`Call us at ${siteConfig.phone}`}
                    >
                      <Phone className="size-4 text-white/70 shrink-0" aria-hidden />
                      <div className="min-w-0">
                        <p className="text-xs text-white/60">Call us</p>
                        <p className="text-sm font-semibold text-white truncate">
                          {siteConfig.phone}
                        </p>
                      </div>
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-[12px] bg-white/10 border border-white/20 px-4 py-3 hover:bg-white/15 transition-colors group"
                      aria-label="Open WhatsApp conversation"
                    >
                      <MessageCircle className="size-4 text-white/70 shrink-0" aria-hidden />
                      <div>
                        <p className="text-xs text-white/60">WhatsApp</p>
                        <p className="text-sm font-semibold text-white">WhatsApp Us</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="rounded-[16px] bg-white border border-light-grey/60 p-5 flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Response time
                  </p>
                  <p className="text-sm font-bold text-navy">Same day response</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We reply to all messages during business hours — Monday to Sunday, 07:00–20:00.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 4: Business Information ──────────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="business-info-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="business-info-heading"
              headline="Business information"
              subheadline="Everything you need to reach us directly."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUSINESS_INFO.map((info) => {
              const Icon = info.icon;
              const inner = (
                <div className="flex flex-col gap-3 rounded-[16px] bg-[#F7F9FC] border border-light-grey/60 px-6 py-5 h-full">
                  <div className="flex size-10 items-center justify-center rounded-[12px] bg-brand/10">
                    <Icon className="size-5 text-brand" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-base font-bold text-navy">{info.value}</p>
                    {"subValue" in info && info.subValue && (
                      <p className="text-sm text-muted-foreground">{info.subValue}</p>
                    )}
                  </div>
                </div>
              );

              return (
                <StaggerItem key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="block h-full hover:scale-[1.02] transition-transform"
                      aria-label={`${info.label}: ${info.value}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 5: Service Areas ──────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Moving services across Dubai"
              subheadline="We cover all major communities and districts. Contact us to confirm availability for your area."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaPills
              areas={CONTACT_AREAS}
              cta={{ label: "Check Availability", href: "/contact#contact-form" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 6: Why Contact WeMoveStuff ───────────────────────── */}
      <section className="bg-white section-padding" aria-labelledby="why-contact-heading">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              id="why-contact-heading"
              headline="Why customers contact us"
              subheadline="From quick questions to detailed move planning — our team handles it all."
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CONTACT_FEATURES.map((feature) => (
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

      {/* ── Section 7: FAQ Preview ────────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="faq-heading">
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

      {/* ── Section 8: Final CTA ──────────────────────────────────────── */}
      <CTASection
        headline="Ready to plan your move?"
        body="Contact our team today and let us help organise your next move."
        primaryCTA={{ label: "Call Now", href: phoneHref, variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
      />
    </>
  );
}
