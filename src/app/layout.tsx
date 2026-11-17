import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@/lib/data";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Majestic — Arsip Perjalanan, Tawa, dan Waktu",
  description:
    "Arsip digital kenangan kelas Majestic: galeri foto, profil, dan pesan untuk masa depan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
