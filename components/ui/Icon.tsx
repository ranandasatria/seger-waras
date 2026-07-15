import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  "aria-hidden"?: boolean;
};

export function Icon({
  icon: IconComponent,
  size = 20,
  strokeWidth = 1.5,
  className,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={ariaHidden}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
