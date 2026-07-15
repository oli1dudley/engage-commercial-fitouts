import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import { organizationSchema, webSiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site.config";
import "./globals.css";

// Approved brand typeface: Inter (body) with the opsz axis enabled so large
// headings render with Inter Display optical sizing, per the brand guidelines.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: siteConfig.titleTemplate,
    default: siteConfig.defaultTitle,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: siteConfig.images.ogDefault,
        width: 1536,
        height: 1024,
        alt: "Engage Commercial Fitouts — Commercial Fit-Out and Property Transformation in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-ink text-cream antialiased">
        <StructuredData data={[organizationSchema(), webSiteSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:rounded-[2px] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
        >
          Skip to main content
        </a>
        <Header />
        {/* pt matches fixed header height */}
        <main id="main-content" className="pt-[72px] lg:pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
