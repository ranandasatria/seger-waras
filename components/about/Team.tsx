import { team } from "@/data/team";
import { Container, PlaceholderImage, Section, SectionHeader } from "@/components/ui";

export function Team() {
  return (
    <Section id="tim-kami" className="border-t border-line">
      <Container>
        <SectionHeader
          eyebrow="Orang-orang Kami"
          title="Kolaborator di balik SWARAS."
          description="Tim desainer, arsitek, dan koordinator lapangan yang berdedikasi tinggi untuk menjaga kesegaran konsep dan kesehatan eksekusi proyek Anda."
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <li key={member.id} className="flex flex-col">
              <PlaceholderImage ratio="1/1" label={`Foto — ${member.name}`} />
              <div className="mt-5">
                <h3 className="text-lg font-medium text-ink leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-[0.15em] text-sage mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
