import type { SocialLink, WhatsAppConfig, NavItem } from '../types'

/* === WhatsApp === */

const WHATSAPP_NUMBER = '5519999999999'
const WHATSAPP_MESSAGE = 'Olá! Vi seu portfólio e gostaria de solicitar um orçamento.'

export const whatsappConfig: WhatsAppConfig = {
  number: WHATSAPP_NUMBER,
  message: WHATSAPP_MESSAGE,
  url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
}

/* === Redes Sociais === */

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: 'Instagram',
    url: 'https://instagram.com/marcenariamartins',
    label: '@marcenariamartins',
  },
  {
    id: 2,
    platform: 'Facebook',
    url: 'https://facebook.com/marcenariamartins',
    label: 'Marcenaria Martins',
  },
  {
    id: 3,
    platform: 'YouTube',
    url: 'https://youtube.com/@marcenariamartins',
    label: 'Marcenaria Martins',
  },
  {
    id: 4,
    platform: 'TikTok',
    url: 'https://tiktok.com/@marcenariamartins',
    label: '@marcenariamartins',
  },
]

/* === Navegação === */

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Contato', href: '#contato' },
]
