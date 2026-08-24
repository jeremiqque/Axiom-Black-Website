import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { heroCopy } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient glows (Figma) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -left-40 bottom-0 h-[520px] w-[620px] opacity-70 blur-[120px]"
          style={{ background: "radial-gradient(circle at 30% 70%, var(--glow-orange), transparent 60%), radial-gradient(circle at 60% 80%, var(--glow-amber), transparent 55%), radial-gradient(circle at 45% 60%, var(--glow-green), transparent 60%)" }}
        />
        <div
          className="absolute -right-40 bottom-4 h-[520px] w-[560px] opacity-60 blur-[120px]"
          style={{ background: "radial-gradient(circle at 70% 70%, var(--glow-blue), transparent 60%)" }}
        />
      </div>

      <Container className="relative pb-24 pt-[168px] md:pb-32 md:pt-[210px]">
        <h1 className="max-w-[19ch] text-[clamp(40px,7vw,80px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
          {heroCopy.headline[0]}
          <br className="hidden sm:block" /> {heroCopy.headline[1]}
        </h1>
        <p className="mt-8 max-w-[64ch] text-[17px] leading-relaxed text-body">{heroCopy.sub}</p>
        <div className="mt-10">
          <PrimaryButton href={heroCopy.cta.href}>{heroCopy.cta.label}</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
