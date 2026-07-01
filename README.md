# Tropicalê Viagens e Turismo — Website

Site institucional em português da agência boutique **Tropicalê Viagens e Turismo**.
Feito em React (CRA + Craco + Tailwind) e **100% estático** — sem servidor,
sem banco de dados, pronto para hospedagem gratuita.

## Stack

- React 19 + React Router (não é usado — SPA de página única)
- Tailwind CSS + shadcn/ui
- Fraunces (display) + Manrope (sans) via Google Fonts
- lucide-react para ícones
- Dados de destinos: `frontend/src/data/destinations.js` (edite ali para
  adicionar, remover ou trocar destinos)

## Rodar localmente

```bash
cd frontend
yarn install
yarn start
# abre http://localhost:3000
```

## Build de produção

```bash
cd frontend
yarn build
# gera a pasta frontend/build/ pronta para deploy
```

O campo `"homepage": "."` no `package.json` faz o build usar **caminhos relativos**,
o que garante que o site funcione em qualquer host (raiz do domínio ou subpasta).

---

## Deploy gratuito

### 1) GitHub Pages (recomendado — mais simples)

```bash
cd frontend
yarn deploy
```

Isto executa `yarn build` e publica a pasta `build/` na branch `gh-pages`
do repositório atual. Depois é só habilitar GitHub Pages nas configurações
do repo apontando para a branch `gh-pages`.

Passo a passo:
1. Suba o projeto para um repositório no GitHub.
2. No repositório: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / `/ (root)`**.
3. Rode `yarn deploy` na pasta `frontend`.
4. O site ficará em `https://<seu-usuario>.github.io/<nome-do-repo>/`.

> Se preferir um domínio próprio, coloque um arquivo `CNAME` dentro de
> `frontend/public/` contendo seu domínio (ex.: `tropicaleviagens.com.br`).

### 2) Netlify (arraste e solte)

1. Rode `yarn build`.
2. Acesse [app.netlify.com](https://app.netlify.com) → **Add new site → Deploy manually**.
3. Arraste a pasta `frontend/build`.
4. Pronto. Um subdomínio grátis `*.netlify.app` é gerado.

Alternativamente, conecte o repo no Netlify com estes settings:
- **Base directory:** `frontend`
- **Build command:** `yarn build`
- **Publish directory:** `frontend/build`

### 3) Vercel

```bash
npm i -g vercel
cd frontend
vercel
```

Selecione framework **Create React App**. Vercel detecta o resto sozinho.

### 4) Cloudflare Pages

- Conecte o repo em [pages.cloudflare.com](https://pages.cloudflare.com).
- Framework preset: **Create React App**
- Build command: `yarn build`
- Build output directory: `build`
- Root directory: `frontend`

---

## Personalização

Todos os placeholders de contato estão em **um único arquivo**:
`frontend/src/lib/contact.js`

Substitua:
- `email`
- `phoneDisplay` (aparece no site)
- `whatsappNumber` (só números, formato internacional, ex.: `5511999999999`)
- `instagramUrl`, `instagramHandle`
- `facebookUrl`, `facebookHandle`
- `addressCity`

Os destinos estão em `frontend/src/data/destinations.js`. Cada objeto tem
título, país, categoria, continente, preço a partir de, imagem, descrição
e highlights — basta editar/adicionar/remover à vontade.

---

## Estrutura

```
frontend/
├── public/
│   ├── index.html
│   └── _redirects              # Fallback Netlify/Cloudflare
├── src/
│   ├── App.js                  # Composição das seções
│   ├── App.css / index.css     # Tema + tipografia da marca
│   ├── components/             # Navbar, Hero, About, Destinations, Contact, Footer, FloatingWhatsApp
│   ├── data/destinations.js    # Catálogo estático
│   └── lib/contact.js          # Dados de contato
└── package.json
```

## Observação sobre a pasta `backend/`

O template do ambiente Emergent inclui um FastAPI/MongoDB, mas **o site não
depende dele** — todo o conteúdo é servido do bundle estático. Você pode
ignorar/apagar a pasta `backend/` ao publicar.

---

© Tropicalê Viagens e Turismo.
