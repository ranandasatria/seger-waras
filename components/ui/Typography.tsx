import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-mono uppercase tracking-[0.2em] text-sage", className)}>
      {children}
    </p>
  );
}

export function Display({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight text-ink",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-5xl font-serif text-ink leading-[1.1] tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-xl md:text-2xl font-sans font-medium text-ink", className)}>
      {children}
    </h3>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-lg md:text-xl text-muted leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-base text-ink leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function Muted({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm text-muted", className)}>
      {children}
    </p>
  );
}
