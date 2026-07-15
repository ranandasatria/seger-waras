import { testimonials } from "@/data/testimonials";
import { Container, Eyebrow, Section } from "@/components/ui";
import { Quote } from "lucide-react";

export function Testimonial() {
  const [featured, ...rest] = testimonials;

  return (
    <Section id="testimoni" className="border-t border-line">
      <Container>
        <Eyebrow>Testimoni</Eyebrow>

        {featured && (
          <figure className="mt-6 max-w-4xl">
            <Quote
              className="text-sage/30 mb-6"
              size={48}
              strokeWidth={1}
              aria-hidden
            />
            <blockquote className="text-2xl md:text-4xl font-serif text-ink leading-[1.2] tracking-tight">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              <span className="text-ink font-medium">{featured.name}</span>
              <span aria-hidden> · </span>
              <span>{featured.role}</span>
            </figcaption>
          </figure>
        )}

        {rest.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {rest.map((t) => (
              <figure
                key={t.id}
                className="border-t border-line pt-6"
              >
                <blockquote className="text-lg md:text-xl text-ink leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  <span className="text-ink font-medium">{t.name}</span>
                  <span aria-hidden> · </span>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
