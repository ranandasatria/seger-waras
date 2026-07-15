import { ButtonLink, Container, Display, Lead, Section } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <Section className="border-t border-line">
      <Container>
        <div className="max-w-3xl">
          <Display className="text-4xl md:text-6xl">
            Siap wujudkan ruangan <em className="text-sage not-italic">impian</em> Anda?
          </Display>
          <Lead className="mt-6 max-w-xl">
            Ceritakan kebutuhan Anda lewat WhatsApp. Kami balas dalam 1×24 jam untuk menjadwalkan sesi konsultasi gratis.
          </Lead>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/kontak" size="lg">
              Konsultasi via WhatsApp
              <ArrowUpRight size={16} />
            </ButtonLink>
            <ButtonLink href="/tentang-kami" variant="secondary" size="lg">
              Pelajari Lebih Lanjut
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
