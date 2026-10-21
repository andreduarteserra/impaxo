import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-1.5 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <svg
              aria-hidden
              className="h-3 w-3 flex-shrink-0 text-ink/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-ink/40 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-electric-ink font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
