import { services } from "@/data/services";
import {
  Container,
  Icon,
  Section,
  SectionHeader,
} from "@/components/ui";

export function Services() {
  return (
    <Section id="layanan" className="border-t border-line">
      <Container>
        <SectionHeader
          eyebrow="Layanan"
          title="Apa yang bisa kami wujudkan untuk Anda."
          description="Dari konsultasi singkat hingga renovasi total, kami siap membantu di setiap tahap."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {services.map((s) => (
            <article
              key={s.id}
              className="bg-canvas p-8 md:p-10 group transition-colors hover:bg-white"
            >
              <div className="mb-6 text-sage">
                <Icon icon={s.icon} size={28} strokeWidth={1.25} />
              </div>
              <h3 className="text-xl font-medium text-ink mb-3">{s.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
