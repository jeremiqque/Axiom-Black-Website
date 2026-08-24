import type { IconSvgElement } from "@hugeicons/react";
import Icon from "@/components/ui/Icon";
import HubIcon from "@/components/icons/HubIcon";
import { cn } from "@/lib/cn";

export default function InfoCard({
  title,
  body,
  icon,
  className,
}: {
  title: string;
  body: string;
  icon?: IconSvgElement;
  className?: string;
}) {
  return (
    <div className={cn("relative border border-line bg-surface-2", className)}>
      <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center bg-ink text-white">
        {icon ? <Icon icon={icon} size={26} className="text-white" strokeWidth={1.7} /> : <HubIcon size={56} className="text-white" />}
      </span>
      <div className="px-7 pb-7 pt-[76px]">
        <h3 className="text-[22px] font-medium leading-snug tracking-[-0.01em] text-ink">{title}</h3>
        <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-body">{body}</p>
      </div>
    </div>
  );
}
