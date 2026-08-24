import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export default function Wordmark({ className, height = 26 }: { className?: string; height?: number }) {
  return (
    <Link href="/" aria-label="Axiom Black home" className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo-axiomblack.svg"
        alt="Axiom Black"
        width={(200 / 45) * height}
        height={height}
        priority
      />
    </Link>
  );
}
