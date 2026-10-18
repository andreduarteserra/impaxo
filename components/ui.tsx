import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";

// Peças de interface partilhadas por todas as páginas.

export const CONTACT_HREF = "/contato";
export const CTA_PRIMARY = "Pedir proposta gratuita";

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

export function IconBadge({ name, tone = "blue" }: { name: IconName; tone?: "blue" | "electric" | "purple" }) {
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

export function FeatureCard({
  icon,
  title,
  description,
  tone,
}: {
  icon: IconName;
  title: string;
  description: string;
  tone?: "blue" | "electric" | "purple";
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-navy-card p-7">
      <IconBadge name={icon} tone={tone} />
      <h3 className="mt-5 font-heading text-base font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
  children,
  breadcrumb,
}: {
  kicker: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  children?: React.ReactNode;
  breadcrumb?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, #2C5BFF 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {breadcrumb}
        <div className="max-w-3xl">
          <Kicker>{kicker}</Kicker>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/65">{intro}</p>
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
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
            style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #0B1220 60%)" }}
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
