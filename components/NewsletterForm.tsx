"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <p className="mt-8 text-sm font-medium text-electric">
        ✓ Subscrito com sucesso! Bem-vindo à comunidade Impaxo.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        placeholder="O seu melhor e-mail"
        className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-electric/50 focus:ring-2 focus:ring-electric/20"
      />
      <button
        type="submit"
        className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 whitespace-nowrap"
      >
        Subscrever
      </button>
    </form>
  );
}
