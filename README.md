# Meu Portfólio — QA Engineer & Front-End Developer

Portfólio moderno, futurista e responsivo desenvolvido com Next.js, animações fluidas e experiências 3D.

## 🔗 Links

- Produção: https://my-portfolio-azure-beta-74.vercel.app
- Repositório: https://github.com/Fabianooliveirasilva/Meu_Portifolio

## ✨ Destaques

- Layout mobile-first e responsivo
- Tema escuro por padrão + toggle dark/light
- Estética neon + glassmorphism
- Scroll progress indicator
- Cursor customizado animado
- Microinterações de hover
- Animações com Framer Motion
- Seções com efeito de entrada ao scroll
- Seção 3D com Three.js (R3F + Drei)
- Carrossel de projetos com Swiper
- SEO metadata configurado

## 🧱 Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS (v4)
- Framer Motion
- Three.js + @react-three/fiber + @react-three/drei
- Swiper
- ESLint + Prettier

## 📁 Estrutura

```txt
src/
├── app/
├── components/
├── hooks/
├── lib/
├── sections/
├── styles/
└── types/
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Abra: http://localhost:3000

## ✅ Qualidade

```bash
npm run lint
npm run build
```

## 🌍 Deploy

Deploy realizado na Vercel.

Para novo deploy de produção:

```bash
npx vercel --prod --yes
```

## ⚙️ Variáveis de ambiente

Atualmente configurada:

- `NEXT_PUBLIC_SITE_URL`

> Variáveis `NEXT_PUBLIC_*` são públicas no client-side.
