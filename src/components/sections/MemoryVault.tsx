"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { CHAPTERS, type ChapterValue, type GalleryImage } from "@/lib/data";

type Variant = "rise" | "fade" | "grow" | "blur";

/**
 * Pembungkus animasi: tiap elemen punya observer sendiri,
 * jadi foto di bagian bawah galeri baru beranimasi saat di-scroll ke sana.
 * Kalau di-remount (misalnya lewat `key`), animasinya main ulang.
 */
function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className = "",
}: {
  children?: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mv-hide ${shown ? `mv-show mv-${variant}` : ""} ${className}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function MemoryVault({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<ChapterValue>(CHAPTERS[0]!.value);

  const filtered = images.filter((img) => img.chapter === active);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#060d1a] px-4 py-28 text-[#f1f5f9] md:px-12 md:py-36"
    >
      <style>{`
        .mv-hide { opacity: 0; }

        @keyframes mv-rise {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes mv-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes mv-grow {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 1; transform: scaleX(1); }
        }
        @keyframes mv-blur {
          from { opacity: 0; transform: translateY(14px); filter: blur(12px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes mv-twinkle {
          0%, 100% { opacity: 0.5; transform: scale(0.9) rotate(0deg); }
          50%      { opacity: 1;   transform: scale(1.2) rotate(20deg); }
        }
        @keyframes mv-glow {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
        @keyframes mv-grid-drift {
          from { background-position: 0 0; }
          to   { background-position: 0 100px; }
        }

        .mv-show.mv-rise { animation: mv-rise 1s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }
        .mv-show.mv-fade { animation: mv-fade 1.2s ease-out var(--d, 0s) both; }
        .mv-show.mv-grow { animation: mv-grow 1.1s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }
        .mv-show.mv-blur { animation: mv-blur 1.4s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }

        .mv-pop     { animation: mv-fade 0.6s ease-out both; }
        .mv-twinkle { animation: mv-twinkle 3.5s ease-in-out infinite; }
        .mv-glow    { animation: mv-glow 9s ease-in-out infinite; }
        .mv-grid    { animation: mv-grid-drift 16s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .mv-hide { opacity: 1; }
          .mv-show, .mv-pop, .mv-twinkle, .mv-glow, .mv-grid {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background lighting: berdenyut pelan (opacity saja, karena ada -translate-x-1/2) */}
      <div
        aria-hidden="true"
        className="mv-glow pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[150px]"
      />

      {/* Decorative background lines: turun sangat pelan */}
      <div
        aria-hidden="true"
        className="mv-grid pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,0.2) 1px, transparent 1px)",
          backgroundSize: "100% 100px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Reveal
              variant="grow"
              delay={0.1}
              className="h-px w-12 origin-right bg-gradient-to-r from-transparent to-sky-300/80"
            />
            <Reveal
              variant="fade"
              delay={0.3}
              className="text-[9px] tracking-[0.45em] text-sky-300"
            >
              CHAPTER II · THE MEMORIES
            </Reveal>
            <Reveal
              variant="grow"
              delay={0.1}
              className="h-px w-12 origin-left bg-gradient-to-l from-transparent to-sky-300/80"
            />
          </div>

          <Reveal variant="blur" delay={0.4}>
            <h2 className="bg-gradient-to-b from-white via-[#e2e8f0] to-[#7dd3fc] bg-clip-text font-serif text-4xl tracking-[0.08em] text-transparent drop-shadow-[0_4px_20px_rgba(125,211,252,0.25)] md:text-6xl">
              The Memory Vault
            </h2>
          </Reveal>

          <Reveal variant="rise" delay={0.9}>
            <p className="mt-5 font-serif text-sm italic tracking-wider text-slate-400 md:text-base">
              Every photograph holds a story worth remembering.
            </p>
          </Reveal>

          <Reveal
            variant="grow"
            delay={1.2}
            className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
          />
        </div>

        {/* Chapter navigation */}
        <Reveal variant="fade" delay={0.2}>
          <div
            role="tablist"
            aria-label="Bab galeri"
            className="mb-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 border-y border-sky-300/20 py-6 md:gap-x-12"
          >
            {CHAPTERS.map((chapter, index) => {
              const isActive = active === chapter.value;

              return (
                <button
                  key={chapter.value}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(chapter.value)}
                  className={`group relative px-2 py-2 text-[10px] tracking-[0.2em] transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300 md:text-xs ${
                    isActive
                      ? "text-white drop-shadow-[0_0_10px_rgba(125,211,252,0.5)]"
                      : "text-slate-400/75 hover:text-sky-200"
                  }`}
                >
                  <span className="mr-2 text-[9px] text-sky-300/70">
                    0{index + 1}
                  </span>

                  {chapter.label}

                  <span
                    className={`absolute -bottom-6 left-0 h-px w-full origin-center bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.6)] transition-all duration-500 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Gallery information */}
        <Reveal
          variant="fade"
          className="mb-8 flex items-center justify-between"
        >
          <p className="text-[9px] tracking-[0.3em] text-sky-300/80">
            SELECTED MEMORIES
          </p>

          {/* key={active}: angka ikut berganti dengan fade tiap pindah bab */}
          <p
            key={active}
            className="mv-pop font-serif text-xs italic text-slate-400"
          >
            {filtered.length} photographs
          </p>
        </Reveal>

        {/* Gallery masonry layout.
            key={active}: saat pindah bab, panel dibuat ulang sehingga
            semua foto muncul lagi dengan animasi. */}
        <div
          key={active}
          role="tabpanel"
          className="columns-1 gap-8 sm:columns-2 lg:columns-3 lg:gap-10"
        >
          {filtered.map((image, index) => (
            <div
              key={image.id}
              className="group relative mb-8 break-inside-avoid lg:mb-10"
            >
              <div className="pointer-events-none absolute -inset-2 border border-sky-300/0 transition-all duration-700 group-hover:border-sky-300/40" />

              {/* delay berdasarkan kolom (0, 0.12, 0.24), bukan urutan total,
                  supaya foto di bawah tidak menunggu lama */}
              <Reveal variant="rise" delay={(index % 3) * 0.12}>
                <GalleryCard
                  image={image}
                  staggered={index % 3 === 1}
                />
              </Reveal>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Reveal
            key={active}
            variant="rise"
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <span className="mv-twinkle mb-5 inline-block font-serif text-4xl text-sky-300/60">
              ✧
            </span>

            <p className="font-serif text-xl italic text-sky-100">
              No memories found yet.
            </p>

            <p className="mt-3 text-xs tracking-wider text-slate-400">
              This chapter is waiting to be written.
            </p>
          </Reveal>
        )}

        {/* Bottom decoration */}
        <Reveal
          variant="fade"
          className="mt-24 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-sky-300/50" />
          <span className="mv-twinkle text-sm text-sky-300">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-sky-300/50" />
        </Reveal>

        <Reveal variant="fade" delay={0.2}>
          <p className="mt-6 text-center text-[9px] tracking-[0.35em] text-slate-500">
            PRESERVED IN TIME · FOREVER IN OUR HEARTS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
