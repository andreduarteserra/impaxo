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
  title: "Criação de Sites",
  description:
    "Sites profissionais, rápidos e otimizados para o Google, feitos para transformar visitantes em clientes. Landing pages, sites institucionais e lojas virtuais.",
};

const included: { icon: IconName; title: string; description: string }[] = [
  { icon: "search", title: "SEO técnico", description: "URLs amigáveis, meta tags, sitemap, dados estruturados e Google Search Console configurados desde o primeiro dia." },
  { icon: "mobile", title: "Design responsivo", description: "Perfeito no celular, no tablet e no computador, sem sacrificar velocidade nem usabilidade." },
  { icon: "bolt", title: "Alta performance", description: "Otimizamos imagens, código e carregamento. Site rápido aparece melhor no Google e converte mais." },
  { icon: "layout", title: "Painel de conteúdo", description: "Você edita textos, imagens e publicações sem depender de programador. Treinamento incluído." },
  { icon: "lock", title: "HTTPS e segurança", description: "Certificado SSL ativo, dados dos visitantes protegidos e atualizações de segurança." },
  { icon: "chart", title: "Métricas configuradas", description: "Análise de tráfego e conversões pronta no lançamento, para medir o que o site traz de resultado." },
];

const types = [
  {
    title: "Landing Page",
    description: "Uma página focada em conversão, para campanhas, lançamentos e captação de contatos.",
    timeline: "1 a 2 semanas",
    features: ["Design focado em conversão", "Formulário de captação", "Integração com anúncios e análise"],
  },
  {
    title: "Site Institucional",
    description: "A presença completa da empresa: quem somos, serviços, contato e blog.",
    timeline: "3 a 6 semanas",
    features: ["Páginas sob medida para o seu negócio", "Painel de conteúdo e blog", "SEO completo"],
  },
  {
    title: "Loja Virtual",
    description: "E-commerce com carrinho, pagamentos, frete e gestão de estoque.",
    timeline: "6 a 12 semanas",
    features: ["Pagamentos online integrados", "Gestão de produtos e estoque", "Relatórios de vendas"],
  },
];

const audience: { icon: IconName; title: string; description: string }[] = [
  { icon: "store", title: "Negócios locais", description: "Restaurantes, clínicas, lojas e salões que querem ser encontrados na sua região." },
  { icon: "user", title: "MEIs e autônomos", description: "Profissionais que querem passar credibilidade e captar clientes além do boca a boca." },
  { icon: "sparkles", title: "Startups", description: "Empresas em crescimento que precisam de um site que acompanhe a evolução da marca." },
  { icon: "briefcase", title: "Profissionais liberais", description: "Advogados, médicos e consultores cuja reputação online pesa na decisão do cliente." },
];

const priceFactors = [
  { title: "Número de páginas", description: "Uma landing page, um site com cinco seções ou um portal com dezenas de páginas." },
  { title: "Conteúdo", description: "Se você fornece textos e fotos ou se nós produzimos e redigimos o conteúdo." },
  { title: "Funcionalidades", description: "Blog, agendamento online, área de cliente, várias línguas, calculadoras." },
  { title: "Integrações", description: "WhatsApp, CRM, meios de pagamento, ERP ou ferramentas que você já usa." },
  { title: "Loja virtual", description: "Quantidade de produtos, variações, regras de frete e meios de pagamento." },
  { title: "Prazo", description: "Datas apertadas exigem mais gente ao mesmo tempo no projeto." },
];

const deliverables = [
  "Site no ar, com domínio e HTTPS configurados",
  "Painel de conteúdo, com treinamento para a sua equipe",
  "Google Search Console e análise de tráfego configurados",
  "Formulários e botão de WhatsApp funcionando e testados",
  "Sitemap, meta tags e dados estruturados para o Google",
  "Opção de plano de manutenção mensal",
];

export default function CriacaoDeSitesPage() {
  return (
    <>
      <PageHero
        breadcrumb={<Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Criação de Sites" }]} />}
        kicker="Criação de Sites"
        title={
          <>
            Sites que trabalham <span className="text-electric">enquanto você dorme</span>
          </>
        }
        intro="Design exclusivo, carregamento rápido e SEO desde o início. Um site feito para trazer clientes, não só para existir."
        tone="blue"
        aside={<TrustRow />}
      >
        <ButtonLink href={CONTACT_HREF}>{CTA_PRIMARY}</ButtonLink>
        <ButtonLink href="#tipos" variant="secondary">Ver tipos de site</ButtonLink>
      </PageHero>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Em todos os projetos"
            title="O básico bem feito, sem custo extra"
            intro="Estes itens fazem parte de qualquer site que entregamos. Não são adicionais cobrados à parte."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section id="tipos" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Tipos de projeto"
            title="Qual é o site certo para você?"
            intro="Prazos de referência. O cronograma exato vem detalhado na proposta."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {types.map((t) => (
              <div key={t.title} className="flex flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-8">
                <h3 className="font-heading text-xl font-bold text-white">{t.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{t.description}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-electric">
                  <Icon name="clock" className="h-4 w-4" />
                  {t.timeline}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-white/[0.06] pt-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                      <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <ButtonLink href={CONTACT_HREF} variant="secondary" className="mt-8">
                  {CTA_PRIMARY}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader kicker="Como trabalhamos" title="Do briefing ao ar, sem surpresas" />
          <ProcessSteps
            details={[
              "Entendemos o seu negócio, o público e o que o site precisa fazer.",
              "Escopo, páginas, prazo e valor definidos por escrito.",
              "Layout aprovado por você antes do desenvolvimento começar.",
              "Publicamos e configuramos domínio, análise e Search Console.",
              "Manutenção, atualizações de segurança e melhorias contínuas.",
            ]}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <SectionHeader
            kicker="Para quem é"
            title="Para negócios de todos os tamanhos"
            intro="Adaptamos a solução à realidade e ao orçamento de cada cliente."
          />
          <ul className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-navy-card">
            {audience.map((a) => (
              <li key={a.title} className="flex gap-5 p-6">
                <Icon name={a.icon} className="mt-0.5 h-6 w-6 flex-shrink-0 text-electric" />
                <div>
                  <h3 className="font-heading text-base font-bold text-white">{a.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/65">{a.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScopeSection factors={priceFactors} deliverables={deliverables} className="bg-navy-deep" />

      <FAQBlock items={faqSection("sites")} title="Dúvidas sobre criação de sites" />

      <CtaBand
        title="Pronto para ter um site que realmente funciona?"
        intro="Conte o que você precisa e receba uma primeira análise em até 24 horas úteis."
      />
    </>
  );
}
