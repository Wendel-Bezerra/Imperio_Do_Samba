# Império do Samba · Site do Soft Open

One-page estático (Next.js 16 + `output: "export"`) para https://imperiodosamba.com.br. Spec: `../IMPERIO-DO-SAMBA-SPEC (1).md`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera out/ (pasta estática para Vercel/qualquer host)
```

## Onde editar

Todo texto, data e link fica em `src/content/site.ts`.

- **Conversão via WhatsApp:** "Confirmar presença" e "Garanta sua presença" abrem o WhatsApp com `whatsapp.confirmMessage`; o botão de WhatsApp das redes e do rodapé usa `whatsapp.message`.
- **Imagens:** o site usa as variantes WebP de `public/assets/opt/`. Trocou um asset original? Rode `npm run images`.
- **Prévia de compartilhamento:** `public/og.png` (1200×630).
