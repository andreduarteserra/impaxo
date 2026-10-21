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
  title: "Marketing Digital",
  description:
    "SEO, Google Ads, Meta Ads, redes sociais e conteúdo trabalhando juntos, com relatório mensal e decisões baseadas em dados.",
};

const services: { icon: IconName; title: string; description: string }[] = [
  { icon: "search", title: "SEO", description: "Otimização técnica e de conteúdo para aparecer no Google. Tráfego que não para quando o orçamento de anúncios acaba." },
  { icon: "cursor", title: "Google Ads", description: "Anúncios de pesquisa e display para quem já está procurando o que você oferece." },
  { icon: "megaphone", title: "Meta Ads", description: "Campanhas segmentadas no Instagram e no Facebook para alcançar quem tem perfil de compra." },
  { icon: "calendar", title: "Redes sociais", description: "Calendário editorial, produção e publicação nas redes que importam para o seu público." },
  { icon: "pen", title: "Conteúdo", description: "Textos, imagens e vídeos pensados para gerar autoridade e conversão, não só curtidas." },
  { icon: "mail", title: "E-mail marketing", description: "Sequências e campanhas para nutrir contatos e trazer clientes de volta." },
];

const platforms = ["Google", "Instagram", "Facebook", "LinkedIn", "TikTok", "WhatsApp Business"];

const monthly: { icon: IconName; title: string; description: string }[] = [
  { icon: "chart", title: "Relatório mensal", description: "Tráfego, conversões, custo por contato e retorno, em linguagem clara." },
  { icon: "users", title: "Reunião de análise", description: "Uma conversa por mês para rever resultados e decidir os próximos passos." },
  { icon: "refresh", title: "Otimização contínua", description: "Ajustes em anúncios, criativos e segmentação a partir do que os dados mostram." },
];

const audience: { icon: IconName; title: string; description: string }[] = [
  { icon: "store", title: "Negócios locais", description: "Restaurantes, clínicas, academias e lojas que querem mais clientes na região." },
  { icon: "cart", title: "Lojas virtuais", description: "E-commerces que precisam de tráfego qualificado e mais vendas recorrentes." },
  { icon: "sparkles", title: "Startups", description: "Empresas que precisam ganhar visibilidade e conquistar os primeiros clientes." },
  { icon: "briefcase", title: "Profissionais liberais", description: "Advogados, médicos e consultores que querem atrair clientes sem depender só de indicação." },
];

const priceFactors = [
  { title: "Canais", description: "Só Google, só redes sociais ou uma combinação de SEO, anúncios e e-mail." },
  { title: "Verba de anúncios", description: "O investimento nas plataformas, separado da taxa de gestão e combinado com você." },
  { title: "Volume de conteúdo", description: "Quantas publicações, artigos e campanhas de e-mail por mês." },
  { title: "Criativos", description: "Peças de design simples, fotografia ou produção de vídeo." },
  { title: "Concorrência", description: "Setores disputados exigem mais conteúdo e mais tempo para subir no Google." },
  { title: "Ponto de partida", description: "Se já existe site preparado, contas de anúncios e histórico de dados." },
];

const monthlyDeliverables = [
  "Plano de canais, público e metas acompanháveis",
  "Campanhas com rastreamento de conversões configurado",
  "Calendário editorial e produção dos conteúdos do mês",
  "Relatório mensal com o investimento e o retorno de cada canal",
  "Reunião mensal de análise e próximos passos",
  "Otimização contínua de anúncios, criativos e segmentação",
];

export default function MarketingDigitalPage() {
  return (
    <>
      <PageHero
        breadcrumb={<Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Marketing Digital" }]} />}
        kicker="Marketing Digital"
        title={
          <>
            Mais visibilidade. <span className="text-electric-ink">Mais vendas.</span>
          </>
        }
        intro="Estratégias integradas que levam a mensagem certa ao público certo, com cada real investido acompanhado em relatório."
        tone="electric"
        aside={<TrustRow items={["Diagnóstico gratuito", "Relatório mensal", "Pagamento parcelado"]} />}
      >
        <ButtonLink href={CONTACT_HREF}>Pedir diagnóstico gratuito</ButtonLink>
        <ButtonLink href="#mensal" variant="secondary">O que você recebe</ButtonLink>
      </PageHero>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="O que fazemos"
            title="Canais que trabalham juntos"
            intro="Não precisamos estar em todo lugar, só onde o seu público está. Escolhemos os canais a partir do diagnóstico."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <FeatureCard key={s.title} {...s} tone="electric" />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="text-sm text-ink/60">Plataformas com que trabalhamos:</span>
            {platforms.map((p) => (
              <span key={p} className="rounded-full border border-ink/[0.1] px-4 py-1.5 text-sm text-ink/75">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="mensal" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <SectionHeader
            kicker="Todo mês"
            title="Marketing baseado em dados, não em achismo"
            intro="Não prometemos números antes de conhecer o seu negócio. Prometemos medir tudo e mostrar com clareza o que está funcionando."
          />
          <div className="grid gap-4">
            {monthly.map((m) => (
              <div key={m.title} className="flex gap-5 rounded-2xl border border-ink/[0.08] bg-navy-card p-6">
                <Icon name={m.icon} className="mt-0.5 h-6 w-6 flex-shrink-0 text-electric-ink" />
                <div>
                  <h3 className="font-heading text-base font-bold text-ink">{m.title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-ink/70">{m.description}</p>
                </div>
              </div>
            ))}
            <p className="text-[15px] leading-7 text-ink/70">
              SEO costuma mostrar os primeiros resultados consistentes entre 3 e 6 meses. Anúncios trazem
              tráfego mais cedo, mas precisam de algumas semanas de dados para serem otimizados.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader kicker="Como trabalhamos" title="Do diagnóstico à otimização" />
          <ProcessSteps
            details={[
              "Auditamos a sua presença atual e definimos objetivos, público e canais prioritários.",
              "Plano de canais, verba recomendada e metas acompanháveis, por escrito.",
              "Criamos campanhas, conteúdos e o calendário editorial do mês.",
              "Campanhas no ar, com conversões e análise configuradas.",
              "Relatório e reunião mensais, com ajustes baseados nos dados.",
            ]}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <SectionHeader
            kicker="Para quem é"
            title="Estratégia sob medida para cada negócio"
            intro="Adaptamos o plano ao seu setor, orçamento e objetivos."
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

      <ScopeSection
        factors={priceFactors}
        deliverables={monthlyDeliverables}
        deliverablesKicker="Todo mês"
        deliverablesTitle="O que está incluído"
        className="bg-navy-deep"
      />

      <FAQBlock items={faqSection("marketing")} title="Dúvidas sobre marketing digital" />

      <CtaBand
        title="Pronto para vender mais pela internet?"
        intro="Comece com um diagnóstico gratuito da sua presença digital."
        primaryLabel={CTA_PRIMARY}
      />
    </>
  );
}
