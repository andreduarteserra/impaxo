import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Marketing Digital",
  description:
    "Estratégias de marketing digital que atraem o público certo e convertem visitas em vendas — com resultados mensuráveis desde o primeiro mês.",
};

const services = [
  { icon: "🔍", title: "SEO", description: "Optimização técnica e de conteúdo para aparecer nas primeiras posições do Google — tráfego gratuito e sustentável a longo prazo." },
  { icon: "📣", title: "Meta Ads", description: "Campanhas segmentadas no Facebook e Instagram que alcançam exactamente quem tem perfil de compra para o seu negócio." },
  { icon: "📢", title: "Google Ads", description: "Anúncios de pesquisa e display que colocam a sua marca à frente de quem já procura activamente o que oferece." },
  { icon: "📅", title: "Gestão de redes sociais", description: "Calendário editorial, produção de conteúdo e publicação diária nas redes que importam para o seu público." },
  { icon: "✍️", title: "Criação de conteúdo", description: "Textos, imagens e vídeos pensados para gerar autoridade, engagement e conversão — não apenas likes." },
  { icon: "📊", title: "Analytics e relatórios", description: "Dashboards claros com as métricas que importam. Sem jargão, sem dados irrelevantes — apenas o que impacta o negócio." },
];

const platforms = [
  { name: "Instagram", icon: "📸", description: "Feed, Reels e Stories optimizados para alcance orgânico e anúncios de alta conversão." },
  { name: "Facebook", icon: "👥", description: "Comunidades, campanhas de tráfego e remarketing para públicos de todas as idades." },
  { name: "LinkedIn", icon: "💼", description: "Posicionamento B2B, geração de leads e awareness junto de decisores e profissionais." },
  { name: "TikTok", icon: "🎵", description: "Conteúdo nativo que cresce organicamente e ads de alta eficiência para públicos jovens." },
  { name: "WhatsApp Business", icon: "💬", description: "Funil de vendas por mensagem, automações e atendimento estruturado para fechar mais negócios." },
];

const steps = [
  { n: "1", label: "Estratégia", desc: "Auditamos a sua presença actual e definimos objetivos, personas e canais prioritários." },
  { n: "2", label: "Calendário", desc: "Criamos o calendário editorial mensal com temas, formatos e frequência de publicação." },
  { n: "3", label: "Publicação", desc: "Produzimos e publicamos todos os conteúdos nas plataformas definidas, no timing certo." },
  { n: "4", label: "Análise", desc: "Monitoramos resultados em tempo real com relatórios semanais e mensais detalhados." },
  { n: "5", label: "Optimização", desc: "Ajustamos copy, criativos e segmentação com base em dados — melhoria contínua garantida." },
];

const audience = [
  { icon: "🏪", title: "Negócios locais", description: "Restaurantes, clínicas, academias e lojas que querem mais clientes na sua área geográfica." },
  { icon: "🛍️", title: "E-commerces", description: "Lojas online que precisam de tráfego qualificado, carrinho médio maior e mais recorrência." },
  { icon: "🚀", title: "Startups", description: "Empresas em fase de crescimento que precisam de construir awareness e captar os primeiros clientes." },
  { icon: "👤", title: "Profissionais liberais", description: "Advogados, médicos, consultores e coaches que querem atrair clientes sem depender de indicações." },
];

const results = [
  { metric: "+40% a +120%", label: "Aumento de tráfego orgânico em 6 meses" },
  { metric: "-20% a -40%", label: "Redução no custo por aquisição" },
  { metric: "2º mês", label: "ROI positivo a partir do 2º mês" },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{children}</span>
    </div>
  );
}

export default function MarketingDigitalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Serviços", href: "/servicos" },
            { label: "Marketing Digital" },
          ]} />
          <div className="max-w-3xl">
            <Kicker>Marketing Digital</Kicker>
            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Mais visibilidade.{" "}
              <span className="text-electric">Mais vendas.</span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/55">
              Estratégias integradas de marketing digital que atraem o público
              certo, no momento certo, com a mensagem certa. Resultados
              mensuráveis desde o primeiro mês.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
              >
                Pedir diagnóstico gratuito
              </Link>
              <Link
                href="#plataformas"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Ver plataformas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/[0.06] bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {results.map((r) => (
              <div key={r.label} className="px-10 py-12 text-center">
                <div className="font-heading text-5xl font-bold text-electric">{r.metric}</div>
                <div className="mt-3 text-sm leading-6 text-white/45 max-w-[180px] mx-auto">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>O que fazemos</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Uma estratégia completa para o seu negócio
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Não nos limitamos a um único canal. Construímos uma presença
              digital integrada que trabalha em conjunto para maximizar resultados.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/[0.08] bg-navy-card p-7">
                <div className="mb-5 text-3xl">{s.icon}</div>
                <h3 className="font-heading text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="plataformas" className="py-32 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>Plataformas</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Onde o seu público está, estamos nós
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Trabalhamos nas plataformas certas para o seu negócio — não em todas ao mesmo tempo, mas nas que realmente trazem retorno.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platforms.map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/[0.08] bg-navy-card p-7 transition hover:border-electric/20">
                <div className="mb-4 text-3xl">{p.icon}</div>
                <h3 className="font-heading text-base font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>Como trabalhamos</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Marketing baseado em dados, não em achismos
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Cada decisão é suportada por dados reais. Relatórios mensais
              transparentes mostram exactamente o que funciona e onde optimizamos.
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
      <section className="py-32 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Kicker>Para quem é</Kicker>
              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Marketing digital para{" "}
                <span className="text-electric">qualquer negócio</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/55 lg:text-right">
              Adaptamos a estratégia ao seu sector, orçamento e objetivos — sem
              fórmulas genéricas, sem resultados mediocres.
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
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para aumentar as suas vendas online?
          </h2>
          <p className="mt-4 text-white/50">
            Comece com um diagnóstico gratuito da sua presença digital.
          </p>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center rounded-full bg-brand-blue px-9 text-sm font-bold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
            >
              Solicitar diagnóstico gratuito
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
