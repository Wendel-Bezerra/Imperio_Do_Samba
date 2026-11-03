import { site } from "@/content/site";
import { opt } from "@/lib/img";

export default function ImperioBlock() {
  const { imperio } = site;

  return (
    <div id="imperio" className="container imperio">
      <div className="imperio__text">
        <img className="imperio__seal" src="/assets/opt/selo-240.webp" alt="Selo Império do Samba" width={120} height={118} loading="lazy" />
        <span className="kicker">{imperio.kicker}</span>
        <h2 className="h2">{imperio.title}</h2>
        <p className="lead">{imperio.text}</p>
        <ul className="chips">
          {imperio.chips.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="gallery">
        {imperio.gallery.map((g) => (
          <figure key={g.caption}>
            <img {...opt(g.img, [...g.widths])} sizes={g.sizes} alt={g.alt} loading="lazy" />
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
