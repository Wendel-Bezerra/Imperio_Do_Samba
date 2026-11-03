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
  ["artistas/renanzinho.webp", "renanzinho", [480, 640, 800, 1100], 70],
  ["artistas/gelasamba.jpg", "gelasamba", [335]],
  // Boma: recorte do rosto aos joelhos (a foto original é de corpo inteiro).
  ["artistas/boma.jpg", "boma", [366], 80, { left: 0, top: 40, width: 366, height: 400 }],
  ["mockups/copo_cerveja.jpg", "copo-cerveja", [300, 520, 900]],
  ["mockups/copo_drink.jpg", "copo-drink", [400, 800]],
  ["mockups/petiscos.jpg", "petiscos", [400, 800]],
  ["fundos/copo_recorte.webp", "copo-recorte", [320]],
  ["fundos/bokeh.webp", "bokeh", [500, 800, 1600], 45],
  ["fundos/bar_noite.jpg", "bar-noite", [800, 1200]],
  ["fundos/bar_ambiente.jpg", "bar-ambiente", [800]],
  ...[1, 2, 3, 4].map((n) => [`reels/reel-0${n}-poster.jpg`, `reel-0${n}-poster`, [540]]),
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
