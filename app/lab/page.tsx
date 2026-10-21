import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { ChatMockup, MensagramWordmark } from "@/components/Mockups";
import { CtaBand, PageHero } from "@/components/ui";
import { MENSAGRAM_STATUS } from "@/app/lib/mensagram";

export const metadata: Metadata = {
  title: "Impaxo Lab",
  description:
    "Os produtos digitais que a Impaxo constrói e mantém, como o Mensagram, um mensageiro com criptografia de ponta a ponta.",
};

export default function LabPage() {
  return (
    <>
      <PageHero
        kicker="Impaxo Lab"
        title={
          <>
            Onde construímos os <span className="text-electric-ink">nossos próprios produtos</span>
          </>
        }
        intro="Além de atender clientes, desenvolvemos e mantemos produtos próprios. É aqui que testamos tecnologias a sério, com usuários reais, antes de as levar para os projetos dos clientes."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/lab/mensagram"
            className="group grid grid-cols-1 items-center gap-12 overflow-hidden rounded-3xl border border-ink/[0.08] bg-navy-card p-8 transition hover:border-ink/20 sm:p-12 lg:grid-cols-2"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <MensagramWordmark className="text-3xl" />
                <span className="rounded-full border border-[#FF5E00]/30 bg-[#FF5E00]/10 px-3 py-1 text-xs font-semibold text-[#C2410C]">
                  {MENSAGRAM_STATUS}
                </span>
              </div>
              <p className="mt-6 font-heading text-2xl font-bold text-ink">
                Mensagens privadas de verdade, sem pedir o seu telefone.
              </p>
              <p className="mt-4 text-base leading-7 text-ink/65">
                Um mensageiro com criptografia de ponta a ponta baseada no Protocolo Signal, grupos,
                chamadas de áudio e vídeo e cópia de segurança criptografada. Para criar uma conta basta um
                nome de usuário e uma senha.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric-ink transition group-hover:gap-3">
                Ver o caso completo
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
              </span>
            </div>
            <ChatMockup />
          </Link>
        </div>
      </section>

      <section className="bg-navy-deep py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-3 lg:px-8">
          {[
            { title: "Usuários reais", text: "Os nossos produtos estão no ar e são usados de verdade. Os problemas que resolvemos são problemas de produção." },
            { title: "Segurança primeiro", text: "Auditorias internas, testes automatizados e correções antes de abrir qualquer coisa ao público." },
            { title: "Aprendizado aplicado", text: "O que aprendemos aqui (infraestrutura, desempenho, segurança) vai direto para os projetos dos clientes." },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="font-heading text-lg font-bold text-ink">{item.title}</h2>
              <p className="mt-3 text-[15px] leading-7 text-ink/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Quer construir um produto com a gente?"
        intro="Se você tem uma ideia de produto digital, conte para nós. Ajudamos a validar, construir e colocar no ar."
        primaryLabel="Falar sobre o meu produto"
      />
    </>
  );
}
