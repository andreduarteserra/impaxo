import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Icon from "@/components/Icon";
import { ChatMockup, MensagramWordmark } from "@/components/Mockups";
import { ButtonLink, CtaBand, FeatureCard, Kicker, SectionHeader } from "@/components/ui";
import { MENSAGRAM_STATUS, MENSAGRAM_URL, mensagramFeatures } from "@/app/lib/mensagram";

export const metadata: Metadata = {
  title: "Mensagram – Caso Impaxo Lab",
  description:
    "O Mensagram é um mensageiro com criptografia de ponta a ponta baseada no Protocolo Signal, construído pela Impaxo. Sem e-mail nem telefone.",
};

const steps = [
  { title: "Crie uma conta", text: "Escolha um nome de usuário e uma senha. Não pedimos e-mail nem telefone." },
  { title: "Adicione um contato", text: "Procure a pessoa pelo nome de usuário e comece a conversar." },
  { title: "Confira a identidade", text: "Compare os números de segurança ou leia o QR code para ter certeza de quem está do outro lado." },
];

// O que o servidor consegue ver — texto alinhado com a página /sobre/ do próprio Mensagram.
const serverSees = [
  "A sua lista de contatos e os grupos de que você participa",
  "O endereço IP e quando você está conectado",
  "O indicador de \"digitando\"",
  "Um registro técnico mínimo, apagado após cerca de um dia, que permite apagar mensagens para todos",
];

const serverDoesNotSee = [
  "O conteúdo das mensagens",
  "O conteúdo das chamadas",
  "Reações, confirmações de leitura e mensagens temporárias",
  "O conteúdo da sua cópia de segurança",
];

export default function MensagramPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF5E00 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Lab", href: "/lab" }, { label: "Mensagram" }]} />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Kicker>Caso Impaxo Lab</Kicker>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <MensagramWordmark className="text-5xl sm:text-6xl" />
                <span className="rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 px-3 py-1 text-xs font-semibold text-[#C2410C]">
                  {MENSAGRAM_STATUS}
                </span>
              </div>
              <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Mensagens privadas de verdade, sem pedir o seu telefone.
              </h1>
              <p className="mt-6 text-lg leading-8 text-ink/70">
                Um mensageiro construído do zero pela Impaxo, com criptografia de ponta a ponta baseada no
                Protocolo Signal, o mesmo modelo usado pelos mensageiros mais respeitados em privacidade.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={MENSAGRAM_URL} arrow>
                  Experimentar o beta
                </ButtonLink>
                <ButtonLink href="#transparencia" variant="secondary">
                  O que o servidor vê
                </ButtonLink>
              </div>
            </div>
            <ChatMockup />
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Funcionalidades"
            title="Tudo o que um mensageiro precisa, com privacidade por padrão"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mensagramFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader kicker="Como funciona" title="Três passos para começar" />
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-ink/[0.08] bg-navy-card p-7">
                <span className="font-heading text-sm font-bold text-[#C2410C]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-ink/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="transparencia" className="scroll-mt-24 bg-navy-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            kicker="Transparência"
            title="O que o servidor vê, e o que não vê"
            intro="Privacidade séria começa por não exagerar. Este é o retrato honesto do que passa pelo nosso servidor."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-ink/[0.08] bg-navy-card p-7">
              <h3 className="font-heading text-base font-bold text-ink">O servidor não consegue ler</h3>
              <ul className="mt-5 space-y-3">
                {serverDoesNotSee.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                    <Icon name="lock" className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-ink" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink/[0.08] bg-navy-card p-7">
              <h3 className="font-heading text-base font-bold text-ink">O servidor precisa saber</h3>
              <ul className="mt-5 space-y-3">
                {serverSees.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                    <Icon name="eyeOff" className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink/50" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-[15px] leading-7 text-ink/70">
            Os servidores ficam na União Europeia. No beta, cada conta usa um dispositivo por vez: ao entrar
            num aparelho novo, o anterior envia uma cópia criptografada e é desconectado.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionHeader
              kicker="O que este caso mostra"
              title="O mesmo rigor nos projetos dos clientes"
              intro="Construir um mensageiro seguro obriga a acertar em tudo o que também importa num site ou num app."
            />
            <ul className="grid gap-3">
              {[
                "Criptografia e segurança implementadas e revisadas pela equipe",
                "Testes automatizados de servidor, aplicação e navegador",
                "Infraestrutura própria, com publicação e reversão controladas",
                "Design acessível, verificado com testes de acessibilidade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-ink/[0.08] bg-navy-card p-4 text-sm text-ink/75">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-ink" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Precisa de um produto com este nível de cuidado?"
        intro="Conte a sua ideia. Avaliamos a viabilidade gratuitamente e propomos o caminho até a primeira versão."
        primaryLabel="Falar sobre o meu produto"
        secondary={{ href: MENSAGRAM_URL, label: "Experimentar o Mensagram" }}
      />
    </>
  );
}
