# Marcenaria Martins — Portfólio Online

Site institucional/portfólio para a **Marcenaria Martins**, especializada em móveis planejados e marcenaria sob medida em Campinas - SP.

O site funciona como uma vitrine digital para apresentar trabalhos realizados e converter visitantes em clientes via WhatsApp.

## Stack

- **React** 19
- **TypeScript** 6
- **Vite** 8
- **CSS Modules** com Custom Properties
- **Oxlint** para linting

Sem bibliotecas de UI, CSS frameworks, ou dependências desnecessárias.

## Requisitos

- **Node.js** ≥ 20.19
- **npm** ≥ 9

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento abrirá em `http://localhost:5173`.

## Build de Produção

```bash
npm run build
```

Gera os arquivos otimizados na pasta `dist/`.

## Preview do Build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Estrutura do Projeto

```
marcenaria/
├── public/
│   ├── images/
│   │   ├── placeholders/     ← Imagens temporárias (Unsplash)
│   │   ├── projects/         ← Fotos reais dos projetos (futuro)
│   │   └── professional/     ← Foto do profissional (futuro)
│   ├── videos/               ← Vídeos dos projetos (futuro)
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── layout/           ← Header, Footer, Container
│   │   ├── common/           ← Button, SectionTitle, WhatsAppButton
│   │   └── ui/               ← ServiceCard, ProjectCard, VideoCard
│   │
│   ├── sections/             ← Hero, About, Services, Portfolio, Videos, Contact
│   │
│   ├── data/                 ← Dados fictícios centralizados
│   │   ├── professional.ts   ← Dados do profissional e contato
│   │   ├── services.ts       ← Lista de serviços
│   │   ├── projects.ts       ← Projetos do portfólio
│   │   ├── videos.ts         ← Vídeos do portfólio
│   │   └── socialLinks.ts    ← Redes sociais, WhatsApp, navegação
│   │
│   ├── types/                ← Interfaces TypeScript
│   ├── styles/               ← CSS global, variáveis, reset
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Como Alterar os Dados

Todos os dados fictícios estão centralizados em `src/data/`. Para substituir:

### Informações do profissional
Edite `src/data/professional.ts` com os dados reais (nome, empresa, descrição, contato).

### Serviços
Edite `src/data/services.ts` para alterar títulos e descrições dos serviços.

### Projetos do portfólio
Edite `src/data/projects.ts` para adicionar/alterar projetos. Cada projeto aponta para uma imagem em `public/images/`.

### Vídeos
Edite `src/data/videos.ts`. Quando tiver vídeos reais, adicione o campo `src` com o caminho do arquivo (ex: `/videos/cozinha.mp4`).

### Redes sociais e WhatsApp
Edite `src/data/socialLinks.ts` com os links reais e o número de WhatsApp correto.

## Como Adicionar Imagens Reais

1. Coloque as fotos em `public/images/projects/` (ou substitua as de `placeholders/`)
2. Atualize os caminhos em `src/data/projects.ts`
3. Formatos recomendados: JPEG ou WebP, max 1200px de largura

## Como Adicionar Vídeos

1. Coloque os vídeos em `public/videos/` (formato MP4 recomendado)
2. Atualize `src/data/videos.ts` adicionando o campo `src`:
   ```ts
   {
     id: 1,
     title: 'Meu Vídeo',
     description: 'Descrição',
     src: '/videos/meu-video.mp4',  // Adicionado!
     poster: '/images/placeholders/cozinha.jpg',
   }
   ```

## Deploy

O projeto está configurado para deploy no **Cloudflare Pages**:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node.js version:** ≥ 20.19

## Notas

- Não existe backend nesta versão. Todo o conteúdo é estático.
- O site é one-page com navegação por anchors e scroll suave.
- O WhatsApp é o principal canal de conversão.
- Imagens placeholder são do [Unsplash](https://unsplash.com/) (licença livre).
- Todas as imagens devem ser substituídas por fotos reais antes de ir para produção.
