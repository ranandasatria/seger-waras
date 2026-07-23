import type { Metadata } from "next";
import { Story } from "@/components/about/Story";
import { VisionMission } from "@/components/about/VisionMission";
import { Stats } from "@/components/about/Stats";
import { Team } from "@/components/about/Team";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Cerita, filosofi desain, visi, misi, dan tim profesional di balik SWARAS Interior & Architecture.",
};

export default function TentangKamiPage() {
  return (
    <>
      <Story />
      <VisionMission />
      <Stats />
      {/* <Team /> */}
    </>
  );
}
