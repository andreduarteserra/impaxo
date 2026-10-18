import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, #2C5BFF 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative text-center">
        <p className="font-heading text-[160px] font-bold leading-none tracking-tight text-white/[0.04] sm:text-[220px]">
          404
        </p>
        <div className="-mt-8 sm:-mt-14">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-6 bg-electric" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              Página não encontrada
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Esta página não existe.
          </h1>
          <p className="mt-5 text-base text-white/65 max-w-sm mx-auto">
            O endereço pode estar errado ou a página mudou de lugar.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-12 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-brand-blue-hover"
            >
              Ir para a página inicial
            </Link>
            <Link
              href="/contato"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Falar com a gente
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
