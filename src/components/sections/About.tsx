import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SolutionCard from "@/components/cards/SolutionCard";
import Reveal from "./Reveal";
import { growCards } from "@/content/home";
import { UserGroupIcon } from "@hugeicons/core-free-icons";

export default function About() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow icon={UserGroupIcon}>About Axiom Black</Eyebrow>
            <h2 className="mt-5 text-[clamp(34px,5vw,56px)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
              Beyond consulting.
            </h2>
            <p className="mt-8 max-w-[42ch] text-[16px] leading-relaxed text-body">
              Axiom Black combines engineering and technology to help agencies and businesses
              grow, turning ideas into lasting, real-world impact.
            </p>
            <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-body">
              Based in Newark, NJ, we work as partners, not vendors: your goals set the direction,
              our GROW framework gets you there.
            </p>
            <div className="mt-10">
              <PrimaryButton href="/about">Learn More About Us</PrimaryButton>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {growCards.map((c, i) => (
              <Reveal key={c.name} delay={(i % 2) * 0.06}><SolutionCard {...c} className="bg-surface-2" /></Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
