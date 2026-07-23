"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { composeWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";
import type { ContactFormPayload } from "@/lib/whatsapp";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormPayload>({
    name: "",
    // email: "",
    projectType: "Hunian",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormPayload, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi.";
    }

    // if (!form.email.trim()) {
    //   newErrors.email = "Email wajib diisi.";
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    //   newErrors.email = "Format email tidak valid.";
    // }

    if (!form.message.trim()) {
      newErrors.message = "Pesan konsultasi wajib diisi.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const message = composeWhatsAppMessage(form);
      openWhatsApp(message);
    } catch (err) {
      console.error("Gagal mengirim formulir:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-ink mb-2">
          Nama Lengkap *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 bg-sage-soft border border-line rounded-sm font-sans text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
          placeholder="Masukkan nama lengkap Anda"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500 font-mono">{errors.name}</p>
        )}
      </div>

      {/* <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-ink mb-2">
          Alamat Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 bg-sage-soft border border-line rounded-sm font-sans text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
          placeholder="contoh@email.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500 font-mono">{errors.email}</p>
        )}
      </div> */}

      <div>
        <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-ink mb-2">
          Jenis Proyek *
        </label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          className="w-full px-4 py-3 bg-sage-soft border border-line rounded-sm font-sans text-sm text-ink focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors appearance-none cursor-pointer"
        >
          <option value="Hunian">Desain Interior Hunian (Rumah/Apartemen)</option>
          <option value="Komersial">Desain Komersial (Kantor/Cafe/Ritel)</option>
          <option value="Renovasi">Renovasi & Kontraktor (Build)</option>
          <option value="Custom Furniture">Custom Furniture / Kabinet</option>
          <option value="Konsultasi">Konsultasi Desain Saja</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-ink mb-2">
          Pesan & Kebutuhan Ruang Anda *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 bg-sage-soft border border-line rounded-sm font-sans text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors resize-none"
          placeholder="Ceritakan tentang ruangan yang ingin Anda bangun (misal: luas area, gaya yang disukai, atau kendala saat ini)"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500 font-mono">{errors.message}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Mengirim..." : "Kirim Konsultasi via WhatsApp"}
        </Button>
      </div>
    </form>
  );
}
