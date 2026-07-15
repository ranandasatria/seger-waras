import { MessageCircle, Map, FileText, Hammer, PartyPopper } from "lucide-react";
import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "konsultasi",
    step: 1,
    title: "Konsultasi Awal Gratis",
    description:
      "Kami mendengarkan kebutuhan, preferensi gaya, dan anggaran Anda tanpa biaya.",
    icon: MessageCircle,
  },
  {
    id: "survey",
    step: 2,
    title: "Survey Lokasi Gratis",
    description:
      "Tim kami datang langsung ke lokasi untuk mengukur, memahami kondisi ruang, dan mendiskusikan solusi terbaik.",
    icon: Map,
  },
  {
    id: "proposal",
    step: 3,
    title: "Proposal & RAB",
    description:
      "Kami menyiapkan proposal desain dan rincian anggaran yang transparan untuk Anda.",
    icon: FileText,
  },
  {
    id: "pengerjaan",
    step: 4,
    title: "Pengerjaan",
    description:
      "Proses pemasangan dikerjakan oleh tim berpengalaman dengan pengawasan langsung dan laporan berkala kepada klien.",
    icon: Hammer,
  },
  {
    id: "serah-terima",
    step: 5,
    title: "Serah Terima",
    description:
      "Proyek diserahkan setelah melewati pemeriksaan kualitas bersama klien. Kepuasan Anda adalah standar akhir kami.",
    icon: PartyPopper,
  },
];
