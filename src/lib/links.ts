import { site } from "@/content/site";

function wa(text: string) {
  return `https://wa.me/${site.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

// "Confirmar presença" / "Garanta sua presença": conversa com a mensagem de confirmação.
export function confirmHref() {
  return wa(site.whatsapp.confirmMessage);
}

export function whatsappHref() {
  return wa(site.whatsapp.message);
}

export function external(url: string) {
  return /^https?:\/\//.test(url) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
