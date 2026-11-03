import { site } from "@/content/site";
import { opt } from "@/lib/img";
import { ClockIcon } from "./icons";

export default function LineUp() {
  const { lineup } = site;
  const { headliner } = lineup;

  return (
    <div className="container lineup">
      <div className="lineup__head">
        <span className="kicker">
          <span className="kicker-full">{lineup.kicker}</span>
          <span className="kicker-short">{lineup.kickerShort}</span>
        </span>
        <h2 className="h2">{lineup.title}</h2>
        <p className="lead">{lineup.text}</p>
      </div>

      <div className="lineup__cards">
        <article className="headliner">
          <div className="headliner__bar" aria-hidden="true" />
          <img className="headliner__bokeh" src="/assets/opt/bokeh-800.webp" alt="" aria-hidden="true" loading="lazy" />
          <div className="headliner__veil" aria-hidden="true" />
          <img
            className="headliner__img"
            {...opt("renanzinho", [480, 800])}
            sizes="(max-width: 767px) 260px, 360px"
            alt={headliner.name}
            width={1100}
            height={1447}
            loading="lazy"
          />
          <div className="headliner__fade" aria-hidden="true" />
          <div className="headliner__body">
            <span className="chip-gold">Atração principal</span>
            <h3>{headliner.name}</h3>
            <div className="headliner__meta">
              <p className="headliner__extra">{headliner.extra}</p>
              {headliner.time !== "" && (
                <span className="time">
                  <ClockIcon />
                  {headliner.time}
                </span>
              )}
            </div>
          </div>
        </article>

        <div className="guests">
          {lineup.guests.map((g) => (
            <article key={g.name} className={`guest guest--${g.tone}`}>
              <img src={g.img} alt={g.alt} width={180} height={218} loading="lazy" style={{ objectPosition: g.position }} />
              <div className="guest__body">
                <span className="guest__role">{g.role}</span>
                <h3>{g.name}</h3>
                <a href={g.url} target="_blank" rel="noopener noreferrer">
                  @{g.handle}
                </a>
                {g.time !== "" && <span className="guest__time">{g.time}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
