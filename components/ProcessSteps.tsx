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
    <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
      {/* Linha que liga as etapas: vertical no celular, horizontal no desktop */}
      <span
        aria-hidden
        className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-brand-blue via-electric/60 to-transparent lg:bottom-auto lg:left-6 lg:right-6 lg:top-6 lg:h-px lg:w-auto lg:bg-gradient-to-r"
      />
      {STEPS.map((step, i) => (
        <li key={step.title} className="relative flex gap-5 lg:flex-col lg:gap-0">
          <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-electric/40 bg-navy font-heading text-sm font-bold text-electric shadow-[0_0_24px_-4px_rgba(0,212,255,0.45)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="lg:mt-6">
            <h3 className="font-heading text-base font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">{details?.[i] ?? step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
