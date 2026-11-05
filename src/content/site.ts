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
    start: "2026-11-06T17:30:00-03:00",
    end: "2026-11-09T00:00:00-03:00",
    place: "Vila Jardim dos Namorados",
    city: "Salvador",
    // Janelas de funcionamento, usadas pela contagem durante o evento.
    sessions: [
      { open: "2026-11-06T17:30:00-03:00", close: "2026-11-07T02:00:00-03:00", opens: "17h30", closes: "02h" },
      { open: "2026-11-07T17:30:00-03:00", close: "2026-11-08T02:00:00-03:00", opens: "17h30", closes: "02h" },
      { open: "2026-11-08T17:30:00-03:00", close: "2026-11-09T00:00:00-03:00", opens: "17h30", closes: "00h" },
    ],
    hours: [
      { days: "Sex e Sáb", time: "17h30 às 02h" },
      { days: "Domingo", time: "17h30 às 00h" },
    ],
  },

  hero: {
    tagline: "O novo point do samba em Salvador",
    text: "O Império do Samba abre as portas em clima de esquenta e te convida para viver, em primeira mão, a casa nova do samba soteropolitano.",
  },

  nav: [
    { label: "Soft Open", href: "#soft-open" },
    { label: "Programação", href: "#atracoes" },
    { label: "A casa", href: "#imperio" },
    { label: "O espaço", href: "#espaco" },
    { label: "Instagram", href: "#redes" },
  ],

  // Grade do Soft Open, na ordem dos dias. `handle` vazio = atração sem Instagram no site;
  // `special` é a participação especial do dia ("" quando não tem).
  programacao: {
    kicker: "06, 07 e 08 de novembro",
    title: "A programação do Soft Open",
    text: "Três dias de mesa de samba na Vila Jardim dos Namorados. Portas abertas a partir das 17h30.",
    days: [
      {
        weekday: "Sexta",
        date: "06 nov",
        time: "17h30",
        poster: "programacao-sexta",
        alt: "Cartaz de sexta, 06 de novembro: Renanzinho, Gela Samba, DJ Boma e Samba 40° em participação especial",
        artists: [
          { name: "Renanzinho CBX", handle: "renanzinhocbx" },
          { name: "Gela Samba", handle: "gelasamba" },
          { name: "DJ Boma", handle: "djboma071" },
        ],
        special: "Samba 40°",
      },
      {
        weekday: "Sábado",
        date: "07 nov",
        time: "17h30",
        poster: "programacao-sabado",
        alt: "Cartaz de sábado, 07 de novembro: Pedrinho, Jow e Laio",
        artists: [
          { name: "Pedrinho", handle: "" },
          { name: "Jow", handle: "" },
          { name: "Laio", handle: "" },
        ],
        special: "",
      },
      {
        weekday: "Domingo",
        date: "08 nov",
        time: "17h30",
        poster: "programacao-domingo",
        alt: "Cartaz de domingo, 08 de novembro: Água Fresca, Simplesmente Luís e Os Sungas em participação especial",
        artists: [
          { name: "Água Fresca", handle: "" },
          { name: "Simplesmente Luís", handle: "" },
        ],
        special: "Os Sungas",
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

  espaco: {
    kicker: "Vila Jardim dos Namorados",
    title: "Conheça o espaço",
    text: "Salão amplo e coberto, palco para a mesa de samba e uma entrada que já anuncia a noite.",
    photos: [
      { img: "espaco-salao", widths: [480, 960], sizes: "(max-width: 767px) 92vw, (max-width: 1239px) 38vw, 470px", alt: "Salão coberto com mesas de madeira, varal de luzes e piso de calçadão verde, marrom e creme", caption: "Salão" },
      { img: "espaco-palco", widths: [400, 720], sizes: "(max-width: 767px) 46vw, (max-width: 1239px) 29vw, 360px", alt: "Palco com painel verde iluminado e o letreiro do Império do Samba", caption: "Palco" },
      { img: "espaco-entrada", widths: [400, 720], sizes: "(max-width: 767px) 46vw, (max-width: 1239px) 29vw, 360px", alt: "Entrada em portal verde com o letreiro Império do Samba iluminado", caption: "Entrada" },
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
      "A casa de happy hour da cidade. Soft Open de 06 a 08 de novembro na Vila Jardim dos Namorados, com Renanzinho CBX, Gela Samba, DJ Boma, Pedrinho, Jow, Laio, Água Fresca, Simplesmente Luís e mais.",
  },
} as const;

export type Reel = (typeof site.reels)[number];
