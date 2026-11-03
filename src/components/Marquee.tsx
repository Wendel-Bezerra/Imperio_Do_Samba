import { site } from "@/content/site";

// Duas cópias idênticas; o trilho anda -50% e emenda sem pulo.
export default function Marquee() {
  const copy = (
    <div className="marquee__copy">
      {site.marquee.flatMap((word) => [<span key={word}>{word}</span>, <span key={`${word}-sep`}>✦</span>])}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {copy}
        {copy}
      </div>
    </div>
  );
}
