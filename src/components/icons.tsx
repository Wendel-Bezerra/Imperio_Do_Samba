// Ícones SVG de traço, todos decorativos (aria-hidden).
type P = { size?: number; color?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
});

export function PinIcon({ size = 18, color = "var(--ouro)" }: P) {
  return (
    <svg {...base(size)} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ArrowIcon({ size = 20 }: P) {
  return (
    <svg {...base(size)} className="btn-arrow" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon({ dir, size = 18 }: P & { dir: "left" | "right" }) {
  return (
    <svg {...base(size)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: P) {
  return (
    <svg {...base(size)} stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }: P) {
  return (
    <svg {...base(size)} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
    </svg>
  );
}

export function MenuIcon({ size = 20 }: P) {
  return (
    <svg {...base(size)} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ size = 20 }: P) {
  return (
    <svg {...base(size)} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function CameraIcon({ size = 22 }: P) {
  return (
    <svg {...base(size)} stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function HeartIcon() {
  return (
    <svg {...base(26)} stroke="#fff" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </svg>
  );
}

export function CommentIcon() {
  return (
    <svg {...base(26)} stroke="#fff" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M20 12a8 8 0 1 1-3.2-6.4L20 4.5l-.8 3.6A8 8 0 0 1 20 12z" />
    </svg>
  );
}

export function SendIcon() {
  return (
    <svg {...base(26)} stroke="#fff" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M21 4L3 11l7 2.5L12.5 21z" />
      <path d="M10 13.5L21 4" />
    </svg>
  );
}
