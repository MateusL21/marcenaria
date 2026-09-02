export interface Founder {
  id: string
  /** Nome exibido abaixo do retrato */
  name: string
  /** Papel/relação (ex.: filho, pai) */
  relation: string
}

/** Texto de apresentação (fictício) exibido abaixo da composição de retratos. */
export const foundersIntro =
  'Beto e Moises são os fundadores da marcenaria, unidos pela tradição da ' +
  'madeira, pela criatividade e pela paixão por transformar espaços em ambientes ' +
  'funcionais e acolhedores. Com uma visão prática e artesanal, eles criam ' +
  'projetos personalizados que unem beleza, funcionalidade e precisão em cada detalhe.'

/**
 * Ordem: filho à esquerda, pai à direita (composição lado a lado).
 * As imagens são placeholders/mocks editoriais até haver fotos reais.
 */
export const founders: Founder[] = [
  {
    id: 'moises',
    name: 'Moises',
    relation: 'Filho',
  },
  {
    id: 'beto',
    name: 'Beto',
    relation: 'Pai',
  },
]
