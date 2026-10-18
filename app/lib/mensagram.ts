import type { IconName } from "@/components/Icon";

// Factos do Mensagram v9 — manter alinhado com o produto real (beta.mensagram.pt).
export const MENSAGRAM_URL = "https://beta.mensagram.pt";
export const MENSAGRAM_STATUS = "Beta aberto";

export const mensagramFeatures: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "lock",
    title: "Protocolo Signal",
    description:
      "Criptografia de ponta a ponta com X3DH e Double Ratchet, implementados pela nossa equipe. Cada mensagem usa uma chave nova.",
  },
  {
    icon: "eyeOff",
    title: "Sem e-mail nem telefone",
    description: "A conta é só um nome de usuário e uma senha. Não pedimos nenhum dado pessoal para começar.",
  },
  {
    icon: "users",
    title: "Grupos criptografados",
    description: "Conversas em grupo com Sender Keys e mensagens assinadas, para ninguém se passar por outro membro.",
  },
  {
    icon: "video",
    title: "Chamadas de áudio e vídeo",
    description: "Chamadas 1 a 1 com a negociação da conexão também criptografada de ponta a ponta.",
  },
  {
    icon: "shield",
    title: "Números de segurança",
    description: "Confira por QR code que você está falando com a pessoa certa, e seja avisado se a chave dela mudar.",
  },
  {
    icon: "upload",
    title: "Cópia de segurança criptografada",
    description: "O histórico fica no seu aparelho. A cópia no servidor é criptografada antes de sair dele.",
  },
];
