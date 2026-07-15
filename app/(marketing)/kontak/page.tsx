import type { Metadata } from "next";
import { Container, Display, Eyebrow, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi tim Seger Waras untuk konsultasi desain interior gratis via WhatsApp.",
};

export default function KontakPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Kontak</Eyebrow>
        <Display className="mt-5">Sedang dibangun.</Display>
        <Lead className="mt-6 max-w-xl">
          Halaman ini akan menampilkan form konsultasi, info kontak, dan peta. Sementara, silakan kembali ke beranda.
        </Lead>
      </Container>
    </Section>
  );
}
