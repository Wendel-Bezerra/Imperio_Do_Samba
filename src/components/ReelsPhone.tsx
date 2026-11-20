"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { CameraIcon, ChevronIcon, CommentIcon, HeartIcon, SendIcon } from "./icons";

const reels = site.reels;
// Tempo de tela das fotos, entre um vídeo e outro.
const IMAGE_MS = 5000;

function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

export default function ReelsPhone() {
  const [idx, setIdx] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [inView, setInView] = useState(false);
  // As mídias só entram quando o celular se aproxima da tela.
  const [near, setNear] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const reel = reels[idx];
  const isVideo = reel.type === "video";

  // Só toca quando o celular está na tela (poupa dados no 4G).
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    const nearIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          nearIo.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    nearIo.observe(el);
    return () => {
      io.disconnect();
      nearIo.disconnect();
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // O React não aplica `muted` como atributo; sem isso o autoplay falha no iOS.
    v.muted = true;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [idx, inView, near]);

  // Fotos avançam sozinhas; com movimento reduzido ficam paradas até o usuário trocar.
  useEffect(() => {
    if (isVideo || !inView || reduced || reels.length < 2) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % reels.length), IMAGE_MS);
    return () => clearTimeout(t);
  }, [idx, isVideo, inView, reduced]);

  const go = (next: number) => {
    const n = (next + reels.length) % reels.length;
    if (n === idx) return;
    setSwitching(reels[n].type === "video");
    setIdx(n);
  };

  return (
    <div className="redes__phone">
      <div className="phone">
        <div className="phone__screen" ref={screenRef}>
          {isVideo ? (
            <video
              key={reel.src}
              ref={videoRef}
              className="phone__video"
              data-switching={switching}
              src={near ? reel.src : undefined}
              aria-label={reel.alt}
              muted
              playsInline
              loop={reduced || reels.length < 2}
              preload="metadata"
              onLoadedData={() => setSwitching(false)}
              onEnded={() => go(idx + 1)}
            />
          ) : (
            <img key={reel.src} className="phone__video phone__photo" src={near ? reel.src : undefined} alt={reel.alt} />
          )}
          <div className="phone__shade" aria-hidden="true" />
          <div className="phone__island" aria-hidden="true" />
          <div className="phone__top" aria-hidden="true">
            <span>Reels</span>
            <CameraIcon />
          </div>
          <div className="phone__side" aria-hidden="true">
            <HeartIcon />
            <CommentIcon />
            <SendIcon />
          </div>
          <div className="phone__bottom">
            <div className="phone__profile">
              <span className="phone__avatar">
                <img src="/assets/opt/selo-96.webp" alt="" width={30} height={30} loading="lazy" />
              </span>
              <span className="phone__handle">{site.instagram.handle}</span>
              <span className="phone__follow" aria-hidden="true">Seguir</span>
            </div>
            <span key={idx} className="phone__caption">
              {reel.caption}
            </span>
            <span className="phone__audio" aria-hidden="true">♫ Império do Samba · áudio original</span>
          </div>
        </div>
      </div>

      {reels.length > 1 && (
        <div className="reels-controls">
          <button type="button" className="round-btn" aria-label="Anterior" onClick={() => go(idx - 1)}>
            <ChevronIcon dir="left" />
          </button>
          <div className="dots">
            {reels.map((r, i) => (
              <button
                key={r.src}
                type="button"
                className="dot"
                aria-label={`Destaque ${i + 1} de ${reels.length}`}
                aria-current={i === idx}
                onClick={() => go(i)}
              >
                <span />
              </button>
            ))}
          </div>
          <button type="button" className="round-btn" aria-label="Próximo" onClick={() => go(idx + 1)}>
            <ChevronIcon dir="right" />
          </button>
        </div>
      )}
      <a className="reels-note" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
        Direto do @{site.instagram.handle}
      </a>
    </div>
  );
}
