// Todo o conteúdo editável do site num lugar só.

export const site = {
  name: "Império do Samba",
  url: "https://imperiodosamba.com.br",
  instagram: {
    handle: "imperiodosambasalvador",
    url: "https://www.instagram.com/imperiodosambasalvador/",
  },
  // Toda conversão acontece no WhatsApp: todos os botões abrem a conversa com `message`.
  whatsapp: {
    number: "557181470929", // só dígitos, com DDI e DDD
    display: "(71) 8147-0929",
    message: "Gostaria de mais informações sobre a Império do Samba nesse final de semana!",
    cta: "Chama no WhatsApp",
  },

  event: {
    place: "Vila Jardim dos Namorados",
    city: "Salvador",
    hours: [{ days: "Sexta a domingo", time: "a partir das 17h30" }],
  },

  hero: {
    kicker: "Mesa de samba · Happy hour",
    tagline: "Sua casa de samba favorita em Salvador",
    text: "Cerveja Império trincando, comida de boteco e SAMBA AO VIVO. Conheça a melhor casa de samba da cidade, na Vila Jardim dos Namorados!",
    // Aviso pequeno logo abaixo das informações principais.
    notice: { label: "Direito de imagem", text: "Ao entrar no bar, você confirma a autorização de uso da sua imagem." },
  },

  nav: [
    { label: "Início", href: "/#inicio" },
    { label: "A casa", href: "/#imperio" },
    { label: "O espaço", href: "/#espaco" },
    { label: "Galeria", href: "/galeria" },
    { label: "Instagram", href: "/#redes" },
  ],

  sobre: {
    title: "Sobre",
    items: [
      { title: "Entrada e couvert", text: "A entrada é gratuita. A casa cobra couvert." },
      { title: "Direito de imagem", text: "Ao entrar no bar, você confirma a autorização de uso da sua imagem." },
    ],
  },

  marquee: ["Samba", "Cerveja gelada", "Petisco", "Mesa de samba", "Happy hour", "Salvador", "Império do Samba"],

  imperio: {
    kicker: "A casa de happy hour da cidade",
    title: "Samba bom pede cerveja Império trincando",
    text: "Copo suado, petisco de boteco e a mesa de samba tocando do lado. A casa foi pensada para o samba e a cerveja dividirem o mesmo palco.",
    chips: ["Cerveja Império", "Drinks da casa", "Petiscos de boteco"],
    gallery: [
      { img: "copo-cerveja", widths: [300, 520, 900], sizes: "(max-width: 767px) 50vw, 240px", alt: "Copo de chope Império gelado no balcão", caption: "A gelada da casa" },
      { img: "copo-drink", widths: [400, 800], sizes: "(max-width: 767px) 50vw, 460px", alt: "Drink da casa servido no copo baixo", caption: "Drinks" },
      { img: "petiscos", widths: [400, 800], sizes: "(max-width: 767px) 50vw, 460px", alt: "Porções de camarão empanado e bolinhos com molho", caption: "Petiscos" },
    ],
  },

  espaco: {
    kicker: "Vila Jardim dos Namorados",
    title: "Conheça o espaço",
    text: "Salão amplo e coberto, palco para a mesa de samba e um letreiro que já anuncia a noite.",
    photos: [
      { img: "espaco-salao", widths: [480, 960], sizes: "(max-width: 767px) 92vw, (max-width: 1239px) 38vw, 470px", alt: "Salão cheio sob o varal de luzes, com as bandeiras da casa penduradas", caption: "Salão" },
      { img: "espaco-palco", widths: [400, 720], sizes: "(max-width: 767px) 46vw, (max-width: 1239px) 29vw, 360px", alt: "Palco verde com o letreiro Império do Samba e a mesa de samba tocando", caption: "Palco" },
      { img: "espaco-entrada", widths: [400, 720], sizes: "(max-width: 767px) 46vw, (max-width: 1239px) 29vw, 360px", alt: "Letreiro luminoso Império do Samba sobre a entrada", caption: "Entrada" },
    ],
  },

  // Fotos, chamada e botão da galeria na tela inicial (lado direito do hero).
  convite: {
    title: "Venha pro melhor samba da cidade",
    cta: "Conheça nossa galeria",
    photos: [
      { img: "convite-samba", widths: [640, 1280], w: 1280, h: 853, sizes: "(max-width: 767px) 92vw, 480px", alt: "Músicos da mesa de samba tocando ao vivo no palco" },
      { img: "convite-modelo", widths: [480, 900], w: 900, h: 1353, sizes: "(max-width: 767px) 46vw, 240px", alt: "Cliente sorrindo com um drink na mão, em frente ao painel Império" },
      { img: "convite-chope", widths: [480, 900], w: 900, h: 1350, sizes: "(max-width: 767px) 46vw, 240px", alt: "Copo de chope Império gelado no balcão, com as luzes da casa ao fundo" },
    ],
  },

  // Página /galeria. As fotos ficam em src/content/galeria.ts.
  galeria: {
    kicker: "Galeria",
    title: "O Império em fotos",
    text: "Shows, gente bonita, cerveja gelada e petisco de boteco. Um pouco do que rola na casa de sexta a domingo.",
  },

  social: {
    kicker: "Acompanha a gente",
    title: "O Império nas redes",
    text: "A agenda de cada fim de semana e os melhores momentos da mesa de samba. Tudo primeiro no Instagram.",
  },

  // Mídias do celular, na ordem em que aparecem. `type: "image"` fica alguns segundos na tela.
  reels: [
    {
      type: "video",
      src: "/assets/reels/destaque-01.mp4",
      alt: "Vídeo do Império do Samba",
      caption: "De sexta a domingo tem mesa de samba no Império.",
    },
    {
      type: "image",
      src: "/assets/opt/destaque-02-720.webp",
      alt: "Cliente mandando um beijo para a câmera em frente ao painel Império",
      caption: "Quem vem, volta. Marca a galera e cola com a gente.",
    },
    {
      type: "video",
      src: "/assets/reels/destaque-03.mp4",
      alt: "Vídeo do Império do Samba",
      caption: "Cerveja gelada e samba bom, a partir das 17h30.",
    },
  ],

  legal: "Beba com moderação. Venda de bebidas alcoólicas proibida para menores de 18 anos.",
  copyright: "© 2026 Império do Samba",

  meta: {
    title: "Império do Samba · Sua casa de samba favorita em Salvador",
    description:
      "Mesa de samba, cerveja Império gelada e petiscos de boteco na Vila Jardim dos Namorados, em Salvador. Sexta a domingo, a partir das 17h30.",
  },
} as const;

export type Reel = (typeof site.reels)[number];
