# NexaLab Site

Landing page de conversão bilíngue (PT-BR + EN) da **NexaLab** — soluções digitais com IA.

Built with: Astro · Tailwind CSS v4 · TypeScript strict · i18n nativo · Formspree · Cloudflare Pages.

---

## Rodando local

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Build

```bash
npm run build
# Saída em dist/
```

## Preview do build

```bash
npm run preview
```

---

## Configurar Formspree (formulário de contato)

1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo form e copie o ID (ex: `xpwzabcd`)
3. Substitua `YOUR_FORM_ID` em `src/components/ContactForm.astro`:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. O formulário redireciona pro `/obrigado` após envio

---

## Deploy no Cloudflare Pages

### Opção A — via Dashboard (recomendado)

1. Suba o código pro GitHub
2. Vá em [dash.cloudflare.com](https://dash.cloudflare.com) → Pages → Create project
3. Conecte ao repositório GitHub
4. Configure:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Clique em Save and Deploy

### Opção B — via Wrangler CLI

```bash
npm install -g wrangler
wrangler login
npm run deploy
```

---

## Apontar domínio nexalab.dev

1. No Cloudflare Pages → seu projeto → Custom domains
2. Adicione `nexalab.dev`
3. No DNS do Cloudflare, o CNAME é criado automaticamente

---

## Editar conteúdo

Todo o texto do site está em:

- **PT-BR:** `src/i18n/pt.ts`
- **EN:** `src/i18n/en.ts`

Edite e dê rebuild. Sem CMS, sem complicação.

---

## Estrutura

```
src/
├── components/       # Todos os componentes Astro
│   └── ui/           # Badge, Card, GradientButton
├── i18n/             # pt.ts, en.ts, utils.ts
├── layouts/          # BaseLayout.astro (meta, OG, fontes)
├── pages/            # index.astro (PT) + en/index.astro (EN)
├── scripts/          # reveal.ts (IntersectionObserver) + whatsapp-mask.ts
└── styles/           # global.css (variáveis, Tailwind)
public/
├── logo-full.svg     # Logo completo (emblema + wordmark)
├── logo-mark.svg     # Só o emblema
├── favicon.svg
└── robots.txt
```

## Notas de decisão

- **Logos em SVG vetorial** criados inline (não conversão dos PNGs originais) para escala perfeita e suporte dark mode
- **OG image:** placeholder — gere manualmente ou configure Satori/sharp em build-time
- **Animações:** CSS transitions + IntersectionObserver puro (sem libs externas)
- **Formulário:** Formspree — substitua `YOUR_FORM_ID` em `ContactForm.astro` antes de publicar
