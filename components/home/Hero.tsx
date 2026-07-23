import { ButtonLink, Container, Lead, Section } from "@/components/ui";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { valueProps } from "@/data/whyUs";
import { Icon } from "@/components/ui";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
              {siteConfig.name}
            </p>
            <h1 className="text-5xl md:text-7xl font-sans leading-[1.05] tracking-tight text-ink">
              SESUAI IMAJINASI,<br />
              NYAMAN{" "}
              <span className="text-white/90">SEPENUH HATI</span>
            </h1>
            <Lead className="mt-6 max-w-xl">
              Swaras Interior & Architecture hadir sebagai mitra terpercaya Anda dalam pemasangan interior dan arsitektur untuk hunian pribadi maupun ruang institusional. Kami siap hadir mewujudkan imajinasi dan impian Anda.
            </Lead>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/kontak" size="lg">
                Konsultasi Gratis
              </ButtonLink>
              <ButtonLink href="/layanan" variant="secondary" size="lg">
                Lihat Layanan
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[200px] md:h-[300px]">
            <Image
              src="/logosw.jpeg"
              alt={siteConfig.name}
              fill
              className="object-contain object-center opacity-10"
              sizes="(max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
        </div>

        <div className="mt-20 md:mt-28 border-t border-line pt-12 md:pt-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-8">
            Mengapa Klien Mempercayai Kami
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {valueProps.map((v) => (
              <li key={v.id} className="flex gap-4">
                <div className="mt-1 shrink-0 text-sage">
                  <Icon icon={v.icon} size={20} strokeWidth={1.25} />
                </div>
                <div>
                  <h2 className="text-base font-medium text-ink">{v.title}</h2>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{v.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
