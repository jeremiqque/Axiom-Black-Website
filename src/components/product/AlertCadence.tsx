import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/sections/Reveal";
import { Notification03Icon } from "@hugeicons/core-free-icons";
import type { ProductPage } from "@/content/products";

/** The 30 / 14 / 7-day escalation, shown as a labelled timeline. */
export default function AlertCadence({ data }: { data: ProductPage["alerts"] }) {
  return (
    <section className="bg-surface-2 py-24 md:py-28">
      <Container>
        <Eyebrow icon={Notification03Icon}>{data.eyebrow}</Eyebrow>
        <h2 className="ab-h2 mt-5 max-w-[28ch]">{data.headline}</h2>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-body">{data.sub}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {data.steps.map((s, i) => (
            <Reveal key={s.when} delay={i * 0.06}>
              <div className="relative h-full border border-line bg-white px-7 pb-8 pt-7">
                <span className="inline-flex items-center border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {s.channel}
                </span>
                <p className="mt-6 text-[26px] font-medium leading-none tracking-[-0.02em] text-ink">{s.when}</p>
                <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-body">{s.body}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] bg-ink"
                  style={{ width: `${((i + 1) / data.steps.length) * 100}%` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
