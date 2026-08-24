import Link from "next/link";
import type { IconSvgElement } from "@hugeicons/react";
import Icon from "@/components/ui/Icon";
import HubIcon from "@/components/icons/HubIcon";
import ExploreArrow from "@/components/icons/ExploreArrow";
import { cn } from "@/lib/cn";

/**
 * Solution / GROW card — matches the Figma card:
 * 56×56 black badge flush to the top-left corner, #FAFAFA surface,
 * 28px content padding, and the pointing-hand "Explore" glyph.
 * The badge renders the solution's own icon; the hub glyph is the fallback.
 */
export default function SolutionCard({
  name,
  descriptor,
  href,
  icon,
  className,
}: {
  name: string;
  descriptor: string;
  href: string;
  icon?: IconSvgElement;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block h-full border border-line bg-surface-2",
        "transition-colors duration-200 hover:border-ink/25",
        className
      )}
    >
      {/* badge flush to the corner */}
      <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center bg-ink text-white">
        {icon ? <Icon icon={icon} size={26} className="text-white" strokeWidth={1.7} /> : <HubIcon size={56} className="text-white" />}
      </span>

      <div className="px-7 pb-7 pt-[76px]">
        <h3 className="text-[24px] font-medium leading-[1.15] tracking-[-0.01em] text-ink">{name}</h3>
        <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-body">{descriptor}</p>
        <span className="mt-7 inline-flex items-center gap-2.5 text-[16px] font-medium text-ink">
          Explore
          <ExploreArrow size={22} className="text-ink transition-transform duration-200 group-hover:translate-x-[3px]" />
        </span>
      </div>
    </Link>
  );
}
