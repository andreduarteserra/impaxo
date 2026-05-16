import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mensagram – Mensagens com privacidade real",
  description:
    "Comunicação encriptada a 256 bits. Conta anónima, salas sem rasto, sem e-mail nem telefone. Mais de 7 mil membros ativos por dia.",
};

const stats = [
  { value: "256", label: "bits de encriptação", electric: false },
  { value: "2²⁵⁶", label: "combinações possíveis", electric: false },
  { value: "0", label: "rastos deixados", electric: true },
  { value: "0", label: "dados pessoais guardados", electric: true },
];

const securityCards = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Número de chaves incalculável",
    description: "2²⁵⁶ combinações possíveis — um número incomparavelmente maior do que todos os átomos no universo observável.",
    accent: "bg-electric/10 text-electric",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Impossível por força bruta",
    description: "Todos os computadores do mundo, juntos, desde o Big Bang, não chegariam a 0.000001% das combinações.",
    accent: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "O mesmo standard do Bitcoin",
    description: "A rede financeira mais auditada e atacada do mundo confia nesta encriptação há mais de uma década.",
    accent: "bg-electric/10 text-electric",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    ),
    title: "O mesmo standard do Signal",
    description: "A aplicação de referência mundial em privacidade usa o mesmo protocolo criptográfico de base.",
    accent: "bg-brand-blue/10 text-brand-blue",
  },
];

const steps = [
  { n: "1", label: "Cria uma conta", desc: "Username + palavra-passe. Sem e-mail, sem telefone, sem dados pessoais. Nem nós sabemos quem és.", optional: false },
  { n: "2", label: "Abre uma sala", desc: "Geras um código de acesso único. As salas são sempre anónimas — sem nome, sem histórico.", optional: false },
  { n: "3", label: "Partilha o código", desc: "Apenas o código. Sem links rastreáveis, sem app para instalar.", optional: false },
  { n: "4", label: "Conversam", desc: "Mensagens encriptadas ponto a ponto, em tempo real.", optional: false },
  { n: "5", label: "Desaparecem", desc: "Sem histórico. Sem registos. Sem rasto. Como se nunca tivesse acontecido.", optional: false },
];

const audience = [
  { icon: "📰", title: "Jornalistas", description: "Fontes protegidas. Conversas que não podem ser citadas em tribunal nem entregues a ninguém." },
  { icon: "⚖️", title: "Advogados e consultores", description: "Sigilo profissional garantido por encriptação — não por contrato, não por boa vontade." },
  { icon: "✊", title: "Ativistas e whistleblowers", description: "Comunicação que não pode ser usada contra ti, independentemente de quem tente aceder." },
  { icon: "💑", title: "Casais", description: "Conversas que ficam entre vocês dois. Literalmente. Nem nós conseguimos ler." },
  { icon: "🏢", title: "Executivos e equipas", description: "Discussões sensíveis que nunca saem da sala — mesmo que alguém tente interceptá-las." },
  { icon: "🔒", title: "Qualquer pessoa", description: "Não precisas de razão para não quereres ser monitorizado. A privacidade é um direito, não um privilégio." },
];

const curiosities = [
  {
    quote: "A NSA exige 128 bits para TOP SECRET. O Mensagram usa 256 — o dobro.",
    note: "National Security Agency, EUA",
  },
  {
    quote: "Não pedimos e-mail, telefone, nem nome real. Só um username. Nem nós sabemos quem és.",
    note: "Anonimato por defeito",
  },
  {
    quote: "Não existe base de dados de utilizadores. Não podemos entregar o que não temos.",
    note: "Zero-knowledge architecture",
  },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
        {children}
      </span>
    </div>
  );
}

export default function MensagramPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-32">
        {/* Glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }}
          />
          <div
            className="absolute right-0 top-1/3 h-72 w-72 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)" }}
          />
        </div>

        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Lab", href: "/lab" },
            { label: "Mensagram" },
          ]} />

          <div className="max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <Kicker>impaxo lab</Kicker>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                <span className="text-xs font-semibold tracking-wide text-green-400">
                  Disponível
                </span>
              </span>
            </div>

            <h1 className="font-heading text-6xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl">
              Mensagram
            </h1>
            <p className="mt-5 text-3xl font-medium text-white/65">
              Comunicação com{" "}
              <span className="text-electric">privacidade real</span>.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
              Uma plataforma de mensagens construída do zero para quem não aceita
              compromissos em segurança. Encriptação de 256 bits. Ponto final.
            </p>

            <div className="mt-12">
              <Link
                href="https://mensagram.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center rounded-full bg-electric px-9 text-sm font-bold text-navy shadow-lg shadow-electric/25 transition hover:opacity-90"
              >
                Aceder ao Mensagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-white/[0.06] bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/[0.06] md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-12 text-center">
                <div className={`font-heading text-5xl font-bold ${s.electric ? "text-electric" : "text-white"}`}>
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/45">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="relative overflow-hidden py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            {/* Left: text with decorative watermark */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-8 -left-4 select-none font-heading font-bold leading-none text-white/[0.025]"
                style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
              >
                256
              </div>
              <div className="relative">
                <Kicker>Segurança</Kicker>
                <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  O standard mais alto{" "}
                  <span className="text-electric">que existe</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/55">
                  256 bits de segurança. O dobro do mínimo exigido pela NSA para
                  informação TOP SECRET. Todos os computadores do mundo desde o
                  Big Bang não chegavam a 0.000001% das combinações possíveis.
                </p>
                <p className="mt-5 text-base leading-7 text-white/35">
                  Não escolhemos o mais conveniente. Escolhemos o melhor — e
                  construímos o Mensagram à volta disso.
                </p>
              </div>
            </div>

            {/* Right: 2×2 cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {securityCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/[0.08] bg-navy-card p-7 transition duration-300 hover:border-electric/20 hover:bg-[#0f1f38]"
                >
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.accent}`}>
                    {card.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="py-32 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Kicker>Como funciona</Kicker>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Conta obrigatória. Salas sempre anónimas.
            </h2>
            <p className="mt-4 mx-auto max-w-lg text-base leading-7 text-white/50">
              Precisas de um username e palavra-passe — sem e-mail, sem telefone.
              As salas que crias são partilhadas apenas por código e não ficam
              associadas à tua identidade nem à de quem entra.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`relative rounded-2xl border p-6 text-center ${
                  step.optional
                    ? "col-span-2 border-electric/20 bg-navy-card lg:col-span-1"
                    : "border-white/[0.08] bg-navy-card"
                }`}
              >
                {/* Connector to next step */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-4 translate-x-full bg-electric/25 lg:block" />
                )}

                {/* "Opcional" badge on the 5th card */}
                {step.optional && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full border border-electric/20 bg-navy-deep px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-electric">
                      Opcional
                    </span>
                  </div>
                )}

                {/* Step badge */}
                <div className="mb-5 flex justify-center">
                  <div
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full font-heading text-sm font-bold ${
                      step.optional
                        ? "border border-electric/30 bg-electric/8 text-electric"
                        : "border border-electric/25 bg-electric/5 text-electric"
                    }`}
                  >
                    {step.n}
                  </div>
                </div>
                <h3 className="font-heading text-sm font-bold text-white">{step.label}</h3>
                <p className="mt-2 text-xs leading-5 text-white/40">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Para quem é ── */}
      <section className="relative overflow-hidden py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Kicker>Para quem é</Kicker>
              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Quem não tem nada{" "}
                <span className="text-electric">a esconder</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/55 lg:text-right">
              Privacidade não é um crime. É um direito — e o Mensagram
              trata-a como tal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-white/[0.08] bg-navy-card p-7 transition duration-300 hover:border-white/15 hover:bg-[#0f1f38]"
              >
                <div className="mb-5 text-3xl">{a.icon}</div>
                <h3 className="font-heading text-base font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curiosidades ── */}
      <section className="py-32 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <Kicker>Sabia que</Kicker>
            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Factos que importam
            </h2>
          </div>

          <div className="mx-auto max-w-3xl flex flex-col gap-5">
            {curiosities.map((c) => (
              <div
                key={c.note}
                className="relative rounded-2xl border border-white/[0.08] bg-navy-card px-10 py-10 sm:px-14 sm:py-12"
              >
                <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
                <p className="text-lg font-medium leading-9 text-white/85 sm:text-3xl sm:leading-10">
                  "{c.quote}"
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-electric/60">
                  — {c.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-brand-blue/40 via-electric/20 to-purple-500/20 p-px">
            <div
              className="relative overflow-hidden rounded-3xl px-10 py-20 text-center sm:px-20"
              style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #0B1220 60%)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 60% 0%, rgba(0,212,255,0.12) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  <span className="text-xs font-semibold tracking-wide text-green-400">
                    Disponível
                  </span>
                </div>

                <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Pronto para começar?
                </h2>
                <p className="mt-5 mx-auto max-w-xl text-lg text-white/55">
                  Cria a tua conta em segundos — só username e palavra-passe.
                  Sem e-mail, sem telefone. As salas são sempre anónimas.
                </p>

                <div className="mt-12">
                  <Link
                    href="https://mensagram.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-13 items-center rounded-full bg-electric px-9 text-sm font-bold text-navy shadow-lg shadow-electric/25 transition hover:opacity-90"
                  >
                    Aceder ao Mensagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
