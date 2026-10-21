import Link from "next/link";
import { WHATSAPP_HREF } from "@/components/ui";

const columns = [
  {
    title: "Serviços",
    links: [
      { href: "/servicos/criacao-de-sites", label: "Criação de Sites" },
      { href: "/servicos/marketing-digital", label: "Marketing Digital" },
      { href: "/servicos/desenvolvimento-de-apps", label: "Apps e Sistemas" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/lab", label: "Impaxo Lab" },
      { href: "/lab/mensagram", label: "Mensagram" },
      { href: "/faq", label: "Perguntas frequentes" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block" aria-label="Impaxo – página inicial">
              <img src="/brand/impaxo-logo-dark-bg.svg" height={28} alt="Impaxo" className="h-7 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-7 text-white/70">
              Agência de tecnologia com sede em Joinville (SC) e equipe remota em todo o Brasil. Sites, apps e marketing digital com padrão de produto.
            </p>
            <div className="mt-6">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] text-white/60 transition hover:border-electric/50 hover:text-electric"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-white/65 transition hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Contato</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="mailto:contato@impaxo.com.br" className="text-sm text-white/65 transition hover:text-white">
                    contato@impaxo.com.br
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 transition hover:text-white">
                    +55 (11) 91858-9993
                  </a>
                </li>
                <li>
                  <span className="text-sm text-white/65">Rua Expedicionário Holz, nº 21, América<br />Joinville – SC, CEP 89201-740</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Impaxo. Todos os direitos reservados.</p>
          <Link href="/privacidade" className="transition hover:text-white">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
