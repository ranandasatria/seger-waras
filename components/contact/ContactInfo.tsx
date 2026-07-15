import { Icon } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
          Hubungi Kami
        </p>
        <h2 className="text-2xl md:text-3xl font-sans text-ink leading-tight">
          Mari bicarakan tentang ruang impian Anda.
        </h2>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          Tim kami siap mendengarkan ide, kekhawatiran, dan visi Anda. Silakan hubungi kami melalui jalur komunikasi di bawah ini, atau jadwalkan pertemuan langsung di studio kami.
        </p>
      </div>

      <div className="border-t border-line pt-8">
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="mt-1 text-sage shrink-0">
              <Icon icon={Mail} size={20} strokeWidth={1.25} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted">
                Kirim Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm font-sans font-medium text-ink hover:text-sage transition-colors mt-1 block"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="mt-1 text-sage shrink-0">
              <Icon icon={Phone} size={20} strokeWidth={1.25} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted">
                Telepon & WhatsApp
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans font-medium text-ink hover:text-sage transition-colors mt-1 block"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="mt-1 text-sage shrink-0">
              <Icon icon={Clock} size={20} strokeWidth={1.25} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted">
                Jam Operasional
              </p>
              <p className="text-sm font-sans font-medium text-ink mt-1">
                {siteConfig.contact.hours}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="mt-1 text-sage shrink-0">
              <Icon icon={MapPin} size={20} strokeWidth={1.25} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted">
                Alamat Studio
              </p>
              <p className="text-sm text-ink leading-relaxed mt-1">
                {siteConfig.contact.address}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
