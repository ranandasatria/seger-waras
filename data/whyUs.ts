import { MessageCircle, Map, Building2, CheckCircle } from "lucide-react";
import type { ValueProp } from "./types";

export const valueProps: ValueProp[] = [
  {
    id: "konsultasi-terbuka",
    title: "Konsultasi Terbuka & Transparan",
    description:
      "Kami mendiskusikan setiap detail — material, anggaran, dan timeline — secara terbuka sebelum proyek dimulai.",
    icon: MessageCircle,
  },
  {
    id: "berbasis-lokal",
    title: "Berbasis di Yogyakarta & Solo Raya",
    description:
      "Kami hadir langsung di lokasi proyek — bukan dikelola dari jarak jauh. Setiap tahap pengerjaan dipantau langsung oleh tim kami.",
    icon: Map,
  },
  {
    id: "pengalaman",
    title: "Residensial & Institusional",
    description:
      "Kami telah menangani proyek hunian pribadi hingga ruang kantor instansi dengan standar kualitas yang konsisten.",
    icon: Building2,
  },
  {
    id: "hasil-sesuai",
    title: "Hasil Sesuai Kesepakatan",
    description:
      "Komitmen kami adalah menyelesaikan proyek tepat waktu, sesuai desain yang disepakati, dan dalam anggaran yang telah ditentukan.",
    icon: CheckCircle,
  },
];
