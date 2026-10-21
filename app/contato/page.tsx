import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CheckList, Kicker, WHATSAPP_HREF } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe da Impaxo. Conte o seu projeto e receba uma primeira análise em até 24 horas úteis.",
};

const contactInfo = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "E-mail",
    value: "contato@impaxo.com.br",
    href: "mailto:contato@impaxo.com.br",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Telefone / WhatsApp",
    value: "+55 (11) 91858-9993",
    href: WHATSAPP_HREF,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Localização",
    value: "Sede: Rua Expedicionário Holz, nº 21, Bairro América, Joinville – SC, CEP 89201-740 · equipe remota em todo o Brasil",
    href: null,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Horário",
    value: "Seg–Sex, 09h–18h",
    href: null,
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #2C5BFF 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>Contato</Kicker>
            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Vamos conversar
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Conte o que você precisa. Respondemos em até 24 horas úteis com
              uma primeira análise, sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-white/[0.08] bg-navy-card p-8 sm:p-10">
                <h2 className="font-heading text-lg font-bold text-white mb-1">
                  Envie uma mensagem
                </h2>
                <p className="text-sm text-white/60 mb-8">
                  Quanto mais detalhes, melhor a primeira análise que enviamos.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Contact info */}
              <div className="rounded-3xl border border-white/[0.08] bg-navy-card p-8">
                <h2 className="font-heading text-lg font-bold text-white mb-7">
                  Informações de contato
                </h2>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-electric/20 bg-electric/10 text-electric">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/60 mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm text-white/75 transition hover:text-white"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white/75">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-green-500/20 bg-green-500/5 p-7 transition hover:border-green-500/40 hover:bg-green-500/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-white group-hover:text-green-400 transition">
                    Falar via WhatsApp
                  </p>
                  <p className="text-sm text-white/60">Resposta em minutos</p>
                </div>
                <svg className="h-5 w-5 text-white/20 group-hover:text-green-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Trust */}
              <div className="rounded-3xl border border-white/[0.08] bg-navy-card p-7">
                <h3 className="font-heading text-sm font-bold text-white mb-5 uppercase tracking-wide">
                  O que você pode esperar
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Resposta em até 24 horas úteis",
                    "Proposta personalizada sem compromisso",
                    "Proposta válida por 30 dias",
                    "Pagamento parcelado",
                    "Acordo de confidencialidade (NDA) se precisar",
                    "Contrato transparente com escopo definido",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/65">
                      <svg className="h-4 w-4 flex-shrink-0 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparação */}
              <div className="rounded-3xl border border-electric/20 bg-gradient-to-b from-electric/[0.07] to-transparent p-7">
                <h3 className="font-heading text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Para a primeira análise render mais
                </h3>
                <p className="mb-5 text-[15px] leading-7 text-white/70">Nada é obrigatório, mas ajuda contar:</p>
                <CheckList
                  items={[
                    "O objetivo principal do projeto",
                    "Sites ou apps de referência de que você gosta",
                    "O que já existe: logo, textos, site atual",
                    "O prazo desejado",
                    "Uma faixa de orçamento, mesmo aproximada",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
