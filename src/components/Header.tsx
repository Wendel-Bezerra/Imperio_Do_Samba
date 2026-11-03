"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { confirmHref, external } from "@/lib/links";
import { CloseIcon, MenuIcon } from "./icons";

function subscribeScroll(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

export default function Header() {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 8,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    closeRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  const confirm = confirmHref();

  return (
    <>
      <header className="site-header" data-scrolled={scrolled}>
        <div className="container header-inner">
          <a href="#soft-open" aria-label="Império do Samba — início" className="header-logo">
            <img src="/assets/opt/logo-creme-280.webp" alt="Império do Samba" width={132} height={48} />
          </a>
          <nav aria-label="Principal" className="header-nav">
            {site.nav.map((l) => (
              <a key={l.href} className="navlink" href={l.href}>
                {l.label}
              </a>
            ))}
            <a className="btn btn--gold btn--sm" href={confirm} {...external(confirm)}>
              Confirmar presença
            </a>
          </nav>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-open={open}
        inert={!open}
      >
        <div className="mobile-menu__top">
          <img src="/assets/opt/logo-creme-280.webp" alt="" width={93} height={34} />
          <button
            ref={closeRef}
            type="button"
            className="menu-toggle"
            style={{ display: "flex" }}
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <ul className="mobile-menu__links">
          {site.nav.map((l, i) => (
            <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn btn--gold mobile-menu__cta"
          style={{ "--i": site.nav.length } as React.CSSProperties}
          href={confirm}
          {...external(confirm)}
          onClick={() => setOpen(false)}
        >
          Confirmar presença
        </a>
      </div>
    </>
  );
}
