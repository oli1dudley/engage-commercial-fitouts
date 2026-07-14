"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { whatsappUrl } from "@/lib/seo.config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "shadow-md" : "shadow-none border-b border-light-grey/60"
        )}
      >
        <div className="max-container container-padding">
          <div className="flex h-[72px] lg:h-[80px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              aria-label="WeMoveStuff — home"
            >
              <Image
                src="/images/logo/van-logo.jpeg"
                alt=""
                width={1400}
                height={783}
                className="h-14 lg:h-16 w-auto"
                priority
              />
              <Image
                src="/images/logo/wemovestuff-writing.jpeg"
                alt="WeMoveStuff"
                width={2000}
                height={667}
                className="h-11 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href, pathname);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-150 pb-0.5",
                      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-brand after:transition-transform after:duration-200 after:origin-left",
                      active
                        ? "text-navy after:scale-x-100"
                        : "text-dark-text hover:text-navy after:scale-x-0"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                variant="whatsapp"
                size="sm"
              >
                WhatsApp Us
              </Button>
              <Button render={<Link href="/quote" />} variant="primary" size="sm">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-2 rounded-lg text-navy hover:bg-light-grey/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
