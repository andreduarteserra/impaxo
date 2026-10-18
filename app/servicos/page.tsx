import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import ProcessSteps from "@/components/ProcessSteps";
import { ButtonLink, CONTACT_HREF, CTA_PRIMARY, CtaBand, IconBadge, PageHero, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Criação de sites, marketing digital e desenvolvimento de apps e sistemas sob medida. Conheça os serviços da Impaxo.",
};

const services: {
  href: string;
  icon: IconName;
  tone: "blue" | "electric" | "purple";
  title: string;
  tagline: string;
  description: string;
  features: string[];
}[] = [
  {
    href: "/servicos/criacao-de-sites",
    icon: "desktop",
    tone: "blue",
    title: "Criação de Sites",
    tagline: "Presença digital que converte",
    description:
      "Sites profissionais, rápidos e otimizados para o Google. De landing pages a lojas virtuais, cada projeto é feito para transformar visitantes em clientes.",
    features: [
      "Design exclusivo e responsivo",
      "SEO técnico desde o primeiro dia",
      "Carregamento rápido",
      "Painel para editar o conteúdo",
      "Integração com os seus sistemas",
      "Manutenção e suporte",
    ],
  },
  {
    href: "/servicos/marketing-digital",
    icon: "chart",
    tone: "electric",
    title: "Marketing Digital",
    tagline: "Visibilidade que vira receita",
    description:
      "SEO, Google Ads, Meta Ads, redes sociais e e-mail marketing trabalhando juntos, com relatório mensal e decisões baseadas em dados.",
    features: [
      "SEO técnico e de conteúdo",
      "Google Ads e Meta Ads",
      "Gestão de redes sociais",
      "E-mail marketing",
      "Relatórios mensais",
      "Estratégia de conteúdo",
    ],
  },
  {
    href: "/servicos/desenvolvimento-de-apps",
    icon: "mobile",
    tone: "purple",
    title: "Apps e Sistemas",
    tagline: "Software sob medida",
    description:
      "Aplicativos iOS e Android, plataformas web e sistemas internos que automatizam processos e criam novos canais de receita.",
    features: [
      "Apps iOS e Android",
      "Aplicações web e PWAs",
      "UX/UI centrado no usuário",
      "Integração com APIs e sistemas",
      "Publicação nas lojas",
      "Manutenção e evolução",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <PageHero
        kicker="Serviços"
        title={
          <>
            Soluções digitais para o seu <span className="text-electric">crescimento</span>
          </>
        }
        intro="Unimos tecnologia e estratégia de negócio em três frentes. Você pode contratar uma delas ou combinar as três com a mesma equipe."
      >
        <ButtonLink href={CONTACT_HREF}>{CTA_PRIMARY}</ButtonLink>
      </PageHero>

      <section className="pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-8">
          {services.map((svc) => (
            <div
              key={svc.href}
              className="grid grid-cols-1 gap-10 rounded-3xl border border-white/[0.08] bg-navy-card p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14"
            >
              <div>
                <div className="flex items-center gap-4">
                  <IconBadge name={svc.icon} tone={svc.tone} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">{svc.tagline}</span>
                </div>
                <h2 className="mt-6 font-heading text-3xl font-bold text-white lg:text-4xl">{svc.title}</h2>
                <p className="mt-5 text-base leading-8 text-white/65">{svc.description}</p>
                <Link
                  href={svc.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:gap-3"
                >
                  Ver detalhes do serviço
                  <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                    <Icon name="check" className="h-4 w-4 flex-shrink-0 text-electric" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Como trabalhamos"
            title="O mesmo método, qualquer que seja o serviço"
            intro="Cinco etapas claras para você saber sempre em que ponto o projeto está."
          />
          <ProcessSteps />
        </div>
      </section>

      <CtaBand
        title="Não sabe qual serviço o seu negócio precisa?"
        intro="Conte o seu objetivo e nós indicamos o caminho, mesmo que a resposta seja começar pequeno."
        secondary={{ href: "/faq", label: "Ver perguntas frequentes" }}
      />
    </>
  );
}
