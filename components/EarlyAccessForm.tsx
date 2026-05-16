"use client";

import { useState } from "react";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-electric/30 bg-electric/5 px-6 py-4">
        <svg className="h-5 w-5 flex-shrink-0 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-sm text-white/70">
          Recebemos o seu e-mail. Entraremos em contacto quando os testes privados abrirem.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="o seu melhor e-mail"
        className="h-12 flex-1 rounded-full border border-white/10 bg-white/[0.05] px-6 text-sm text-white placeholder:text-white/30 outline-none focus:border-electric/50 focus:bg-white/[0.08] transition"
      />
      <button
        type="submit"
        className="h-12 rounded-full bg-electric px-7 text-sm font-bold text-navy shadow-lg shadow-electric/20 transition hover:opacity-90 whitespace-nowrap"
      >
        Quero acesso antecipado
      </button>
    </form>
  );
}
