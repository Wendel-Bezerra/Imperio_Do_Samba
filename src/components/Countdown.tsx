"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";

const START = new Date(site.event.start).getTime();
const END = new Date(site.event.end).getTime();
const SESSIONS = site.event.sessions.map((s) => ({
  ...s,
  open: new Date(s.open).getTime(),
  close: new Date(s.close).getTime(),
}));

// Relógio em segundos: o snapshot só muda uma vez por segundo.
function subscribe(cb: () => void) {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
}
const getNow = () => Math.floor(Date.now() / 1000);
const getServerNow = () => null;

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ style }: { style?: React.CSSProperties }) {
  const nowS = useSyncExternalStore(subscribe, getNow, getServerNow);
  const now = nowS === null ? null : nowS * 1000;

  if (now !== null && now >= END) return null;

  if (now !== null && now >= START) {
    const current = SESSIONS.find((s) => now >= s.open && now < s.close);
    const next = SESSIONS.find((s) => now < s.open);
    return (
      <div className="countdown countdown--live enter" style={style} role="status">
        <span className="live-dot" aria-hidden="true" />
        <div>
          <div className="countdown__live-title">{current ? "Rolando agora" : "É hoje!"}</div>
          <div className="countdown__live-sub">
            {current ? `Portas abertas até ${current.closes}` : next ? `Portas abrem às ${next.opens}` : ""}
          </div>
        </div>
      </div>
    );
  }

  let units: [string, string][];
  if (now === null) {
    units = [["--", "dias"], ["--", "horas"], ["--", "min"], ["--", "seg"]];
  } else {
    const s = Math.max(0, Math.floor((START - now) / 1000));
    units = [
      [pad(Math.floor(s / 86400)), "dias"],
      [pad(Math.floor((s % 86400) / 3600)), "horas"],
      [pad(Math.floor((s % 3600) / 60)), "min"],
      [pad(s % 60), "seg"],
    ];
  }

  return (
    <div className="countdown enter" style={style} role="timer" aria-label="Contagem regressiva para a inauguração">
      <span className="countdown__label">Faltam</span>
      {units.map(([n, u]) => (
        <div key={u} className="countdown__box">
          <div className="countdown__num">{n}</div>
          <div className="countdown__unit">{u}</div>
        </div>
      ))}
    </div>
  );
}
