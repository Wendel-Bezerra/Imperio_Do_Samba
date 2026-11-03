import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// Pesos estáticos (900 títulos, 700 números, 500 itálico) pesam bem menos que o
// variável com eixo opsz, que atrasava o LCP no 4G.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "900"],
});

// O itálico só aparece na frase do hero e em "e convidados": carrega sem preload.
const frauncesItalic = Fraunces({
  variable: "--font-fraunces-italic",
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  preload: false,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.meta.title,
  description: site.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.meta.title }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0D2318",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${frauncesItalic.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
