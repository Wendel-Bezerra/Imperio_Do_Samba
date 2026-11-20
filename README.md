# Império do Samba · Site

One-page estático (Next.js 16 + `output: "export"`) para https://imperiodosamba.com.br.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera out/ (pasta estática para Vercel/qualquer host)
```

## Onde editar

Todo texto, horário e link fica em `src/content/site.ts`.

- **Conversão via WhatsApp:** todos os botões ("Chama no WhatsApp", redes e rodapé) abrem a conversa com `whatsapp.message`. O texto do botão é `whatsapp.cta`.
- **Imagens:** o site usa as variantes WebP de `public/assets/opt/`. As fotos reais da casa ficam em `public/assets/fotos/`. Trocou um asset original? Rode `npm run images`.
- **Celular do Instagram:** as mídias ficam em `public/assets/reels/` e a ordem é a da lista `reels` (`type: "video"` ou `type: "image"`).
- **Prévia de compartilhamento:** `public/og.png` (1200×630), gerada por `npm run og`.
- **Galeria (`/galeria`):** as fotos ficam em `public/assets/fotos/galeria/` e a lista (ordem, categoria e descrição) em `src/content/galeria.ts`. Foto nova: coloque o JPG na pasta, rode `npm run images` e adicione a linha na lista.
