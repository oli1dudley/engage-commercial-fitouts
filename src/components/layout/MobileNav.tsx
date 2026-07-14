"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, MessageCircle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl, phoneHref } from "@/lib/seo.config";
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

const serviceLinks = [
  { label: "Apartment Moving", href: "/services/apartment-moving" },
  { label: "Villa Moving", href: "/services/villa-moving" },
  { label: "Commercial Moving", href: "/services/commercial-moving" },
  { label: "Packing Services", href: "/services/packing-services" },
  { label: "Furniture Assembly", href: "/services/furniture-assembly" },
  { label: "TV Installation", href: "/services/tv-installation" },
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            className="fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm bg-white flex flex-col shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-light-grey">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/logo/van-logo.jpeg"
                  alt=""
                  width={1400}
                  height={783}
                  className="h-14 w-auto"
                  priority
                />
                <Image
                  src="/images/logo/wemovestuff-writing.jpeg"
                  alt="WeMoveStuff"
                  width={2000}
                  height={667}
                  className="h-11 w-auto"
                  priority
                />
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-1 rounded-lg text-dark-text hover:bg-light-grey/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6">
              {/* Main nav */}
              <nav aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.href, pathname);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                            active
                              ? "bg-brand/8 text-navy font-semibold"
                              : "text-dark-text hover:bg-light-bg hover:text-navy"
                          )}
                        >
                          {active && (
                            <span className="w-1 h-4 rounded-full bg-brand shrink-0" aria-hidden />
                          )}
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Services */}
              <div>
                <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </p>
                <ul className="space-y-1">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block px-3 py-2 rounded-lg text-sm font-medium text-dark-text hover:bg-light-bg hover:text-navy transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="px-5 py-5 border-t border-light-grey flex flex-col gap-3">
              <Button
                render={<Link href="/quote" />}
                variant="primary"
                size="lg"
                onClick={onClose}
                className="w-full"
              >
                <FileText className="size-4" />
                Get Free Quote
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </Button>
                <Button
                  render={<a href={phoneHref} />}
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  <Phone className="size-4" />
                  Call Us
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
