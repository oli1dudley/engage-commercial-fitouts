import type { NextConfig } from "next";

// Pre-launch indexing lock (see src/lib/site.config.ts). Only the exact
// string "true" enables indexing; every other state emits a blocking
// X-Robots-Tag header on all responses.
const indexingEnabled = process.env.SITE_INDEXING_ENABLED === "true";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...(indexingEnabled
            ? []
            : [
                {
                  key: "X-Robots-Tag",
                  value: "noindex, nofollow, noarchive",
                },
              ]),
        ],
      },
    ];
  },
};

export default nextConfig;
