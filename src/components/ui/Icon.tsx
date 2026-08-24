import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

export default function Icon({
  icon,
  size = 22,
  className,
  strokeWidth = 1.8,
}: {
  icon: IconSvgElement;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return <HugeiconsIcon icon={icon} size={size} className={className} strokeWidth={strokeWidth} />;
}
