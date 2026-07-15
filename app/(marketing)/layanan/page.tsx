import type { Metadata } from "next";
import { services } from "@/data/services";
import { Container, Icon, Section } from "@/components/ui";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Jelajahi layanan pemasangan interior SWARAS: Backdrop Ruang Tamu, Kamar Tidur, Kitchen Set, Ruang Rapat, Lantai Vinyl, Plafon PVC, dan banyak lagi.",
};

export default function LayananPage() {
  return (
    <>
      <Section>
        <Container>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
            Layanan Kami
          </p>
          <h1 className="text-4xl md:text-6xl font-sans leading-[1.05] tracking-tight text-ink max-w-3xl">
            Solusi interior lengkap untuk hunian dan institusi Anda.
          </h1>
        </Container>
      </Section>

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          className={index % 2 === 1 ? "border-t border-line bg-white" : "border-t border-line"}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-sage">
                    <Icon icon={service.icon} size={28} strokeWidth={1.25} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-sans text-ink leading-tight">
                    {service.name}
                  </h2>
                </div>
                <p className="text-base text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                {service.benefits.length > 0 && (
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
                      Keunggulan
                    </p>
                    <ul className="space-y-3">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-ink">
                          <Check size={16} className="mt-0.5 shrink-0 text-sage" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.materials.length > 0 && (
                  <div className="mt-8">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
                      Material
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((m, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-3 py-1.5 rounded-sm border border-line text-muted"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
