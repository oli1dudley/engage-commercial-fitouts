import type { Metadata } from "next";
import Link from "next/link";
import { Check, Building2, Home, Briefcase, Users, MapPin, Package, MessageSquare, Calendar, ArrowRight } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import CTASection from "@/components/shared/CTASection";
import PageHero from "@/components/shared/PageHero";
import FeatureCard from "@/components/shared/FeatureCard";
import SectionHeader from "@/components/shared/SectionHeader";
import ProcessSteps from "@/components/shared/ProcessSteps";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Moving Partnerships for Property Professionals in Dubai | WeMoveStuff",
  description: "WeMoveStuff partners with property managers, real estate agencies, relocation companies and developers to provide reliable moving support for clients and tenants across Dubai.",
  path: "/partnerships",
});

export default function PartnershipsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Partnerships", url: "/partnerships" }])} />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-light-grey/40">
        <div className="max-container container-padding py-3">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Partnerships" }]} />
        </div>
      </div>

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        variant="split"
        headline="Moving Support For Property Professionals In Dubai"
        subheadline="Reliable moving and relocation support for property managers, real estate agencies, relocation firms, developers and landlords across Dubai."
        body="WeMoveStuff works with property professionals who need dependable moving support for clients, tenants and residents. We handle the move so your team can focus on everything else."
        primaryCTA={{ label: "Discuss a Partnership", href: "#partner-form", variant: "primary" }}
        secondaryCTA={{ label: "View Our Services", href: "/services", variant: "secondary" }}
        trustBadges={["Residential & Commercial", "Dubai-Wide Coverage", "Full-Service Moving", "Packing & Assembly Support"]}
      />

      {/* ── Section 2: Partner With A Moving Company ─────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-5">
                <h2 className="text-[28px] md:text-[36px] font-extrabold text-navy leading-tight tracking-tight text-balance">
                  Partner With A Moving Company You Can Trust
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    WeMoveStuff supports property professionals by providing reliable moving and relocation services for apartment and villa clients, tenants and residents across Dubai.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    When clients and tenants are moving in or out, having a dependable moving company to refer them to makes a real difference. We handle the move — packing, furniture handling, transport, reassembly and setup — so the transition is smoother for everyone involved.
                  </p>
                </div>
                <Button render={<Link href="#partner-form" />} variant="primary" size="md" className="self-start">
                  Discuss a Partnership
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <ImagePlaceholder ratio="16:9" label="Partnership discussion" className="rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,31,91,0.10)]" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Who We Work With ──────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              headline="Who We Work With"
              subheadline="WeMoveStuff supports a range of property and relocation professionals across Dubai."
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Building2, title: "Property Management Companies", description: "Supporting move-in and move-out coordination for managed residential and commercial properties." },
              { icon: Home, title: "Real Estate Agencies", description: "Helping buyers and tenants settle into new properties with professional moving support." },
              { icon: Briefcase, title: "Relocation Companies", description: "Providing reliable local moving services as part of complete relocation packages for employees and families." },
              { icon: Users, title: "Property Developers", description: "Supporting residents moving into new developments with organised moving assistance on handover." },
              { icon: MapPin, title: "Landlords & Serviced Operators", description: "Move-in and move-out support for landlords managing single or multiple residential properties." },
              { icon: Building2, title: "Commercial Property Teams", description: "Office and commercial relocation support for businesses moving into new commercial premises." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 4: How We Support Your Clients ───────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              headline="How We Support Your Clients"
              subheadline="Practical moving support that makes transitions smoother for clients and tenants."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {[
                "Apartment, villa and commercial moving",
                "Smooth move-in and move-out support",
                "Professional packing and unpacking",
                "Furniture dismantling and reassembly",
                "TV removal and reinstallation support",
                "Clear communication before and during the move",
                "Dubai-wide service coverage",
                "Flexible scheduling where possible",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-dark-text">
                  <Check className="size-4 text-brand shrink-0 mt-0.5" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: Why Partners Choose WeMoveStuff ───────────────── */}
      <section className="bg-[#F7F9FC] section-padding">
        <div className="max-container container-padding flex flex-col gap-10">
          <FadeUp>
            <SectionHeader
              headline="Why Partners Choose WeMoveStuff"
              subheadline="Reliable, practical moving support that helps property professionals deliver a better client experience."
            />
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Package, title: "Full-Service Moving", description: "Packing, transport, furniture handling, reassembly and setup — all managed in one place." },
              { icon: MessageSquare, title: "Clear Communication", description: "Straightforward communication before, during and after every move." },
              { icon: Calendar, title: "Reliable Scheduling", description: "We commit to agreed timings and keep partners and clients informed throughout." },
              { icon: Home, title: "Residential & Commercial", description: "Supporting apartment moves, villa relocations and commercial moves across Dubai." },
              { icon: MapPin, title: "Dubai-Wide Coverage", description: "Covering all major communities and business districts across Dubai." },
              { icon: ArrowRight, title: "Practical Support", description: "Built around making the moving process simpler for clients, tenants and property professionals alike." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Section 6: ProcessSteps ───────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-container container-padding flex flex-col gap-12">
          <FadeUp>
            <SectionHeader
              headline="Simple Partnership Process"
              subheadline="Getting started is straightforward."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ProcessSteps
              steps={[
                { title: "Get In Touch", description: "Contact us to discuss your business and how we can support your clients or tenants." },
                { title: "Tell Us About Your Needs", description: "Share details about your properties, the type of moves involved and how you would like to work together." },
                { title: "Agree The Approach", description: "We agree the best way to handle referrals or move requests — keeping the process simple for your team." },
                { title: "We Help Your Clients Move", description: "Your clients or tenants get reliable, professional moving support with clear communication throughout." },
              ]}
              cta={{ label: "Start a Partnership Discussion", href: "#partner-form" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 7: Partnership Enquiry Form ──────────────────────── */}
      <section id="partner-form" className="bg-[#F7F9FC] section-padding">
        <div className="max-container container-padding">
          <FadeUp>
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-navy leading-tight tracking-tight">
                Partnership Enquiry
              </h2>
              <p className="text-base text-muted-foreground max-w-xl">
                Tell us about your business and we will get in touch to discuss how we can work together.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-start">
            {/* Form */}
            <FadeUp delay={0.05}>
              <div className="rounded-[20px] bg-white shadow-[0_4px_32px_rgba(0,31,91,0.08)] border border-[#E5EBF5] p-6 md:p-10">
                <PartnershipForm />
              </div>
            </FadeUp>

            {/* Sidebar */}
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-4 lg:sticky lg:top-24">
                {/* Navy contact card */}
                <div className="rounded-[16px] bg-navy p-6 flex flex-col gap-4">
                  <p className="text-sm font-semibold text-white/60 uppercase tracking-wider">Partnership Enquiries</p>
                  <p className="text-base font-bold text-white leading-snug">
                    We respond to all partnership enquiries as quickly as possible.
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Tell us about your business and your clients&apos; moving needs — we&apos;ll follow up to discuss the details.
                  </p>
                  <Button
                    render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                    variant="whatsapp"
                    size="sm"
                  >
                    WhatsApp Us
                  </Button>
                </div>

                {/* Services list card */}
                <div className="rounded-[16px] bg-white border border-[#E5EBF5] p-5 flex flex-col gap-3">
                  <p className="text-xs font-semibold text-navy uppercase tracking-wider">Services We Provide</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Apartment and villa moving",
                      "Commercial relocation support",
                      "Packing and furniture services",
                      "TV removal and reinstallation",
                      "Dubai-wide service coverage",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-dark-text">
                        <Check className="size-3.5 text-brand shrink-0" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ───────────────────────────────────────────── */}
      <CTASection
        headline="Ready to discuss a moving partnership?"
        body="Whether you're a property manager, real estate agency or relocation firm, WeMoveStuff is ready to support your clients and tenants across Dubai."
        primaryCTA={{ label: "Send a Partnership Enquiry", href: "#partner-form", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/partnerships/partnerships-cta.jpg"
      />
    </>
  );
}
