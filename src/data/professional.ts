import type { Professional, ContactInfo } from '../types'

export const professional: Professional = {
  name: 'João Henrique Martins',
  company: 'Marcenaria Martins',
  role: 'Marceneiro / Especialista em Móveis Planejados',
  location: 'Campinas - SP',
  slogan: 'Móveis planejados que transformam ambientes.',
  description:
    'Com mais de 15 anos de experiência em marcenaria e móveis planejados, ' +
    'a Marcenaria Martins é referência em projetos personalizados para ' +
    'cozinhas, dormitórios, closets, painéis, home offices e ambientes ' +
    'sob medida. Cada projeto é desenvolvido com atenção aos detalhes, ' +
    'materiais de alta qualidade e acabamento impecável, garantindo que ' +
    'cada espaço seja aproveitado ao máximo.',
  experience: '15+ anos',
  highlights: [
    'Projetos 100% personalizados',
    'Materiais de alta qualidade',
    'Acabamento premium e detalhista',
    'Atendimento próximo e consultivo',
    'Entrega no prazo combinado',
    'Garantia em todos os projetos',
  ],
}

export const contactInfo: ContactInfo = {
  phone: '+55 (19) 99999-9999',
  whatsapp: '+55 (19) 99999-9999',
  email: 'contato@marcenariamartins.com.br',
  address: 'Campinas - SP',
  hours: 'Seg a Sex: 8h às 18h | Sáb: 8h às 12h',
}
