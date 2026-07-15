import { valueProps } from "@/data/whyUs";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";

export function WhyUs() {
  return (
    <Section id="mengapa-kami" className="border-t border-line">
      <Container>
        <SectionHeader
          eyebrow="Mengapa Seger Waras"
          title="Enam alasan klien kami memilih kami."
          description="Kami tidak hanya mendesain ruangan — kami merancang pengalaman, dari konsultasi pertama hingga garansi purna jual."
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {valueProps.map((v, i) => (
            <li key={v.id} className="flex flex-col">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-sm text-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-sage">
                  <Icon icon={v.icon} size={20} strokeWidth={1.25} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{v.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
