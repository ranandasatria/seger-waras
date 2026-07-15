import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

export function NavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative font-mono text-xs uppercase tracking-[0.15em] py-2 transition-colors",
        active ? "text-ink" : "text-muted hover:text-ink"
      )}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-0.5 left-0 h-px bg-ink transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}

export { siteConfig };
