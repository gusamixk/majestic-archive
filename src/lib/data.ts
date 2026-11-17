
// Data sementara (statis) supaya tampilan bisa langsung dilihat.
// Nanti diganti dengan data dari tRPC + PostgreSQL.

export type ChapterValue =
  | "BEGINNING"
  | "DAILY_CHAOS"
  | "ESCAPES"
  | "VIDEOS"
  | "LEGACY";

export type GalleryImage = {
  id: number;
  chapter: ChapterValue;
  url: string;
  alt: string;
  type?: "image" | "video";
};

export type Profile = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

// Disesuaikan dengan struktur INITIAL_MESSAGES
export type Message = {
  id: number;
  text: string;
  author: string;
};

export const CHAPTERS: { value: ChapterValue; label: string }[] = [
  { value: "BEGINNING", label: "Chapter I: The Beginning" },
  { value: "DAILY_CHAOS", label: "Chapter II: Daily Chaos" },
  { value: "ESCAPES", label: "Chapter III: The Escapes" },
  { value: "VIDEOS", label: "Chapter IV: Videos" },
];

const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

// Siluet default bertema Midnight Navy & Ice Blue
export const UNKNOWN_AVATAR =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" fill="#0b172e"/>
      <circle cx="200" cy="200" r="145" fill="#13264a" opacity="0.55"/>
      <circle cx="200" cy="155" r="54" fill="#7dd3fc" fill-opacity="0.22" stroke="#7dd3fc" stroke-opacity="0.45" stroke-width="2"/>
      <path d="M98 342c0-56.333 45.667-102 102-102s102 45.667 102 102" fill="#7dd3fc" fill-opacity="0.18" stroke="#7dd3fc" stroke-opacity="0.45" stroke-width="2"/>
    </svg>
  `);

// ==========================================
// GALLERY IMAGES & VIDEOS
// ==========================================

export const GALLERY_IMAGES: GalleryImage[] = [
  // CHAPTER I: THE BEGINNING
  {
    id: 1,
    chapter: "BEGINNING",
    url: "/images/gallery/afterodong.jpg",
    alt: "First Meet at BEC Garden",
    type: "image",
  },
  {
    id: 2,
    chapter: "BEGINNING",
    url: "/images/gallery/afterexam.jpg",
    alt: "After Exam",
    type: "image",
  },
  {
    id: 3,
    chapter: "BEGINNING",
    url: "/images/gallery/diyabirthday.jpg",
    alt: "At BEC Garden",
    type: "image",
  },
  {
    id: 4,
    chapter: "BEGINNING",
    url: "/images/gallery/gardenhall.jpg",
    alt: "At Garden Hall after Study Club",
    type: "image",
  },
  {
    id: 5,
    chapter: "BEGINNING",
    url: "/images/gallery/corner.jpg",
    alt: "At BEC Corner after Evaluation",
    type: "image",
  },

  // CHAPTER II: DAILY CHAOS
  {
    id: 7,
    chapter: "DAILY_CHAOS",
    url: "/images/gallery/afterexam2.jpg",
    alt: "After Exam 2",
    type: "image",
  },
  {
    id: 8,
    chapter: "DAILY_CHAOS",
    url: "/images/gallery/stairsbec.jpg",
    alt: "After Weekly Meeting",
    type: "image",
  },
  {
    id: 9,
    chapter: "DAILY_CHAOS",
    url: "/images/gallery/nightspeak.jpeg",
    alt: "Nightly Speaking",
    type: "image",
  },
  {
    id: 10,
    chapter: "DAILY_CHAOS",
    url: "/images/gallery/parkir.jpeg",
    alt: "At Park Area",
    type: "image",
  },
  {
    id: 11,
    chapter: "DAILY_CHAOS",
    url: "/images/gallery/girlclass.jpeg",
    alt: "Girl Majestic",
    type: "image",
  },

  // CHAPTER III: THE ESCAPES
  {
    id: 12,
    chapter: "ESCAPES",
    url: "/images/gallery/sea.jpg",
    alt: "Pantai",
    type: "image",
  },
  {
    id: 13,
    chapter: "ESCAPES",
    url: "/images/gallery/sea2.jpeg",
    alt: "Pantai",
    type: "image",
  },
  {
    id: 14,
    chapter: "ESCAPES",
    url: "/images/gallery/sea4.jpeg",
    alt: "Pantai",
    type: "image",
  },
  {
    id: 15,
    chapter: "ESCAPES",
    url: "/images/gallery/sea5.jpeg",
    alt: "Pantai",
    type: "image",
  },
  {
    id: 16,
    chapter: "ESCAPES",
    url: "/images/gallery/sea3.jpeg",
    alt: "Pantai",
    type: "image",
  },

  // CHAPTER IV: VIDEOS
  {
    id: 17,
    chapter: "VIDEOS",
    url: "/videos/vid1.mp4",
    alt: "Majestic Moments 1",
    type: "video",
  },
  {
    id: 18,
    chapter: "VIDEOS",
    url: "/videos/vid2.mp4",
    alt: "Majestic Moments 2",
    type: "video",
  },
    {
    id: 19,
    chapter: "VIDEOS",
    url: "/videos/vid3.mp4",
    alt: "Majestic Moments 3",
    type: "video",
  },
    {
    id: 20,
    chapter: "VIDEOS",
    url: "/videos/vid4.mp4",
    alt: "Majestic Moments 4",
    type: "video",
  },
];

export const PROFILES: Profile[] = [
  { id: 1, name: "Afi", role: "Majestic · CTC Era", quote: "No Cuts, No Buds, No Coconuts", avatar: "/images/member/afi.jpg" },
  { id: 2, name: "Zii", role: "Majestic · CTC Era", quote: "No map, no clue, just making dreams come true.", avatar: "/images/member/nazi.jpg" },
  { id: 3, name: "Nafisa", role: "Majestic · CTC Era", quote: "Small progress is still progress", avatar: "/images/member/nafisa.jpg" },
  { id: 4, name: "Labib", role: "Majestic · CTC Era", quote: "No Pain No Gain.", avatar: "/images/member/labib.jpg" },
  { id: 5, name: "Faqih", role: "Majestic · CTC Era", quote: "Dare To Be Different.", avatar: "/images/member/faqih.jpg" },
  { id: 6, name: "Zahra", role: "Majestic · CTC Era", quote: "Keep going, my dream is waiting.", avatar: "/images/member/zahra.jpg" },
  { id: 7, name: "Adwar", role: "Majestic · CTC Era", quote: "Courage is the key to victory.", avatar: "/images/member/adwar.jpg" },
  { id: 8, name: "Safwan", role: "Majestic · CTC Era", quote: "Own your actions, accept the consequences", avatar: "/images/member/shafwan.jpg" },
  { id: 9, name: "Naili", role: "Majestic · CTC Era", quote: "Life is a Journey, not a destination.", avatar: "/images/member/naili.jpg" },
  { id: 10, name: "Salsa", role: "Majestic · CTC Era", quote: "Everything happens for a reason.", avatar: "/images/member/salsa.jpg" },
  { id: 11, name: "Dhiya", role: "Majestic · CTC Era", quote: "My journey, my pace, my story.", avatar: "/images/member/dhiya.jpg" },
  { id: 12, name: "Saskya", role: "Majestic · CTC Era", quote: "A simple life is a happy life", avatar: "/images/member/saskya.jpg" },
  { id: 13, name: "Nadya", role: "Majestic · CTC Era", quote: "Wherever life plants you, bloom with grace", avatar: "/images/member/nadia.jpg" },
  { id: 14, name: "Azizah", role: "Majestic · CTC Era", quote: "My life, My Rules, My Drive", avatar: "/images/member/azizah.jpeg" },
  { id: 15, name: "Mila", role: "Majestic · CTC Era", quote: "English is easy......just kidding!", avatar: "/images/member/mila.jpg" },
  { id: 16, name: "Idam", role: "Majestic · CTC Era", quote: "Daring to begin, daring to end", avatar: "/images/member/idam.jpg" },
  { id: 17, name: "Rio", role: "Majestic · CTC Era", quote: "Breathe, keep breathing. Don't lose your nerve", avatar: "/images/member/rio.jpg" },
  { id: 18, name: "Drs. Amix", role: "Majestic · CTC Era", quote: "Bloom at my own pace", avatar: "/images/member/amix.jpg" },
  { id: 19, name: "Salman", role: "Majestic · CTC Era", quote: "Your past doesn’t define your future", avatar: "/images/member/salman.jpg" },
  { id: 20, name: "Risma", role: "Majestic · CTC Era", quote: "Make memories, not excuses.", avatar: "/images/member/risma.jpg" },
  { id: 21, name: "Rizka", role: "Majestic · CTC Era", quote: "Won't give up, won't stop believing, I just keep on chasing that feeling.", avatar: "/images/member/riska.jpg" },
  { id: 22, name: "Yudha", role: "Majestic · CTC Era", quote: "I hope I mattered", avatar: "/images/member/yuda.jpg" },
  { id: 23, name: "Alnaha", role: "Majestic · CTC Era", quote: "Don’t plan everything, because sometimes the unplanned turns out to be even more beautiful", avatar: "/images/member/alnaha.jpg" },
  { id: 24, name: "Dhani", role: "Majestic · CTC Era", quote: "Everything you lose is a step you take, and be the reason someone smiles today.", avatar: "/images/member/dani.jpg" },
  { id: 25, name: "Prof. Rusydi", role: "Majestic · CTC Era", quote: "The birds that flock together have the same feathers", avatar: "/images/member/rusydi.jpg" },
  { id: 26, name: "Cinday", role: "Majestic · CTC Era", quote: "You can complain, don't give up", avatar: "/images/member/cinday.jpg" },
  { id: 27, name: "Raffi", role: "Majestic · CTC Era", quote: "Do something today that your future self will thank you for", avatar: "/images/member/rafi.jpg" },
  { id: 28, name: "Wildan", role: "Majestic · CTC Era", quote: "Small, consistent steps are far better than running fast and then stopping.", avatar: "/images/member/wildan.jpg" },
  { id: 29, name: "Ilham", role: "Majestic · CTC Era", quote: "Mistakes are the proof that you are trying", avatar: "/images/member/ilham.jpg" },
];

// ==========================================
// INITIAL MESSAGES
// ==========================================

export const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Semoga saat web ini kita buka kembali suatu hari nanti, kita semua sudah duduk di kursi impian masing-masing.",
    author: "Anonymous",
  },
  {
    id: 2,
    text: "Terima kasih untuk 3 tahun yang penuh drama, tawa, dan contekan PR matematika.",
    author: "M.K.",
  },
];
