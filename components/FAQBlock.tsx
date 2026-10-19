import FAQAccordion from "@/components/FAQAccordion";
import JsonLd, { faqJsonLd } from "@/components/JsonLd";
import { ButtonLink, SectionHeader } from "@/components/ui";
import type { FAQItem } from "@/app/lib/faq";

// Secção de perguntas frequentes para a home e as páginas de serviço.
export default function FAQBlock({
  items,
  title = "Perguntas frequentes",
  intro,
  className = "",
}: {
  items: FAQItem[];
  title?: string;
  intro?: string;
  className?: string;
}) {
  return (
    <section className={`py-24 ${className}`}>
      <JsonLd data={faqJsonLd(items)} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <div>
          <SectionHeader kicker="Dúvidas" title={title} intro={intro} />
          <ButtonLink href="/faq" variant="secondary" arrow className="-mt-6">
            Ver todas as perguntas
          </ButtonLink>
        </div>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
