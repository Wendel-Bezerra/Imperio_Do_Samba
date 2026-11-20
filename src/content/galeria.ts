// Fotos da página /galeria, na ordem em que aparecem.
// Para incluir uma foto: coloque o JPG em public/assets/fotos/galeria/, rode `npm run images`
// e adicione a linha aqui (id = nome do arquivo sem extensão; w/h = tamanho do JPG).

export const categorias = [
  { id: "todas", label: "Todas" },
  { id: "shows", label: "Shows" },
  { id: "pessoas", label: "Galera" },
  { id: "comidas", label: "Comidas e bebidas" },
] as const;

export type Categoria = "shows" | "pessoas" | "comidas";

export const galeria: { id: string; categoria: Categoria; w: number; h: number; alt: string }[] = [
  { id: "shows-0604", categoria: "shows", w: 1600, h: 1067, alt: "Público dançando com os braços para o alto durante o show" },
  { id: "pessoas-0009", categoria: "pessoas", w: 1600, h: 2400, alt: "Cliente de vestido amarelo com um drink na mão" },
  { id: "comidas-0041", categoria: "comidas", w: 1600, h: 2400, alt: "Drink verde servido no copo baixo" },
  { id: "shows-0699", categoria: "shows", w: 1600, h: 1078, alt: "Banda no palco verde, sob o letreiro Império do Samba" },
  { id: "pessoas-0029", categoria: "pessoas", w: 1600, h: 2400, alt: "Cliente sorrindo em frente ao painel Império" },
  { id: "comidas-0115", categoria: "comidas", w: 1600, h: 2299, alt: "Cliente brindando com um drink vermelho" },
  { id: "shows-0766", categoria: "shows", w: 1600, h: 2400, alt: "Mulher cantando com o braço erguido no meio do público" },
  { id: "pessoas-0105", categoria: "pessoas", w: 1600, h: 2211, alt: "Cliente sorrindo com um drink na mão" },
  { id: "comidas-2821", categoria: "comidas", w: 1600, h: 2400, alt: "Garrafa de cerveja Império Ultra na mão" },
  { id: "shows-0782", categoria: "shows", w: 1600, h: 1067, alt: "Cantor no meio da galera, com o público vibrando em volta" },
  { id: "pessoas-5587", categoria: "pessoas", w: 1600, h: 2310, alt: "Casal rindo em frente ao painel Império" },
  { id: "comidas-2963", categoria: "comidas", w: 1600, h: 2386, alt: "Três porções de bolinhos com molho" },
  { id: "shows-0880", categoria: "shows", w: 1600, h: 1015, alt: "Público dançando em frente ao palco" },
  { id: "pessoas-6199", categoria: "pessoas", w: 1600, h: 2308, alt: "Cliente com uma garrafa de cerveja Império" },
  { id: "comidas-3038", categoria: "comidas", w: 1600, h: 2261, alt: "Porção de empanados com molho" },
  { id: "shows-5642", categoria: "shows", w: 1600, h: 1067, alt: "Salão cheio sob o varal de luzes e as bandeiras da casa" },
  { id: "pessoas-6378", categoria: "pessoas", w: 1600, h: 2119, alt: "Cliente de camisa amarela sorrindo em frente ao painel Império" },
  { id: "comidas-6444", categoria: "comidas", w: 1600, h: 2271, alt: "Copo de chope Império gelado" },
  { id: "shows-5924", categoria: "shows", w: 1600, h: 2576, alt: "Entrada da casa à noite, com o letreiro Império do Samba aceso" },
  { id: "pessoas-8638", categoria: "pessoas", w: 1600, h: 2481, alt: "Cliente com uma cerveja Império ao entardecer, com o mar ao fundo" },
  { id: "comidas-8520", categoria: "comidas", w: 1600, h: 2279, alt: "Garrafas de Império Lager no gelo" },
  { id: "shows-6689", categoria: "shows", w: 1600, h: 1067, alt: "Cantor de boné no palco, com o letreiro Império ao fundo" },
  { id: "pessoas-9742", categoria: "pessoas", w: 1600, h: 1126, alt: "Grupo de amigos posando no salão" },
  { id: "comidas-9027", categoria: "comidas", w: 1600, h: 1030, alt: "Espetinhos servidos com molhos" },
  { id: "shows-6921", categoria: "shows", w: 1600, h: 1067, alt: "Salão lotado, com o público dançando" },
  { id: "pessoas-9981", categoria: "pessoas", w: 1600, h: 1067, alt: "Quatro amigas posando em frente ao painel Império" },
  { id: "comidas-9058", categoria: "comidas", w: 1600, h: 2400, alt: "Balde de gelo iluminado com cervejas" },
  { id: "shows-8751", categoria: "shows", w: 1600, h: 1030, alt: "Percussionistas da mesa de samba tocando" },
  { id: "comidas-9288", categoria: "comidas", w: 1600, h: 2373, alt: "Camarões empanados com molho" },
  { id: "shows-9884", categoria: "shows", w: 1600, h: 1103, alt: "Mesa de samba no palco, vista da plateia" },
];
