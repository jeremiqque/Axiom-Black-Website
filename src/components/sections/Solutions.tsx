import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SolutionCard from "@/components/cards/SolutionCard";
import Reveal from "./Reveal";
import { engineeringCards, technologyCards } from "@/content/home";

export default function Solutions() {
  return (
    <section>
      <Container className="pb-24 md:pb-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[28ch]">One partner from the treatment plant to the codebase.</h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-body">
              Most firms do engineering or technology. Axiom Black does both, so your
              infrastructure and your data infrastructure are designed by the same team.
            </p>
          </div>
          <PrimaryButton href="/solutions" className="shrink-0">All Solutions</PrimaryButton>
        </div>

        <div className="mt-14">
          <p className="ab-eyebrow-caps">Engineering</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringCards.map((c, i) => (
              <Reveal key={c.href} delay={(i % 4) * 0.05}><SolutionCard {...c} /></Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="ab-eyebrow-caps">Technology</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyCards.map((c, i) => (
              <Reveal key={c.href} delay={(i % 3) * 0.05}><SolutionCard {...c} /></Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
