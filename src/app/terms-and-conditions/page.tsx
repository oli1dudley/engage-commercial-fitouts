import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site.config";

import StructuredData from "@/components/seo/StructuredData";
import LegalPage, { type LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms and Conditions",
  description:
    "The terms and conditions governing the use of the Engage Commercial Fitouts website.",
  path: "/terms-and-conditions",
});

// TODO(launch): have these terms reviewed against the confirmed company
// registration details and governing-law position before the site goes
// live. Placeholder company details live in site.config.ts.
const SECTIONS: LegalSection[] = [
  {
    heading: "1. About these terms",
    paragraphs: [
      `These terms govern your use of this website, which is operated by ${siteConfig.legal.registeredName} ("Engage", "we", "us"). By using this website you agree to these terms. If you do not agree, please do not use the site.`,
    ],
  },
  {
    heading: "2. Website content",
    paragraphs: [
      "The content of this website is provided for general information about Engage and its services. It does not constitute an offer, quotation, professional advice or a commitment to deliver any particular scope, programme or outcome.",
      "Service descriptions outline what may be included in a project. The actual scope, specification, responsibilities, pricing and programme for any project are defined only in a written agreement for that project.",
    ],
  },
  {
    heading: "3. Enquiries and proposals",
    paragraphs: [
      "Submitting an enquiry through this website does not create a contract. Any proposal, assessment or consultation that follows is subject to the terms agreed in writing for that engagement.",
    ],
  },
  {
    heading: "4. Intellectual property",
    paragraphs: [
      "Unless stated otherwise, the content of this website — including text, branding, graphics and layout — belongs to Engage or its licensors. You may view and print pages for your own use, but you may not reproduce, distribute or use the content commercially without our written permission.",
    ],
  },
  {
    heading: "5. Acceptable use",
    bullets: [
      "Do not use this website in any way that breaches applicable law or regulation",
      "Do not attempt to gain unauthorised access to the website or its infrastructure",
      "Do not submit content that is unlawful, misleading or harmful",
      "Do not use automated tools to scrape or extract data from the website without permission",
    ],
  },
  {
    heading: "6. Accuracy of information",
    paragraphs: [
      "We take reasonable care to keep the information on this website accurate and up to date, but we do not guarantee that it is complete, current or error-free, and we may change it at any time without notice.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Engage is not liable for any loss or damage arising from your use of, or inability to use, this website or from reliance on its content. Nothing in these terms excludes or limits liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    heading: "8. Third-party links",
    paragraphs: [
      "This website may contain links to third-party websites. We are not responsible for the content or practices of those sites.",
    ],
  },
  {
    heading: "9. Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The latest version will always be published on this page, and continued use of the website constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "10. Governing law",
    paragraphs: [
      `These terms are governed by the laws applicable in ${siteConfig.address.countryName}, and any disputes arising from them are subject to the jurisdiction of the competent courts there.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms and Conditions", url: "/terms-and-conditions" },
        ])}
      />
      <LegalPage
        title="Terms and Conditions"
        breadcrumbLabel="Terms and Conditions"
        intro="The terms governing the use of the Engage Commercial Fitouts website."
        sections={SECTIONS}
      />
    </>
  );
}
