export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#060d1a] px-6 py-20 text-[#f1f5f9]">
      {/* Top decorative line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo ornament */}
        <div className="group mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-sky-300/40 bg-[#0b172e]/60 transition-all duration-500 hover:border-white hover:shadow-[0_0_30px_rgba(125,211,252,0.25)]">
          <span className="bg-gradient-to-b from-white via-[#e2e8f0] to-[#7dd3fc] bg-clip-text font-serif text-5xl font-light text-transparent transition-transform duration-500 group-hover:scale-110">
            M
          </span>
        </div>

        {/* Brand */}
        <h2 className="mb-3 font-serif text-2xl uppercase tracking-[0.4em] text-white drop-shadow-[0_0_12px_rgba(147,197,253,0.35)]">
          Majestic
        </h2>

        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-10 bg-sky-300/40" />
          <span className="text-xs text-sky-300">✦</span>
          <span className="h-px w-10 bg-sky-300/40" />
        </div>

        <p className="mb-12 font-serif text-lg italic tracking-wider text-sky-200/70">
        </p>

        {/* Footer description */}
        <p className="max-w-md text-[10px] leading-7 tracking-[0.2em] text-slate-400">
          DIRANCANG SEBAGAI JEJAK DIGITAL ABADI.
          <br />
          UNTUK KITA, SELAMANYA.
        </p>

        {/* Bottom copyright */}
        <div className="mt-16 flex w-full max-w-3xl flex-col items-center justify-between gap-4 border-t border-sky-300/15 pt-6 sm:flex-row">
          <p className="text-[9px] tracking-[0.2em] text-slate-500">
            © {new Date().getFullYear()} MAJESTIC ARCHIVE
          </p>

          <p className="font-serif text-xs italic text-sky-200/60">
            Every memory has a story.
          </p>

          <p className="text-[9px] tracking-[0.2em] text-slate-500">
            MADE WITH MEMORIES
          </p>
        </div>
      </div>
    </footer>
  );
}