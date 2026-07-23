"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ButtonLink, Icon } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = useCallback(() => setIsMobileOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/85 backdrop-blur-md border-b border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — Beranda`}
            className="shrink-0 h-[72px] w-[220px] relative"
          >
            <Image
              src="/logosw.jpeg"
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
              sizes="220px"
              priority
            />
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

      <MobileMenu isOpen={isMobileOpen} onClose={handleClose} />
    </>
  );
}
