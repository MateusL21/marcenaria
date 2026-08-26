import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cozinha Planejada Moderna',
    description:
      'Projeto completo de cozinha com ilha central, armários superiores e inferiores em MDF lacado, bancada em quartzo e iluminação embutida.',
    category: 'Cozinha',
    image: '/images/placeholders/cozinha.jpg',
    alt: 'Cozinha planejada moderna com armários em tom de madeira e bancada em quartzo',
  },
  {
    id: 2,
    title: 'Closet Sob Medida',
    description:
      'Closet em L com portas de correr em espelho, gavetas com divisórias, cabideiros duplos e iluminação LED integrada.',
    category: 'Closet',
    image: '/images/placeholders/closet.jpg',
    alt: 'Closet sob medida com portas de correr e organização interna completa',
  },
  {
    id: 3,
    title: 'Painel de Sala em Madeira',
    description:
      'Painel ripado em madeira natural com nichos assimétricos, suporte para TV 65" e sistema de iluminação indireta.',
    category: 'Sala',
    image: '/images/placeholders/painel-sala.jpg',
    alt: 'Painel de sala em madeira ripada com nichos e iluminação indireta',
  },
  {
    id: 4,
    title: 'Home Office Planejado',
    description:
      'Escritório completo com mesa em L, estante com nichos e portas, gaveteiro e painel organizador. Ideal para trabalho remoto.',
    category: 'Home Office',
    image: '/images/placeholders/home-office.jpg',
    alt: 'Home office planejado com mesa em L e estante integrada',
  },
  {
    id: 5,
    title: 'Dormitório Completo',
    description:
      'Projeto de dormitório com guarda-roupa de 6 portas, cabeceira estofada com criado-mudo integrado e cômoda sob medida.',
    category: 'Dormitório',
    image: '/images/placeholders/dormitorio.jpg',
    alt: 'Dormitório completo com guarda-roupa e cabeceira em madeira',
  },
  {
    id: 6,
    title: 'Área Gourmet Planejada',
    description:
      'Espaço gourmet com bancada em granito, armários em madeira de demolição, adega climatizada e churrasqueira integrada.',
    category: 'Área Gourmet',
    image: '/images/placeholders/area-gourmet.jpg',
    alt: 'Área gourmet planejada com bancada em granito e armários em madeira',
  },
]

export const projectCategories = [
  'Todos',
  'Cozinha',
  'Dormitório',
  'Closet',
  'Sala',
  'Home Office',
  'Área Gourmet',
] as const
