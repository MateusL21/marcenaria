# Guia de Execução & Dicas Úteis

Guia prático para rodar, desenvolver e manter o site da **Marcenaria Martins**.
Para a visão geral do projeto e estrutura de pastas, veja o [`README.md`](./README.md).

---

## 1. Pré-requisitos

| Ferramenta | Versão mínima | Como verificar     |
| ---------- | ------------- | ------------------ |
| Node.js    | ≥ 20.19       | `node -v`          |
| npm        | ≥ 9           | `npm -v`           |

> Dica: se você usa várias versões de Node, o [nvm](https://github.com/nvm-sh/nvm)
> (ou [nvm-windows](https://github.com/coreybutler/nvm-windows)) facilita alternar
> entre elas: `nvm install 20 && nvm use 20`.

---

## 2. Rodando a aplicação

```bash
# 1. Instale as dependências (só na primeira vez ou quando o package.json mudar)
npm install

# 2. Suba o servidor de desenvolvimento (hot reload)
npm run dev
```

O Vite abre em **http://localhost:5173**. Qualquer alteração em arquivos
`.tsx`/`.css` recarrega a página automaticamente.

### Outros comandos

| Comando           | O que faz                                                      |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento com hot reload                     |
| `npm run build`   | Verifica tipos (`tsc`) e gera o build de produção em `dist/`   |
| `npm run preview` | Serve o build de produção localmente para conferência final    |
| `npm run lint`    | Roda o Oxlint em todo o projeto                                 |

> Sempre rode `npm run build` **antes de fazer deploy** — ele valida os tipos
> TypeScript e falha se houver erro, evitando quebrar produção.

---

## 3. Seção de Ferramentas 3D

O site tem uma seção interativa (`#ferramentas`) que exibe três serviços com um
modelo 3D no centro, construída com **Three.js + React Three Fiber + Drei**.

### Serviços e modelos

| Serviço     | Ferramenta 3D                          | Arquivo do modelo                          |
| ----------- | -------------------------------------- | ------------------------------------------ |
| Alvenaria   | Colher de pedreiro (trowel)            | `src/3d/archaeology_trowel_low_poly.glb`   |
| Carpintaria | Serrote (handsaw)                      | `src/3d/handsaw.glb`                        |
| Marcenaria  | Formão (chisel)                        | `src/3d/chisel.glb`                         |

### Como funciona

- **Navegação por abas** troca o texto lateral e o modelo 3D central.
- O modelo **gira suavemente no eixo Y** conforme o scroll e a troca de aba,
  usando interpolação (`lerp`) dentro do `useFrame` — animação estável em celular.
- Iluminação de estúdio (`ambientLight` + `directionalLight`) e `<Environment>`
  dão reflexos realistas nas partes de metal.
- A seção usa **carregamento sob demanda** (`React.lazy` + `IntersectionObserver`):
  o código pesado do Three.js só é baixado quando o usuário chega perto dela,
  mantendo o carregamento inicial leve.

### Como editar os serviços 3D

Toda a configuração está em **`src/data/tools3D.ts`**. Cada item tem:

```ts
{
  id: 'alvenaria',                 // identificador único (usado no HTML/aba)
  title: 'Alvenaria',              // título da aba
  tagline: 'Assentamento & ...',   // subtítulo curto
  description: '...',              // texto do serviço
  highlights: ['...', '...'],      // lista de destaques (bullets)
  model: trowelUrl,                // modelo GLB importado no topo do arquivo
  scale: 1,                        // ajuste fino de tamanho no Canvas
}
```

### Como trocar/adicionar um modelo 3D

1. Coloque o arquivo `.glb` em **`src/3d/`**.
2. Importe-o **no topo** de `src/data/tools3D.ts` usando o sufixo `?url`
   (obrigatório para o Vite processar o binário corretamente):
   ```ts
   import meuModeloUrl from '../3d/meu-modelo.glb?url'
   ```
3. Aponte o campo `model` do serviço para essa variável.
4. Se o modelo aparecer muito grande/pequeno, ajuste o `scale`.

> **Formato:** use `.glb` (GLTF binário). Otimize modelos pesados com
> [gltf-transform](https://gltf-transform.dev/) ou [glTF-Pipeline](https://github.com/CesiumGS/gltf-pipeline)
> para reduzir o tamanho e melhorar a performance em celulares.

---

## 4. Onde alterar cada conteúdo

Todos os dados ficam centralizados em **`src/data/`**:

| Arquivo               | Conteúdo                                          |
| --------------------- | ------------------------------------------------- |
| `professional.ts`     | Nome, empresa, descrição e contato                |
| `services.ts`         | Serviços exibidos em cards                         |
| `tools3D.ts`          | Serviços + modelos da seção 3D                     |
| `projects.ts`         | Projetos do portfólio (imagens)                    |
| `videos.ts`           | Vídeos do portfólio                                |
| `socialLinks.ts`      | Redes sociais, WhatsApp e navegação                |

Estilos globais e variáveis de tema estão em `src/styles/`
(`variables.css` define cores, tipografia e espaçamentos).

---

## 5. Deploy (Cloudflare Pages)

| Configuração        | Valor            |
| ------------------- | ---------------- |
| Build command       | `npm run build`  |
| Output directory    | `dist`           |
| Node.js version     | ≥ 20.19          |

Depois do build, confira localmente com `npm run preview` antes de publicar.

---

## 6. Dicas de solução de problemas

- **`npm run dev` não abre / porta ocupada:** rode `npm run dev -- --port 3000`
  para usar outra porta.
- **Erro de tipo no build:** o `npm run build` roda `tsc` antes do Vite. Leia a
  mensagem do compilador — ela indica o arquivo e a linha exatos.
- **Modelo 3D não aparece:** confirme que o arquivo está em `src/3d/`, que o
  import usa `?url` e que o campo `model` aponta para a variável importada.
  Ajuste `scale` se ele estiver fora de enquadramento.
- **Site travando no celular:** modelos `.glb` muito pesados são a causa mais
  comum. Otimize-os (ver seção 3) e prefira versões low-poly.
- **Cache antigo após deploy:** o Vite adiciona hash nos nomes dos arquivos, mas
  force um hard refresh (`Ctrl + Shift + R`) se algo parecer desatualizado.
- **Limpar e reinstalar do zero:** apague `node_modules` e `package-lock.json` e
  rode `npm install` novamente.

---

## 7. Checklist antes de ir para produção

- [ ] Substituir imagens placeholder por fotos reais (`public/images/`)
- [ ] Preencher dados reais em `src/data/professional.ts` e `socialLinks.ts`
- [ ] Conferir o número de WhatsApp em `socialLinks.ts`
- [ ] Otimizar todos os modelos `.glb` e imagens
- [ ] Rodar `npm run lint` sem erros
- [ ] Rodar `npm run build` com sucesso
- [ ] Validar o resultado com `npm run preview`
