import { Container, Section } from "@/components/ui";

export function Story() {
  return (
    <Section id="cerita-kami">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
              Tentang Kami
            </p>
            <h2 className="text-3xl md:text-5xl font-sans leading-[1.1] tracking-tight text-ink">
              Dari konsep hingga ruang nyata.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base text-muted leading-relaxed">
            <p>
              Swaras Interior & Architecture adalah studio jasa pemasangan interior pada hunian residensial maupun institusional. Kami hadir untuk membantu mewujudkan ruangan Anda menjadi tempat tinggal yang fungsional, estetis, dan bermakna bagi setiap penghuninya.
            </p>
            <p>
              Kami percaya bahwa desain interior yang baik bukan sekadar soal keindahan, melainkan juga tentang bagaimana sebuah ruang dapat mencerminkan identitas penggunanya sekaligus mendukung aktivitas di dalamnya secara optimal. Prinsip ini kami terapkan di setiap proyek, baik untuk hunian pribadi maupun ruang kerja dan ruang pertemuan di lingkungan institusional.
            </p>
            <p>
              Portofolio kami mencakup pemasangan interior ruang tamu, kamar tidur, kantor, kitchen set, hingga aula dengan pendekatan yang terencana, pemilihan material yang tepat, dan pengawasan langsung di lapangan oleh tim kami.
            </p>
            <p>
              Kami melayani proyek di Yogyakarta, Surakarta, dan sekitarnya. Kami hadir langsung di lokasi untuk memastikan setiap tahap pengerjaan berjalan sesuai rencana dan standar kualitas yang telah disepakati.
            </p>
            <p>
              <strong className="text-ink font-medium">Dari konsep hingga ruang nyata, Swaras Architecture & Interior siap mewujudkan ruang impian Anda.</strong>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
