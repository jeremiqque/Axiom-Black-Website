import type { IconSvgElement } from "@hugeicons/react";
import Icon from "./Icon";
import { cn } from "@/lib/cn";

export default function IconBadge({ icon, className }: { icon: IconSvgElement; className?: string }) {
  return (
    <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-none bg-ink text-white", className)}>
      <Icon icon={icon} size={22} className="text-white" strokeWidth={1.8} />
    </span>
  );
}
