import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";
import MobileCtaBar from "@/components/MobileCtaBar";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://impaxo.com.br";

// Ficha da empresa para o Google (nome, cidade, serviços e área de atendimento).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Impaxo",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/impaxo-logo-black.svg`,
  email: "contato@impaxo.com.br",
  description: "Agência de tecnologia: criação de sites, marketing digital e desenvolvimento de apps e sistemas sob medida.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Expedicionário Holz, 21 – América",
    addressLocality: "Joinville",
    addressRegion: "SC",
    postalCode: "89201-740",
    addressCountry: "BR",
  },
  areaServed: ["BR", "PT", "AO", "MZ", "CV", "GW", "ST", "TL"],
  knowsLanguage: "pt",
  openingHours: "Mo-Fr 09:00-18:00",
};

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Impaxo",
    default: "Impaxo – Agência de tecnologia",
  },
  description:
    "Agência de tecnologia com sede em Joinville (SC): criação de sites, marketing digital e desenvolvimento de apps e sistemas sob medida.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Impaxo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-navy text-ink antialiased">
        <JsonLd data={organizationJsonLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <MobileCtaBar />
      </body>
    </html>
  );
}
