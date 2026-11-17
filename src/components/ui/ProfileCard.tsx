import Image from "next/image";
import type { Profile } from "@/lib/data";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-sm border border-zinc-800/60 bg-white/[0.02] p-8 text-center backdrop-blur-md transition-all duration-700 hover:border-yellow-700/50 hover:bg-white/[0.04]">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative mb-6">
        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-zinc-700 transition-all duration-500 group-hover:shadow-[0_0_20px_-5px_rgba(217,119,6,0.4)] group-hover:ring-yellow-600/60">
          <Image
  src={profile.avatar}
  alt={profile.name}
  fill
  unoptimized
  sizes="112px"
  className="object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
/>
        </div>
      </div>

      <h3 className="mb-1 font-serif text-xl tracking-wide text-zinc-100 md:text-2xl">
        {profile.name}
      </h3>
      <p className="mb-6 text-xs uppercase italic tracking-widest text-yellow-600/80">
        {profile.role}
      </p>

      <div className="mb-6 h-px w-8 bg-zinc-800 transition-colors duration-500 group-hover:bg-yellow-800/50" />

      <p className="text-sm font-light italic leading-relaxed text-zinc-400">
        &ldquo;{profile.quote}&rdquo;
      </p>
    </div>
  );
}
