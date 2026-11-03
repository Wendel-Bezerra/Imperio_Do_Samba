"use client";

import { useEffect } from "react";

// Parallax leve nos copos desfocados ([data-parallax="fator"]).
// Só em telas largas com ponteiro fino e sem reduced-motion.
export default function Parallax() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1100px) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      for (const el of els) {
        const factor = Number(el.dataset.parallax);
        const section = el.parentElement!;
        const offset = section.getBoundingClientRect().top;
        el.style.transform = `translate3d(0, ${(-offset * factor).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const apply = () => {
      if (mq.matches) {
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      } else {
        window.removeEventListener("scroll", onScroll);
        els.forEach((el) => (el.style.transform = ""));
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
