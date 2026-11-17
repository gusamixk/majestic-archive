
import type { GalleryImage } from "@/lib/data";

type Props = {
  image: GalleryImage;
  staggered?: boolean;
};

export function GalleryCard({ image }: Props) {
  const isVideo = image.type === "video";

  return (
    <div className="group relative w-full overflow-hidden border border-sky-300/20 bg-[#0b172e]">

      {/* VIDEO */}
      {isVideo ? (
        <video
          src={image.url}
          controls
          playsInline
          preload="metadata"
          className="block h-auto w-full opacity-85 transition-all duration-1000 ease-out group-hover:opacity-100"
        >
          Your browser does not support video playback.
        </video>
      ) : (

        /* IMAGE */
        <img
          src={image.url}
          alt={image.alt}
          loading="lazy"
          className="block h-auto w-full opacity-85 grayscale transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
        />
      )}

      {/* Gradient caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060d1a]/90 via-[#060d1a]/40 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="font-serif text-sm italic tracking-wider text-sky-100">
          {image.alt}
        </p>
      </div>

      {/* Video label */}
      {isVideo && (
        <div className="pointer-events-none absolute left-4 top-4 z-20 border border-sky-300/40 bg-[#060d1a]/80 px-3 py-1">
          <span className="text-[9px] tracking-[0.25em] text-sky-300">
            VIDEO MEMORY
          </span>
        </div>
      )}

      {/* Corner decorations */}
      <div className="pointer-events-none absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-sky-300/0 transition-colors duration-500 group-hover:border-sky-300/70" />

      <div className="pointer-events-none absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r border-sky-300/0 transition-colors duration-500 group-hover:border-sky-300/70" />

    </div>
  );
}
