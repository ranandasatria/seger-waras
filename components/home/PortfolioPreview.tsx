import { portfolio } from "@/data/portfolio";
import { Container, Eyebrow, PlaceholderImage, Section } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function PortfolioPreview() {
  return (
    <Section id="portofolio" className="border-t border-line">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <Eyebrow>Portofolio</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-sans text-ink leading-[1.1] tracking-tight">
              Beberapa ruangan yang pernah kami wujudkan.
            </h2>
          </div>
          <Link
            href="/kontak"
            className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink hover:text-sage transition-colors"
          >
            Lihat semua
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {portfolio.map((item) => (
            <li key={item.id} className="group">
              <PlaceholderImage
                ratio={item.ratio}
                label={`${item.category} — ${item.title}`}
              />
              <div className="mt-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-muted">
                  <span>{item.category}</span>
                  <span aria-hidden>·</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="mt-2 text-lg md:text-xl font-medium text-ink group-hover:text-sage transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.location}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 md:hidden">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink hover:text-sage transition-colors"
          >
            Lihat semua
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
