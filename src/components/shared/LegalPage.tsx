import PageHero from "./PageHero";
import type { BreadcrumbItem } from "@/types/seo";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  intro: string;
  sections: LegalSection[];
  breadcrumbLabel: string;
}

/**
 * Shared layout for legal pages. Company registration details are pulled
 * from site.config.ts placeholders and only rendered once confirmed.
 */
export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
  breadcrumbLabel,
}: LegalPageProps) {
  const breadcrumbs: BreadcrumbItem[] = [{ label: breadcrumbLabel }];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline={title}
        body={intro}
        breadcrumbs={breadcrumbs}
        variant="centered"
        compact
      />

      <section className="bg-ink section-padding" aria-label={title}>
        <div className="max-container container-padding">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {lastUpdated && (
              <p className="text-xs uppercase tracking-[0.18em] text-cream/40">
                Last updated: {lastUpdated}
              </p>
            )}

            {sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <h2 className="text-lg md:text-xl font-semibold text-cream">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i} className="text-sm md:text-[15px] text-stone leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="flex flex-col gap-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm md:text-[15px] text-stone leading-relaxed">
                        <span className="mt-[10px] inline-block w-3.5 h-px bg-gold shrink-0" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
