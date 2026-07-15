import { env } from "./env";

export const siteConfig = {
  name: "SWARAS Interior & Architecture",
  shortName: "SW",
  tagline: "Jasa pemasangan interior residensial & institusional.",
  description:
    "SW Architecture & Interior hadir sebagai mitra terpercaya Anda dalam pemasangan interior dan Arsitektur untuk hunian pribadi maupun ruang institusional.",
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: "id-ID",
  ogImage: "/og.png",
  contact: {
    whatsapp: "6285123882353",
    email: "halo@swarasinterior.com",
    phone: "+62 851-2388-2353",
    address: "Yogyakarta & Surakarta (Solo Raya)",
    hours: "Senin – Sabtu, 09.00 – 18.00 WIB",
  },
  socials: {
    instagram: "https://instagram.com/swaras_interior",
    tiktok: "",
    youtube: "",
  },
  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kontak", href: "/kontak" },
  ] as const,
  legalLinks: [
    { label: "Privasi", href: "/privacy" },
    { label: "Syarat & Ketentuan", href: "/terms" },
  ] as const,
};

export type NavLink = (typeof siteConfig.navLinks)[number];
