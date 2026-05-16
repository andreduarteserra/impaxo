import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça todos os serviços da Impaxo: criação de sites, marketing digital e desenvolvimento de apps.",
};

const services = [
  {
    href: "/servicos/criacao-de-sites",
    number: "01",
    title: "Criação de Sites",
    tagline: "Presença digital que converte",
    description:
      "Desenvolvemos sites profissionais, responsivos e otimizados para SEO. Desde landing pages a e-commerce, cada projeto é criado para transformar visitantes em clientes.",
    features: [
      "Design exclusivo e responsivo",
      "Otimização para SEO",
      "Alta velocidade de carregamento",
      "Painel administrativo intuitivo",
      "Integração com sistemas",
      "Suporte e manutenção",
    ],
    accentColor: "text-brand-blue",
    accentBg: "bg-brand-blue/10",
    borderAccent: "border-brand-blue/20",
  },
  {
    href: "/servicos/marketing-digital",
    number: "02",
    title: "Marketing Digital",
    tagline: "Visibilidade que gera receita",
    description:
      "Estratégias integradas de SEO, Google Ads, redes sociais e e-mail marketing para aumentar a sua visibilidade online e impulsionar as suas vendas.",
    features: [
      "SEO técnico e de conteúdo",
      "Google Ads e Meta Ads",
      "Gestão de redes sociais",
      "E-mail marketing",
      "Análise de dados e relatórios",
      "Estratégia de conteúdo",
    ],
    accentColor: "text-electric",
    accentBg: "bg-electric/10",
    borderAccent: "border-electric/20",
  },
  {
    href: "/servicos/desenvolvimento-de-apps",
    number: "03",
    title: "Desenvolvimento de Apps",
    tagline: "Soluções móveis que fidelizam",
    description:
      "Criamos aplicações móveis iOS e Android que proporcionam experiências excepcionais, automatizam processos e fidelizam clientes.",
    features: [
      "Apps iOS e Android",
      "Desenvolvimento nativo e híbrido",
      "UI/UX centrado no utilizador",
      "Integração com APIs",
      "Push notifications",
      "Publicação nas lojas",
    ],
    accentColor: "text-purple-400",
    accentBg: "bg-purple-500/10",
    borderAccent: "border-purple-400/20",
  },
];

const process = [
  { step: "01", title: "Descoberta", description: "Entendemos profundamente o seu negócio, objetivos e público-alvo." },
  { step: "02", title: "Estratégia", description: "Desenhamos a solução mais adequada com plano claro e métricas definidas." },
  { step: "03", title: "Execução", description: "Desenvolvemos com rigor técnico e atenção a cada detalhe." },
  { step: "04", title: "Crescimento", description: "Acompanhamos os resultados e otimizamos continuamente para maximizar o ROI." },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{children}</span>
    </div>
  );
}

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Kicker>Nossos serviços</Kicker>
            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Soluções digitais para o seu{" "}
              <span className="text-electric">crescimento</span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/55">
              Combinamos tecnologia de ponta com estratégia de negócios para
              entregar soluções que geram resultados reais e mensuráveis.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.href}
                className={`rounded-3xl border border-white/[0.08] p-10 transition hover:border-white/[0.14] lg:p-14 ${i % 2 === 1 ? "bg-navy-deep" : "bg-navy-card"}`}
              >
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                  {/* Left */}
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <span className="font-heading text-5xl font-bold text-white/[0.06]">
                        {svc.number}
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${svc.accentBg} ${svc.accentColor}`}>
                        {svc.tagline}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-white lg:text-4xl">
                      {svc.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/55">{svc.description}</p>
                    <Link
                      href={svc.href}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                    >
                      Saiba mais
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Right – features */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {svc.features.map((f) => (
                      <div
                        key={f}
                        className={`flex items-center gap-3 rounded-xl border ${svc.borderAccent} bg-white/[0.03] px-4 py-3`}
                      >
                        <svg className={`h-4 w-4 flex-shrink-0 ${svc.accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-white/70">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <Kicker>Como trabalhamos</Kicker>
            <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              O nosso processo
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative rounded-2xl border border-white/[0.08] bg-navy-card p-8">
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-5 translate-x-full bg-electric/30 lg:block" />
                )}
                <div className="font-heading text-6xl font-bold text-white/[0.05] leading-none mb-6">
                  {p.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Qual serviço o seu negócio precisa?
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Fale com a nossa equipa e receba uma proposta personalizada sem compromisso.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex h-13 items-center rounded-full bg-brand-blue px-9 text-sm font-bold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
            >
              Pedir proposta gratuita
            </Link>
            <Link
              href="/faq"
              className="inline-flex h-13 items-center rounded-full border border-white/15 px-9 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Perguntas frequentes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
