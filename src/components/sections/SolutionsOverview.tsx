import SectionShell from "@/components/primitives/SectionShell";
import Eyebrow from "@/components/primitives/Eyebrow";
import ServiceCard from "@/components/cards/ServiceCard";
import Reveal from "./Reveal";
import { homeSolutions } from "@/content/home";

export default function SolutionsOverview() {
  return (
    <SectionShell id="solutions">
      <div>
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-5 max-w-[24ch] text-[clamp(30px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.025em] text-ab-white">
          One team across{" "}
          <span className="text-ab-pebble">engineering and technology.</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-ab-14 sm:grid-cols-2 lg:grid-cols-3">
        {homeSolutions.map((s, i) => (
          <Reveal key={s.href} delay={(i % 3) * 0.06}>
            <ServiceCard {...s} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
