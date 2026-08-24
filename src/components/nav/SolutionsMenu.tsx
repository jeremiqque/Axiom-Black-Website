import Link from "next/link";
import AccentBadge from "@/components/ui/AccentBadge";
import { solutionGroups } from "@/content/solutions";

/** Solutions mega-menu dropdown (light: white surface, two columns with discipline icon badges). */
export default function SolutionsMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="w-[680px] max-w-[92vw] overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_64px_rgba(18,18,18,0.12)]">
      <div className="grid grid-cols-2 divide-x divide-line">
        {solutionGroups.map((g) => (
          <div key={g.label} className="p-7">
            <p className="mb-6 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              <span
                className="inline-block h-[7px] w-[7px] rounded-full"
                style={{ background: g.accent === "blue" ? "#0049ed" : "#ff8710" }}
              />
              {g.label}
            </p>
            <ul className="space-y-1">
              {g.items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    onClick={onNavigate}
                    className="group/item -mx-3 flex items-start gap-3.5 rounded-[12px] px-3 py-2.5 transition-colors hover:bg-surface-2"
                  >
                    <AccentBadge icon={it.icon} accent={g.accent} size={40} />
                    <span className="pt-0.5">
                      <span className="block text-[15px] font-medium text-ink">{it.name}</span>
                      <span className="mt-0.5 block max-w-[30ch] text-[12.5px] leading-relaxed text-body">
                        {it.descriptor}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
