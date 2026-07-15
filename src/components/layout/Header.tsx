"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { NAV_ITEMS, CTA, type NavItem } from "@/lib/site.config";
import { cn } from "@/lib/utils";

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function DropdownNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const active = isActive(item.href, pathname);
  const menuId = `nav-menu-${item.label.toLowerCase()}`;

  // Close on outside click and on Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-150 pb-0.5 cursor-pointer",
          "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold after:transition-transform after:duration-200 after:origin-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-[2px]",
          active
            ? "text-cream after:scale-x-100"
            : "text-cream/70 hover:text-cream after:scale-x-0"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <div
        id={menuId}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-150",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
      >
        <ul className="min-w-[260px] bg-ink-raised border border-line rounded-[4px] py-2 shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
          {item.children!.map((child, i) => {
            const childActive = pathname === child.href;
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  tabIndex={open ? 0 : -1}
                  aria-current={childActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-5 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:bg-cream/5 focus-visible:text-cream",
                    i === 0 && "border-b border-line mb-1 pb-3 font-medium",
                    childActive
                      ? "text-gold-bright"
                      : "text-cream/70 hover:text-cream hover:bg-cream/5"
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
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
          "fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm transition-shadow duration-300 border-b",
          scrolled ? "border-line shadow-[0_8px_30px_rgba(0,0,0,0.4)]" : "border-line"
        )}
      >
        <div className="max-container container-padding">
          <div className="flex h-[72px] lg:h-[80px] items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-[2px] shrink-0"
              aria-label="Engage Commercial Fitouts — home"
            >
              {/* Full lock-up at its 180px brand minimum; slightly larger from xl up */}
              <Logo size="sm" className="xl:hidden" />
              <Logo size="md" className="hidden xl:block" />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:block" aria-label="Main navigation">
              <ul className="flex items-center gap-5 xl:gap-7">
                {NAV_ITEMS.map((item) => {
                  if (item.children) {
                    return <DropdownNavItem key={item.href} item={item} pathname={pathname} />;
                  }
                  const active = isActive(item.href, pathname);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative text-sm font-medium tracking-wide transition-colors duration-150 pb-0.5",
                          "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold after:transition-transform after:duration-200 after:origin-left",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-[2px]",
                          active
                            ? "text-cream after:scale-x-100"
                            : "text-cream/70 hover:text-cream after:scale-x-0"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block shrink-0">
              <Button render={<Link href={CTA.primary.href} />} variant="primary" size="sm">
                {CTA.primary.label}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-2 rounded-[2px] text-cream hover:bg-cream/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
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
