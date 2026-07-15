import { processSteps } from "@/data/process";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";

export function Process() {
  return (
    <Section id="proses" className="border-t border-line bg-sage-soft">
      <Container>
        <SectionHeader
          eyebrow="Bagaimana Kami Bekerja"
          title="Lima langkah dari konsultasi hingga ruang nyata."
          description="Setiap proyek kami kerjakan dengan alur yang terstruktur dan komunikasi yang transparan di setiap tahap."
        />
        <ol className="border-t border-line">
          {processSteps.map((step) => (
            <li
              key={step.id}
              className="grid grid-cols-[64px_1fr] md:grid-cols-[120px_1fr_auto] gap-6 md:gap-10 items-start py-10 md:py-12 border-b border-line"
            >
              <div className="font-mono text-4xl md:text-6xl text-sage leading-none">
                {String(step.step).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-sans text-ink leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-muted leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-sm border border-line text-sage">
                <Icon icon={step.icon} size={22} strokeWidth={1.25} />
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
