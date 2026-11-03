// Variantes WebP geradas por scripts/optimize-images.mjs.
export function opt(name: string, widths: number[]) {
  return {
    src: `/assets/opt/${name}-${widths[widths.length - 1]}.webp`,
    srcSet: widths.map((w) => `/assets/opt/${name}-${w}.webp ${w}w`).join(", "),
  };
}
