import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ImperioBlock from "@/components/ImperioBlock";
import Espaco from "@/components/Espaco";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="casa" className="section-creme">
          <Marquee />
          <ImperioBlock />
          <Espaco />
          <div className="calcadao calcadao--flip calcadao--creme" aria-hidden="true" />
        </section>

        <Social />
      </main>
      <Footer />
      <Parallax />
    </>
  );
}
