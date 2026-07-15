import { siteConfig } from "./site";

export function buildWhatsAppLink(message: string, phone: string = siteConfig.contact.whatsapp): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string, phone: string = siteConfig.contact.whatsapp): void {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppLink(message, phone), "_blank", "noopener,noreferrer");
}

export type ContactFormPayload = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export function composeWhatsAppMessage(payload: ContactFormPayload): string {
  const lines = [
    `Halo SWARAS Interior,`,
    ``,
    `Saya *${payload.name}* (${payload.email}) ingin berkonsultasi.`,
    ``,
    `*Jenis proyek:* ${payload.projectType}`,
    ``,
    `${payload.message}`,
  ];
  return lines.join("\n");
}
