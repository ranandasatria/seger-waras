import { MessageCircle, MapPin, PencilRuler, Hammer, PartyPopper } from "lucide-react";
import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "konsultasi",
    step: 1,
    title: "Konsultasi Awal",
    description:
      "Sesi 1–2 jam (online atau onsite) untuk menggali kebutuhan, preferensi gaya, dan anggaran Anda.",
    icon: MessageCircle,
  },
  {
    id: "survey",
    step: 2,
    title: "Survey & Brief",
    description:
      "Kunjungan lokasi, pengukuran, dokumentasi, dan penyusunan brief desain yang terstruktur.",
    icon: MapPin,
  },
  {
    id: "konsep",
    step: 3,
    title: "Konsep & 3D Render",
    description:
      "Layout, moodboard, pemilihan material, dan visualisasi 3D fotorealistis untuk direview bersama.",
    icon: PencilRuler,
  },
  {
    id: "eksekusi",
    step: 4,
    title: "Produksi & Eksekusi",
    description:
      "Produksi furniture, instalasi, dan finishing oleh tim lapangan yang diawasi project manager.",
    icon: Hammer,
  },
  {
    id: "serah-terima",
    step: 5,
    title: "Serah Terima",
    description:
      "Quality check bersama, handover dokumen, dan penjelasan perawatan untuk setiap elemen desain.",
    icon: PartyPopper,
  },
];
