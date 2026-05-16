import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Criação de Sites",
  description:
    "Sites profissionais, rápidos e otimizados para SEO que convertem visitantes em clientes.",
};

const included = [
  { icon: "🔍", title: "SEO técnico", description: "Estrutura de URLs, meta tags, sitemap, schema markup e integração com Google Search Console desde o primeiro dia." },
  { icon: "📱", title: "Design responsivo", description: "Perfeito em qualquer ecrã — desktop, tablet e smartphone — sem comprometer velocidade ou usabilidade." },
  { icon: "⚡", title: "Alta performance", description: "Score 90+ no Google PageSpeed. Sites rápidos posicionam melhor e convertem mais visitantes." },
  { icon: "🖥️", title: "Painel CMS", description: "Gira textos, imagens e publicações sem precisar de conhecimentos técnicos. Formação incluída." },
  { icon: "🛡️", title: "Certificado SSL", description: "HTTPS activado, dados dos visitantes protegidos e sinal positivo para o Google." },
  { icon: "🤝", title: "Suporte contínuo", description: "Equipa disponível para manutenção, atualizações de segurança e melhorias após o lançamento." },
];

const types = [
  {
    title: "Landing Page",
    description: "Página focada em conversão para campanhas, lançamentos e captação de leads.",
    features: ["Design exclusivo e focado em conversão", "Formulário de captação de leads", "SEO otimizado", "Rápido e responsivo para todos os dispositivos"],
    highlight: false,
  },
  {
    title: "Site Institucional",
    description: "Presença completa com páginas sobre, serviços, blog e contacto.",
    features: ["Páginas personalizadas ao seu negócio", "Painel de gestão de conteúdo", "SEO completo e integração com analytics", "Blog integrado"],
    highlight: true,
  },
  {
    title: "Blog Profissional",
    description: "Plataforma de conteúdo para atrair tráfego orgânico e posicionar autoridade.",
    features: ["Plataforma de conteúdo profissional", "Categorias, tags e pesquisa", "Newsletter integrada", "SEO de conteúdo otimizado"],
    highlight: false,
  },
  {
    title: "E-commerce",
    description: "Loja online completa com carrinho, pagamentos e gestão de stock.",
    features: ["Loja online completa", "Pagamentos online integrados", "Gestão de produtos e stock", "Relatórios de vendas"],
    highlight: false,
  },
];

const steps = [
  { n: "1", label: "Briefing", desc: "Entendemos o seu negócio, objetivos e público-alvo." },
  { n: "2", label: "Design", desc: "Criamos protótipos e layouts aprovados por si antes de codificar." },
  { n: "3", label: "Desenvolvimento", desc: "Construímos com foco em performance, SEO e acessibilidade." },
  { n: "4", label: "Lançamento", desc: "Publicamos e configuramos analytics, Search Console e domínio." },
  { n: "5", label: "Suporte", desc: "Acompanhamos, actualizamos e evoluímos o site continuamente." },
];

const audience = [
  { icon: "🏪", title: "Negócios locais", description: "Restaurantes, clínicas, lojas e salões que precisam de mais clientes na sua área de actuação." },
  { icon: "👤", title: "MEIs e autônomos", description: "Profissionais que querem transmitir credibilidade e captar clientes fora do boca-a-boca." },
  { icon: "🚀", title: "Startups", description: "Empresas em crescimento que precisam de um site escalável e alinhado com a identidade da marca." },
  { icon: "💼", title: "Profissionais liberais", description: "Advogados, médicos e consultores cuja reputação online é determinante para conquistar clientes." },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{children}</span>
    </div>
  );
}

export default function CriacaoDeSitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Serviços", href: "/servicos" },
            { label: "Criação de Sites" },
          ]} />
          <div className="max-w-3xl">
            <Kicker>Criação de Sites</Kicker>
            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sites que vendem{" "}
              <span className="text-electric">enquanto você dorme</span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/55">
              Desenvolvemos sites profissionais com design exclusivo, alta
              performance e optimização para SEO — criados para transformar
              visitantes em clientes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
              >
                Pedir orçamento gratuito
              </Link>
              <Link
                href="#tipos"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Ver tipos de sites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>O que inclui</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tudo para ter sucesso online
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Todos os projetos incluem as bases técnicas essenciais — sem cobranças de extras que deveriam ser padrão.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/[0.08] bg-navy-card p-7">
                <div className="mb-5 text-3xl">{f.icon}</div>
                <h3 className="font-heading text-base font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section id="tipos" className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>Tipos de projeto</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Escolha o mais adequado ao seu negócio
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t) => (
              <div
                key={t.title}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  t.highlight ? "border-electric/30 bg-[#0d2035]" : "border-white/[0.08] bg-navy-card"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-px left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-electric to-transparent" />
                )}
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-electric px-4 py-1 text-xs font-bold text-navy">
                    Mais popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-bold text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-white/50">{t.description}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                      <svg className="h-4 w-4 flex-shrink-0 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                    t.highlight
                      ? "bg-electric text-navy hover:opacity-90"
                      : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  Solicitar orçamento
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>Como trabalhamos</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Do briefing ao ar — sem surpresas
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Um processo estruturado que mantém o projeto no prazo e garante
              que o resultado final supera as expectativas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="relative rounded-2xl border border-white/[0.08] bg-navy-card p-6 text-center"
              >
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-4 translate-x-full bg-electric/25 sm:block" />
                )}
                <div className="mb-5 flex justify-center">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-electric/25 bg-electric/5 font-heading text-sm font-bold text-electric">
                    {step.n}
                  </div>
                </div>
                <h3 className="font-heading text-sm font-bold text-white">{step.label}</h3>
                <p className="mt-2 text-xs leading-5 text-white/40">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Kicker>Para quem é</Kicker>
              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Criamos sites para{" "}
                <span className="text-electric">qualquer negócio</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/55 lg:text-right">
              Seja qual for a dimensão ou sector, adaptamos a solução à realidade
              e ao orçamento do seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/[0.08] bg-navy-card p-7">
                <div className="mb-5 text-3xl">{a.icon}</div>
                <h3 className="font-heading text-base font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-deep">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para ter um site que realmente funciona?
          </h2>
          <p className="mt-4 text-white/50">
            Fale com a nossa equipa e receba uma proposta gratuita em 24 horas.
          </p>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center rounded-full bg-brand-blue px-9 text-sm font-bold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
            >
              Começar agora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
