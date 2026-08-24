import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/sections/Reveal";
import Cta from "@/components/sections/Cta";
import FaqBlock from "@/components/sections/FaqBlock";
import InfoCard from "@/components/about/InfoCard";
import ProcessCard from "@/components/solution/ProcessCard";
import ProductHero from "@/components/product/ProductHero";
import AlertCadence from "@/components/product/AlertCadence";
import { SparklesIcon, DashboardSquare02Icon, WorkflowSquare03Icon } from "@hugeicons/core-free-icons";
import { pageMeta } from "@/lib/seo";
import { certificateTracker as p } from "@/content/products";

export const metadata = pageMeta({
  title: "Certificate Tracker: Compliance tracking that runs itself",
  description: p.hero.sub,
  path: "/products/certificate-tracker",
});

export default function CertificateTrackerPage() {
  return (
    <>
      <ProductHero hero={p.hero} />

      {/* Why it exists */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow icon={SparklesIcon}>{p.problem.eyebrow}</Eyebrow>
              <h2 className="ab-h2 mt-5 max-w-[24ch]">{p.problem.headline}</h2>
            </div>
            <p className="max-w-[58ch] text-[17px] leading-relaxed text-body lg:pt-2">{p.problem.sub}</p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="pb-24 md:pb-28">
        <Container>
          <div>
            <Eyebrow icon={DashboardSquare02Icon}>{p.features.eyebrow}</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[28ch]">{p.features.headline}</h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-body">{p.features.sub}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.items.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.05}>
                <InfoCard title={f.title} body={f.body} icon={f.icon} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AlertCadence data={p.alerts} />

      {/* How it works */}
      <section className="py-24 md:py-28">
        <Container>
          <Eyebrow icon={WorkflowSquare03Icon}>{p.how.eyebrow}</Eyebrow>
          <h2 className="ab-h2 mt-5 max-w-[28ch]">{p.how.headline}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {p.how.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <ProcessCard n={s.n} title={s.title} body={s.body} side={i % 2 === 0 ? "left" : "right"} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqBlock eyebrow={p.faq.eyebrow} headline={p.faq.headline} items={p.faq.items} />

      <Cta eyebrow={p.cta.eyebrow} headline={p.cta.headline} sub={p.cta.sub} cta={p.cta.cta} />
    </>
  );
}
