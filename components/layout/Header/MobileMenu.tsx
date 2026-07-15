"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ButtonLink, Icon } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { X, type LucideIcon } from "lucide-react";
import type { NavLink as NavLinkType } from "@/lib/site";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu navigasi"
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-40 md:hidden bg-canvas flex flex-col transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="h-20 shrink-0" aria-hidden />
      <nav className="flex-1 flex flex-col px-6 pt-8 pb-10 overflow-y-auto">
        <ul className="flex flex-col">
          {siteConfig.navLinks.map((link, i) => (
            <li
              key={link.href}
              className="border-b border-line"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 300ms ${i * 60}ms, transform 300ms ${i * 60}ms`,
              }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className={cn(
                  "block py-5 text-3xl font-serif tracking-tight",
                  pathname === link.href ? "text-ink" : "text-ink/80"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="mt-10"
          style={{
            opacity: isOpen ? 1 : 0,
            transition: `opacity 300ms ${siteConfig.navLinks.length * 60 + 100}ms`,
          }}
        >
          <ButtonLink href="/kontak" variant="primary" size="lg" className="w-full">
            Konsultasi Gratis
          </ButtonLink>
        </div>
      </nav>
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup menu"
        className="absolute top-5 right-5 p-2 -mr-2 text-ink"
      >
        <Icon icon={X as LucideIcon} size={24} />
      </button>
    </div>
  );
}

export type { NavLinkType };
