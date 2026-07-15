import { Container, Section } from "@/components/ui";

const stats = [
  { value: "2016", label: "Tahun Berdiri" },
  { value: "200+", label: "Proyek Selesai" },
  { value: "15+", label: "Penghargaan Desain" },
  { value: "100%", label: "Komitmen Kualitas" },
];

export function Stats() {
  return (
    <Section id="statistik" className="border-t border-line bg-canvas">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-mono text-4xl md:text-6xl text-sage tracking-tight font-light leading-none">
                {s.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.15em] text-muted mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
