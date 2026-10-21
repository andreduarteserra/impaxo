import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";
import Icon, { type IconName } from "@/components/Icon";
import ProcessSteps from "@/components/ProcessSteps";
import {
  ButtonLink,
  CONTACT_HREF,
  CTA_PRIMARY,
  CtaBand,
  FeatureCard,
  PageHero,
  ScopeSection,
  SectionHeader,
  TrustRow,
} from "@/components/ui";
import { faqSection } from "@/app/lib/faq";

export const metadata: Metadata = {
  title: "Apps e Sistemas",
  description:
    "Aplicativos iOS e Android, plataformas web e sistemas internos sob medida para automatizar processos e criar novos canais de receita.",
};

const deliverables: { icon: IconName; title: string; description: string }[] = [
  { icon: "mobile", title: "iOS e Android", description: "Apps multiplataforma em React Native ou nativos quando o projeto exige. Recomendamos o que fizer mais sentido." },
  { icon: "globe", title: "Aplicações web", description: "Plataformas e PWAs que funcionam em qualquer dispositivo, direto do navegador." },
  { icon: "layout", title: "UX/UI", description: "Protótipos navegáveis validados com você antes de escrever código." },
  { icon: "link", title: "Integrações", description: "Conexão com ERP, CRM, meios de pagamento e qualquer API que o negócio já usa." },
  { icon: "upload", title: "Publicação nas lojas", description: "Cuidamos da submissão e da aprovação na App Store e no Google Play." },
  { icon: "shield", title: "Segurança e testes", description: "Testes automatizados e revisão de segurança antes de cada lançamento." },
];

const types: { icon: IconName; title: string; description: string; examples: string[] }[] = [
  { icon: "globe", title: "Plataformas web", description: "Sistemas acessíveis pelo navegador, sem instalação.", examples: ["Painéis e dashboards", "Plataformas SaaS", "Portais de cliente"] },
  { icon: "mobile", title: "Apps móveis", description: "Aplicativos para fidelizar clientes e criar novos canais.", examples: ["Agendamentos", "Fidelidade e pontos", "Marketplaces"] },
  { icon: "building", title: "Sistemas internos", description: "Ferramentas sob medida para a sua equipe.", examples: ["Controle de estoque", "CRM próprio", "Equipes em campo"] },
  { icon: "refresh", title: "Automação", description: "Integrações que eliminam tarefas repetitivas.", examples: ["Integração entre sistemas", "Fluxos automáticos", "Relatórios automáticos"] },
];

const stack = [
  { name: "React", role: "Interface" },
  { name: "Next.js", role: "Web" },
  { name: "React Native", role: "Mobile" },
  { name: "Node.js", role: "Back-end" },
  { name: "TypeScript", role: "Linguagem" },
  { name: "PostgreSQL", role: "Banco de dados" },
];

const audience: { icon: IconName; title: string; description: string }[] = [
  { icon: "document", title: "Empresas com processos manuais", description: "Quem ainda controla a operação em papel, planilha ou WhatsApp e quer crescer sem caos." },
  { icon: "sparkles", title: "Startups", description: "Fundadores com uma ideia validada que precisam de um MVP sólido para os primeiros clientes ou investidores." },
  { icon: "trending", title: "Médias empresas", description: "Organizações que querem ganhar eficiência com ferramentas próprias." },
  { icon: "bulb", title: "Quem ainda está na ideia", description: "Ajudamos a transformar um problema claro num produto digital viável." },
];

const priceFactors = [
  { title: "Plataformas", description: "Só web, só celular, ou iOS, Android e web ao mesmo tempo." },
  { title: "Funcionalidades", description: "Quantas telas, fluxos e tipos de usuário (cliente, equipe, administrador)." },
  { title: "Integrações", description: "Pagamentos, ERP, CRM, mapas, notificações ou APIs de terceiros." },
  { title: "Painel administrativo", description: "Ferramentas internas para gerir usuários, conteúdos e relatórios." },
  { title: "Segurança e LGPD", description: "Dados sensíveis, criptografia e requisitos legais de privacidade." },
  { title: "MVP ou versão completa", description: "Começar enxuto reduz o investimento inicial e o risco." },
];

const handover = [
  "Protótipo navegável aprovado antes de escrever código",
  "App ou sistema publicado nas lojas ou no ar",
  "Testes automatizados e revisão de segurança",
  "Documentação técnica do projeto",
  "Monitoramento ativo nas primeiras semanas",
  "Plano de evolução para as próximas versões",
];

export default function DesenvolvimentoDeAppsPage() {
  return (
    <>
      <PageHero
        breadcrumb={<Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Apps e Sistemas" }]} />}
        kicker="Apps e Sistemas"
        title={
          <>
            Software sob medida <span className="text-electric-ink">que cresce com você</span>
          </>
        }
        intro="Aplicativos, plataformas web e sistemas internos que automatizam processos, reduzem custos e abrem novas fontes de receita."
        tone="purple"
        aside={<TrustRow items={["Avaliação de viabilidade gratuita", "NDA se precisar", "Pagamento parcelado"]} />}
      >
        <ButtonLink href={CONTACT_HREF}>{CTA_PRIMARY}</ButtonLink>
        <ButtonLink href="/lab/mensagram" variant="secondary" arrow>Ver um produto nosso</ButtonLink>
      </PageHero>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Em todos os projetos"
            title="Design, código, testes e suporte"
            intro="Cada projeto inclui todas as camadas. Nada de surpresas cobradas à parte no meio do caminho."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <FeatureCard key={d.title} {...d} tone="purple" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader kicker="Tipos de projeto" title="Qual é o seu desafio?" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t) => (
              <div key={t.title} className="rounded-2xl border border-ink/[0.08] bg-navy-card p-7">
                <Icon name={t.icon} className="h-6 w-6 text-purple-700" />
                <h3 className="mt-5 font-heading text-lg font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-ink/70">{t.description}</p>
                <ul className="mt-5 space-y-2 border-t border-ink/[0.06] pt-5">
                  {t.examples.map((e) => (
                    <li key={e} className="flex items-center gap-2 text-sm text-ink/75">
                      <Icon name="check" className="h-4 w-4 text-electric-ink" strokeWidth={2.5} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <SectionHeader
              kicker="Tecnologias"
              title="Ferramentas modernas e consolidadas"
              intro="Usamos tecnologias com comunidade ativa e futuro garantido, para o seu produto não ficar preso a escolhas do passado."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stack.map((s) => (
                <div key={s.name} className="rounded-xl border border-ink/[0.08] bg-navy-card px-4 py-4">
                  <p className="font-heading text-sm font-bold text-ink">{s.name}</p>
                  <p className="mt-1 text-xs text-ink/60">{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader kicker="Como trabalhamos" title="Da ideia ao lançamento, sem surpresas" />
          <ProcessSteps
            details={[
              "Mapeamos requisitos, validamos o conceito e definimos o MVP com o menor risco.",
              "Escopo, etapas, prazo e valor por escrito, com protótipo navegável para validar.",
              "Ciclos curtos com entregas que você testa, com código testado e documentado.",
              "Publicação nas lojas ou no ar, com monitoramento ativo nas primeiras semanas.",
              "Manutenção, novas funcionalidades e adaptação às atualizações das lojas.",
            ]}
          />
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <SectionHeader
            kicker="Para quem é"
            title="Software para quem quer crescer mais rápido"
            intro="De um MVP de startup a uma ferramenta interna, adaptamos o processo à sua realidade."
          />
          <ul className="divide-y divide-ink/[0.06] rounded-2xl border border-ink/[0.08] bg-navy-card">
            {audience.map((a) => (
              <li key={a.title} className="flex gap-5 p-6">
                <Icon name={a.icon} className="mt-0.5 h-6 w-6 flex-shrink-0 text-electric-ink" />
                <div>
                  <h3 className="font-heading text-base font-bold text-ink">{a.title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-ink/70">{a.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScopeSection factors={priceFactors} deliverables={handover} />

      <FAQBlock items={faqSection("apps")} title="Dúvidas sobre apps e sistemas" className="bg-navy-deep" />

      <CtaBand
        title="Tem uma ideia? Vamos transformá-la em produto."
        intro="Avaliamos gratuitamente a viabilidade do seu projeto e propomos o caminho mais rápido até a primeira versão."
      />
    </>
  );
}
