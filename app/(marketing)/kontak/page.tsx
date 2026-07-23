import type { Metadata } from "next";
import { Container, Section, SectionHeader } from "@/components/ui";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { LocationMap } from "@/components/contact/LocationMap";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi tim SWARAS Interior & Architecture untuk konsultasi gratis via WhatsApp.",
};

export default function KontakPage() {
  return (
    <>
      <Section id="kontak-kami">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7 bg-sage-soft border border-line p-6 md:p-10 rounded-sm">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
                Formulir Konsultasi
              </p>
              <h3 className="text-xl font-sans font-medium text-ink mb-6">
                Mulai Rancang Ruang Anda
              </h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* <Section id="peta-lokasi" className="pt-0 pb-20 md:pb-28">
        <Container>
          <SectionHeader
            eyebrow="Kunjungi Studio Kami"
            title="Lokasi SWARAS Interior."
            description="Silakan mampir ke studio kami untuk mendiskusikan rencana proyek secara langsung sambil melihat katalog material."
          />
          <div className="mt-8">
            <LocationMap />
          </div>
        </Container>
      </Section> */}
    </>
  );
}
