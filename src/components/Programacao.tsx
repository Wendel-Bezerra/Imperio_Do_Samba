import { site } from "@/content/site";
import { opt } from "@/lib/img";

export default function Programacao() {
  const { programacao } = site;

  return (
    <div className="container lineup">
      <div className="lineup__head">
        <span className="kicker">{programacao.kicker}</span>
        <h2 className="h2">{programacao.title}</h2>
        <p className="lead">{programacao.text}</p>
      </div>

      {/* No mobile vira carrossel horizontal; tabIndex deixa rolar pelo teclado. */}
      <ol className="days" tabIndex={0} aria-label="Programação por dia">
        {programacao.days.map((d) => (
          <li key={d.weekday} className="day">
            <img
              className="day__poster"
              {...opt(d.poster, [400, 720])}
              sizes="(max-width: 767px) 82vw, (max-width: 899px) 46vw, (max-width: 1239px) 31vw, 380px"
              alt={d.alt}
              width={1104}
              height={1440}
              loading="lazy"
            />
            <div className="day__body">
              <h3 className="day__when">
                {d.weekday}
                <span>{d.date}</span>
              </h3>
              <p className="day__time">A partir das {d.time}</p>
              <ul className="day__artists">
                {d.artists.map((a) => (
                  <li key={a.name}>
                    {a.handle !== "" ? (
                      <a href={`https://www.instagram.com/${a.handle}/`} target="_blank" rel="noopener noreferrer">
                        {a.name}
                      </a>
                    ) : (
                      a.name
                    )}
                  </li>
                ))}
                {d.special !== "" && (
                  <li className="day__special">
                    {d.special}
                    <span className="chip-gold">Participação especial</span>
                  </li>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
