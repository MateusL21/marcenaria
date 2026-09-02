// Importa os modelos 3D como módulos no topo do arquivo.
// O sufixo ?url faz o Vite emitir o binário como asset e retornar a URL final,
// garantindo que os .glb sejam processados/versionados corretamente no build.
import trowelUrl from '../3d/archaeology_trowel_low_poly.glb?url'
import handsawUrl from '../3d/handsaw.glb?url'
import chiselUrl from '../3d/chisel.glb?url'
import glovesUrl from '../3d/gloves.glb?url'

export interface Tool3D {
  id: string
  /** Título da aba/serviço */
  title: string
  /** Subtítulo curto exibido no cabeçalho lateral */
  tagline: string
  /** Descrição completa do serviço */
  description: string
  /** Lista de destaques do serviço */
  highlights: string[]
  /** URL do modelo GLB processada pelo Vite */
  model: string
  /** Escala aplicada ao modelo (ajuste fino de enquadramento) */
  scale: number
}

export const tools3D: Tool3D[] = [
  {
    id: 'alvenaria',
    title: 'Alvenaria',
    tagline: 'Assentamento & Estruturas',
    description:
      'Estruturas sólidas e assentamento preciso — a base nivelada e durável de cada ambiente.',
    highlights: [
      'Tijolos, blocos e contrapisos',
      'Preparo de base para acabamentos',
    ],
    model: trowelUrl,
    scale: 2.3,
  },
  {
    id: 'carpintaria',
    title: 'Carpintaria',
    tagline: 'Telhados & Cortes Brutos',
    description:
      'Estruturas de madeira e telhados com cortes robustos que dão forma e resistência à obra.',
    highlights: [
      'Telhados e madeiramento',
      'Vigas, caibros e ripas sob medida',
    ],
    model: handsawUrl,
    scale: 10.0,
  },
  {
    id: 'marcenaria',
    title: 'Marcenaria',
    tagline: 'Móveis Planejados & Acabamentos Finos',
    description:
      'Móveis planejados sob medida com acabamento impecável e encaixes perfeitos.',
    highlights: [
      'Móveis planejados sob medida',
      'Acabamentos finos e ajuste artesanal',
    ],
    model: chiselUrl,
    scale: 0.78,
  },
  {
    id: 'paisagismo',
    title: 'Paisagismo',
    tagline: 'Jardins & Áreas Verdes',
    description:
      'Projeto e execução de áreas verdes que valorizam o ambiente — do plantio ao acabamento, com escolhas de espécies e manejo cuidadoso.',
    highlights: [
      'Planejamento de jardins e canteiros',
    ],
    model: glovesUrl,
    scale: 2.3,
  },
]
