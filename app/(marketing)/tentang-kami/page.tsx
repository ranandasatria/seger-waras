import type { Metadata } from "next";
import { Container, Display, Eyebrow, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Cerita, visi, dan tim di balik Seger Waras.",
};

export default function TentangKamiPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Tentang Kami</Eyebrow>
        <Display className="mt-5">Sedang dibangun.</Display>
        <Lead className="mt-6 max-w-xl">
          Halaman ini akan menampilkan cerita, visi & misi, dan tim Seger Waras. Sementara, silakan kembali ke beranda.
        </Lead>
      </Container>
    </Section>
  );
}
