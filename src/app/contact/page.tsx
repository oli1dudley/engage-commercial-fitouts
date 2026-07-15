import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";
import { siteConfig, phoneHref } from "@/lib/site.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import ProjectEnquiryForm from "@/components/forms/ProjectEnquiryForm";
import { FadeUp } from "@/components/ui/motion";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact & Project Consultation Dubai",
  description:
    "Tell us about your commercial property or office project. Share the property condition, intended outcome and expected timeline, and the Engage team will arrange the appropriate next step.",
  path: "/contact",
});

const BREADCRUMBS: BreadcrumbItem[] = [{ label: "Contact" }];

const NEXT_STEPS = [
  {
    title: "We review the information",
    description: "The team assesses the property condition, objective and likely project shape.",
  },
  {
    title: "We arrange the right next step",
    description: "Depending on the project, that may be a call, a meeting or a site visit.",
  },
  {
    title: "The project takes shape",
    description: "Brief, scope, budget and programme are developed before any works begin.",
  },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
          contactPageSchema(),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Contact & Project Consultation"
        headline="Tell Us About Your Commercial Property or Office Project"
        body="Share the property condition, intended outcome and expected timeline. The Engage team will review the initial information and arrange the appropriate next step."
        breadcrumbs={BREADCRUMBS}
        variant="centered"
      />

      {/* ── Form + sidebar ───────────────────────────────────────────── */}
      <section className="bg-ink section-padding" aria-label="Project enquiry">
        <div className="max-container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-12 lg:gap-16 items-start">
            {/* Form */}
            <FadeUp>
              <div className="rounded-[6px] bg-ink-raised border border-line p-6 md:p-10">
                <h2 className="text-xl md:text-2xl font-semibold text-cream mb-8">
                  Project Enquiry
                </h2>
                <ProjectEnquiryForm />
              </div>
            </FadeUp>

            {/* Sidebar */}
            <FadeUp delay={0.1} className="flex flex-col gap-10 lg:sticky lg:top-28">
              {/* What happens next */}
              <div className="flex flex-col gap-6">
                <h2 className="eyebrow">What Happens Next</h2>
                <ol className="flex flex-col gap-6">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-[4px] border border-gold/40 bg-ink-panel font-heading text-xs font-semibold text-gold-bright" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold text-cream">{step.title}</h3>
                        <p className="text-sm text-stone leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4 rounded-[6px] bg-ink-panel border border-line p-6">
                <h2 className="eyebrow">Contact Details</h2>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-3 text-sm text-cream/75">
                    <MapPin className="size-4 mt-0.5 shrink-0 text-gold" aria-hidden />
                    {siteConfig.address.locality}, {siteConfig.address.countryName}
                  </li>
                  {siteConfig.phone && (
                    <li>
                      <a href={phoneHref} className="flex items-start gap-3 text-sm text-cream/75 hover:text-cream transition-colors">
                        <Phone className="size-4 mt-0.5 shrink-0 text-gold" aria-hidden />
                        {siteConfig.phone}
                      </a>
                    </li>
                  )}
                  {siteConfig.email && (
                    <li>
                      <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-sm text-cream/75 hover:text-cream transition-colors">
                        <Mail className="size-4 mt-0.5 shrink-0 text-gold" aria-hidden />
                        {siteConfig.email}
                      </a>
                    </li>
                  )}
                  {siteConfig.openingHours && (
                    <li className="flex items-start gap-3 text-sm text-cream/75">
                      <Clock className="size-4 mt-0.5 shrink-0 text-gold" aria-hidden />
                      {siteConfig.openingHours}
                    </li>
                  )}
                </ul>
                <p className="text-xs text-cream/40 leading-relaxed">
                  Serving commercial office projects across Dubai, subject to
                  project scope and availability.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
