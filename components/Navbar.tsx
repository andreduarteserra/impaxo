"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { href: "/servicos/criacao-de-sites", label: "Criação de Sites" },
  { href: "/servicos/marketing-digital", label: "Marketing Digital" },
  { href: "/servicos/desenvolvimento-de-apps", label: "Desenvolvimento de Apps" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lab", label: "Lab" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-navy-deep/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/impaxo_logo.png"
            height={32}
            alt="Impaxo"
            className="h-8 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition ${
              isActive("/") ? "text-electric" : "text-white/70 hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* Serviços dropdown */}
          <div className="group relative">
            <button
              className={`flex items-center gap-1 text-sm font-medium transition ${
                pathname.startsWith("/servicos")
                  ? "text-electric"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Serviços
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-xl border border-white/[0.08] bg-navy-card p-2 opacity-0 shadow-xl shadow-black/30 transition-all group-hover:visible group-hover:opacity-100">
              <Link
                href="/servicos"
                className="block rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric/80 hover:bg-white/5"
              >
                Ver todos os serviços
              </Link>
              <div className="my-1 border-t border-white/[0.06]" />
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block rounded-lg px-4 py-2.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                isActive(link.href)
                  ? "text-electric"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contacto"
            className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Fale conosco
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu — animated with max-height */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-[600px] border-t border-white/[0.06]" : "max-h-0"
        }`}
      >
        <div className="bg-navy-deep/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive("/")
                    ? "bg-electric/10 text-electric"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                Home
              </Link>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
              >
                Serviços
                <svg
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                  <Link
                    href="/servicos"
                    className="rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-electric/80 hover:bg-white/5"
                  >
                    Ver todos
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-lg px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-electric/10 text-electric"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 border-t border-white/[0.08] pt-4">
                <Link
                  href="/contacto"
                  className="block rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
