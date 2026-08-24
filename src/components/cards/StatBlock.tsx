export default function StatBlock({
  stats,
}: {
  stats: { value: string; unit?: string; label: string }[];
}) {
  return (
    <div className="grid divide-y divide-ab-line border-y border-ab-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="px-2 py-8 sm:px-13 sm:py-10 first:sm:pl-0">
          <p className="flex items-start font-black leading-none tracking-tight text-ab-white">
            <span className="text-[clamp(38px,6vw,56px)]">{s.value}</span>
            {s.unit && <span className="mt-1 text-ab-heading-sm text-ab-muted">{s.unit}</span>}
          </p>
          <p className="mt-4 max-w-[22ch] text-[13.5px] text-ab-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
