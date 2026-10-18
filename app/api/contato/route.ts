// Recebe o formulário de contato e envia-o por e-mail através da API da Resend.
// Variáveis de ambiente:
//   RESEND_API_KEY      chave da Resend (obrigatória)
//   CONTACT_TO_EMAIL    destino das mensagens (por omissão contato@impaxo.com.br)
//   CONTACT_FROM_EMAIL  remetente num domínio verificado na Resend
// Sem RESEND_API_KEY a rota responde 503 e o formulário mostra o e-mail direto,
// para nenhum pedido se perder em silêncio.

const LIMITS = { name: 120, email: 200, phone: 40, service: 60, message: 5000 };
const SERVICES = new Set(["", "Criação de Sites", "Marketing Digital", "Apps e Sistemas", "Outro"]);

// Limite simples por IP (memória do processo): 5 envios a cada 10 minutos.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  if (hits.size > 1000) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Campo-armadilha: invisível para pessoas, preenchido por robôs.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const field = (key: keyof typeof LIMITS) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");
  const data = {
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    service: field("service"),
    message: field("message"),
  };

  const tooLong = (Object.keys(LIMITS) as (keyof typeof LIMITS)[]).some((k) => data[k].length > LIMITS[k]);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!data.name || !data.message || !validEmail || tooLong || !SERVICES.has(data.service)) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contato] RESEND_API_KEY não configurada — mensagem não enviada");
    return Response.json({ error: "unavailable" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "contato@impaxo.com.br";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Site Impaxo <site@impaxo.com.br>";
  const rows = [
    ["Nome", data.name],
    ["E-mail", data.email],
    ["Telefone", data.phone || "—"],
    ["Serviço", data.service || "—"],
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Novo contato pelo site: ${data.name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`,
      html:
        rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join("") +
        `<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contato] Falha no envio pela Resend:", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
