import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type SectionProps = ComponentProps<"section"> & {
  id?: string;
  children: ReactNode;
};

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)} {...props}>
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-5xl font-sans text-ink leading-[1.1] tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
