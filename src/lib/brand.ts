export type Accent = "blue" | "orange" | "green" | "none";

/** Discipline-signal accent → literal Tailwind classes (kept literal so JIT sees them). */
export const accentText: Record<Accent, string> = {
  blue: "text-ab-blue",
  orange: "text-ab-orange",
  green: "text-ab-green",
  none: "text-ab-silver",
};

export const accentDot: Record<Accent, string> = {
  blue: "bg-ab-blue",
  orange: "bg-ab-orange",
  green: "bg-ab-green",
  none: "bg-ab-silver",
};

/** Hover border color (≈55% opacity) applied via inline style to avoid dynamic classes. */
export const accentBorderRGBA: Record<Accent, string> = {
  blue: "rgba(0,73,237,0.55)",
  orange: "rgba(255,135,16,0.55)",
  green: "rgba(18,187,30,0.55)",
  none: "rgba(255,255,255,0.25)",
};

export const accentGlowRGBA: Record<Accent, string> = {
  blue: "rgba(0,73,237,0.14)",
  orange: "rgba(255,135,16,0.14)",
  green: "rgba(18,187,30,0.14)",
  none: "rgba(255,255,255,0.06)",
};
