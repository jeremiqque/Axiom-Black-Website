import Container from "@/components/ui/Container";
import Reveal from "./Reveal";
import { stats } from "@/content/home";

export default function Stats() {
  return (
    <Container className="pb-24 md:pb-28">
      <Reveal>
        <div className="grid grid-cols-1 border border-line-strong sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-8 py-12 ${i !== 0 ? "border-line-strong sm:border-l" : ""} ${i >= 2 ? "border-line-strong lg:border-l" : ""} border-t border-line-strong first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:border-t-0`}
            >
              <p className="text-[clamp(44px,5vw,60px)] font-medium leading-none tracking-tight text-ink">{s.value}</p>
              <p className="mt-5 max-w-[24ch] text-[15px] leading-relaxed text-body">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
