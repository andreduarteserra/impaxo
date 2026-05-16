"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const serviceOptions = [
  "Criação de Sites",
  "Marketing Digital",
  "Desenvolvimento de Apps",
  "Outro",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-electric/30 bg-electric/5 px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-electric/20 text-electric mb-6">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-3xl font-bold text-white mb-3">
          Mensagem enviada!
        </h3>
        <p className="text-white/60 max-w-sm">
          Recebemos o seu contacto. A nossa equipa vai responder em até 24 horas úteis.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
          className="mt-8 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
            Nome completo <span className="text-electric">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="João Silva"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-electric/60 focus:bg-electric/5 focus:ring-2 focus:ring-electric/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
            E-mail <span className="text-electric">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="joao@empresa.com.br"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-electric/60 focus:bg-electric/5 focus:ring-2 focus:ring-electric/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/70">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+55 (11) 90000-0000"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-electric/60 focus:bg-electric/5 focus:ring-2 focus:ring-electric/20"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/70">
            Serviço de interesse
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-navy-card px-4 py-3 text-sm text-white outline-none transition focus:border-electric/60 focus:ring-2 focus:ring-electric/20"
          >
            <option value="">Selecione um serviço</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
          Mensagem <span className="text-electric">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Conte-nos sobre o seu projeto ou necessidade..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-electric/60 focus:bg-electric/5 focus:ring-2 focus:ring-electric/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </button>
    </form>
  );
}
