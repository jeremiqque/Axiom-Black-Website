export default function GrowCard({ letter, label }: { letter: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-between border border-line bg-surface-2 px-8 pb-10 pt-14">
      <span
        className="font-pixel leading-none text-ink"
        style={{ fontSize: "clamp(120px, 15vw, 190px)" }}
        aria-hidden="true"
      >
        {letter}
      </span>
      <p className="mt-8 text-center text-[18px] font-medium text-ink">{label}</p>
    </div>
  );
}
