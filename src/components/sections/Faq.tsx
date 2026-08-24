import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { HelpCircleIcon } from "@hugeicons/core-free-icons";
import { faqs } from "@/content/home";

export default function Faq() {
  return (
    <section className="pb-24 md:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow icon={HelpCircleIcon}>FAQ</Eyebrow>
            <h2 className="ab-h2 mt-5">Frequently asked questions.</h2>
            <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-body">
              Clear answers about how Axiom Black works with municipal utilities, public agencies,
              and private clients.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/about">Learn More About Us</PrimaryButton>
            </div>
          </div>

          <div className="rounded-none border border-line">
            {faqs.map((f) => (
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
