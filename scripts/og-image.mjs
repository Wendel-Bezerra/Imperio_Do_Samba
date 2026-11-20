// Gera public/og.png (1200×630), a imagem de compartilhamento. Rodar com `npm run og`.
import sharp from "sharp";

const W = 1200;
const H = 630;

const fundo = await sharp("public/assets/fotos/publico.jpg").resize(W, H, { fit: "cover", position: "top" }).toBuffer();
const logo = await sharp("public/assets/logos/logo_creme.png").resize({ width: 560 }).toBuffer();
const { height: logoH } = await sharp(logo).metadata();

const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d2318" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#0d2318" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="28" fill="none" stroke="#c79e58" stroke-width="2"/>
  <text x="${W / 2}" y="470" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="50" fill="#c79e58">Sua casa de samba favorita em Salvador</text>
  <text x="${W / 2}" y="540" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="24" letter-spacing="6" fill="#eddec1">SEXTA A DOMINGO · A PARTIR DAS 17H30</text>
</svg>`);

await sharp(fundo)
  .composite([
    { input: overlay },
    { input: logo, left: Math.round((W - 560) / 2), top: Math.round(400 - logoH - 20) },
  ])
  .png({ compressionLevel: 9, palette: true, quality: 90 })
  .toFile("public/og.png");
console.log("public/og.png");
