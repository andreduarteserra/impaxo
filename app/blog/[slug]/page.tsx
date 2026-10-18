import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/app/lib/posts";
import ReadingProgress from "@/components/ReadingProgress";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const paragraphs = post.content
    .trim()
    .split("\n")
    .filter((l) => l.trim() !== "");

  return (
    <>
      <ReadingProgress />
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #2C5BFF 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Blog
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-electric/10 px-3 py-1.5 text-xs font-semibold text-electric">
              {post.category}
            </span>
            <span className="text-xs text-white/35">{post.readTime} de leitura</span>
            <time className="text-xs text-white/35">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/55">{post.excerpt}</p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Article */}
      <article className="py-14">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-4">
            {paragraphs.map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-heading text-3xl font-bold tracking-tight text-white pt-6 first:pt-0"
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-base leading-8 text-white/60">
                  {line}
                </p>
              );
            })}
          </div>

          {/* CTA card */}
          <div className="mt-16 rounded-2xl border border-electric/20 bg-[#0d1e30] p-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold text-white">
                Gostou deste artigo?
              </h3>
              <p className="mt-1 text-sm text-white/50">
                Fale com a nossa equipa e veja como aplicar estas ideias ao seu negócio.
              </p>
            </div>
            <Link
              href="/contacto"
              className="flex-shrink-0 inline-flex h-11 items-center rounded-full bg-brand-blue px-7 text-sm font-semibold text-white transition hover:bg-brand-blue-hover"
            >
              Falar com um especialista
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-white/[0.06] py-20 bg-navy-deep">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-white mb-8">
              Artigos relacionados
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/[0.08] bg-navy-card p-8 transition hover:border-white/15 hover:bg-[#0f1f38]"
                >
                  <span className="mb-3 rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric w-fit">
                    {p.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white transition group-hover:text-electric">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/50 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
