import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

import StructuredData from "@/components/seo/StructuredData";
import LegalPage, { type LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Cookie Policy",
  description:
    "How the Engage Commercial Fitouts website uses cookies and similar technologies, and how you can control them.",
  path: "/cookie-policy",
});

// TODO(launch): this legal page requires professional review before launch.
// Update this policy if analytics, marketing or other third-party cookies
// are added to the site.
const SECTIONS: LegalSection[] = [
  {
    heading: "1. What cookies are",
    paragraphs: [
      "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to improve efficiency and to provide information to site owners.",
    ],
  },
  {
    heading: "2. How this website uses cookies",
    paragraphs: [
      "This website currently uses only the cookies and similar technologies that are strictly necessary for it to function — for example, to remember basic preferences during your visit and to deliver the site securely.",
      "We do not currently use advertising or cross-site tracking cookies. If analytics or marketing cookies are introduced in future, this policy will be updated and, where required, your consent will be requested before they are set.",
    ],
  },
  {
    heading: "3. Types of cookies",
    bullets: [
      "Strictly necessary cookies — required for the website to operate and cannot be switched off in our systems",
      "Performance and analytics cookies — help us understand how visitors use the site (not currently in use)",
      "Functional cookies — remember choices you make to improve your experience (not currently in use)",
    ],
  },
  {
    heading: "4. Managing cookies",
    paragraphs: [
      "Most browsers allow you to control cookies through their settings, including blocking or deleting them. Restricting strictly necessary cookies may affect how the website functions. Guidance is available in your browser's help documentation.",
    ],
  },
  {
    heading: "5. Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time, for example if the cookies used by this website change. The latest version will always be published on this page.",
    ],
  },
  {
    heading: "6. Contact",
    paragraphs: [
      "If you have questions about this policy, please get in touch through the contact page.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Cookie Policy", url: "/cookie-policy" },
        ])}
      />
      <LegalPage
        title="Cookie Policy"
        breadcrumbLabel="Cookie Policy"
        intro="How this website uses cookies and similar technologies, and how you can control them."
        sections={SECTIONS}
      />
    </>
  );
}
