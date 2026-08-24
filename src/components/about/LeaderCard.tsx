import Image from "next/image";

export default function LeaderCard({
  name,
  role,
  photo,
}: {
  name: string;
  role: string;
  photo?: string;
}) {
  return (
    <div className="group overflow-hidden border border-line bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ededed]">
        {photo ? (
          <Image
            src={photo}
            alt={`${name}, ${role}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[12px] font-medium uppercase tracking-widest text-muted">
            Photo
          </div>
        )}
      </div>
      <div className="px-6 py-5">
        <p className="text-[19px] font-medium text-ink">{name}</p>
        <p className="mt-1 text-[14px] text-body">{role}</p>
      </div>
    </div>
  );
}
