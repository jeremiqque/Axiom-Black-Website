import Button from "@/components/primitives/Button";
import Eyebrow from "@/components/primitives/Eyebrow";
import Tag from "@/components/primitives/Tag";
import Reveal from "./Reveal";

export default function FeatureBand() {
  return (
    <section className="border-t border-ab-line">
      <div className="mx-auto w-full max-w-ab-max px-8 py-20 md:py-ab-110">
        <Reveal>
          <div className="relative overflow-hidden rounded-ab-elevated border border-ab-line bg-ab-deep-panel px-8 py-14 md:px-16 md:py-16">
            {/* single radial orange glow (Technology) */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,135,16,0.14), transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow accent="orange">AxiomLabs</Eyebrow>
                <h2 className="mt-5 text-[clamp(30px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.025em] text-ab-white">
                  Software built for the utilities we serve.
                </h2>
                <p className="ab-lede mt-6">
                  AxiomLabs is where our engineering meets code: operational tools
                  and models that put real-time infrastructure data in front of the
                  people making decisions.
                </p>
                <div className="mt-8">
                  <Button href="/products/certificate-tracker">See AxiomLabs</Button>
                </div>
              </div>

              {/* floating product-UI mock */}
              <div
                className="relative rounded-ab-card border border-ab-line-2 bg-[#0d0d0d] p-6"
                style={{ boxShadow: "0px 32px 80px 0px rgba(0,0,0,0.6)", transform: "rotate(-1.2deg)" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-ab-small font-medium text-ab-silver">System Overview</span>
                  <Tag accent="orange">Live</Tag>
                </div>
                <svg viewBox="0 0 320 90" className="mt-6 w-full" fill="none" aria-hidden="true">
                  <polyline
                    points="0,70 40,52 80,60 120,34 160,44 200,22 240,30 280,12 320,20"
                    stroke="#ff8710"
                    strokeWidth="1.6"
                  />
                  <line x1="0" y1="89" x2="320" y2="89" stroke="#242424" />
                </svg>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Flow", "Pressure", "Uptime"].map((k) => (
                    <div key={k} className="rounded-[10px] border border-ab-line px-3 py-3">
                      <p className="text-ab-fine uppercase tracking-wide text-ab-muted">{k}</p>
                      <p className="mt-1 text-ab-body-lg font-bold text-ab-white">
                        {k === "Uptime" ? "99.9%" : "N/A"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
