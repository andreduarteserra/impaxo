import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "impaxo lab – Produtos",
  description:
    "Produtos digitais construídos pela Impaxo. Soluções prontas para empresas que querem crescer mais rápido.",
};

const products = [
  {
    slug: "mensagram",
    name: "Mensagram",
    tagline: "Mensagens que não existem.",
    description:
      "Mensagens encriptadas que não deixam rasto. Sem histórico, sem registos, sem dados pessoais.",
    tags: [],
    status: "Disponível",
    members: "+7 mil membros ativos por dia",
    glow: "rgba(0,212,255,0.12)",
  },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
        {children}
      </span>
    </div>
  );
}

export default function LabPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #00D4FF 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>impaxo lab</Kicker>
            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Produtos que{" "}
              <span className="text-electric">resolvem problemas reais</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/55">
              Para além dos serviços, construímos os nossos próprios produtos
              digitais — ferramentas prontas a usar para empresas que querem
              mover-se mais depressa.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/lab/${p.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-navy-card p-10 transition hover:-translate-y-1 hover:border-white/15 hover:shadow-xl hover:shadow-black/25"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${p.glow} 0%, transparent 60%)`,
                  }}
                />
                <div className="relative flex flex-col flex-1">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/45"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                      {p.status}
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl font-bold text-white transition group-hover:text-electric">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-white/35">{p.tagline}</p>
                  <p className="mt-5 flex-1 text-base leading-7 text-white/55">{p.description}</p>

                  {p.members && (
                    <div className="mt-5 flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-electric animate-pulse" />
                      <span className="text-sm font-medium text-electric/80">{p.members}</span>
                    </div>
                  )}

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-electric">
                    Aceder ao Mensagram
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Placeholder — Em desenvolvimento */}
            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.05] bg-navy-card/60 p-10 select-none">
              {/* blur overlay */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl backdrop-blur-[2px] bg-navy/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <svg className="h-5 w-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.712-1.15 2.7l-1.55-.03" />
                  </svg>
                </div>
                <span className="font-heading text-sm font-bold text-white/30 uppercase tracking-[0.15em]">
                  Em desenvolvimento
                </span>
                <span className="text-xs text-white/20">Em breve</span>
              </div>
              {/* ghost content */}
              <div className="flex flex-col flex-1 opacity-20 pointer-events-none">
                <div className="mb-6 flex items-center justify-between">
                  <div />
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/30">
                    Em breve
                  </span>
                </div>
                <div className="h-8 w-40 rounded-lg bg-white/10 mb-2" />
                <div className="h-4 w-24 rounded bg-white/5 mb-5" />
                <div className="space-y-2 flex-1">
                  <div className="h-3 w-full rounded bg-white/5" />
                  <div className="h-3 w-5/6 rounded bg-white/5" />
                  <div className="h-3 w-4/6 rounded bg-white/5" />
                </div>
                <div className="mt-8 h-4 w-28 rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build with us */}
      <section className="py-24 bg-navy-deep">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Kicker>Parceiros</Kicker>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quer integrar ou co-desenvolver?
          </h2>
          <p className="mt-4 text-white/50">
            Os nossos produtos têm APIs abertas e estamos abertos a parcerias
            estratégicas. Fale connosco.
          </p>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
            >
              Entrar em contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
