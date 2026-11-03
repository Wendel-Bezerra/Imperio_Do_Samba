import { site } from "@/content/site";
import { confirmHref, external } from "@/lib/links";
import Countdown from "./Countdown";
import { opt } from "@/lib/img";
import { ArrowIcon, PinIcon } from "./icons";

const d = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Hero() {
  const { event, hero } = site;
  const confirm = confirmHref();

  return (
    <section id="soft-open" className="hero">
      <img className="deco deco--desktop" data-parallax="0.12" src="/assets/opt/copo-recorte-320.webp" alt="" aria-hidden="true" loading="lazy"
        style={{ right: -70, top: 110, width: 330, opacity: 0.2, filter: "blur(7px)", rotate: "10deg" }} />
      <img className="deco deco--desktop" data-parallax="0.2" src="/assets/opt/copo-recorte-320.webp" alt="" aria-hidden="true" loading="lazy"
        style={{ left: -110, bottom: 140, width: 300, opacity: 0.14, filter: "blur(9px)", rotate: "-12deg" }} />

      <div className="container hero__grid">
        <div className="hero__intro">
          <div className="hero__kicker enter" style={d(0)}>
            <span className="rule" aria-hidden="true" />
            <span>{event.label}</span>
            <span className="rule rule--end" aria-hidden="true" />
          </div>
          <h1>
            <img {...opt("logo-creme", [280, 600, 1120])} sizes="(max-width: 767px) 300px, 560px" alt={site.name} width={560} height={204} fetchPriority="high" />
          </h1>
          <p className="hero__tagline enter" style={d(1)}>{hero.tagline}</p>
        </div>

        <div className="hero__visual" aria-label="Atração principal: Renanzinho CBX">
          <div className="arc arc--tile azulejo-noite" aria-hidden="true" />
          <div className="arc arc--frame" aria-hidden="true" />
          <div className="arc arc--inner" aria-hidden="true" />
          <img className="deco hero__deco-m" src="/assets/opt/copo-recorte-320.webp" alt="" aria-hidden="true" loading="lazy" />
          <img
            className="hero__artist"
            {...opt("renanzinho", [480, 640, 800, 1100])}
            sizes="(max-width: 767px) 330px, 470px"
            alt="Renanzinho CBX, atração principal da sexta-feira"
            width={1100}
            height={1447}
            fetchPriority="high"
          />
          <img
            className="hero__glass enter enter--pop"
            style={d(4)}
            {...opt("copo-cerveja", [300, 520])}
            sizes="(max-width: 767px) 140px, 250px"
            alt="Copo de cerveja Império gelado"
            width={250}
            height={312}
          />
          <div className="hero__tag enter enter--pop" style={d(5)}>
            <small>Atração principal</small>
            <strong>RENANZINHO CBX</strong>
          </div>
        </div>

        <div className="hero__details">
          <p className="lead hero__text enter" style={d(2)}>{hero.text}</p>

          <div className="info-card enter" style={d(3)}>
            <div className="info-card__when">
              <span className="info-card__label">Soft Open</span>
              <span className="info-card__dates">{event.dates}</span>
              <span className="info-card__place">
                <PinIcon />
                {event.place} · {event.city}
              </span>
            </div>
            <div className="info-card__hours">
              {event.hours.map((h, i) => (
                <div key={h.days}>
                  {i > 0 && <div className="info-card__divider" aria-hidden="true" style={{ marginBottom: 10 }} />}
                  <div className="info-card__row">
                    <b>{h.days}</b>
                    <span>{h.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Countdown style={d(4)} />

          <div id="confirmar" className="hero__ctas enter" style={d(5)}>
            <a className="btn btn--gold" href={confirm} {...external(confirm)}>
              Garanta sua presença
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href="#atracoes">
              Ver atrações
            </a>
          </div>
        </div>
      </div>

      <div className="calcadao calcadao--hero" aria-hidden="true" />
    </section>
  );
}
