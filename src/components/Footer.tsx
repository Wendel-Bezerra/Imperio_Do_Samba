import { site } from "@/content/site";
import { whatsappHref, external } from "@/lib/links";

export default function Footer() {
  const { event } = site;
  const whatsapp = whatsappHref();

  return (
    <footer className="footer">
      <div className="calcadao calcadao--footer" aria-hidden="true" />
      <div className="container footer__main">
        <img className="footer__logo" src="/assets/opt/logo-ouro-480.webp" alt={site.name} width={240} height={87} loading="lazy" />
        <div className="footer__col">
          <span className="footer__label">Onde</span>
          <span>{event.place}</span>
          <span>{event.city} – BA</span>
        </div>
        <div className="footer__col">
          <span className="footer__label">Soft Open · {event.datesShort}</span>
          {event.hours.map((h) => (
            <span key={h.days}>
              {h.days} · {h.time}
            </span>
          ))}
        </div>
        <div className="footer__col">
          <span className="footer__label">Redes</span>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={whatsapp} {...external(whatsapp)}>
            WhatsApp
          </a>
        </div>
      </div>
      <div className="container">
        <div className="footer__legal">
          <span>{site.legal}</span>
          <span>{site.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
