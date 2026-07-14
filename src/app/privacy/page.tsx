import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/seo.config";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | WeMoveStuff",
  description: "Privacy policy for WeMoveStuff — professional movers in Dubai.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="bg-white section-padding">
      <div className="max-container container-padding max-w-3xl mx-auto">
        <h1 className="text-[28px] md:text-[36px] font-extrabold text-navy leading-tight tracking-tight mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-sm max-w-none text-dark-text space-y-6">
          <p className="text-muted-foreground">Last updated: June 2026</p>

          <div>
            <h2 className="text-lg font-bold text-navy mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">
              When you request a quote or contact us, we collect the information you provide — including your name, phone number, email address, and move details. This information is used solely to respond to your enquiry and arrange your move.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-3">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use your contact details to respond to your moving enquiry, provide a quote, and communicate about your move. We do not sell, rent or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-3">3. Contact</h2>
            <p className="leading-relaxed">
              For any questions about this privacy policy, please contact us at{" "}
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
