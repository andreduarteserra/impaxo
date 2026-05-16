import { MetadataRoute } from "next";
import { getAllPosts } from "@/app/lib/posts";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://impaxo.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/servicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicos/criacao-de-sites`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos/marketing-digital`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos/desenvolvimento-de-apps`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/lab`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/lab/mensagram`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
