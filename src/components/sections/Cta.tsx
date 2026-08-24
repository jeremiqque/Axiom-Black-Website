import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { RocketIcon } from "@hugeicons/core-free-icons";
import { ctaCopy } from "@/content/home";

export default function Cta({
  eyebrow = ctaCopy.eyebrow,
  headline = ctaCopy.headline,
  sub = ctaCopy.sub,
  cta = ctaCopy.cta,
}: {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="pb-28 pt-4 text-center md:pb-32">
      <Container>
        <div className="flex justify-center">
          <Eyebrow icon={RocketIcon}>{eyebrow}</Eyebrow>
        </div>
        <h2 className="mx-auto mt-6 max-w-[20ch] text-[clamp(34px,5.5vw,66px)] font-medium leading-[1.03] tracking-[-0.03em] text-ink">
          {headline}
        </h2>
        <p className="mx-auto mt-6 max-w-[62ch] text-[17px] leading-relaxed text-body">{sub}</p>
        <div className="mt-10 flex justify-center">
          <PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
