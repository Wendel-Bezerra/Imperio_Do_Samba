import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LineUp from "@/components/LineUp";
import Marquee from "@/components/Marquee";
import ImperioBlock from "@/components/ImperioBlock";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="atracoes" className="section-creme">
          <img className="deco deco--creme-a" data-parallax="0.08" src="/assets/opt/copo-recorte-320.webp" alt="" aria-hidden="true" loading="lazy" />
          <img className="deco deco--creme-b" data-parallax="0.14" src="/assets/opt/copo-recorte-320.webp" alt="" aria-hidden="true" loading="lazy" />
          <LineUp />
          <Marquee />
          <ImperioBlock />
          <div className="calcadao calcadao--flip calcadao--creme" aria-hidden="true" />
        </section>

        <Social />
      </main>
      <Footer />
      <Parallax />
    </>
  );
}
