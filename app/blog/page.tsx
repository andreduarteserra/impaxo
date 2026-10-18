import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/posts";
import NewsletterForm from "@/components/NewsletterForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre criação de sites, marketing digital, desenvolvimento de apps e estratégias para crescer online.",
};

const categoryColors: Record<string, string> = {
  "Criação de Sites": "bg-brand-blue/10 text-brand-blue",
  "Marketing Digital": "bg-electric/10 text-electric",
  "Desenvolvimento de Apps": "bg-purple-500/10 text-purple-400",
};

function categoryColor(cat: string) {
  return categoryColors[cat] ?? "bg-electric/10 text-electric";
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-6 bg-electric" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{children}</span>
    </div>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #2C5BFF 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Kicker>Blog Impaxo</Kicker>
          <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Conhecimento que{" "}
            <span className="text-electric">gera resultados</span>
          </h1>
          <p className="mt-6 text-lg text-white/55 max-w-xl mx-auto">
            Artigos práticos sobre tecnologia, marketing digital e estratégias
            para fazer o seu negócio crescer online.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-navy-card p-10 transition hover:border-white/15 lg:flex-row lg:items-center lg:gap-16 lg:p-14"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{ background: "radial-gradient(ellipse at top right, rgba(44,91,255,0.08) 0%, transparent 60%)" }}
            />
            <div className="relative flex-1">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
                  Destaque
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColor(featured.category)}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-white/35">{featured.readTime} de leitura</span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-snug text-white transition group-hover:text-electric lg:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/55 lg:max-w-xl">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-electric">
                Ler artigo
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            <div className="relative mt-8 shrink-0 lg:mt-0 lg:w-64">
              <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/25 mb-1">Data</p>
                  <time className="text-sm text-white/65">
                    {new Date(featured.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/25 mb-1">Tempo de leitura</p>
                  <p className="text-sm text-white/65">{featured.readTime}</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/25 mb-2">Categoria</p>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColor(featured.category)}`}>
                    {featured.category}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 font-heading text-lg font-bold text-white/50">Todos os artigos</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-8 transition hover:-translate-y-1 hover:border-white/15 hover:bg-[#0f1f38] hover:shadow-lg hover:shadow-black/20"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-white/35">{post.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-bold leading-snug text-white transition group-hover:text-electric flex-1">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50 line-clamp-2">{post.excerpt}</p>
                <div className="mt-6 border-t border-white/[0.06] pt-5 flex items-center justify-between">
                  <time className="text-xs text-white/35">
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-xs font-medium text-electric opacity-0 transition group-hover:opacity-100">
                    Ler →
                  </span>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-navy-deep">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Kicker>Newsletter</Kicker>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Receba novos artigos por e-mail
          </h2>
          <p className="mt-4 text-white/50">
            Junte-se a mais de 500 empreendedores que recebem dicas práticas de
            marketing digital e tecnologia.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-xs text-white/25">Sem spam. Cancele quando quiser.</p>
        </div>
      </section>
    </>
  );
}
