import Link from "next/link";
import AccentBadge from "@/components/ui/AccentBadge";
import { solutionGroups } from "@/content/solutions";

export default function SolutionsPanel() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="grid md:grid-cols-2 md:divide-x md:divide-[#1e1e1e]">
        {solutionGroups.map((g) => (
          <div key={g.label} className="p-8 md:p-11">
            <p className="mb-8 flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8a8a8a]">
              <span
                className="inline-block h-[7px] w-[7px] rounded-full"
                style={{ background: g.accent === "blue" ? "#0049ed" : "#ff8710" }}
              />
              {g.label}
            </p>

            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className="group -mx-3 flex items-start gap-4 rounded-[12px] px-3 py-3 transition-colors hover:bg-white/[0.04]"
                  >
                    <AccentBadge icon={it.icon} accent={g.accent} />
                    <span className="pt-0.5">
                      <span className="block text-[16px] font-medium text-white">{it.name}</span>
                      <span className="mt-1 block max-w-[34ch] text-[13.5px] leading-relaxed text-[#8a8a8a]">
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
