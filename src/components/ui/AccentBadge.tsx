import type { IconSvgElement } from "@hugeicons/react";
import Icon from "./Icon";

const bg: Record<"blue" | "orange", string> = {
  blue: "linear-gradient(180deg, #2b6bff 0%, #0049ed 100%)",
  orange: "linear-gradient(180deg, #ffa23d 0%, #ff8710 100%)",
};

export default function AccentBadge({
  icon,
  accent,
  size = 44,
}: {
  icon: IconSvgElement;
  accent: "blue" | "orange";
  size?: number;
}) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-[11px] text-white"
      style={{
        width: size,
        height: size,
        background: bg[accent],
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.28), 0 1px 2px 0 rgba(0,0,0,0.25)",
      }}
    >
      <Icon icon={icon} size={size * 0.5} className="text-white" strokeWidth={1.9} />
    </span>
  );
}
