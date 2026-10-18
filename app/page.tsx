import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Icon, { type IconName } from "@/components/Icon";
import ProcessSteps from "@/components/ProcessSteps";
import { ChatMockup, HeroVisual, MensagramWordmark } from "@/components/Mockups";
import { ButtonLink, CONTACT_HREF, CTA_PRIMARY, CtaBand, FeatureCard, IconBadge, Kicker, SectionHeader } from "@/components/ui";
import { MENSAGRAM_STATUS } from "@/app/lib/mensagram";

export const metadata: Metadata = {
  title: { absolute: "Impaxo – Agência de tecnologia" },
  description:
    "Sites, apps e marketing digital feitos por uma agência que também desenvolve os próprios produtos. Primeira análise gratuita em até 24 horas úteis.",
};

const services: { icon: IconName; title: string; description: string; href: string; tone: "blue" | "electric" | "purple" }[] = [
  {
    icon: "desktop",
    title: "Criação de Sites",
    description: "Sites rápidos, bem posicionados no Google e pensados para transformar visitas em contatos.",
    href: "/servicos/criacao-de-sites",
    tone: "blue",
  },
  {
    icon: "chart",
    title: "Marketing Digital",
    description: "SEO, Google Ads, Meta Ads e redes sociais, com relatório mensal do que funcionou e do que não funcionou.",
    href: "/servicos/marketing-digital",
    tone: "electric",
  },
  {
    icon: "mobile",
    title: "Apps e Sistemas",
    description: "Aplicativos, plataformas web e sistemas internos sob medida, do protótipo à publicação nas lojas.",
    href: "/servicos/desenvolvimento-de-apps",
    tone: "purple",
  },
];

const commitments: { icon: IconName; title: string; text: string }[] = [
  { icon: "clock", title: "Resposta em até 24h úteis", text: "Toda mensagem recebe uma primeira análise, sem compromisso." },
  { icon: "document", title: "Tudo por escrito", text: "Escopo, prazo e valor definidos na proposta antes de começar." },
  { icon: "lock", title: "Confidencialidade", text: "Assinamos um acordo de confidencialidade (NDA) sempre que você precisar." },
  { icon: "support", title: "Suporte depois da entrega", text: "Planos de manutenção para o projeto continuar seguro e atualizado." },
];

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "cube",
    title: "Pensamos como produto",
    description: "Construímos e mantemos os nossos próprios produtos. Sabemos o que é ter usuários reais dependendo do que entregamos.",
  },
  {
    icon: "chart",
    title: "Métricas desde o primeiro dia",
    description: "Todo projeto sai com análise configurada, para você saber de onde vêm os clientes e o que melhorar.",
  },
  {
    icon: "bulb",
    title: "Solução sob medida",
    description: "Nada de pacote genérico. Partimos do seu negócio e do seu orçamento para propor o que faz sentido.",
  },
  {
    icon: "shield",
    title: "Segurança levada a sério",
    description: "Quem implementa criptografia de ponta a ponta não deixa o seu site sem HTTPS nem atualizações de segurança.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/3 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-25"
            style={{ background: "radial-gradient(ellipse, #2C5BFF 0%, transparent 70%)" }}
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <Kicker>Agência de tecnologia · São Paulo</Kicker>
            <h1 className="mt-7 font-heading text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              Sites, apps e marketing com{" "}
              <span className="bg-gradient-to-r from-electric to-brand-blue bg-clip-text text-transparent">padrão de produto</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              A Impaxo também desenvolve os próprios produtos, como o Mensagram, um mensageiro com
              criptografia de ponta a ponta. Levamos esse mesmo rigor para o site, o app ou a campanha da
              sua empresa.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href={CONTACT_HREF}>{CTA_PRIMARY}</ButtonLink>
              <ButtonLink href="/servicos" variant="secondary" arrow>
                Ver serviços
              </ButtonLink>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ── Compromissos ── */}
      <section className="border-y border-white/[0.06] bg-navy-deep">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {commitments.map((c) => (
            <div key={c.title} className="flex gap-4 py-7 sm:px-4 lg:px-6">
              <Icon name={c.icon} className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric" />
              <div>
                <p className="font-heading text-sm font-bold text-white">{c.title}</p>
                <p className="mt-1 text-sm leading-6 text-white/60">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Serviços ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              kicker="O que fazemos"
              title="Três frentes, uma equipe"
              intro="Do site que apresenta a sua empresa ao sistema que organiza a operação, com a mesma equipe do começo ao fim."
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((svc, i) => (
              <FadeIn key={svc.href} delay={i * 120}>
                <Link
                  href={svc.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#0f1f38]"
                >
                  <IconBadge name={svc.icon} tone={svc.tone} />
                  <h3 className="mt-6 font-heading text-lg font-bold text-white">{svc.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/65">{svc.description}</p>
                  <span className="mt-7 flex items-center gap-1.5 text-sm font-medium text-white/70 transition group-hover:text-electric">
                    Saiba mais
                    <Icon name="chevronRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Caso: Mensagram ── */}
      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Kicker>Caso Impaxo Lab</Kicker>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Construímos um mensageiro criptografado do zero
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                O Mensagram é o nosso próprio produto. Implementamos o Protocolo Signal, grupos e
                chamadas criptografadas, cópia de segurança e a infraestrutura que mantém tudo no ar.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Criptografia de ponta a ponta implementada pela equipe",
                  "Testes automatizados de servidor, aplicação e navegador",
                  "Auditorias de segurança internas antes de abrir o beta",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-2xl border border-white/[0.08] bg-navy-card p-5 text-sm leading-6 text-white/70">
                <strong className="text-white">Por que isso importa para você:</strong> é a mesma equipe, com
                o mesmo cuidado, que vai construir o seu site ou o seu app.
              </p>
              <div className="mt-8">
                <ButtonLink href="/lab/mensagram" variant="secondary" arrow>
                  Conhecer o caso
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(255,94,0,0.35) 0%, transparent 65%)" }}
              />
              <div className="relative flex flex-col items-center gap-6">
                <div className="flex items-center gap-3">
                  <MensagramWordmark />
                  <span className="rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 px-3 py-1 text-xs font-semibold text-[#FF8A40]">
                    {MENSAGRAM_STATUS}
                  </span>
                </div>
                <ChatMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Porquê ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Por que a Impaxo"
            title={
              <>
                Mais do que uma agência: <span className="text-electric">um time de produto</span>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <FeatureCard key={r.title} icon={r.icon} title={r.title} description={r.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Processo ── */}
      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Como trabalhamos"
            title="O mesmo método em todos os projetos"
            intro="Cinco etapas claras, para você saber sempre em que ponto o projeto está e o que vem a seguir."
          />
          <ProcessSteps />
        </div>
      </section>

      <CtaBand
        title="Vamos conversar sobre o seu projeto?"
        intro="Conte o que você precisa. Em até 24 horas úteis você recebe uma primeira análise, sem compromisso."
        secondary={{ href: "/faq", label: "Ver perguntas frequentes" }}
      />
    </>
  );
}
