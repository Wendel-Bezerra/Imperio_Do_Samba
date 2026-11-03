import { site } from "@/content/site";
import { whatsappHref, external } from "@/lib/links";
import ReelsPhone from "./ReelsPhone";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export default function Social() {
  const { social, lineup } = site;
  const whatsapp = whatsappHref();

  return (
    <section id="redes" className="redes">
      <img className="deco deco--desktop" data-parallax="0.1" src="/assets/opt/copo-recorte-320.webp" alt="" aria-hidden="true" loading="lazy"
        style={{ left: "6%", top: 60, width: 200, opacity: 0.16, filter: "blur(8px)", rotate: "-10deg" }} />
      <img className="deco deco--desktop" data-parallax="0.18" src="/assets/opt/copo-recorte-320.webp" alt="" aria-hidden="true" loading="lazy"
        style={{ right: -60, bottom: 40, width: 320, opacity: 0.18, filter: "blur(6px)", rotate: "9deg" }} />

      <div className="container redes__grid">
        <div className="redes__intro">
          <span className="kicker">{social.kicker}</span>
          <h2 className="h2">{social.title}</h2>
          <p className="lead">{social.text}</p>
        </div>

        <ReelsPhone />

        <div className="redes__actions">
          <div className="redes__buttons">
            <a className="btn btn--gold" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />@{site.instagram.handle}
            </a>
            <a className="btn btn--ghost" href={whatsapp} {...external(whatsapp)}>
              <WhatsAppIcon />
              WhatsApp {site.whatsapp.display}
            </a>
          </div>
          <div className="redes__who">
            <span className="redes__who-label">Quem faz a sexta</span>
            <div className="redes__who-links">
              <a href="#atracoes">{lineup.headliner.name}</a>
              {lineup.guests.map((g) => (
                <a key={g.handle} href={g.url} target="_blank" rel="noopener noreferrer">
                  @{g.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
