import { services } from "@/data/services";
import {
  ButtonLink,
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
          eyebrow="Layanan Kami"
          title="Apa yang kami kerjakan."
          description="SW Architecture & Interior menyediakan layanan pemasangan dan desain interior yang menyeluruh dari elemen dekoratif hingga finishing teknikal untuk hunian residensial maupun ruang institusional."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {services.map((s) => (
            <article
              key={s.id}
              className="bg-canvas p-8 md:p-10 group transition-colors hover:bg-sage-soft flex flex-col"
            >
              <div className="mb-6 text-sage">
                <Icon icon={s.icon} size={28} strokeWidth={1.25} />
              </div>
              <h3 className="text-xl font-medium text-ink mb-3">{s.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{s.shortDescription}</p>
              <ButtonLink
                href={`/layanan#${s.id}`}
                variant="ghost"
                size="sm"
                className="self-start text-sage hover:text-sage"
              >
                Detail Layanan
              </ButtonLink>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
