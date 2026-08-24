"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { accentDot, type Accent } from "@/lib/brand";
import { cn } from "@/lib/cn";

/**
 * Signature isometric wireframe motif — inline SVG, thin grey strokes with a
 * left→right gradient. GSAP draws the strokes on via stroke-dashoffset, then
 * lights up a few vertices in the page's discipline accent. Static + already
 * drawn under prefers-reduced-motion.
 */
export default function WireframeCube({
  accent = "none",
  className,
}: {
  accent?: Accent;
  className?: string;
}) {
  const root = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (mm) => {
          const strokes = el.querySelectorAll<SVGLineElement | SVGPathElement>("[data-stroke]");
          const dots = el.querySelectorAll<SVGCircleElement>("[data-vertex]");
          if (mm.conditions?.reduce) {
            gsap.set(strokes, { strokeDashoffset: 0 });
            gsap.set(dots, { opacity: 1 });
            return;
          }
          strokes.forEach((s) => {
            const len = (s as SVGGeometryElement).getTotalLength?.() ?? 400;
            gsap.set(s, { strokeDasharray: len, strokeDashoffset: len });
          });
          const tl = gsap.timeline();
          tl.to(strokes, {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: "power2.out",
            stagger: 0.04,
          }).to(dots, { opacity: 1, duration: 0.5, stagger: 0.15 }, "-=0.4");
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  // color for the highlighted vertices, mapped off the accent dot class
  const vertexColor =
    accent === "blue"
      ? "#0049ed"
      : accent === "orange"
      ? "#ff8710"
      : accent === "green"
      ? "#12bb1e"
      : "#dadada";

  return (
    <svg
      ref={root}
      className={cn("pointer-events-none select-none", className)}
      viewBox="0 0 600 500"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ab-wire" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#242424" />
          <stop offset="1" stopColor="#3a3a3a" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#ab-wire)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* isometric cube 1 */}
        <path data-stroke d="M300 120 L410 180 L410 300 L300 360 L190 300 L190 180 Z" />
        <path data-stroke d="M300 120 L300 240 M300 240 L410 300 M300 240 L190 300" />
        <path data-stroke d="M190 180 L300 240 L410 180" />
        {/* cube 2 (offset, overlapping) */}
        <path data-stroke d="M300 240 L410 300 L410 420 L300 480 L190 420 L190 300" opacity="0.6" />
        <path data-stroke d="M300 360 L300 480 M300 360 L410 420 M300 360 L190 420" opacity="0.6" />
      </g>
      {/* lit vertices in the discipline accent */}
      <g fill={vertexColor}>
        <circle data-vertex cx="300" cy="120" r="3.5" opacity="0" />
        <circle data-vertex cx="410" cy="300" r="3.5" opacity="0" />
        <circle data-vertex cx="190" cy="420" r="3.5" opacity="0" />
      </g>
    </svg>
  );
}
