"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

// Helper: atur delay tiap elemen lewat CSS variable
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export function Prologue() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Animasi baru jalan saat section masuk layar (sekali saja)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="prologue"
      className={`${inView ? "pl-in" : ""} relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f8fafc] px-6 py-32 text-[#060d1a] md:px-12`}
    >
      <style>{`
        .pl-r { opacity: 0; }

        @keyframes pl-rise {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pl-blur {
          from { opacity: 0; filter: blur(10px); }
          to   { opacity: 1; filter: blur(0); }
        }
        @keyframes pl-grow {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 1; transform: scaleX(1); }
        }
        @keyframes pl-corner {
          from { opacity: 0; transform: scale(0); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pl-quote-mark {
          from { opacity: 0; transform: translateY(14px) scale(0.8); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pl-underline {
          from { background-size: 0% 1px; }
          to   { background-size: 100% 1px; }
        }
        @keyframes pl-twinkle {
          0%, 100% { opacity: 0.5; transform: scale(0.9) rotate(0deg); }
          50%      { opacity: 1;   transform: scale(1.15) rotate(20deg); }
        }
        @keyframes pl-glow {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }

        .pl-in .pl-rise   { animation: pl-rise 1s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }
        .pl-in .pl-fade   { animation: pl-fade 1.4s ease-out var(--d, 0s) both; }
        .pl-in .pl-blur   { animation: pl-blur 1.3s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }
        .pl-in .pl-grow   { animation: pl-grow 1.1s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }
        .pl-in .pl-corner { animation: pl-corner 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }
        .pl-in .pl-qmark  { animation: pl-quote-mark 1s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both; }

        /* Garis bawah yang "digambar" di frasa biru */
        .pl-underline {
          background-image: linear-gradient(#1d4ed8, #1d4ed8);
          background-repeat: no-repeat;
          background-position: 0 100%;
          background-size: 0% 1px;
          padding-bottom: 3px;
        }
        .pl-in .pl-underline { animation: pl-underline 1.2s ease-out var(--d, 0s) forwards; }

        /* Gerakan yang terus berjalan setelah muncul */
        .pl-in .pl-twinkle { animation: pl-twinkle 3.5s ease-in-out var(--d, 0s) infinite; }
        .pl-glow           { animation: pl-glow 9s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .pl-r { opacity: 1; }
          .pl-in .pl-rise, .pl-in .pl-fade, .pl-in .pl-blur, .pl-in .pl-grow,
          .pl-in .pl-corner, .pl-in .pl-qmark, .pl-in .pl-twinkle, .pl-glow {
            animation: none !important;
          }
          .pl-underline { background-size: 100% 1px; animation: none !important; }
        }
      `}</style>

      {/* Top & bottom subtle border transitions */}
      <div
        aria-hidden="true"
        className="pl-r pl-fade absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1e3a8a]/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pl-r pl-fade absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1e3a8a]/25 to-transparent"
      />

      {/* Soft ambient light: berdenyut pelan */}
      <div
        aria-hidden="true"
        className="pl-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.06),_transparent_65%)]"
      />

      {/* Decorative side lines (opacity saja, karena sudah ada -translate-y-1/2) */}
      <div
        aria-hidden="true"
        className="pl-r pl-fade absolute left-6 top-1/2 hidden h-64 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#1e3a8a]/25 to-transparent md:block"
        style={d(1.2)}
      />
      <div
        aria-hidden="true"
        className="pl-r pl-fade absolute right-6 top-1/2 hidden h-64 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#1e3a8a]/25 to-transparent md:block"
        style={d(1.2)}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section label */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className="pl-r pl-grow h-px w-12 origin-right bg-[#1e3a8a]/40" style={d(0.1)} />

          <p
            className="pl-r pl-fade text-[9px] font-medium tracking-[0.45em] text-[#1e3a8a] md:text-xs"
            style={d(0.3)}
          >
            CHAPTER I · THE BEGINNING
          </p>

          <span className="pl-r pl-grow h-px w-12 origin-left bg-[#1e3a8a]/40" style={d(0.1)} />
        </div>

        {/* Decorative ornament */}
        <div className="mb-8 text-center text-2xl text-[#1e3a8a]/70">
          <span className="pl-r pl-twinkle inline-block" style={d(0.6)}>
            ✧
          </span>
        </div>

        {/* Quote frame */}
        <div className="pl-r pl-rise relative border-y border-[#1e3a8a]/20 bg-white/80 px-5 py-12 shadow-[0_20px_50px_rgba(6,13,26,0.04)] backdrop-blur-sm md:px-20 md:py-16" style={d(0.5)}>
          {/* Corner decorations: tumbuh dari sudutnya masing-masing */}
          <span className="pl-r pl-corner absolute left-0 top-0 h-8 w-8 origin-top-left border-l border-t border-[#1e3a8a]/60" style={d(0.9)} />
          <span className="pl-r pl-corner absolute right-0 top-0 h-8 w-8 origin-top-right border-r border-t border-[#1e3a8a]/60" style={d(1.0)} />
          <span className="pl-r pl-corner absolute bottom-0 left-0 h-8 w-8 origin-bottom-left border-b border-l border-[#1e3a8a]/60" style={d(1.1)} />
          <span className="pl-r pl-corner absolute bottom-0 right-0 h-8 w-8 origin-bottom-right border-b border-r border-[#1e3a8a]/60" style={d(1.2)} />

          {/* Opening quote */}
          <p
            className="pl-r pl-qmark mb-6 text-center font-serif text-6xl leading-none text-[#1e3a8a]/25 md:text-7xl"
            style={d(1.2)}
          >
            “
          </p>

          {/* Main quotation: muncul bertahap dari blur */}
          <blockquote className="text-center font-serif text-xl font-light italic leading-relaxed text-[#0f172a] md:text-3xl md:leading-[1.9]">
            <span className="pl-r pl-blur" style={d(1.5)}>
              We started{" "}
              <span className="pl-underline font-normal text-[#1d4ed8]" style={d(2.6)}>
                as strangers
              </span>
              , and finished as{" "}
              <span className="pl-underline font-normal text-[#1d4ed8]" style={d(3.1)}>
                a family.
              </span>
            </span>

            <br className="hidden md:block" />

            <span className="pl-r pl-blur" style={d(2.3)}>
              {" "}
              This digital space is more than just a collection of pixels and photographs. It is our time machine. A place where our greatest moments are preserved—intact, majestic, and eternal.
            </span>
          </blockquote>

          {/* Closing ornament */}
          <p
            className="pl-r pl-qmark mt-8 text-center font-serif text-4xl text-[#1e3a8a]/25"
            style={d(3.2)}
          >
            ”
          </p>
        </div>

        {/* Bottom description */}
        <div className="mt-12 text-center">
          <p
            className="pl-r pl-rise text-[9px] font-medium tracking-[0.35em] text-[#1e3a8a]"
            style={d(3.4)}
          >
            MORE THAN PHOTOGRAPHS
          </p>

          <p
            className="pl-r pl-rise mt-4 font-serif text-sm italic tracking-wider text-slate-500 md:text-base"
            style={d(3.6)}
          >
            A thousand memories, one unforgettable story.
          </p>
        </div>

        {/* Bottom ornament */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="pl-r pl-grow h-px w-16 origin-right bg-gradient-to-r from-transparent to-[#1e3a8a]/40" style={d(3.9)} />
          <span className="pl-r pl-twinkle text-xs text-[#1e3a8a]" style={d(4.1)}>
            ✦
          </span>
          <span className="pl-r pl-grow h-px w-16 origin-left bg-gradient-to-l from-transparent to-[#1e3a8a]/40" style={d(3.9)} />
        </div>
      </div>
    </section>
  );
}
