"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookies-decision");
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (SSR guard)
    }
  }, []);

  const decide = (accept: boolean) => {
    try {
      localStorage.setItem("cookies-decision", accept ? "accepted" : "rejected");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de privacidade"
      className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:max-w-[360px]"
    >
      <div className="rounded-2xl border border-white/[0.08] bg-navy-card/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-md">
        <p className="text-sm leading-6 text-white/65">
          Utilizamos cookies para melhorar a sua experiência e cumprir a{" "}
          <span className="text-white/85 font-medium">LGPD</span>. Pode aceitar
          ou rejeitar cookies não essenciais.
        </p>
        <div className="mt-4 flex items-center gap-2.5">
          <button
            onClick={() => decide(true)}
            className="flex-1 rounded-full bg-brand-blue py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            Aceitar
          </button>
          <button
            onClick={() => decide(false)}
            className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-white/50 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
}
