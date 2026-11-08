"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { CloseIcon } from "./icons";

export default function Sobre() {
  const { sobre } = site;
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="sobre-toggle"
        aria-label={sobre.title}
        title={sobre.title}
        onClick={() => dialogRef.current?.showModal()}
      >
        <span aria-hidden="true">!</span>
      </button>

      <dialog
        ref={dialogRef}
        className="sobre"
        aria-labelledby="sobre-titulo"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="sobre__panel">
          <div className="sobre__top">
            <h2 id="sobre-titulo" className="sobre__title">{sobre.title}</h2>
            <button
              type="button"
              className="menu-toggle"
              style={{ display: "flex" }}
              aria-label="Fechar"
              onClick={() => dialogRef.current?.close()}
            >
              <CloseIcon />
            </button>
          </div>
          {sobre.items.map((item) => (
            <div key={item.title} className="sobre__item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </dialog>
    </>
  );
}
