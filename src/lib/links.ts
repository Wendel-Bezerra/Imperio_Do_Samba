import { site } from "@/content/site";

// Todos os botões de conversão abrem o WhatsApp com a mesma mensagem.
export function whatsappHref() {
  return `https://wa.me/${site.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(site.whatsapp.message)}`;
}

export function external(url: string) {
  return /^https?:\/\//.test(url) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
