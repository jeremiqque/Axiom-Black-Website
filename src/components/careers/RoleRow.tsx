import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { Role } from "@/content/careers";

export default function RoleRow({ role }: { role: Role }) {
  return (
    <Link
      href={role.href ?? "/contact"}
      className="group grid grid-cols-1 items-center gap-2 border-b border-line py-7 md:grid-cols-[1fr_130px_200px_120px] md:gap-8"
    >
      <span className="text-[clamp(22px,2.4vw,30px)] font-medium tracking-[-0.02em] text-ink transition-colors group-hover:text-ink/70">
        {role.title}
      </span>
      <span className="text-[15px] text-body">{role.type}</span>
      <span className="text-[15px] text-body">{role.location}</span>
      <span className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink md:justify-end">
        Learn more
        <Icon icon={ArrowRight01Icon} size={15} className="transition-transform group-hover:translate-x-[3px]" strokeWidth={2} />
      </span>
    </Link>
  );
}
