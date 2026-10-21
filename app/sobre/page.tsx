import type { Metadata } from "next";
import Icon, { type IconName } from "@/components/Icon";
import { ButtonLink, CtaBand, FeatureCard, PageHero, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Impaxo é uma agência de tecnologia com sede em Joinville (SC) que cria sites, apps e campanhas e também desenvolve os próprios produtos digitais.",
};

const principles: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "document",
    title: "Tudo combinado por escrito",
    description: "Escopo, prazo e valor ficam definidos antes de começar. Se algo mudar no caminho, conversamos antes de cobrar.",
  },
  {
    icon: "chat",
    title: "Promessas que podemos cumprir",
    description: "Não prometemos primeira posição no Google nem retorno garantido. Prometemos trabalho bem feito e números transparentes.",
  },
  {
    icon: "code",
    title: "Qualidade que não se vê",
    description: "Código limpo, testes, segurança e desempenho. O que não aparece na tela é o que faz o projeto durar.",
  },
  {
    icon: "support",
    title: "Relação de longo prazo",
    description: "A entrega é o começo. Acompanhamos os resultados e evoluímos o projeto junto com o seu negócio.",
  },
];

const notForUs = [
  "Projetos sem objetivo de negócio claro",
  "Promessas de resultado garantido",
  "Templates revendidos como design exclusivo",
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        kicker="Sobre a Impaxo"
        title={
          <>
            Uma agência de tecnologia <span className="text-electric">com alma de produto</span>
          </>
        }
        intro="Somos uma agência com sede em Joinville, Santa Catarina, e profissionais espalhados remotamente pelo Brasil. Criamos sites, aplicativos e campanhas para empresas do Brasil e dos demais países de língua portuguesa. E, ao contrário da maioria das agências, também construímos e mantemos os nossos próprios produtos."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-5 text-base leading-8 text-white/70">
            <p>
              A Impaxo nasceu de uma convicção simples: a tecnologia de uma pequena ou média empresa merece o
              mesmo cuidado que a de um produto digital usado por milhares de pessoas.
            </p>
            <p>
              Por isso trabalhamos como um time de produto. Antes de propor uma solução, queremos entender o
              negócio, o público e o que precisa acontecer para o projeto valer o investimento. Depois,
              medimos o resultado e continuamos a melhorar.
            </p>
            <p>
              O <strong className="text-white">Impaxo Lab</strong> é onde isso fica à prova. Lá desenvolvemos
              produtos próprios, como o Mensagram, um mensageiro com criptografia de ponta a ponta. O que
              aprendemos ali, de segurança a infraestrutura, vai direto para os projetos dos nossos clientes.
            </p>
            <div className="pt-4">
              <ButtonLink href="/lab" variant="secondary" arrow>
                Conhecer o Lab
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/[0.08] bg-navy-card p-8 sm:p-10">
            <h2 className="font-heading text-lg font-bold text-white">O que fazemos</h2>
            <ul className="mt-6 space-y-4">
              {[
                ["desktop", "Sites, landing pages e lojas virtuais"],
                ["chart", "Marketing digital: SEO, anúncios e redes sociais"],
                ["mobile", "Aplicativos, plataformas web e sistemas internos"],
                ["cube", "Produtos próprios no Impaxo Lab"],
              ].map(([icon, label]) => (
                <li key={label} className="flex items-center gap-4 text-sm text-white/75">
                  <Icon name={icon as IconName} className="h-5 w-5 flex-shrink-0 text-electric" />
                  {label}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-heading text-lg font-bold text-white">O que não fazemos</h2>
            <ul className="mt-6 space-y-3">
              {notForUs.map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm text-white/65">
                  <span className="h-px w-4 flex-shrink-0 bg-white/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader kicker="Como pensamos" title="Os princípios por trás de cada projeto" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <FeatureCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Vamos trabalhar juntos?"
        intro="Conte o que você precisa e receba uma primeira análise em até 24 horas úteis."
      />
    </>
  );
}
