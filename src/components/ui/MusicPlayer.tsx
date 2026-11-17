"use client";

import { useState, useRef, useEffect } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Opsional: otomatis putar lagu saat pengunjung pertama kali klik di mana saja
  useEffect(() => {
    const startOnFirstClick = () => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
      window.removeEventListener("click", startOnFirstClick);
    };

    window.addEventListener("click", startOnFirstClick);
    return () => window.removeEventListener("click", startOnFirstClick);
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Supaya tidak bentrok dengan listener klik pertama
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/music/Storyofmylife.mp3"
        loop
        preload="metadata"
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="flex items-center gap-3 rounded-full border border-sky-300/40 bg-[#0b172e]/85 px-4 py-2.5 text-left shadow-[0_10px_30px_rgba(2,6,23,0.8)] backdrop-blur-md transition-all duration-500 hover:border-white hover:shadow-[0_0_25px_rgba(125,211,252,0.3)]"
      >
        <div className="flex h-4 w-4 items-end justify-center gap-[2px]">
          <span
            className={`w-[2px] bg-sky-300 transition-all duration-300 ${
              isPlaying ? "h-4 animate-pulse" : "h-1.5"
            }`}
          />
          <span
            className={`w-[2px] bg-sky-300 transition-all duration-300 ${
              isPlaying ? "h-2.5 animate-bounce" : "h-3"
            }`}
          />
          <span
            className={`w-[2px] bg-sky-300 transition-all duration-300 ${
              isPlaying ? "h-3.5 animate-pulse" : "h-2"
            }`}
          />
        </div>

        <div className="pr-1">
          <p className="text-[9px] font-medium tracking-[0.2em] text-white">
            {isPlaying ? "NOW PLAYING" : "PLAY MUSIC"}
          </p>
          <p className="font-serif text-[10px] italic text-sky-300/80">
            Story of My Life
          </p>
        </div>
      </button>
    </div>
  );
}