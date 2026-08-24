import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { DashboardSquare02Icon } from "@hugeicons/core-free-icons";
import type { SolutionPage } from "@/content/solutionPages";

export default function SolutionHero({ hero }: { hero: SolutionPage["hero"] }) {
  return (
    <section>
      <Container className="pt-[150px] md:pt-[190px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow icon={DashboardSquare02Icon}>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-[15ch] text-[clamp(40px,6vw,72px)] font-medium leading-[1.04] tracking-[-0.03em] text-ink">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-[54ch] text-[16px] leading-relaxed text-body">{hero.sub}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryButton href={hero.primaryCta.href}>{hero.primaryCta.label}</PrimaryButton>
              <SecondaryButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</SecondaryButton>
            </div>
          </div>
          <div className="flex aspect-square w-full items-center justify-center bg-[#767676] text-[13px] font-medium uppercase tracking-widest text-white/70">
            Image placeholder
          </div>
        </div>
      </Container>
    </section>
  );
}
