import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/seo.config";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms & Conditions | WeMoveStuff",
  description: "Terms and conditions for WeMoveStuff — professional movers in Dubai.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="bg-white section-padding">
      <div className="max-container container-padding max-w-3xl mx-auto">
        <h1 className="text-[28px] md:text-[36px] font-extrabold text-navy leading-tight tracking-tight mb-8">
          Terms &amp; Conditions
        </h1>

        <div className="prose prose-sm max-w-none text-dark-text space-y-6">
          <p className="text-muted-foreground">Last updated: June 2026</p>

          <div>
            <h2 className="text-lg font-bold text-navy mb-3">1. Service</h2>
            <p className="leading-relaxed">
              WeMoveStuff provides professional moving, packing and relocation services across Dubai. By engaging our services, you agree to these terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-3">2. Quotes and Pricing</h2>
            <p className="leading-relaxed">
              All quotes are provided in good faith based on the information you supply. Final pricing may be adjusted if the actual scope of the move differs materially from what was described at the time of quoting.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-3">3. Cancellations</h2>
            <p className="leading-relaxed">
              Please notify us as early as possible if you need to cancel or reschedule a confirmed move. Cancellation terms will be confirmed at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-3">4. Contact</h2>
            <p className="leading-relaxed">
              For any questions about these terms, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
