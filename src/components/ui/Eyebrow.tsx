import { DashboardSquare02Icon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import Icon from "./Icon";
import { cn } from "@/lib/cn";

export default function Eyebrow({
  children,
  icon = DashboardSquare02Icon,
  className,
}: {
  children: React.ReactNode;
  icon?: IconSvgElement;
  className?: string;
}) {
  return (
    <span className={cn("ab-eyebrow", className)}>
      <Icon icon={icon} size={18} className="text-ink" strokeWidth={1.8} />
      {children}
    </span>
  );
}
