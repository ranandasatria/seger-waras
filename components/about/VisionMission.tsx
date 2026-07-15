import { Container, Section } from "@/components/ui";

export function VisionMission() {
  return (
    <Section id="visi-misi" className="border-t border-line bg-sage-soft">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage">
              Visi Kami
            </p>
            <h3 className="text-2xl md:text-3xl font-sans text-ink">
              Menciptakan ruang yang menyegarkan fisik dan menenangkan pikiran.
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Kami bercita-cita menjadi studio desain interior pionir yang mengedepankan pendekatan 
              *biophilic design* dan desain berkelanjutan di Indonesia, memastikan setiap karya kami 
              memberikan kontribusi positif bagi kesejahteraan penghuni dan lingkungan sekitarnya.
            </p>
          </div>

          <div className="space-y-4 md:border-l md:border-line md:pl-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage">
              Misi Kami
            </p>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex gap-4">
                <span className="font-mono text-sage font-medium">01</span>
                <p className="leading-relaxed">
                  <strong className="text-ink font-medium">Fokus pada Manusia:</strong> Merancang interior yang mengutamakan kesehatan, kenyamanan sirkulasi, dan kemudahan perawatan harian.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-sage font-medium">02</span>
                <p className="leading-relaxed">
                  <strong className="text-ink font-medium">Eksplorasi Material Lokal:</strong> Mengintegrasikan material alam Indonesia berkualitas tinggi untuk menghadirkan kehangatan yang otentik.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-sage font-medium">03</span>
                <p className="leading-relaxed">
                  <strong className="text-ink font-medium">Transparansi Proses:</strong> Memberikan kejelasan biaya, timeline produksi, serta dokumentasi terperinci di setiap fase pembangunan.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
