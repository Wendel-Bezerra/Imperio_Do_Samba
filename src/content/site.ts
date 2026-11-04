// Todo o conteúdo editável do site num lugar só.

export const site = {
  name: "Império do Samba",
  url: "https://imperiodosamba.com.br",
  instagram: {
    handle: "imperiodosambasalvador",
    url: "https://www.instagram.com/imperiodosambasalvador/",
  },
  // Toda conversão acontece no WhatsApp: "Confirmar presença" abre a conversa
  // com `confirmMessage`; o botão de WhatsApp das redes usa `message`.
  whatsapp: {
    number: "557181470929", // só dígitos, com DDI e DDD
    display: "(71) 8147-0929",
    confirmMessage: "Oi! Quero confirmar minha presença no Soft Open do Império do Samba (06 a 08/11).",
    message: "Oi! Quero saber mais sobre o Império do Samba.",
  },

  event: {
    label: "Inauguração · Soft Open",
    dates: "06 a 08 de novembro",
    datesShort: "06 a 08/11",
    // Abertura (alvo da contagem) e fim do último dia, no fuso de Salvador.
    start: "2026-11-06T16:30:00-03:00",
    end: "2026-11-09T00:00:00-03:00",
    place: "Vila Jardim dos Namorados",
    city: "Salvador",
    // Janelas de funcionamento, usadas pela contagem durante o evento.
    sessions: [
      { open: "2026-11-06T16:30:00-03:00", close: "2026-11-07T02:00:00-03:00", opens: "16h30", closes: "02h" },
      { open: "2026-11-07T16:30:00-03:00", close: "2026-11-08T02:00:00-03:00", opens: "16h30", closes: "02h" },
      { open: "2026-11-08T16:00:00-03:00", close: "2026-11-09T00:00:00-03:00", opens: "16h", closes: "00h" },
    ],
    hours: [
      { days: "Sex e Sáb", time: "16h30 às 02h" },
      { days: "Domingo", time: "16h às 00h" },
    ],
  },

  hero: {
    tagline: "O novo point do samba em Salvador",
    text: "O Império do Samba abre as portas em clima de esquenta e te convida para viver, em primeira mão, a casa nova do samba soteropolitano.",
  },

  nav: [
    { label: "Soft Open", href: "#soft-open" },
    { label: "Atrações", href: "#atracoes" },
    { label: "A casa", href: "#imperio" },
    { label: "Instagram", href: "#redes" },
  ],

  lineup: {
    kicker: "Sexta-feira · 06 de novembro",
    kickerShort: "Sexta · 06 de novembro",
    title: "A noite de abertura do Império",
    text: "Portas abertas às 16h30. Mesa de samba até tarde e after para fechar a primeira noite da casa.",
    headliner: {
      name: "Renanzinho CBX",
      extra: "e convidados",
      handle: "renanzinhocbx",
      url: "https://www.instagram.com/renanzinhocbx/",
    },
    guests: [
      {
        role: "Atração principal",
        name: "Gela Samba",
        handle: "gelasamba",
        url: "https://www.instagram.com/gelasamba/",
        img: "/assets/opt/gelasamba-335.webp",
        alt: "Gela Samba ao vivo",
        position: "center 35%",
        tone: "verde",
      },
      {
        role: "After",
        name: "Boma",
        handle: "djboma071",
        url: "https://www.instagram.com/djboma071/",
        img: "/assets/opt/boma-366.webp",
        alt: "DJ Boma",
        position: "center top",
        tone: "marrom",
      },
    ],
  },

  marquee: ["Samba", "Cerveja gelada", "Petisco", "Mesa de samba", "Happy hour", "Salvador", "Império do Samba"],

  imperio: {
    kicker: "A casa de happy hour da cidade",
    title: "Samba bom pede cerveja Império trincando",
    text: "Copo suado, petisco de boteco e a mesa de samba tocando do lado. A casa foi pensada para o samba e a cerveja dividirem o mesmo palco.",
    chips: ["Cerveja Império", "Drinks da casa", "Petiscos de boteco"],
    gallery: [
      { img: "copo-cerveja", widths: [300, 520, 900], sizes: "(max-width: 767px) 50vw, 240px", alt: "Copo de cerveja Império", caption: "A gelada da casa" },
      { img: "copo-drink", widths: [400, 800], sizes: "(max-width: 767px) 50vw, 460px", alt: "Drink da casa com limão", caption: "Drinks" },
      { img: "petiscos", widths: [400, 800], sizes: "(max-width: 767px) 50vw, 460px", alt: "Porção de petiscos com bandeirinha Império", caption: "Petiscos" },
    ],
  },

  social: {
    kicker: "Acompanha a gente",
    title: "O Império nas redes",
    text: "Bastidores da montagem, line-up de cada fim de semana e os melhores momentos da mesa de samba. Tudo primeiro no Instagram.",
  },

  reels: [
    {
      src: "/assets/reels/reel-01-grande-inauguracao.mp4",
      poster: "/assets/opt/reel-01-poster-540.webp",
      alt: "Reel: grande inauguração com balde de cerveja Império",
      caption: "Grande inauguração: balde de Império gelado e samba a tarde toda.",
    },
    {
      src: "/assets/reels/reel-02-cerveja-fachada.mp4",
      poster: "/assets/opt/reel-02-poster-540.webp",
      alt: "Reel: cerveja Império servida e a fachada da casa",
      caption: "Cerveja servida, portas abertas. Te esperamos no Soft Open, 06 a 08/11.",
    },
    {
      src: "/assets/reels/reel-03-convite-orla.mp4",
      poster: "/assets/opt/reel-03-poster-540.webp",
      alt: "Reel: convite gravado na orla de Salvador",
      caption: "O recado tá dado: o Império do Samba abre na Vila Jardim dos Namorados.",
    },
    {
      src: "/assets/reels/reel-04-convite-painel.mp4",
      poster: "/assets/opt/reel-04-poster-540.webp",
      alt: "Reel: convite em frente ao painel do Império",
      caption: "Já conhece o novo point do samba em Salvador?",
    },
  ],

  legal: "Beba com moderação. Venda de bebidas alcoólicas proibida para menores de 18 anos.",
  copyright: "© 2026 Império do Samba",

  meta: {
    title: "Império do Samba · Soft Open 06 a 08/11 · Salvador",
    description:
      "A casa de happy hour da cidade. Soft Open de 06 a 08 de novembro na Vila Jardim dos Namorados, com Renanzinho CBX, Gela Samba e after com Boma.",
  },
} as const;

export type Reel = (typeof site.reels)[number];
