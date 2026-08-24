import { cn } from "@/lib/cn";

/** Section wrapper: hairline top border + 110px rhythm + 1240px container. */
export default function SectionShell({
  children,
  className,
  topBorder = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  topBorder?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(topBorder && "border-t border-ab-line", className)}>
      <div className="mx-auto w-full max-w-ab-max px-8 py-20 md:py-ab-110">{children}</div>
    </section>
  );
}
