import { Home, Briefcase, Wrench, Sofa, Lightbulb, Layers } from "lucide-react";
import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "hunian",
    name: "Desain Interior Hunian",
    description:
      "Rumah tinggal, apartemen, dan villa yang dirancang sesuai karakter, gaya hidup, dan anggaran keluarga Anda.",
    icon: Home,
  },
  {
    id: "komersial",
    name: "Desain Komersial",
    description:
      "Kantor, retail, restoran, dan cafe dengan konsep yang memperkuat brand serta pengalaman pelanggan.",
    icon: Briefcase,
  },
  {
    id: "renovasi",
    name: "Renovasi & Build",
    description:
      "Renovasi total maupun sebagian dengan manajemen proyek yang rapi, mulai dari pembongkaran hingga finishing.",
    icon: Wrench,
  },
  {
    id: "furniture",
    name: "Custom Furniture",
    description:
      "Furniture built-in dan loose yang dibuat khusus oleh tukang lokal berpengalaman, sesuai desain dan ukuran ruang.",
    icon: Sofa,
  },
  {
    id: "konsultasi",
    name: "Konsultasi & Konsep",
    description:
      "Sesi konsultasi 1–2 jam untuk membahas layout, palet warna, material, dan arah desain sebelum eksekusi.",
    icon: Lightbulb,
  },
  {
    id: "3d",
    name: "Visualisasi 3D",
    description:
      "Render 3D fotorealistis sehingga Anda bisa melihat hasil akhir ruangan sebelum produksi dimulai.",
    icon: Layers,
  },
];
