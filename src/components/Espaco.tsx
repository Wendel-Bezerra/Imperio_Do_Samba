import { site } from "@/content/site";
import { opt } from "@/lib/img";

export default function Espaco() {
  const { espaco } = site;

  return (
    <div id="espaco" className="container espaco">
      <div className="lineup__head">
        <span className="kicker">{espaco.kicker}</span>
        <h2 className="h2">{espaco.title}</h2>
        <p className="lead">{espaco.text}</p>
      </div>

      <div className="espaco__grid">
        {espaco.photos.map((p) => (
          <figure key={p.caption}>
            <img {...opt(p.img, [...p.widths])} sizes={p.sizes} alt={p.alt} loading="lazy" />
            <figcaption>{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
