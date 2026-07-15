import { Coffee, Award, Sparkles, ShieldCheck, Clock, Hammer } from "lucide-react";
import type { ValueProp } from "./types";

export const valueProps: ValueProp[] = [
  {
    id: "konsultasi-gratis",
    title: "Konsultasi Gratis",
    description:
      "Sesi awal tanpa biaya untuk berdiskusi mengenai kebutuhan, gaya, dan anggaran Anda.",
    icon: Coffee,
  },
  {
    id: "pengalaman",
    title: "10+ Tahun Pengalaman",
    description:
      "Tim desainer dan project manager yang sudah menangani ratusan proyek residensial dan komersial.",
    icon: Award,
  },
  {
    id: "3d-realistis",
    title: "Desain 3D Realistis",
    description:
      "Anda melihat dan merasakan ruangan impian Anda sebelum satu baut pun dipasang.",
    icon: Sparkles,
  },
  {
    id: "material-premium",
    title: "Material Premium",
    description:
      "Material dan finishing yang kami gunakan dipilih dari supplier terpercaya, dengan garansi keaslian.",
    icon: ShieldCheck,
  },
  {
    id: "tepat-waktu",
    title: "Tepat Waktu",
    description:
      "Timeline yang jelas di awal proyek dan kami komitmen untuk menyelesaikannya sesuai jadwal.",
    icon: Clock,
  },
  {
    id: "purna-jual",
    title: "Garansi Purna Jual",
    description:
      "Kami tidak hilang setelah serah terima. Garansi dan dukungan maintenance tersedia untuk Anda.",
    icon: Hammer,
  },
];
