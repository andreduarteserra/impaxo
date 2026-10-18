import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://impaxo.com.br"),
  title: {
    template: "%s | Impaxo",
    default: "Impaxo – Agência de tecnologia",
  },
  description:
    "Agência de tecnologia de São Paulo: criação de sites, marketing digital e desenvolvimento de apps e sistemas sob medida.",
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
      <body className="min-h-screen flex flex-col bg-navy text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
