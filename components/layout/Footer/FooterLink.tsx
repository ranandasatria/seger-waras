import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function FooterLink({ href, children, className, external }: FooterLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "text-muted hover:text-ink transition-colors text-sm",
        className
      )}
    >
      {children}
    </Link>
  );
}
