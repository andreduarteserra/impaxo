import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/posts";
import StatsSection from "@/components/StatsSection";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Impaxo – Agência de Tecnologia",
  description:
    "Transformamos tecnologia em resultados. Criação de sites, marketing digital e desenvolvimento de apps para empresas brasileiras.",
};

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Criação de Sites",
    description: "Sites profissionais, rápidos e otimizados para SEO que convertem visitantes em clientes.",
    href: "/servicos/criacao-de-sites",
    iconBg: "bg-brand-blue/15 text-brand-blue",
    borderHover: "hover:border-brand-blue/30",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Marketing Digital",
    description: "Estratégias de SEO, Google Ads e redes sociais que aumentam visibilidade e vendas.",
    href: "/servicos/marketing-digital",
    iconBg: "bg-electric/15 text-electric",
    borderHover: "hover:border-electric/30",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Desenvolvimento de Apps",
    description: "Aplicações móveis nativas e híbridas que fidelizam clientes e automatizam processos.",
    href: "/servicos/desenvolvimento-de-apps",
    iconBg: "bg-purple-500/15 text-purple-400",
    borderHover: "hover:border-purple-400/30",
  },
];

const stats = [
  { value: "50+", label: "Clientes atendidos" },
  { value: "120+", label: "Projetos entregues" },
  { value: "98%", label: "Satisfação" },
  { value: "5+", label: "Anos no mercado" },
];

const features = [
  {
    title: "Resultados mensuráveis",
    description: "Cada ação é acompanhada por métricas claras. Sabemos o que funciona e otimizamos continuamente.",
    icon: "⚡",
  },
  {
    title: "Estratégia personalizada",
    description: "Não há soluções genéricas aqui. Cada projeto começa por entender profundamente o seu negócio.",
    icon: "🎯",
  },
  {
    title: "Suporte contínuo",
    description: "A nossa relação não termina com a entrega. Estamos sempre disponíveis para evoluir o seu projeto.",
    icon: "🛡️",
  },
  {
    title: "Tecnologia de ponta",
    description: "Utilizamos as ferramentas mais modernas para garantir performance e escalabilidade.",
    icon: "🚀",
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

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-20 sm:min-h-screen">
        {/* Background glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-25"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }}
          />
          <div
            className="absolute right-0 top-1/3 h-64 w-64 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)" }}
          />
        </div>

        {/* Subtle dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <Kicker>Agência de Tecnologia Brasileira</Kicker>
            </div>

            <h1 className="font-heading text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
              Tecnologia que<br />
              <span className="bg-gradient-to-r from-electric via-sky-300 to-brand-blue bg-clip-text text-transparent">transforma</span> o seu<br />
              negócio
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Somos a agência digital que une criatividade, estratégia e
              tecnologia para levar a sua empresa ao próximo nível. Desde sites
              que convertem até apps que fidelizam.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/servicos"
                className="inline-flex h-13 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600 hover:shadow-brand-blue/40"
              >
                Conheça nossos serviços
              </Link>
              <Link
                href="/contacto"
                className="inline-flex h-13 items-center gap-2 rounded-full border border-white/15 px-8 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Fale conosco
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/[0.06] bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StatsSection stats={stats} />
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
          <div className="mb-20 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Kicker>O que fazemos</Kicker>
              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Soluções digitais completas
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/55 lg:text-right">
              Do conceito ao lançamento, cobrimos todas as frentes do digital
              para que o seu negócio cresça de forma consistente.
            </p>
          </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((svc, i) => (
              <FadeIn key={svc.href} delay={i * 120}>
                <Link
                  href={svc.href}
                  className={`group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-8 transition duration-300 ${svc.borderHover} hover:-translate-y-1 hover:bg-[#0f1f38] hover:shadow-lg hover:shadow-black/20`}
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${svc.iconBg}`}>
                    {svc.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">{svc.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/55">{svc.description}</p>
                  <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-white/35 transition group-hover:text-electric">
                    Saiba mais
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Impaxo ── */}
      <section className="py-32 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <Kicker>Por que a Impaxo</Kicker>
              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Mais do que uma agência —{" "}
                <span className="text-electric">um parceiro de crescimento</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/55">
                Não entregamos apenas projetos. Construímos parcerias de longo
                prazo, comprometidas com o crescimento real e mensurável do seu
                negócio.
              </p>
              <div className="mt-10">
                <Link
                  href="/contacto"
                  className="inline-flex h-12 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-blue-600"
                >
                  Iniciar um projeto
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/[0.08] bg-navy-card p-7"
                >
                  <div className="mb-4 text-3xl">{f.icon}</div>
                  <h3 className="font-heading text-base font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── impaxo lab ── */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Kicker>impaxo lab</Kicker>
              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Produtos que construímos
              </h2>
            </div>
            <Link
              href="/lab"
              className="hidden items-center gap-1.5 text-sm font-medium text-white/45 transition hover:text-electric sm:flex"
            >
              Ver o Lab
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <Link
            href="https://mensagram.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-navy-card p-10 transition hover:border-white/15 lg:flex-row lg:items-center lg:gap-16 lg:p-14"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{ background: "radial-gradient(ellipse at top left, rgba(0,212,255,0.08) 0%, transparent 60%)" }}
            />
            <div className="relative flex-1">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                <span className="text-xs font-semibold tracking-wide text-green-400">
                  Disponível
                </span>
              </div>
              <h3 className="mt-5 font-heading text-3xl font-bold text-white transition group-hover:text-electric lg:text-4xl">
                Mensagram
              </h3>
              <p className="mt-2 text-base text-white/40">Mensagens que não existem.</p>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/55">
                Mensagens encriptadas que não deixam rasto. Sem histórico, sem
                registos, sem dados pessoais.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-electric">
                Conhecer o Mensagram
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Recent posts ── */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <Kicker>Blog</Kicker>
              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Últimos artigos
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1.5 text-sm font-medium text-white/45 transition hover:text-electric sm:flex"
            >
              Ver todos
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 120}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-8 transition hover:-translate-y-1 hover:border-white/15 hover:bg-[#0f1f38] hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
                      {post.category}
                    </span>
                    <span className="text-xs text-white/35">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold leading-snug text-white transition group-hover:text-electric">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/55 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 border-t border-white/[0.06] pt-5">
                    <time className="text-xs text-white/35">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Gradient border wrapper */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-blue/40 via-electric/20 to-purple-500/20 p-px">
            <div
              className="relative overflow-hidden rounded-3xl px-10 py-20 text-center sm:px-20"
              style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #0B1220 60%)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 60% 0%, rgba(0,212,255,0.12) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <Kicker>Vamos começar</Kicker>
                <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Pronto para crescer?
                </h2>
                <p className="mt-5 text-lg text-white/55 max-w-xl mx-auto">
                  Fale com a nossa equipa e descubra como a Impaxo pode
                  transformar o seu negócio digital.
                </p>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex h-13 items-center rounded-full bg-electric px-9 text-sm font-bold text-navy shadow-lg shadow-electric/25 transition hover:opacity-90"
                  >
                    Agendar uma conversa
                  </Link>
                  <Link
                    href="/servicos"
                    className="inline-flex h-13 items-center rounded-full border border-white/20 px-9 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                  >
                    Ver serviços
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
