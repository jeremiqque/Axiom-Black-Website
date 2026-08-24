import Container from "@/components/ui/Container";
import { BuildingIcon } from "@hugeicons/core-free-icons";
import Icon from "@/components/ui/Icon";
import { trustedLogos } from "@/content/home";

export default function TrustedBy() {
  return (
    <Container className="pb-16 text-center">
      <p className="ab-eyebrow-caps">Trusted by 1000+ businesses</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
        {trustedLogos.map((name) => (
          <span key={name} className="inline-flex items-center gap-2.5 text-[17px] font-medium text-ink/80">
            <Icon icon={BuildingIcon} size={22} className="text-ink/50" strokeWidth={1.6} />
            {name}
          </span>
        ))}
      </div>
    </Container>
  );
}
