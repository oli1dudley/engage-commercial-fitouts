import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Areas with location pages get linked; others remain informational
const LOCATION_PAGE_MAP: Record<string, string> = {
  "Dubai Marina": "/locations/dubai-marina-movers",
  "Downtown Dubai": "/locations/downtown-dubai-movers",
  "Business Bay": "/locations/business-bay-movers",
  "JVC": "/locations/jvc-movers",
  "JLT": "/locations/jlt-movers",
  "Palm Jumeirah": "/locations/palm-jumeirah-movers",
  "JVT": "/locations/jvt-movers",
  "Dubai Hills": "/locations/dubai-hills-movers",
  "Arabian Ranches": "/locations/arabian-ranches-movers",
  "Damac Hills": "/locations/damac-hills-movers",
  "Al Barsha": "/locations/al-barsha-movers",
  "Mirdif": "/locations/mirdif-movers",
  "Dubai Sports City": "/locations/sports-city-movers",
  "Motor City": "/locations/motor-city-movers",
  "The Springs": "/locations/the-springs-movers",
  "The Meadows": "/locations/the-meadows-movers",
  "Dubai Creek Harbour": "/locations/dubai-creek-harbour-movers",
  "Silicon Oasis": "/locations/silicon-oasis-movers",
  "Town Square": "/locations/town-square-movers",
  "Dubai South": "/locations/dubai-south-movers",
  "Discovery Gardens": "/locations/discovery-gardens-movers",
  "Al Furjan": "/locations/al-furjan-movers",
  "Emirates Hills": "/locations/emirates-hills-movers",
  "Bluewaters Island": "/locations/bluewaters-movers",
  "City Walk": "/locations/city-walk-movers",
  "International City": "/locations/international-city-movers",
};

const DEFAULT_AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JLT",
  "JVC",
  "Palm Jumeirah",
  "JVT",
  "Dubai Hills",
  "Arabian Ranches",
  "Al Barsha",
  "Mirdif",
  "Damac Hills",
  "The Springs",
  "The Meadows",
  "Dubai Sports City",
  "Motor City",
  "Dubai Creek Harbour",
  "Silicon Oasis",
  "Town Square",
  "Dubai South",
  "Discovery Gardens",
  "Al Furjan",
  "Emirates Hills",
  "Bluewaters Island",
  "City Walk",
  "International City",
  "DIFC",
  "Al Quoz",
];

interface AreaPillsProps {
  areas?: string[];
  cta?: { label: string; href: string };
}

export default function AreaPills({
  areas = DEFAULT_AREAS,
  cta = { label: "Check Availability", href: "/contact" },
}: AreaPillsProps) {
  const pillClass =
    "flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-light-grey shadow-[0_1px_4px_rgba(0,0,0,0.05)] text-sm font-medium text-dark-text transition-colors";

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-2.5" role="list" aria-label="Service areas in Dubai">
        {areas.map((area) => {
          const href = LOCATION_PAGE_MAP[area];
          return href ? (
            <Link
              key={area}
              href={href}
              className={`${pillClass} hover:border-brand hover:text-brand`}
              role="listitem"
            >
              <MapPin className="size-3.5 text-brand" aria-hidden />
              {area}
            </Link>
          ) : (
            <div
              key={area}
              className={`${pillClass} cursor-default`}
              role="listitem"
            >
              <MapPin className="size-3.5 text-brand" aria-hidden />
              {area}
            </div>
          );
        })}
      </div>

      {cta && (
        <Button render={<Link href={cta.href} />} variant="secondary" size="md">
          {cta.label}
          <ArrowRight className="size-4" />
        </Button>
      )}
    </div>
  );
}
