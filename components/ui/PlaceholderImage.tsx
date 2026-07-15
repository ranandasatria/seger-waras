import { cn } from "@/lib/utils";

type Ratio = "1/1" | "4/3" | "4/5" | "16/9" | "21/9" | "3/4";

const ratioClass: Record<Ratio, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "3/4": "aspect-[3/4]",
};

type PlaceholderImageProps = {
  ratio?: Ratio;
  label?: string;
  className?: string;
};

export function PlaceholderImage({ ratio = "4/3", label, className }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label ?? "Placeholder image"}
      className={cn(
        "relative w-full bg-white border border-line overflow-hidden",
        "flex items-center justify-center",
        ratioClass[ratio],
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.5%,var(--color-line)_49.5%,var(--color-line)_50.5%,transparent_50.5%)] opacity-40"
      />
      {label && (
        <span className="relative z-10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted bg-canvas/80">
          {label}
        </span>
      )}
    </div>
  );
}
