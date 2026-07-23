import { ButtonLink, Container, Lead, Section } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <Section className="border-t border-line">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-sans leading-[1.05] tracking-tight text-ink">
            SIAP MEMULAI PROYEK ANDA?
          </h2>
          <Lead className="mt-6 max-w-xl">
            Ceritakan kebutuhan ruang Anda kepada kami. Tim Swaras Interior & Architecture siap membantu Anda dari satu ruangan hingga keseluruhan proyek, residensial maupun institusional. Konsultasi awal gratis.
          </Lead>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={`https://wa.me/${siteConfig.contact.whatsapp}`} size="lg" variant="whatsapp">
              Konsultasi via WhatsApp
              <ArrowUpRight size={16} />
            </ButtonLink>
            <ButtonLink href="/layanan" variant="secondary" size="lg">
              Lihat Layanan Kami
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
