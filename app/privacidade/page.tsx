import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Impaxo trata os dados pessoais recebidos pelo site, de acordo com a LGPD.",
};

const UPDATED = "18 de outubro de 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Quem é responsável pelos seus dados",
    body: (
      <p>
        A Impaxo é a controladora dos dados pessoais tratados neste site. Para qualquer assunto sobre
        privacidade, incluindo o exercício dos seus direitos, escreva para{" "}
        <a href="mailto:contato@impaxo.com.br">contato@impaxo.com.br</a>.
      </p>
    ),
  },
  {
    title: "2. Que dados coletamos",
    body: (
      <>
        <p>
          <strong>Formulário de contato:</strong> nome, e-mail, telefone (opcional), serviço de interesse e
          a mensagem que você escrever.
        </p>
        <p>
          <strong>Dados técnicos de acesso:</strong> como qualquer site, o servidor de hospedagem registra
          dados como endereço IP, data e hora e tipo de navegador, para segurança e funcionamento.
        </p>
        <p>Não pedimos dados sensíveis e pedimos que você não os inclua na mensagem.</p>
      </>
    ),
  },
  {
    title: "3. Para que usamos e com que base legal",
    body: (
      <ul>
        <li>
          Responder ao seu contato e preparar uma proposta: procedimentos preliminares a um contrato, a
          seu pedido (art. 7º, V, da LGPD).
        </li>
        <li>
          Proteger o site contra abuso e ataques: legítimo interesse (art. 7º, IX, da LGPD).
        </li>
      </ul>
    ),
  },
  {
    title: "4. Com quem compartilhamos",
    body: (
      <>
        <p>Não vendemos nem alugamos dados pessoais. Compartilhamos apenas com quem nos ajuda a operar o site:</p>
        <ul>
          <li>o provedor de hospedagem do site;</li>
          <li>
            o serviço de envio de e-mails que entrega a sua mensagem à nossa caixa de entrada (Resend, com
            servidores nos Estados Unidos).
          </li>
        </ul>
        <p>
          Quando há transferência internacional, ela é feita com prestadores que oferecem garantias
          adequadas de proteção, nos termos do art. 33 da LGPD.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies",
    body: (
      <p>
        Este site não usa cookies de publicidade nem ferramentas de rastreamento de terceiros. Se isso
        mudar, atualizaremos esta política e pediremos o seu consentimento antes.
      </p>
    ),
  },
  {
    title: "6. Por quanto tempo guardamos",
    body: (
      <p>
        As mensagens de contato ficam guardadas enquanto durar a conversa comercial. Se não virarem um
        projeto, são excluídas em até 12 meses. Os registros técnicos de acesso são mantidos pelo prazo
        exigido pelo Marco Civil da Internet (6 meses).
      </p>
    ),
  },
  {
    title: "7. Os seus direitos",
    body: (
      <p>
        Você pode, a qualquer momento, pedir a confirmação do tratamento, o acesso, a correção, a
        anonimização, a portabilidade ou a exclusão dos seus dados, além de informações sobre o
        compartilhamento (art. 18 da LGPD). Basta escrever para{" "}
        <a href="mailto:contato@impaxo.com.br">contato@impaxo.com.br</a>. Você também pode apresentar
        reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>
    ),
  },
  {
    title: "8. Alterações",
    body: <p>Podemos atualizar esta política. A data da última versão está sempre no topo da página.</p>,
  },
];

export default function PrivacidadePage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Kicker>Privacidade</Kicker>
        <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-ink/60">Última atualização: {UPDATED}</p>
        <p className="mt-8 text-lg leading-8 text-ink/70">
          Esta política explica, em linguagem simples, que dados pessoais a Impaxo recebe pelo site, para
          que os usa e como você pode controlá-los, de acordo com a Lei Geral de Proteção de Dados (Lei nº
          13.709/2018).
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-xl font-bold text-ink">{s.title}</h2>
              <div className="mt-4 space-y-3 text-base leading-7 text-ink/70 [&_a]:text-electric-ink [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:text-ink [&_ul]:space-y-2">
                {s.body}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-14 border-t border-ink/[0.08] pt-8 text-sm text-ink/60">
          Dúvidas? <Link href="/contato" className="text-electric-ink underline underline-offset-2">Fale com a gente</Link>.
        </p>
      </div>
    </section>
  );
}
