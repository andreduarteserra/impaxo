import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Desenvolvimento de Apps",
  description:
    "Aplicações web, móveis e sistemas internos criados para automatizar processos, fidelizar clientes e escalar o seu negócio.",
};

const included = [
  { icon: "📱", title: "iOS & Android", description: "Apps nativas ou híbridas em React Native — uma base de código, duas plataformas, sem compromissos de qualidade." },
  { icon: "🌐", title: "Aplicações web", description: "Web apps responsivas e progressivas (PWA) que funcionam em qualquer dispositivo, sem instalação." },
  { icon: "🎨", title: "UI/UX de excelência", description: "Interfaces intuitivas, rápidas e bonitas que os utilizadores adoram usar — menor fricção, maior retenção." },
  { icon: "🔗", title: "Integração com APIs", description: "Conectamos o seu app a qualquer sistema existente — ERP, CRM, gateways de pagamento, serviços externos." },
  { icon: "🚀", title: "Publicação nas lojas", description: "Tratamos de todo o processo de submissão e aprovação na App Store e Google Play." },
  { icon: "📊", title: "Analytics integrado", description: "Monitorização de comportamento em tempo real para optimizar a experiência e aumentar a retenção." },
];

const types = [
  {
    title: "Web Apps",
    description: "Plataformas e sistemas acessíveis via browser, sem instalação, com a potência de uma app nativa.",
    examples: ["Dashboards e painéis", "Plataformas SaaS", "Portais de cliente", "PWAs offline-ready"],
    highlight: false,
  },
  {
    title: "Apps Móveis",
    description: "Aplicações nativas iOS e Android para fidelizar clientes e criar novos canais de receita.",
    examples: ["Apps de serviços", "Marketplace", "Fidelização e pontos", "Agendamentos"],
    highlight: true,
  },
  {
    title: "Sistemas Internos",
    description: "Ferramentas à medida para as suas equipas — mais produtividade, menos processos manuais.",
    examples: ["Gestão de stocks", "CRM personalizado", "Field service", "RH e onboarding"],
    highlight: false,
  },
  {
    title: "Automação",
    description: "Integrações e fluxos automatizados que eliminam tarefas repetitivas e reduzem erros humanos.",
    examples: ["Integração de sistemas", "Workflows automáticos", "Notificações inteligentes", "ETL e relatórios"],
    highlight: false,
  },
];

const tech = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Full-stack" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "PostgreSQL", category: "Base de dados" },
  { name: "Supabase", category: "Backend as a Service" },
  { name: "Vercel", category: "Deploy & Edge" },
];

const steps = [
  { n: "1", label: "Ideia", desc: "Mapeamos requisitos, validamos o conceito e definimos o MVP com o menor risco." },
  { n: "2", label: "Protótipo", desc: "Criamos wireframes e protótipos navegáveis para validar antes de escrever código." },
  { n: "3", label: "Desenvolvimento", desc: "Sprints curtos com entregáveis reais — código limpo, testado e documentado." },
  { n: "4", label: "Testes", desc: "QA manual e automatizado, testes de performance e segurança antes do lançamento." },
  { n: "5", label: "Lançamento", desc: "Deploy, publicação nas lojas e monitorização activa nas primeiras semanas." },
];

const audience = [
  { icon: "🏢", title: "Empresas com processos manuais", description: "Negócios que ainda gerem operações em papel, Excel ou WhatsApp e querem escalar sem caos." },
  { icon: "🚀", title: "Startups", description: "Fundadores com uma ideia validada que precisam de um MVP robusto para atrair investimento ou primeiros clientes." },
  { icon: "📈", title: "Médias empresas", description: "Organizações em crescimento que precisam de ferramentas internas para ganhar eficiência sem contratar mais." },
  { icon: "💡", title: "Empreendedores com uma ideia", description: "Quem tem o problema claro mas ainda não sabe como transformá-lo num produto digital — estamos aqui para isso." },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{children}</span>
    </div>
  );
}

export default function DesenvolvimentoDeAppsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Serviços", href: "/servicos" },
            { label: "Desenvolvimento de Apps" },
          ]} />
          <div className="max-w-3xl">
            <Kicker>Desenvolvimento de Apps</Kicker>
            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Software à medida{" "}
              <span className="text-electric">que escala consigo</span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/55">
              Desenvolvemos aplicações web, móveis e sistemas internos que
              automatizam processos, reduzem custos operacionais e criam novas
              oportunidades de receita para o seu negócio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
              >
                Falar sobre o meu projeto
              </Link>
              <Link
                href="#tipos"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Ver tipos de projeto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>O que entregamos</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tudo em cada projeto
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Cada projeto inclui todas as camadas — design, desenvolvimento, testes e
              suporte pós-lançamento. Sem surpresas, sem extras cobrados à parte.
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
              Qual é o seu desafio?
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
                    Mais procurado
                  </span>
                )}
                <h3 className="font-heading text-lg font-bold text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-white/50">{t.description}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {t.examples.map((e) => (
                    <li key={e} className="flex items-center gap-2.5 text-sm text-white/60">
                      <svg className="h-4 w-4 flex-shrink-0 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {e}
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

      {/* Technologies */}
      <section className="py-24 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>Tecnologias</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stack moderno e comprovado
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Usamos tecnologias com ecossistema activo, performance comprovada e
              comunidade forte — para que o seu produto não fique preso a escolhas do passado.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {tech.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.08] bg-navy-card px-4 py-6 text-center">
                <span className="font-heading text-sm font-bold text-white">{t.name}</span>
                <span className="text-xs text-electric/70">{t.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>O nosso processo</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Da ideia ao lançamento — sem surpresas
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-white/50">
              Um processo iterativo e transparente que mantém o projeto no prazo,
              no orçamento e alinhado com os seus objetivos.
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
                Software para quem quer{" "}
                <span className="text-electric">crescer mais rápido</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/55 lg:text-right">
              Seja um MVP de startup ou uma plataforma enterprise, adaptamos
              o processo e a arquitectura à sua realidade.
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
            Tem uma ideia? Vamos transformá-la em produto.
          </h2>
          <p className="mt-4 text-white/50">
            Avaliamos gratuitamente a viabilidade do seu projeto e propomos o caminho mais rápido.
          </p>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center rounded-full bg-brand-blue px-9 text-sm font-bold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
            >
              Falar sobre o meu projeto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
