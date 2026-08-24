import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { HelpCircleIcon } from "@hugeicons/core-free-icons";

export default function FaqBlock({
  eyebrow,
  headline,
  items,
}: {
  eyebrow: string;
  headline: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="pb-24 md:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow icon={HelpCircleIcon}>{eyebrow}</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[24ch]">{headline}</h2>
          </div>
          <div className="rounded-[14px] border border-line">
            {items.map((f) => (
              <details key={f.q} className="ab-faq group border-b border-line last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
                  <span className="text-[16px] font-medium text-ink">{f.q}</span>
                  <span className="ab-plus relative h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </summary>
                <p className="max-w-[62ch] px-7 pb-6 text-[15px] leading-relaxed text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
