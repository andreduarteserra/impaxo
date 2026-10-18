import { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://impaxo.com.br";

// O blog está desativado (redirect em next.config.ts) até haver artigos novos.
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/servicos", priority: 0.9 },
  { path: "/servicos/criacao-de-sites", priority: 0.8 },
  { path: "/servicos/marketing-digital", priority: 0.8 },
  { path: "/servicos/desenvolvimento-de-apps", priority: 0.8 },
  { path: "/contato", priority: 0.8 },
  { path: "/sobre", priority: 0.7 },
  { path: "/lab", priority: 0.6 },
  { path: "/lab/mensagram", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
  { path: "/privacidade", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
