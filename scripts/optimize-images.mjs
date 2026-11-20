// Gera variantes WebP redimensionadas em public/assets/opt/.
// Quarto item opcional: qualidade WebP (padrão 78).
// Rodar de novo sempre que um asset original mudar: `npm run images`.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "public/assets";
const OUT = "public/assets/opt";

const jobs = [
  ["logos/logo_creme.png", "logo-creme", [280, 600, 1120], 72],
  ["logos/logo_ouro.png", "logo-ouro", [480]],
  ["logos/selo_verde.png", "selo", [96, 240]],
  // Fotos reais da casa (public/assets/fotos/).
  ["fotos/entrada.jpg", "hero-entrada", [480, 800, 994], 74],
  ["fotos/salao.jpg", "espaco-salao", [480, 960], 74],
  ["fotos/palco.jpg", "espaco-palco", [400, 720], 74],
  ["fotos/letreiro.jpg", "espaco-entrada", [400, 720], 74],
  ["fotos/chope.jpg", "copo-cerveja", [300, 520, 900]],
  // Drink e petiscos entram em quadros deitados: recorte na parte que interessa.
  ["fotos/drink.jpg", "copo-drink", [400, 800], 78, { left: 0, top: 760, width: 1067, height: 640 }],
  ["fotos/petiscos.jpg", "petiscos", [400, 800], 78, { left: 0, top: 640, width: 1132, height: 700 }],
  ["fundos/copo_recorte.webp", "copo-recorte", [320]],
  ["fundos/bokeh.webp", "bokeh", [500, 800, 1600], 45],
  ["fundos/bar_noite.jpg", "bar-noite", [800, 1200]],
  ["fundos/bar_ambiente.jpg", "bar-ambiente", [800]],
  // Foto que entra entre os vídeos do celular.
  ["reels/destaque-02.jpg", "destaque-02", [720], 74],
];

await mkdir(OUT, { recursive: true });
for (const [src, name, widths, quality = 78, crop] of jobs) {
  for (const w of widths) {
    const out = `${OUT}/${name}-${w}.webp`;
    let img = sharp(`${SRC}/${src}`);
    if (crop) img = img.extract(crop);
    const info = await img
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality, alphaQuality: quality < 60 ? 60 : 90, effort: 6 })
      .toFile(out);
    console.log(out, `${Math.round(info.size / 1024)}KB`);
  }
}
