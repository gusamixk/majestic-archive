"use client";

import { useState } from "react";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { PROFILES, type Profile } from "@/lib/data";

export function SoulsOfMajestic({
  profiles = PROFILES,
}: {
  profiles?: Profile[];
}) {
  const [search, setSearch] = useState("");

  // Simpan nomor urut asli sebelum difilter
  const indexedProfiles = profiles.map((profile, idx) => ({
    ...profile,
    memberNumber: String(idx + 1).padStart(2, "0"),
  }));

  const query = search.trim().toLowerCase();
  const filtered = query
    ? indexedProfiles.filter((p) =>
        p.name.toLowerCase().includes(query)
      )
    : indexedProfiles;

  return (
    <section
      id="souls"
      className="relative overflow-hidden bg-gradient-to-b from-[#060d1a] via-[#0d1e3d] to-[#060d1a] px-4 py-32 text-[#f1f5f9] md:px-12"
    >
      {/* Top & bottom subtle hairline */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
      />

      {/* Halftone dot pattern accent (selaras dengan poster CTC Era) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-12 h-72 w-72 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(#7dd3fc 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(circle at top right, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at top right, black, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-0 h-72 w-72 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(#7dd3fc 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(circle at bottom left, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at bottom left, black, transparent 70%)",
        }}
      />

      {/* Soft sapphire center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-sky-500/[0.08] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300/80" />
            <span className="text-[9px] tracking-[0.45em] text-sky-300">
              CHAPTER III · THE PEOPLE
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300/80" />
          </div>

          <h2 className="bg-gradient-to-b from-white via-[#f1f5f9] to-[#93c5fd] bg-clip-text font-serif text-4xl tracking-wider text-transparent drop-shadow-[0_4px_24px_rgba(125,211,252,0.28)] md:text-6xl">
            The Souls of Majestic
          </h2>

          <p className="mt-5 font-serif text-sm italic tracking-wider text-slate-300/80 md:text-base">
            Wajah-wajah di balik setiap cerita
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
        </div>

        {/* Member information & Search bar */}
        <div className="mb-12 flex flex-col items-center justify-between gap-5 border-y border-sky-300/20 bg-[#060d1a]/40 px-4 py-5 backdrop-blur-sm md:flex-row">
          <p className="text-[10px] tracking-[0.3em] text-sky-300">
            THE PEOPLE BEHIND OUR STORY
          </p>

          {/* Minimalist search input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search member name..."
              className="w-full border-b border-sky-300/35 bg-transparent px-2 py-1.5 text-center font-serif text-sm italic text-white placeholder:text-slate-400/70 focus:border-sky-300 focus:outline-none md:text-left"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-sky-300"
              >
                ✕
              </button>
            )}
          </div>

          <p className="font-serif text-sm italic text-slate-300/80">
            <span className="text-xl text-sky-300 drop-shadow-[0_0_10px_rgba(125,211,252,0.45)]">
              {String(profiles.length).padStart(2, "0")}
            </span>{" "}
            SOULS · ONE FAMILY
          </p>
        </div>

        {/* Members grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((profile) => (
              <div key={profile.id} className="group relative">
                {/* Member number */}
                <div className="absolute -left-2 -top-5 z-20 font-serif text-sm italic text-sky-300/80 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(125,211,252,0.6)]">
                  {profile.memberNumber}
                </div>

                {/* Decorative frame */}
                <div className="absolute -inset-2 border border-sky-300/0 transition-all duration-500 group-hover:border-sky-300/40" />

                {/* Profile */}
                <ProfileCard profile={profile} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="font-serif text-lg italic text-sky-200/80">
              No member found matching &ldquo;{search}&rdquo;.
            </p>
          </div>
        )}

        {/* Bottom decoration */}
        <div className="mt-24 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-sky-300/60" />
            <span className="text-sky-300">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-sky-300/60" />
          </div>

          <p className="mt-6 text-center font-serif text-sm italic tracking-widest text-slate-300/75">
            Different souls, one unforgettable journey.
          </p>

          <p className="mt-4 text-[9px] tracking-[0.4em] text-sky-300/60">
            MAJESTIC · FOREVER TOGETHER
          </p>
        </div>
      </div>
    </section>
  );
}       