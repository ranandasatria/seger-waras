import { env } from "./env";

export const siteConfig = {
  name: "Seger Waras",
  shortName: "SW",
  tagline: "Jasa desain interior yang menyegarkan.",
  description:
    "Seger Waras adalah studio desain interior yang membantu Anda menciptakan ruang yang sehat, hangat, dan sesuai karakter Anda.",
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: "id-ID",
  ogImage: "/og.png",
  contact: {
    whatsapp: env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    email: "halo@segerwaras.id",
    phone: "+62 812 3456 7890",
    address: "Jl. Contoh No. 123, Jakarta Selatan, Indonesia",
    hours: "Senin – Sabtu, 09.00 – 18.00 WIB",
  },
  socials: {
    instagram: "https://instagram.com/segerwaras",
    tiktok: "https://tiktok.com/@segerwaras",
    youtube: "https://youtube.com/@segerwaras",
  },
  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kontak", href: "/kontak" },
  ] as const,
  legalLinks: [
    { label: "Privasi", href: "/privacy" },
    { label: "Syarat & Ketentuan", href: "/terms" },
  ] as const,
};

export type NavLink = (typeof siteConfig.navLinks)[number];
