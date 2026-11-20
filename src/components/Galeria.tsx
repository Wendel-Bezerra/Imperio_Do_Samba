"use client";

import { useEffect, useRef, useState } from "react";
import { galeria, categorias, type Categoria } from "@/content/galeria";
import { ChevronIcon, CloseIcon } from "./icons";

const thumb = (id: string) => `/assets/opt/galeria-${id}-480.webp`;
const full = (id: string) => `/assets/opt/galeria-${id}-1400.webp`;

export default function Galeria() {
  const [filtro, setFiltro] = useState<Categoria | "todas">("todas");
  // Índice da foto aberta dentro da lista filtrada.
  const [aberta, setAberta] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const fotos = filtro === "todas" ? galeria : galeria.filter((f) => f.categoria === filtro);
  const total = fotos.length;
  const foto = aberta === null ? null : fotos[aberta];

  const passo = (d: number) => setAberta((i) => (i === null ? i : (i + d + total) % total));

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (aberta !== null && !dlg.open) dlg.showModal();
    if (aberta === null && dlg.open) dlg.close();
  }, [aberta]);

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setAberta((i) => (i === null ? i : (i + 1) % total));
      if (e.key === "ArrowLeft") setAberta((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberta, total]);

  return (
    <>
      <div className="galeria__filtros" role="group" aria-label="Filtrar fotos">
        {categorias.map((c) => (
          <button
            key={c.id}
            type="button"
            className="galeria__chip"
            aria-pressed={filtro === c.id}
            onClick={() => setFiltro(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="galeria__grid">
        {fotos.map((f, i) => (
          <button key={f.id} type="button" className="galeria__item" aria-label={`Ampliar: ${f.alt}`} onClick={() => setAberta(i)}>
            <img
              src={thumb(f.id)}
              srcSet={`${thumb(f.id)} 480w, ${full(f.id)} 1400w`}
              sizes="(max-width: 767px) 46vw, (max-width: 1239px) 31vw, 290px"
              alt={f.alt}
              width={f.w}
              height={f.h}
              loading={i < 4 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Foto ampliada"
        onClose={() => setAberta(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setAberta(null);
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) passo(dx < 0 ? 1 : -1);
        }}
      >
        {foto && (
          <>
            <img key={foto.id} className="lightbox__img" src={full(foto.id)} alt={foto.alt} width={foto.w} height={foto.h} />
            <div className="lightbox__bar">
              <button type="button" className="round-btn" aria-label="Foto anterior" onClick={() => passo(-1)}>
                <ChevronIcon dir="left" />
              </button>
              <span className="lightbox__count" aria-live="polite">
                {(aberta ?? 0) + 1} / {total}
              </span>
              <button type="button" className="round-btn" aria-label="Próxima foto" onClick={() => passo(1)}>
                <ChevronIcon dir="right" />
              </button>
            </div>
            <button type="button" className="round-btn lightbox__close" aria-label="Fechar" onClick={() => setAberta(null)}>
              <CloseIcon />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
