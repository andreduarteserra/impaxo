"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { CONTACT_HREF } from "@/components/ui";

const services = [
  { href: "/servicos/criacao-de-sites", label: "Criação de Sites" },
  { href: "/servicos/marketing-digital", label: "Marketing Digital" },
  { href: "/servicos/desenvolvimento-de-apps", label: "Apps e Sistemas" },
];

const navLinks = [
  { href: "/lab", label: "Lab" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq", label: "FAQ" },
  { href: CONTACT_HREF, label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha os menus ao mudar de página (ajuste de estado durante o render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
    setDropdownOpen(false);
  }

  // Fecha o dropdown com Escape ou clique fora.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdownOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [dropdownOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const linkClass = (active: boolean) =>
    `text-sm font-medium transition ${active ? "text-electric-ink" : "text-ink/75 hover:text-ink"}`;
  const mobileLinkClass = (active: boolean) =>
    `rounded-lg px-4 py-3 text-sm font-medium transition ${
      active ? "bg-electric/10 text-electric-ink" : "text-ink/75 hover:bg-ink/5 hover:text-ink"
    }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-ink/[0.08] bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Impaxo – página inicial">
          <img src="/brand/impaxo-logo-color.svg" height={32} alt="Impaxo" className="h-7 w-auto sm:h-8" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={linkClass(isActive("/"))}>
            Início
          </Link>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-controls="menu-servicos"
              onClick={() => setDropdownOpen((v) => !v)}
              className={`flex items-center gap-1 ${linkClass(pathname.startsWith("/servicos"))}`}
            >
              Serviços
              <Icon
                name="chevronDown"
                className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>
            <div
              id="menu-servicos"
              className={`absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3 transition-all ${
                dropdownOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="rounded-xl border border-ink/[0.08] bg-navy-card p-2 shadow-xl shadow-ink/10">
                <Link
                  href="/servicos"
                  className="block rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-ink hover:bg-ink/5"
                >
                  Todos os serviços
                </Link>
                <div className="my-1 border-t border-ink/[0.06]" />
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-ink/75 transition hover:bg-ink/5 hover:text-ink"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(isActive(link.href))}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href={CONTACT_HREF}
            className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue-hover"
          >
            Pedir proposta
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink/75 transition hover:bg-ink/10 lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-[600px] border-t border-ink/[0.06]" : "invisible max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 sm:px-6">
          <Link href="/" className={mobileLinkClass(isActive("/"))}>
            Início
          </Link>

          <button
            type="button"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
            className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-ink/75 hover:bg-ink/5 hover:text-ink"
          >
            Serviços
            <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} strokeWidth={2} />
          </button>

          {servicesOpen && (
            <div className="ml-4 flex flex-col gap-1 border-l border-ink/10 pl-4">
              <Link href="/servicos" className="rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-electric-ink hover:bg-ink/5">
                Todos os serviços
              </Link>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="rounded-lg px-4 py-2.5 text-sm text-ink/75 hover:bg-ink/5 hover:text-ink">
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={mobileLinkClass(isActive(link.href))}>
              {link.label}
            </Link>
          ))}

          <div className="mt-4 border-t border-ink/[0.08] pt-4">
            <Link
              href={CONTACT_HREF}
              className="block rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-blue-hover"
            >
              Pedir proposta gratuita
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
