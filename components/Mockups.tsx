import Icon from "@/components/Icon";

// Composições ilustrativas feitas em HTML/CSS (sem imagens externas).

export function MensagramWordmark({ className = "text-2xl" }: { className?: string }) {
  return (
    <span className={`font-heading font-semibold lowercase tracking-tight text-white ${className}`}>
      mensagram
      <span className="ml-[-0.04em] inline-block h-[0.22em] w-[0.22em] rounded-full bg-[#FF5E00] align-baseline" />
    </span>
  );
}

export function ChatMockup() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[320px] rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-3 shadow-2xl shadow-black/50">
      <div className="rounded-[1.5rem] bg-[#121212] px-4 pb-5 pt-4">
        <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5E00]/15 text-xs font-bold text-[#FF8A40]">
            AL
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">ana.lima</p>
            <p className="flex items-center gap-1 text-[11px] text-white/50">
              <Icon name="lock" className="h-3 w-3" strokeWidth={2} />
              Criptografia de ponta a ponta
            </p>
          </div>
          <Icon name="video" className="h-5 w-5 text-white/50" />
        </div>
        <div className="mt-4 flex flex-col gap-2.5 text-[13px] leading-5">
          <p className="max-w-[78%] self-start rounded-2xl rounded-bl-md bg-white/[0.07] px-3.5 py-2 text-white/85">
            Recebeu o contrato revisado?
          </p>
          <p className="max-w-[78%] self-end rounded-2xl rounded-br-md bg-[#FF5E00] px-3.5 py-2 text-white">
            Recebi. Só o servidor não consegue ler 🙂
          </p>
          <p className="max-w-[78%] self-start rounded-2xl rounded-bl-md bg-white/[0.07] px-3.5 py-2 text-white/85">
            Perfeito. Liga às 15h?
          </p>
          <p className="self-end text-[11px] text-white/45">Lida ✓✓</p>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2.5 text-xs text-white/40">
          Mensagem
          <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#FF5E00] text-white">
            <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div aria-hidden className="relative h-[460px] w-full">
      {/* Janela de navegador */}
      <div className="absolute left-0 top-6 w-[88%] overflow-hidden rounded-2xl border border-white/10 bg-navy-card shadow-2xl shadow-black/40">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-4 h-5 flex-1 rounded-md bg-white/[0.05] px-3 text-[11px] leading-5 text-white/40">
            suaempresa.com.br
          </span>
        </div>
        <div className="p-6">
          <div className="h-3 w-24 rounded bg-electric/40" />
          <div className="mt-4 h-6 w-4/5 rounded bg-white/80" />
          <div className="mt-2 h-6 w-3/5 rounded bg-white/80" />
          <div className="mt-5 h-2.5 w-full rounded bg-white/15" />
          <div className="mt-2 h-2.5 w-11/12 rounded bg-white/15" />
          <div className="mt-6 flex gap-3">
            <div className="h-9 w-32 rounded-full bg-brand-blue" />
            <div className="h-9 w-24 rounded-full border border-white/20" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <div className="h-6 w-6 rounded-md bg-brand-blue/30" />
                <div className="mt-3 h-2 w-4/5 rounded bg-white/25" />
                <div className="mt-1.5 h-2 w-3/5 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cartão de métricas */}
      <div className="absolute -left-4 bottom-4 w-56 rounded-2xl border border-white/10 bg-navy-deep/95 p-4 shadow-2xl shadow-black/50 backdrop-blur">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Leads do mês</p>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {[30, 45, 38, 60, 52, 75, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-brand-blue" style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }} />
          ))}
        </div>
      </div>

      {/* Telemóvel */}
      <div className="absolute bottom-0 right-0 w-44 rounded-[1.75rem] border border-white/10 bg-[#0A1530] p-2 shadow-2xl shadow-black/50">
        <div className="rounded-[1.4rem] bg-navy-card p-3">
          <div className="mx-auto h-1 w-10 rounded-full bg-white/15" />
          <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-brand-blue/60 to-electric/30" />
          <div className="mt-3 h-2.5 w-4/5 rounded bg-white/70" />
          <div className="mt-1.5 h-2 w-3/5 rounded bg-white/20" />
          <div className="mt-4 space-y-2">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-white/[0.04] p-2">
                <div className="h-6 w-6 rounded-md bg-electric/30" />
                <div className="h-2 flex-1 rounded bg-white/15" />
              </div>
            ))}
          </div>
          <div className="mt-4 h-8 rounded-full bg-brand-blue" />
        </div>
      </div>
    </div>
  );
}
