import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/sections/Reveal";
import Cta from "@/components/sections/Cta";
import InfoCard from "@/components/about/InfoCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Icon from "@/components/ui/Icon";
import {
  LabsIcon,
  SparklesIcon,
  DashboardSquare02Icon,
  UserGroupIcon,
  WorkflowSquare03Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import type { LabProject } from "@/content/products";

/**
 * Page template for AxiomLabs research projects.
 *
 * Deliberately different from the Certificate Tracker product page: a status
 * pill in the hero, a "where it stands" section, and a contact CTA rather
 * than a signup — these are in development, and the page should say so.
 */
export default function LabProjectTemplate({ project: p }: { project: LabProject }) {
  return (
    <>
      {/* Hero */}
      <section>
        <Container className="pt-[150px] md:pt-[190px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow icon={LabsIcon}>{p.hero.eyebrow}</Eyebrow>
                <span className="inline-flex items-center gap-1.5 border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink" />
                  {p.status}
                </span>
              </div>
              <h1 className="mt-6 max-w-[18ch] text-[clamp(40px,6vw,72px)] font-medium leading-[1.04] tracking-[-0.03em] text-ink">
                {p.hero.headline}
              </h1>
              <p className="mt-7 max-w-[54ch] text-[16px] leading-relaxed text-body">{p.hero.sub}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <PrimaryButton href="/contact">Talk to Our Team</PrimaryButton>
                <SecondaryButton href="/solutions">See Our Solutions</SecondaryButton>
              </div>
            </div>
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-[#767676] text-[13px] font-medium uppercase tracking-widest text-white/70">
              Concept diagram placeholder
            </div>
          </div>
        </Container>
      </section>

      {/* The premise */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow icon={SparklesIcon}>{p.premise.eyebrow}</Eyebrow>
              <h2 className="ab-h2 mt-5 max-w-[24ch]">{p.premise.headline}</h2>
            </div>
            <p className="max-w-[58ch] text-[17px] leading-relaxed text-body lg:pt-2">{p.premise.sub}</p>
          </div>
        </Container>
      </section>

      {/* What we're building */}
      <section className="pb-24 md:pb-28">
        <Container>
          <div>
            <Eyebrow icon={DashboardSquare02Icon}>{p.building.eyebrow}</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[28ch]">{p.building.headline}</h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-body">{p.building.sub}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.building.items.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.05}>
                <InfoCard title={f.title} body={f.body} icon={f.icon} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="bg-surface-2 py-24 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow icon={UserGroupIcon}>{p.who.eyebrow}</Eyebrow>
              <h2 className="ab-h2 mt-5 max-w-[24ch]">{p.who.headline}</h2>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-body">{p.who.sub}</p>
            </div>
            <ul className="border-t border-line">
              {p.who.items.map((it) => (
                <li key={it} className="flex items-start gap-4 border-b border-line py-5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center bg-ink text-white">
                    <Icon icon={Tick02Icon} size={14} className="text-white" strokeWidth={2.4} />
                  </span>
                  <span className="text-[17px] leading-snug text-ink">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Where it stands */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="border border-line bg-white px-7 py-12 md:px-14 md:py-16">
            <Eyebrow icon={WorkflowSquare03Icon}>{p.stage.eyebrow}</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[26ch]">{p.stage.headline}</h2>
            <p className="mt-6 max-w-[70ch] text-[17px] leading-relaxed text-body">{p.stage.body}</p>
          </div>
        </Container>
      </section>

      <Cta eyebrow={p.cta.eyebrow} headline={p.cta.headline} sub={p.cta.sub} cta={p.cta.cta} />
    </>
  );
}
