# Tropicalê Viagens e Turismo — PRD

## Problem statement (original)
> Act as a web designer and branding manager, create a website in portuguese as
> main language using the colours of this image [logo Tropicalê] as a base for
> the brand, research tourism agencies and use the bestest sleakest design for
> a new brazilian tourism agency with the following menu items: About, Contact
> (with email, instagram, facebook, mobile number with the option of whatsapp
> integraation) and Services (with list of places in the world the agency will
> offer, inclusive of filtering option).

Follow-up: **"this is just a website, and it needs to be deployable in free
provider such as github pages"** — pivoted to a fully static SPA (no backend
required).

## Brand
- **Name:** Tropicalê Viagens e Turismo
- **Palette:** Deep navy `#12305A`, cream `#F5F1E6`, warm orange `#E97826`,
  sun `#F5B841`, gold `#C9A85A`, teal `#3AA6A6`, jungle green `#2F7A3B`.
- **Type:** Fraunces (display serif) + Manrope (sans).

## Architecture
- 100% static React (CRA + Craco + Tailwind). No backend, no DB.
- `homepage: "."` → relative asset paths (works on any host / subpath).
- Data: `frontend/src/data/destinations.js` (16 destinations).
- Contact info: `frontend/src/lib/contact.js` (single source of truth).
- Deploy scripts: `yarn deploy` (gh-pages) + Netlify/Vercel/Cloudflare compatible.

## User personas
- **Casal Brasileiro (30–45)** buscando lua-de-mel ou aniversário → Romântico/Luxo.
- **Família em férias escolares** → Praia/Cultural, Brasil + Caribe.
- **Aventureiro** → Machu Picchu, Cidade do Cabo, Foz do Iguaçu.

## Core requirements (all shipped ✓)
- Menu: Sobre, Serviços, Contato (PT-BR).
- Hero editorial em cream + navy, foto de resort tropical.
- Sobre: história, 3 pilares, imagens sobrepostas, manifesto.
- Serviços: grid de 16 destinos filtráveis por Estilo (Praia/Aventura/Cultural/Romântico/Luxo),
  Continente (América/Europa/Ásia/África/Oceania), Investimento (Até 5k/10k/20k),
  busca textual, botão "Solicitar Orçamento" por destino (WhatsApp deep link
  com mensagem pré-preenchida).
- Contato: e-mail, WhatsApp, telefone, Instagram, Facebook, endereço, horários.
- WhatsApp integration: botão flutuante + CTAs contextuais.
- Deploy-ready para GitHub Pages / Netlify / Vercel / Cloudflare Pages.

## Implemented (2026-02-01)
- Design system completo (Fraunces + Manrope, paleta Tropicalê, spacing generoso).
- Todas as 5 seções + navbar sticky + footer + floating WhatsApp.
- 16 destinos com fotos verificadas (Wikimedia Commons + Unsplash).
- Filtros combinados client-side + busca instantânea.
- Build estático (86KB JS + 12KB CSS gzip, total 1.6MB).
- README.md com instruções de deploy para 4 provedores gratuitos.
- Fallback `onError` em imagens.

## Backlog (não bloqueia)
- **P1:** Página individual por destino (`/destino/:slug`) com galeria e formulário.
- **P1:** Blog / diário de viagem para SEO.
- **P2:** Formulário de captação de leads salvando em Google Sheets ou Formspree
  (mantendo deploy 100% estático).
- **P2:** Múltiplos idiomas (EN/ES).
- **P2:** Domínio próprio + CNAME.
- **P3:** Google Analytics 4 + Meta Pixel.
- **P3:** Área do cliente / login (implica backend — mudança de arquitetura).

## Testing
- Lint: passing.
- Playwright screenshots: hero, sobre, filtros (Europa=3, Praia=2, search "bali"=1),
  contato, floating WhatsApp — todos verificados.
- Build: `yarn build` passa em 13s, output 1.6MB.

## Deploy
```bash
cd frontend && yarn build         # gera build/
yarn deploy                       # GitHub Pages
# ou drag&drop build/ no Netlify / vercel / Cloudflare Pages
```
