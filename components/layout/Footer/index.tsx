import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { FooterLink } from "./FooterLink";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-soft text-ink mt-24">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block h-[56px] w-[180px] relative">
              <Image
                src="/logosw.jpeg"
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
                sizes="180px"
              />
            </Link>
            <p className="mt-4 text-sm text-muted max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-5">
              Navigasi
            </p>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-5">
              Kontak
            </p>
            <ul className="space-y-3 text-sm text-ink/80">
              <li>
                <FooterLink href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`https://wa.me/${siteConfig.contact.whatsapp}`} external>
                  {siteConfig.contact.phone}
                </FooterLink>
              </li>
              <li className="text-muted leading-relaxed pt-1">
                {siteConfig.contact.address}
              </li>
              <li className="text-muted pt-1">{siteConfig.contact.hours}</li>
            </ul>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href} className="text-xs font-mono uppercase tracking-[0.15em]">
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
