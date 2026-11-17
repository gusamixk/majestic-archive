const photos = [
  {
    image: "/images/hero/fotoutama.jpeg",
    label: "THE BEGINNING",
  },
  {
    image: "/images/hero/fotokedua.png",
    label: "TOGETHERNESS",
  },
] as const;

// Posisi tetap (bukan random) supaya tidak error hydration di Next.js
const particles = [
  { left: "8%", top: "72%", size: 3, dur: 11, delay: 0 },
  { left: "15%", top: "40%", size: 2, dur: 14, delay: 2 },
  { left: "24%", top: "85%", size: 4, dur: 12, delay: 4 },
  { left: "33%", top: "25%", size: 2, dur: 16, delay: 1 },
  { left: "42%", top: "78%", size: 3, dur: 13, delay: 6 },
  { left: "55%", top: "18%", size: 2, dur: 15, delay: 3 },
  { left: "63%", top: "82%", size: 3, dur: 12, delay: 7 },
  { left: "72%", top: "35%", size: 4, dur: 17, delay: 5 },
  { left: "80%", top: "68%", size: 2, dur: 14, delay: 2 },
  { left: "88%", top: "28%", size: 3, dur: 11, delay: 8 },
  { left: "93%", top: "76%", size: 2, dur: 15, delay: 1 },
  { left: "48%", top: "50%", size: 2, dur: 18, delay: 9 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#060d1a] text-[#f1f5f9]">
      {/* Semua keyframes ada di sini, jadi tidak perlu ubah tailwind.config / globals.css */}
      <style>{`
        @keyframes mj-rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mj-title-in {
          from { opacity: 0; transform: translateY(18px) scale(0.97); filter: blur(14px); }
          to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes mj-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes mj-line-grow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes mj-photo-left {
          from { opacity: 0; transform: translateX(-60px) translateY(20px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes mj-photo-right {
          from { opacity: 0; transform: translateX(60px) translateY(20px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes mj-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes mj-twinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.85) rotate(0deg); }
          50%      { opacity: 1;    transform: scale(1.15) rotate(20deg); }
        }
        @keyframes mj-glow {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
        @keyframes mj-drift {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          15%  { opacity: 0.8; }
          85%  { opacity: 0.8; }
          100% { transform: translateY(-140px) translateX(20px); opacity: 0; }
        }
        @keyframes mj-ken-burns {
          from { transform: scale(1); }
          to   { transform: scale(1.12); }
        }
        @keyframes mj-underline-pulse {
          0%, 100% { opacity: 0.4; transform: scaleX(0.8); }
          50%      { opacity: 1;   transform: scaleX(1); }
        }

        .mj-rise        { animation: mj-rise 1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .mj-title       { animation: mj-title-in 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both; }
        .mj-fade        { animation: mj-fade 1.4s ease-out both; }
        .mj-line        { animation: mj-line-grow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: center; }
        .mj-photo-l     { animation: mj-photo-left 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.9s both; }
        .mj-photo-r     { animation: mj-photo-right 1.4s cubic-bezier(0.22, 1, 0.36, 1) 1.1s both; }
        .mj-float       { animation: mj-float 7s ease-in-out infinite; }
        .mj-twinkle     { animation: mj-twinkle 3.5s ease-in-out infinite; }
        .mj-glow        { animation: mj-glow 8s ease-in-out infinite; }
        .mj-particle    { animation: mj-drift linear infinite; }
        .mj-bg          { animation: mj-ken-burns 30s ease-in-out infinite alternate; }
        .mj-pulse-line  { animation: mj-underline-pulse 3s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .mj-rise, .mj-title, .mj-fade, .mj-line, .mj-photo-l, .mj-photo-r,
          .mj-float, .mj-twinkle, .mj-glow, .mj-particle, .mj-bg, .mj-pulse-line {
            animation: none !important;
          }
          .mj-particle { display: none; }
        }
      `}</style>

      {/* Background image: zoom pelan (Ken Burns) */}
      <div
        aria-hidden="true"
        className="mj-bg absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Deep Navy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/90 via-[#0b1933]/80 to-[#040812]/95" />

      {/* Royal & Ice Blue ambient light: berdenyut pelan */}
      <div
        aria-hidden="true"
        className="mj-glow absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[150px]"
      />

      {/* Decorative texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
        }}
      />

      {/* Partikel cahaya yang naik pelan */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
        {particles.map((p, i) => (
          <span
            key={i}
            className="mj-particle absolute rounded-full bg-sky-200/70 shadow-[0_0_10px_rgba(125,211,252,0.8)]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <header
        className="mj-fade relative z-20 flex items-center justify-between px-6 py-6 md:px-14"
        style={{ animationDelay: "0.2s" }}
      >
        <div>
          <h2 className="font-serif text-xl tracking-[0.2em] text-white drop-shadow-[0_0_12px_rgba(147,197,253,0.45)]">
            MAJESTIC.
          </h2>
          <p className="mt-1 text-[8px] tracking-[0.35em] text-blue-200/60">
            THE MEMORY ARCHIVE
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-[9px] tracking-[0.25em] text-slate-400 md:flex">
          {[
            ["#prologue", "OUR STORY"],
            ["#gallery", "GALLERY"],
            ["#souls", "OUR PEOPLE"],
            ["#time-capsule", "TIME CAPSULE"],
          ].map(([href, text]) => (
            <a
              key={href}
              href={href}
              className="relative pb-1 transition hover:text-sky-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-sky-300 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {text}
            </a>
          ))}
        </nav>

        <a
          href="#prologue"
          className="group text-[9px] tracking-[0.2em] text-sky-300 transition hover:text-white"
        >
          EXPLORE{" "}
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-5 py-16 md:px-12">
        {/* Left photograph */}
        <div className="absolute left-[5%] top-[15%] hidden w-[230px] -rotate-3 lg:block">
          <div className="mj-photo-l">
            <div className="mj-float">
              <div className="border border-sky-300/40 bg-[#0b172e] p-2 shadow-[0_20px_50px_rgba(2,6,23,0.85)]">
                <div
                  className="h-[270px] bg-cover bg-center grayscale transition duration-500 hover:scale-[1.03] hover:grayscale-0"
                  style={{ backgroundImage: `url('${photos[0].image}')` }}
                />
                <p className="py-3 text-center text-[8px] tracking-[0.3em] text-sky-200">
                  {photos[0].label}
                </p>
              </div>
              <div className="absolute -bottom-7 -right-8 h-36 w-28 border border-blue-400/40" />
              <div
                className="mj-twinkle absolute -right-12 -top-8 text-5xl text-sky-300/60"
                style={{ animationDelay: "0.5s" }}
              >
                ✧
              </div>
            </div>
          </div>
        </div>

        {/* Right photograph */}
        <div className="absolute right-[5%] top-[19%] hidden w-[230px] rotate-3 lg:block">
          <div className="mj-photo-r">
            <div className="mj-float" style={{ animationDelay: "-3.5s" }}>
              <div className="border border-sky-300/40 bg-[#0b172e] p-2 shadow-[0_20px_50px_rgba(2,6,23,0.85)]">
                <div
                  className="h-[270px] bg-cover bg-center grayscale transition duration-500 hover:scale-[1.03] hover:grayscale-0"
                  style={{ backgroundImage: `url('${photos[1].image}')` }}
                />
                <p className="py-3 text-center text-[8px] tracking-[0.3em] text-sky-200">
                  {photos[1].label}
                </p>
              </div>
              <div className="absolute -bottom-7 -left-8 h-36 w-28 border border-blue-400/40" />
              <div
                className="mj-twinkle absolute -left-10 -top-8 text-5xl text-sky-300/60"
                style={{ animationDelay: "1.8s" }}
              >
                ✧
              </div>
            </div>
          </div>
        </div>

        {/* Center title */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p
            className="mj-rise mb-5 text-[9px] tracking-[0.5em] text-sky-300 md:text-xs"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="mj-twinkle inline-block">✦</span> A COLLECTION OF
            UNFORGETTABLE MOMENTS{" "}
            <span
              className="mj-twinkle inline-block"
              style={{ animationDelay: "1.7s" }}
            >
              ✦
            </span>
          </p>

          <div
            className="mj-rise mb-2 flex items-center justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="mj-line h-px w-10 bg-gradient-to-r from-transparent to-sky-300/80" style={{ animationDelay: "0.4s" }} />
            <span className="mj-twinkle text-xs text-sky-300">✧</span>
            <span className="mj-line h-px w-10 bg-gradient-to-l from-transparent to-sky-300/80" style={{ animationDelay: "0.4s" }} />
          </div>

          <h1 className="mj-title bg-gradient-to-b from-white via-[#e2e8f0] to-[#7dd3fc] bg-clip-text font-serif text-6xl font-medium tracking-[0.12em] text-transparent drop-shadow-[0_4px_25px_rgba(125,211,252,0.3)] sm:text-8xl md:text-[115px] md:tracking-[0.2em]">
            MAJESTIC
          </h1>

          <p
            className="mj-rise mt-5 font-serif text-sm italic tracking-[0.25em] text-sky-200 md:text-lg"
            style={{ animationDelay: "1.5s" }}
          >
            The Beauty of Memories
          </p>

          <div
            className="mj-line mx-auto my-8 h-px w-32 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
            style={{ animationDelay: "1.8s" }}
          />

          <p
            className="mj-rise mx-auto max-w-xl text-xs font-light leading-8 tracking-[0.12em] text-slate-300/85 md:text-sm"
            style={{ animationDelay: "2s" }}
          >
            AN ARCHIVE OF JOURNEYS, LAUGHTER, AND MOMENTS
            THAT WILL NEVER COME AGAIN.
            <br />
            <span className="text-sky-300">
              Every moment has a story worth remembering.
            </span>
          </p>

          <a
            href="#prologue"
            className="mj-rise group relative mt-12 inline-flex items-center gap-4 overflow-hidden border border-sky-300/50 bg-[#0d1f3d]/40 px-9 py-4 text-[10px] tracking-[0.3em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-sky-400/15 hover:shadow-[0_0_30px_rgba(125,211,252,0.25)]"
            style={{ animationDelay: "2.3s" }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-200/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">OPEN THE PAGES OF MEMORIES</span>
            <span className="relative transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>

          <p
            className="mj-fade mt-12 text-[8px] tracking-[0.4em] text-slate-400/70"
            style={{ animationDelay: "2.8s" }}
          >
            EST. 2026 · CTC ERA · FOREVER IN OUR MEMORIES
          </p>
        </div>
      </div>

      {/* Foto versi HP & tablet (foto samping di atas hanya tampil di layar lg ke atas) */}
      <div className="relative z-10 flex items-start justify-center gap-4 px-5 pb-12 sm:gap-8 lg:hidden">
        {photos.map((photo, i) => (
          <div
            key={photo.label}
            className={`w-[42%] max-w-[190px] ${i === 0 ? "-rotate-3" : "mt-6 rotate-3"}`}
          >
            <div
              className={i === 0 ? "mj-photo-l" : "mj-photo-r"}
              style={{ animationDelay: `${2.6 + i * 0.2}s` }}
            >
              <div className="mj-float" style={{ animationDelay: `${-i * 3.5}s` }}>
                <div className="border border-sky-300/40 bg-[#0b172e] p-1.5 shadow-[0_20px_50px_rgba(2,6,23,0.85)]">
                  <div
                    className="h-[170px] bg-cover bg-center grayscale transition duration-500 active:grayscale-0 sm:h-[220px]"
                    style={{ backgroundImage: `url('${photo.image}')` }}
                  />
                  <p className="py-2 text-center text-[7px] tracking-[0.25em] text-sky-200 sm:text-[8px]">
                    {photo.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div
        className="mj-fade relative z-10 flex items-center justify-center gap-4 pb-7"
        style={{ animationDelay: "3s" }}
      >
        <span className="mj-pulse-line h-px w-12 bg-sky-300/40" />
        <span className="text-[9px] tracking-[0.4em] text-sky-200/75">
          OUR JOURNEY BEGINS HERE
        </span>
        <span className="mj-pulse-line h-px w-12 bg-sky-300/40" />
      </div>

      {/* Bottom light */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2"
      >
        <div
          className="mj-line h-px w-full bg-gradient-to-r from-transparent via-sky-300/60 to-transparent"
          style={{ animationDelay: "3.2s" }}
        />
      </div>
    </section>
  );
}
