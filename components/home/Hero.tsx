import { ButtonLink, Container, Display, Eyebrow, Lead, Section } from "@/components/ui";
import { PlaceholderImage } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Jasa desain interior</Eyebrow>
            <Display className="mt-5">
              Ruangan yang <em className="text-sage not-italic">segar</em>,<br />
              ruang yang <em className="text-sage not-italic">waras</em>.
            </Display>
            <Lead className="mt-6 max-w-xl">{siteConfig.description}</Lead>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/kontak" size="lg">
                Konsultasi Gratis
              </ButtonLink>
              <ButtonLink href="/tentang-kami" variant="secondary" size="lg">
                Tentang Kami
              </ButtonLink>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm">
              <div>
                <div className="font-mono text-2xl text-sage">10+</div>
                <div className="text-muted mt-1">Tahun pengalaman</div>
              </div>
              <div className="h-10 w-px bg-line" aria-hidden />
              <div>
                <div className="font-mono text-2xl text-sage">200+</div>
                <div className="text-muted mt-1">Proyek selesai</div>
              </div>
              <div className="h-10 w-px bg-line" aria-hidden />
              <div>
                <div className="font-mono text-2xl text-sage">98%</div>
                <div className="text-muted mt-1">Klien puas</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderImage ratio="4/5" label="Hero — Interior Hunian" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
