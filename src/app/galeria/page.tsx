import type { Metadata } from "next";
import { site } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Galeria from "@/components/Galeria";

export const metadata: Metadata = {
  title: `Galeria · ${site.name}`,
  description: site.galeria.text,
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  const { galeria } = site;

  return (
    <>
      <Header />
      <main className="galeria">
        <div className="container">
          <div className="galeria__head">
            <span className="kicker">{galeria.kicker}</span>
            <h1 className="h2">{galeria.title}</h1>
            <p className="lead">{galeria.text}</p>
          </div>
          <Galeria />
        </div>
      </main>
      <Footer />
    </>
  );
}
