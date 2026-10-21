import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";

// Peças de interface partilhadas por todas as páginas.

export const CONTACT_HREF = "/contato";
export const CTA_PRIMARY = "Pedir proposta gratuita";
// TODO: trocar pelo número real (formato wa.me/55DDDNUMERO).
export const WHATSAPP_HREF = "https://wa.me/5511918589993";

export function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{children}</span>
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", arrow = false, className = "" }: ButtonProps) {
  const external = href.startsWith("http");
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25 hover:bg-brand-blue-hover"
      : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5";
  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {arrow && <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />}
    </Link>
  );
}

export function SectionHeader({
  kicker,
  title,
  intro,
  center = false,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-7 text-white/65">{intro}</p>}
    </div>
  );
}

// Garantias curtas por baixo dos botões principais.
export function TrustRow({ items = TRUST_ITEMS }: { items?: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-white/60">
          <Icon name="check" className="h-4 w-4 text-electric" strokeWidth={2.5} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export const TRUST_ITEMS = ["Proposta gratuita", "Resposta em até 24h úteis", "Pagamento parcelado"];

export function IconBadge({ name, tone = "blue" }: { name: IconName; tone?: Tone }) {
  const tones = {
    blue: "bg-brand-blue/15 text-[#7f9bff]",
    electric: "bg-electric/10 text-electric",
    purple: "bg-purple-500/15 text-purple-300",
  };
  return (
    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tones[tone]}`}>
      <Icon name={name} className="h-5 w-5" />
    </div>
  );
}

export type Tone = "blue" | "electric" | "purple";

const TONE_GLOW: Record<Tone, string> = {
  blue: "#2C5BFF",
  electric: "#00D4FF",
  purple: "#a855f7",
};

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-white/75">
          <Icon name="check" className="mt-1 h-4 w-4 flex-shrink-0 text-electric" strokeWidth={2.5} />
          {item}
        </li>
      ))}
    </ul>
  );
}

// "O que influencia o valor" + "O que você recebe": substitui a tabela de preços que não temos.
export function ScopeSection({
  factors,
  deliverables,
  deliverablesKicker = "Na entrega",
  deliverablesTitle = "O que você recebe",
  className = "",
}: {
  factors: { title: string; description: string }[];
  deliverables: string[];
  deliverablesKicker?: string;
  deliverablesTitle?: string;
  className?: string;
}) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-navy-card p-8 sm:p-10">
          <Kicker>Investimento</Kicker>
          <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            O que influencia o valor do projeto
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-white/70">
            Não usamos tabela fixa porque cada projeto é diferente. Estes são os fatores que mais pesam na
            proposta. O pagamento pode ser parcelado.
          </p>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {factors.map((f, i) => (
              <div key={f.title} className="flex gap-4">
                <span className="font-heading text-sm font-bold text-electric/70">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <dt className="font-heading text-sm font-bold text-white">{f.title}</dt>
                  <dd className="mt-1 text-[15px] leading-7 text-white/70">{f.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-3xl border border-electric/20 bg-gradient-to-b from-electric/[0.07] to-transparent p-8 sm:p-10">
          <Kicker>{deliverablesKicker}</Kicker>
          <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-white">{deliverablesTitle}</h2>
          <CheckList items={deliverables} className="mt-8" />
        </div>
      </div>
    </section>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  tone,
}: {
  icon: IconName;
  title: string;
  description: string;
  tone?: Tone;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-navy-card p-7 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#223658]">
      <IconBadge name={icon} tone={tone} />
      <h3 className="mt-5 font-heading text-base font-bold text-white">{title}</h3>
      <p className="mt-2 text-[15px] leading-7 text-white/70">{description}</p>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
  children,
  breadcrumb,
  tone = "blue",
  aside,
}: {
  kicker: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  children?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  tone?: Tone;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{ background: `radial-gradient(ellipse, ${TONE_GLOW[tone]} 0%, transparent 70%)` }}
      />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {breadcrumb}
        <div className="max-w-3xl">
          <Kicker>{kicker}</Kicker>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/65">{intro}</p>
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
          {aside && <div className="mt-8">{aside}</div>}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  intro,
  primaryLabel = CTA_PRIMARY,
  secondary,
}: {
  title: string;
  intro: string;
  primaryLabel?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-blue/50 via-electric/20 to-transparent p-px">
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-16"
            style={{ background: "linear-gradient(135deg, #1E3566 0%, #15233D 60%)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 60% 0%, rgba(44,91,255,0.18) 0%, transparent 60%)" }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">{intro}</p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink href={CONTACT_HREF}>{primaryLabel}</ButtonLink>
                {secondary && (
                  <ButtonLink href={secondary.href} variant="secondary">
                    {secondary.label}
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
