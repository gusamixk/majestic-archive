import { Hero } from "@/components/sections/Hero";
import { Prologue } from "@/components/sections/Prologue";
import { MemoryVault } from "@/components/sections/MemoryVault";
import { SoulsOfMajestic } from "@/components/sections/SoulsOfMajestic";
import { Footer } from "@/components/sections/Footer";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { GALLERY_IMAGES, PROFILES, INITIAL_MESSAGES } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060d1a] text-[#f1f5f9] selection:bg-sky-300 selection:text-[#060d1a]">
      <Hero />
      <Prologue />
      <MemoryVault images={GALLERY_IMAGES} />
      <SoulsOfMajestic profiles={PROFILES} />
      <Footer />
      <MusicPlayer />
    </main>
  );
}