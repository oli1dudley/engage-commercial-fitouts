"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { NAV_ITEMS, CTA } from "@/lib/site.config";
import { cn } from "@/lib/utils";

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
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when open; move focus into the dialog
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();
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
            className="fixed inset-0 z-50 bg-black/60 lg:hidden"
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduced ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            className="fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm bg-ink-raised border-l border-line flex flex-col shadow-2xl lg:hidden"
            initial={{ x: reduced ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: reduced ? 0 : "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-line">
              <Link href="/" onClick={onClose} aria-label="Engage Commercial Fitouts — home">
                <Logo size="sm" />
              </Link>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 -mr-1 rounded-[2px] text-cream hover:bg-cream/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Scrollable content */}
            <nav className="flex-1 overflow-y-auto py-6 px-5" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href, pathname);

                  if (item.children) {
                    const isExpanded = expanded === item.label;
                    return (
                      <li key={item.href}>
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => setExpanded(isExpanded ? null : item.label)}
                          className={cn(
                            "flex w-full items-center justify-between px-3 py-2.5 rounded-[2px] text-base font-medium transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
                            active ? "text-gold-bright" : "text-cream/80 hover:text-cream hover:bg-cream/5"
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn("size-4 transition-transform duration-200", isExpanded && "rotate-180")}
                            aria-hidden
                          />
                        </button>
                        {isExpanded && (
                          <ul className="mt-1 mb-2 border-l border-line ml-3 pl-3 space-y-1">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  aria-current={pathname === child.href ? "page" : undefined}
                                  className={cn(
                                    "block px-3 py-2 rounded-[2px] text-sm transition-colors",
                                    pathname === child.href
                                      ? "text-gold-bright"
                                      : "text-cream/60 hover:text-cream hover:bg-cream/5"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2.5 rounded-[2px] text-base font-medium transition-colors",
                          active
                            ? "text-gold-bright"
                            : "text-cream/80 hover:text-cream hover:bg-cream/5"
                        )}
                      >
                        {active && <span className="w-1 h-4 bg-gold shrink-0" aria-hidden />}
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Footer */}
            <div className="px-5 py-5 border-t border-line">
              <Button
                render={<Link href={CTA.primary.href} />}
                variant="primary"
                size="lg"
                onClick={onClose}
                className="w-full"
              >
                {CTA.primary.label}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
