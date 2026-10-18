// Método Impaxo: as mesmas cinco etapas em todos os serviços.
// Cada página pode trocar as descrições, mas não os nomes nem a ordem.
const STEPS = [
  { title: "Diagnóstico", description: "Conversamos sobre o seu negócio, os objetivos e o público antes de propor qualquer coisa." },
  { title: "Proposta", description: "Você recebe por escrito o escopo, o prazo e o valor. Sem letras miúdas." },
  { title: "Construção", description: "Executamos em etapas curtas, com entregas que você acompanha e aprova." },
  { title: "Lançamento", description: "Colocamos no ar, configuramos as métricas e conferimos que está tudo funcionando." },
  { title: "Evolução", description: "Acompanhamos os resultados e ajustamos o que for preciso depois da entrega." },
] as const;

export default function ProcessSteps({ details }: { details?: [string, string, string, string, string] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {STEPS.map((step, i) => (
        <li key={step.title} className="relative rounded-2xl border border-white/[0.08] bg-navy-card p-6">
          <span className="font-heading text-sm font-bold text-electric">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 font-heading text-base font-bold text-white">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">{details?.[i] ?? step.description}</p>
        </li>
      ))}
    </ol>
  );
}
