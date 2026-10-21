import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQBlock from "@/components/FAQBlock";
import Icon, { type IconName } from "@/components/Icon";
import ProcessSteps from "@/components/ProcessSteps";
import { ChatMockup, HeroVisual, MensagramWordmark } from "@/components/Mockups";
import {
  ButtonLink,
  CONTACT_HREF,
  CTA_PRIMARY,
  CheckList,
  CtaBand,
  IconBadge,
  Kicker,
  SectionHeader,
  TrustRow,
  type Tone,
} from "@/components/ui";
import { MENSAGRAM_STATUS } from "@/app/lib/mensagram";
import { HOME_FAQ } from "@/app/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Impaxo – Agência de tecnologia" },
  description:
    "Sites, apps e marketing digital feitos por uma agência que também desenvolve os próprios produtos. Primeira análise gratuita em até 24 horas úteis.",
};

const services: {
  icon: IconName;
  title: string;
  description: string;
  idealFor: string;
  items: string[];
  note: string;
  href: string;
  tone: Tone;
}[] = [
  {
    icon: "desktop",
    title: "Criação de Sites",
    description: "Sites rápidos, bem posicionados no Google e pensados para transformar visitas em contatos.",
    idealFor: "Quem precisa de uma presença profissional ou quer vender online.",
    items: ["Landing pages", "Sites institucionais", "Lojas virtuais"],
    note: "A partir de 1 a 2 semanas",
    href: "/servicos/criacao-de-sites",
    tone: "blue",
  },
  {
    icon: "chart",
    title: "Marketing Digital",
    description: "SEO, Google Ads, Meta Ads e redes sociais, com relatório mensal do que funcionou e do que não funcionou.",
    idealFor: "Quem quer mais clientes de forma previsível, sem depender só de indicação.",
    items: ["SEO e conteúdo", "Google Ads e Meta Ads", "Redes sociais e e-mail"],
    note: "Relatório e reunião todo mês",
    href: "/servicos/marketing-digital",
    tone: "electric",
  },
  {
    icon: "mobile",
    title: "Apps e Sistemas",
    description: "Aplicativos, plataformas web e sistemas internos sob medida, do protótipo à publicação nas lojas.",
    idealFor: "Quem quer automatizar a operação ou lançar um produto digital.",
    items: ["Apps iOS e Android", "Plataformas web", "Sistemas internos e integrações"],
    note: "MVP primeiro, evolução depois",
    href: "/servicos/desenvolvimento-de-apps",
    tone: "purple",
  },
];

const commitments: { icon: IconName; title: string; text: string }[] = [
  { icon: "clock", title: "Resposta em até 24h úteis", text: "Toda mensagem recebe uma primeira análise, sem compromisso." },
  { icon: "document", title: "Tudo por escrito", text: "Escopo, prazo e valor na proposta, válida por 30 dias." },
  { icon: "calendar", title: "Pagamento parcelado", text: "Condições combinadas na proposta, de acordo com o projeto." },
  { icon: "globe", title: "Atendimento remoto", text: "Brasil e demais países de língua portuguesa." },
];

const signals: { problem: string; answer: string; href: string; icon: IconName }[] = [
  {
    icon: "search",
    problem: "O seu site não aparece no Google",
    answer: "SEO técnico e de conteúdo para ser encontrado por quem já procura o que você oferece.",
    href: "/servicos/marketing-digital",
  },
  {
    icon: "bolt",
    problem: "O site é lento ou não funciona bem no celular",
    answer: "Reformulação rápida e responsiva, sem perder o posicionamento que você já tem.",
    href: "/servicos/criacao-de-sites",
  },
  {
    icon: "users",
    problem: "Os clientes só chegam por indicação",
    answer: "Anúncios e presença digital para criar um fluxo constante de novos contatos.",
    href: "/servicos/marketing-digital",
  },
  {
    icon: "chart",
    problem: "Investe em anúncios e não sabe o retorno",
    answer: "Métricas configuradas e relatório mensal com custo por contato e retorno, em linguagem clara.",
    href: "/servicos/marketing-digital",
  },
  {
    icon: "document",
    problem: "A operação vive em planilhas e no WhatsApp",
    answer: "Um sistema sob medida que organiza pedidos, clientes e estoque num só lugar.",
    href: "/servicos/desenvolvimento-de-apps",
  },
  {
    icon: "bulb",
    problem: "Tem a ideia de um app e não sabe por onde começar",
    answer: "Definimos juntos um MVP: a primeira versão mais enxuta para testar com usuários reais.",
    href: "/servicos/desenvolvimento-de-apps",
  },
];

const comparison: { row: string; values: [string, string, string, string] }[] = [
  { row: "Design", values: ["Modelo pronto", "Depende do profissional", "Exclusivo", "Exclusivo"] },
  { row: "SEO técnico e velocidade", values: ["Básico", "Depende do profissional", "Muitas vezes à parte", "Incluído"] },
  { row: "Métricas configuradas no lançamento", values: ["Você configura", "Raramente", "Depende", "Incluído"] },
  { row: "Escopo, prazo e valor por escrito", values: ["Não se aplica", "Nem sempre", "Sim", "Sim"] },
  { row: "Site, marketing e app com a mesma equipe", values: ["Não", "Raramente", "Às vezes", "Sim"] },
  { row: "Experiência com produto próprio em produção", values: ["Não", "Raramente", "Raramente", "Sim, o Mensagram"] },
  { row: "Suporte depois da entrega", values: ["Da plataforma", "Depende da agenda", "Planos de suporte", "Planos de manutenção"] },
];

const comparisonColumns = ["Fazer sozinho", "Freelancer", "Agência tradicional", "Impaxo"];

const nextSteps: { title: string; text: string }[] = [
  { title: "Você envia a mensagem", text: "Pelo formulário, por e-mail ou pelo WhatsApp. Pode ser só uma ideia." },
  { title: "Resposta em até 24h úteis", text: "Com uma primeira análise e as perguntas que faltam para entender o projeto." },
  { title: "Conversa de diagnóstico", text: "Uma videochamada curta para conhecer o negócio, o público e o objetivo." },
  { title: "Proposta por escrito", text: "Escopo, prazo, valor e condições de parcelamento. Válida por 30 dias." },
];

const prepare = [
  "O objetivo principal: vender mais, captar contatos, organizar a operação",
  "Dois ou três sites ou apps de que você gosta (e por quê)",
  "O que já existe: logo, textos, fotos, site atual",
  "O prazo desejado e se há alguma data importante",
  "Uma faixa de orçamento, mesmo que aproximada",
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
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <Kicker>Agência de tecnologia · Joinville, SC</Kicker>
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
            <div className="mt-8">
              <TrustRow />
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
                <p className="mt-1 text-[15px] leading-7 text-white/70">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sinais ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              kicker="Reconhece algum destes sinais?"
              title="Os problemas que mais resolvemos"
              intro="Quase todo projeto começa com uma destas frases. Se alguma soa familiar, já sabemos por onde começar."
            />
          </FadeIn>
          {/* No celular vira carrossel com scroll lateral; a partir de sm, grelha */}
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
            {signals.map((s, i) => (
              <FadeIn key={s.problem} delay={(i % 3) * 100} className="w-[82%] flex-shrink-0 snap-start sm:w-auto">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-7 transition duration-300 hover:-translate-y-0.5 hover:border-electric/30"
                >
                  <div className="flex items-start gap-4">
                    <Icon name={s.icon} className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/40 transition group-hover:text-electric" />
                    <p className="font-heading text-base font-bold leading-snug text-white">“{s.problem}”</p>
                  </div>
                  <p className="mt-4 flex-1 border-t border-white/[0.06] pt-4 text-[15px] leading-7 text-white/70">{s.answer}</p>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-white/60 transition group-hover:text-electric">
                    Como resolvemos
                    <Icon name="chevronRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/50 sm:hidden">
            Deslize para ver mais
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
          </p>
        </div>
      </section>

      {/* ── Serviços ── */}
      <section className="bg-navy-deep py-24">
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
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#223658]"
                >
                  <IconBadge name={svc.icon} tone={svc.tone} />
                  <h3 className="mt-6 font-heading text-xl font-bold text-white">{svc.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/70">{svc.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-6">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                        <Icon name="check" className="h-4 w-4 flex-shrink-0 text-electric" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex-1 text-[15px] leading-7 text-white/65">
                    <span className="font-semibold text-white/75">Ideal para:</span> {svc.idealFor}
                  </p>
                  <div className="mt-7 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                      <Icon name="clock" className="h-3.5 w-3.5" />
                      {svc.note}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-white/70 transition group-hover:text-electric">
                      Saiba mais
                      <Icon name="chevronRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Caso: Mensagram ── */}
      <section className="py-24">
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
              <CheckList
                className="mt-8"
                items={[
                  "Criptografia de ponta a ponta implementada pela equipe",
                  "Testes automatizados de servidor, aplicação e navegador",
                  "Auditorias de segurança internas antes de abrir o beta",
                ]}
              />
              <p className="mt-8 rounded-2xl border border-white/[0.08] bg-navy-card p-5 text-[15px] leading-7 text-white/70">
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

      {/* ── Comparação ── */}
      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Por que a Impaxo"
            title={
              <>
                Mais do que uma agência: <span className="text-electric">um time de produto</span>
              </>
            }
            intro="Uma comparação honesta entre os caminhos mais comuns para colocar a sua empresa na internet."
          />
          {/* Celular: um cartão por critério, com a Impaxo em destaque */}
          <ul className="space-y-3 md:hidden">
            {comparison.map((c) => (
              <li key={c.row} className="rounded-2xl border border-white/[0.08] bg-navy-card p-5">
                <p className="font-heading text-sm font-bold text-white">{c.row}</p>
                <p className="mt-3 flex items-center gap-2 rounded-xl bg-brand-blue/10 px-3 py-2 text-[15px] font-semibold text-white">
                  <Icon name="check" className="h-4 w-4 flex-shrink-0 text-electric" strokeWidth={2.5} />
                  <span className="text-electric">Impaxo:</span> {c.values[3]}
                </p>
                <dl className="mt-3 grid grid-cols-1 gap-1.5 text-sm">
                  {comparisonColumns.slice(0, 3).map((col, i) => (
                    <div key={col} className="flex justify-between gap-4">
                      <dt className="text-white/50">{col}</dt>
                      <dd className="text-right text-white/70">{c.values[i]}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
          <div className="hidden overflow-x-auto rounded-2xl border border-white/[0.08] bg-navy-card md:block">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">Comparação entre fazer sozinho, freelancer, agência tradicional e Impaxo</caption>
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th scope="col" className="p-5 font-medium text-white/50">
                    <span className="sr-only">Critério</span>
                  </th>
                  {comparisonColumns.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={`p-5 font-heading text-sm font-bold ${i === 3 ? "bg-brand-blue/10 text-electric" : "text-white/80"}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparison.map((c) => (
                  <tr key={c.row}>
                    <th scope="row" className="p-5 font-medium text-white/80">
                      {c.row}
                    </th>
                    {c.values.map((v, i) => (
                      <td key={i} className={`p-5 ${i === 3 ? "bg-brand-blue/10 font-semibold text-white" : "text-white/55"}`}>
                        {i === 3 ? (
                          <span className="flex items-center gap-2">
                            <Icon name="check" className="h-4 w-4 flex-shrink-0 text-electric" strokeWidth={2.5} />
                            {v}
                          </span>
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[15px] leading-7 text-white/60">
            Comparação geral: há ótimos freelancers e ótimas agências. O importante é saber o que perguntar antes
            de contratar, seja a quem for.
          </p>
        </div>
      </section>

      {/* ── Processo ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Como trabalhamos"
            title="O mesmo método em todos os projetos"
            intro="Cinco etapas claras, para você saber sempre em que ponto o projeto está e o que vem a seguir."
          />
          <ProcessSteps />
        </div>
      </section>

      {/* ── Primeiro contato ── */}
      <section className="bg-navy-deep py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div>
            <SectionHeader
              kicker="Primeiro contato"
              title="O que acontece depois de enviar a mensagem"
              intro="Sem formulários intermináveis nem pressão para fechar. Você decide no seu tempo."
            />
            <ol className="space-y-4">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="flex gap-5 rounded-2xl border border-white/[0.08] bg-navy-card p-6">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/15 font-heading text-sm font-bold text-[#7f9bff]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-[15px] leading-7 text-white/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="self-end rounded-3xl border border-electric/20 bg-gradient-to-b from-electric/[0.07] to-transparent p-8 sm:p-10">
            <Icon name="document" className="h-7 w-7 text-electric" />
            <h3 className="mt-5 font-heading text-xl font-bold text-white">Para a conversa render mais</h3>
            <p className="mt-2 text-[15px] leading-7 text-white/70">
              Nada disto é obrigatório, mas ajuda a chegar a uma proposta realista logo de primeira.
            </p>
            <CheckList items={prepare} className="mt-6" />
            <ButtonLink href={CONTACT_HREF} className="mt-8 w-full">
              {CTA_PRIMARY}
            </ButtonLink>
          </aside>
        </div>
      </section>

      <FAQBlock
        items={HOME_FAQ}
        title="O que as pessoas perguntam antes de falar com a gente"
        intro="Preço, prazos, pagamento e como trabalhamos à distância."
      />

      <CtaBand
        title="Vamos conversar sobre o seu projeto?"
        intro="Conte o que você precisa. Em até 24 horas úteis você recebe uma primeira análise, sem compromisso."
        secondary={{ href: "/faq", label: "Ver perguntas frequentes" }}
      />
    </>
  );
}
