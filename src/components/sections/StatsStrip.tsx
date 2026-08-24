import SectionShell from "@/components/primitives/SectionShell";
import Eyebrow from "@/components/primitives/Eyebrow";
import StatBlock from "@/components/cards/StatBlock";
import Reveal from "./Reveal";
import { homeStats } from "@/content/home";

export default function StatsStrip() {
  return (
    <SectionShell>
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <Eyebrow>By the numbers</Eyebrow>
          <span className="text-ab-fine uppercase tracking-[0.12em] text-ab-pebble">
            Placeholder · pending verified figures
          </span>
        </div>
        <div className="mt-8">
          <StatBlock stats={homeStats} />
        </div>
      </Reveal>
    </SectionShell>
  );
}
