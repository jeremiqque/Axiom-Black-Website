import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/sections/Reveal";
import Cta from "@/components/sections/Cta";
import InfoCard from "@/components/about/InfoCard";
import GrowCard from "@/components/about/GrowCard";
import LeaderCard from "@/components/about/LeaderCard";
import { DashboardSquare02Icon, BookOpen01Icon, WorkflowSquare03Icon, UserGroupIcon } from "@hugeicons/core-free-icons";
import { pageMeta } from "@/lib/seo";
import { aboutHero, missionVision, storyParas, storyCards, growItems, leaders } from "@/content/about";

export const metadata = pageMeta({
  title: "About: Two disciplines, one team",
  description:
    "Axiom Black pairs licensed engineering with in-house technology under one roof, as a Newark, NJ partner to municipal utilities and public agencies. Our story, GROW framework, and leadership.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero + Mission/Vision */}
      <section>
        <Container className="pb-8 pt-[150px] md:pt-[190px]">
          <Eyebrow icon={DashboardSquare02Icon}>{aboutHero.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(40px,6.5vw,76px)] font-medium leading-[1.03] tracking-[-0.03em] text-ink">
            {aboutHero.headline}
          </h1>
          <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-body">{aboutHero.sub}</p>
        </Container>
        <Container className="pb-24 pt-6 md:pb-28">
          <div className="grid gap-5 md:grid-cols-2">
            {missionVision.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <InfoCard title={m.title} body={m.body} icon={m.icon} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Our story */}
      <section className="pb-24 md:pb-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow icon={BookOpen01Icon}>Our story</Eyebrow>
              <h2 className="mt-5 text-[clamp(34px,5vw,56px)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
                Beyond consulting.
              </h2>
              {storyParas.map((p, i) => (
                <p key={i} className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-body">{p}</p>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {storyCards.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 0.06}>
                  <InfoCard title={c.title} body={c.body} icon={c.icon} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* GROW framework */}
      <section className="pb-24 md:pb-28">
        <Container>
          <div className="max-w-[44ch]">
            <Eyebrow icon={WorkflowSquare03Icon}>How we work</Eyebrow>
            <h2 className="mt-5 text-[clamp(34px,5vw,56px)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
              The GROW framework.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-body">
              Every engagement, whether a single study or a multi-year program, runs on the same four principles.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {growItems.map((g, i) => (
              <Reveal key={g.letter} delay={(i % 2) * 0.06}>
                <GrowCard letter={g.letter} label={g.label} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-surface-2 py-24 md:py-28">
        <Container>
          <Eyebrow icon={UserGroupIcon}>Leadership</Eyebrow>
          <h2 className="mt-5 max-w-[18ch] text-[clamp(34px,5vw,56px)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
            The people behind the work.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-body">
            Engineers, technologists, and consultants with deep roots in New Jersey&apos;s water sector.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <LeaderCard name={l.name} role={l.role} photo={l.photo} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Cta headline="Let’s build something that lasts." cta={{ label: "Start Your Project", href: "/contact" }} />
    </>
  );
}
