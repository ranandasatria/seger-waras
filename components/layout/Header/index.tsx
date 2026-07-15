"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ButtonLink, Icon } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled
            ? "bg-canvas/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-ink"
            aria-label={`${siteConfig.name} — Beranda`}
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex items-center gap-10" aria-label="Navigasi utama">
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="/kontak" variant="primary" size="sm">
              Konsultasi Gratis
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Buka menu"
            aria-expanded={isMobileOpen}
            className="md:hidden p-2 -mr-2 text-ink"
          >
            <Icon icon={Menu} size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
