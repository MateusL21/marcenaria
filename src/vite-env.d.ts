/// <reference types="vite/client" />

// Permite importar modelos GLTF/GLB como módulos (URL processada pelo Vite).
// Ex: import trowelUrl from './3d/archaeology_trowel_low_poly.glb?url'
declare module '*.glb?url' {
  const src: string
  export default src
}

declare module '*.glb' {
  const src: string
  export default src
}

declare module '*.gltf?url' {
  const src: string
  export default src
}
