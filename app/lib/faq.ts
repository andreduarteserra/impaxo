// Perguntas frequentes partilhadas entre /faq, a home e as páginas de serviço.

export type FAQItem = { question: string; answer: string };
export type FAQSection = { id: "geral" | "sites" | "marketing" | "apps"; title: string; items: FAQItem[] };

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "geral",
    title: "Geral",
    items: [
      {
        question: "O que é a Impaxo e o que faz?",
        answer:
          "A Impaxo é uma agência de tecnologia com sede em Joinville, Santa Catarina, e profissionais espalhados por todo o Brasil, que cria sites, campanhas de marketing digital, aplicativos e sistemas sob medida. Também desenvolvemos produtos próprios no Impaxo Lab, como o Mensagram.",
      },
      {
        question: "Quanto custa?",
        answer:
          "Depende do escopo: uma landing page e uma loja virtual são projetos muito diferentes. Por isso não trabalhamos com tabela fixa. Depois da primeira conversa, você recebe uma proposta gratuita com escopo, prazo e valor definidos por escrito, sem compromisso.",
      },
      {
        question: "Vocês atendem empresas fora de Santa Catarina?",
        answer:
          "Sim. Trabalhamos de forma remota com empresas de todo o Brasil e dos demais países de língua portuguesa. As reuniões são por videochamada e você acompanha o andamento do projeto online, do diagnóstico à entrega.",
      },
      {
        question: "Como funciona o pagamento?",
        answer:
          "As condições ficam definidas na proposta, e o pagamento pode ser parcelado. A proposta é válida por 30 dias, para você ter tempo de avaliar com calma.",
      },
      {
        question: "Como funciona o processo de trabalho?",
        answer:
          "Seguimos sempre as mesmas cinco etapas: diagnóstico, proposta, construção, lançamento e evolução. Começamos com uma conversa para entender o seu negócio, enviamos a proposta por escrito e, depois da aprovação, executamos em etapas curtas com entregas que você acompanha.",
      },
      {
        question: "O que eu preciso preparar para a primeira conversa?",
        answer:
          "Nada técnico. Ajuda saber o objetivo principal (vender mais, captar contatos, organizar a operação), ter alguns exemplos de sites ou apps de que você gosta, uma ideia de prazo e, se possível, uma faixa de orçamento. Com isso conseguimos propor algo realista logo na primeira proposta.",
      },
      {
        question: "Vocês trabalham com empresas de qualquer tamanho?",
        answer:
          "Sim. Atendemos desde empreendedores individuais até médias empresas. Adaptamos cada solução à realidade e ao orçamento do cliente.",
      },
      {
        question: "Vocês assinam acordo de confidencialidade (NDA)?",
        answer:
          "Sim. Em qualquer projeto podemos assinar um acordo de confidencialidade para proteger as informações do seu negócio.",
      },
    ],
  },
  {
    id: "sites",
    title: "Criação de Sites",
    items: [
      {
        question: "Quanto tempo leva para criar um site?",
        answer:
          "Depende da complexidade do projeto. Uma landing page pode ser entregue em 1 a 2 semanas. Um site institucional completo leva de 3 a 6 semanas. Uma loja virtual, de 6 a 12 semanas. O cronograma detalhado vem sempre na proposta.",
      },
      {
        question: "Preciso já ter domínio e hospedagem?",
        answer:
          "Não. Se você ainda não tem, ajudamos a escolher e registrar o domínio e configuramos a hospedagem. Se já tem, trabalhamos com o que existe.",
      },
      {
        question: "Já tenho um site. Vocês fazem só a reformulação?",
        answer:
          "Sim. Começamos por uma análise do site atual (velocidade, SEO e conversão) e propomos reformular só o que precisa. Quando mudamos de plataforma, cuidamos dos redirecionamentos para não perder o posicionamento que você já tem no Google.",
      },
      {
        question: "O site vai ser otimizado para SEO?",
        answer:
          "Sim. Todos os nossos sites incluem SEO técnico base: velocidade de carregamento, estrutura de URLs, meta tags, sitemap, schema markup e integração com o Google Search Console. Para quem quer ir além, também oferecemos SEO contínuo.",
      },
      {
        question: "Vou conseguir atualizar o site sozinho?",
        answer:
          "Sim. Entregamos um painel de conteúdo simples para atualizar textos e imagens e publicar artigos sem conhecimento técnico, com treinamento no final do projeto.",
      },
      {
        question: "E depois que o site fica pronto, vocês dão suporte?",
        answer:
          "Sim. Oferecemos planos de manutenção mensal que incluem atualizações de segurança, backups, monitoramento de disponibilidade e suporte técnico. Também fazemos alterações pontuais sob demanda.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    items: [
      {
        question: "Em quanto tempo o SEO dá resultado?",
        answer:
          "SEO é uma estratégia de médio e longo prazo. Os primeiros resultados consistentes costumam aparecer entre 3 e 6 meses. Em compensação, os ganhos se acumulam e não param quando a verba acaba, como acontece com os anúncios.",
      },
      {
        question: "Qual é o orçamento mínimo para anúncios pagos?",
        answer:
          "Recomendamos um mínimo de R$ 1.500/mês para anúncios (média de mercado), além da nossa taxa de gestão. Com menos verba, os dados não são suficientes para otimizar as campanhas de forma eficaz. Mas cada caso é avaliado individualmente.",
      },
      {
        question: "Como é paga a verba dos anúncios?",
        answer:
          "A verba é paga à Impaxo, que faz o investimento nas plataformas (Google, Meta e outras). Você não precisa de lidar com cartões nem faturas de cada plataforma, e o relatório mensal mostra quanto foi investido em cada canal.",
      },
      {
        question: "Que relatórios eu recebo?",
        answer:
          "Um relatório mensal com as métricas que importam (tráfego, conversões, custo por contato e retorno) e uma reunião mensal para analisar os resultados e decidir os próximos passos.",
      },
    ],
  },
  {
    id: "apps",
    title: "Apps e Sistemas",
    items: [
      {
        question: "Qual é a diferença entre app nativo e multiplataforma?",
        answer:
          "Um app nativo é desenvolvido especificamente para iOS (Swift) ou Android (Kotlin), oferecendo a melhor performance e acesso a todas as funcionalidades do dispositivo. Um app multiplataforma (como React Native) é desenvolvido uma vez e funciona nos dois sistemas, com custo e prazo menores. Recomendamos a abordagem de acordo com cada projeto.",
      },
      {
        question: "O que é um MVP e por que começar por ele?",
        answer:
          "MVP é a primeira versão do produto, só com as funcionalidades essenciais para resolver o problema principal. Lançar um MVP custa menos, chega mais rápido aos usuários e mostra o que vale a pena desenvolver a seguir, antes de investir em tudo de uma vez.",
      },
      {
        question: "Vocês publicam o app nas lojas (App Store e Google Play)?",
        answer:
          "Sim. Cuidamos de todo o processo: preparação de ícones e capturas de tela, preenchimento das fichas nas lojas e acompanhamento da aprovação.",
      },
      {
        question: "O que acontece depois de o app ser lançado?",
        answer:
          "Oferecemos planos de manutenção e evolução contínua. As lojas mudam os requisitos com frequência e os sistemas operacionais ganham novas versões. A manutenção garante que o app continue funcionando e permite adicionar novas funcionalidades.",
      },
    ],
  },
];

export function faqSection(id: FAQSection["id"]): FAQItem[] {
  return FAQ_SECTIONS.find((s) => s.id === id)?.items ?? [];
}

// Seleção para a home: o que as pessoas querem saber antes do primeiro contato.
export const HOME_FAQ: FAQItem[] = [
  faqSection("geral")[1],
  faqSection("sites")[0],
  faqSection("geral")[2],
  faqSection("geral")[3],
  faqSection("geral")[5],
];
