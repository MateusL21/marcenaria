import type { SocialLink, WhatsAppConfig, NavItem } from '../types'

/* === WhatsApp === */

const WHATSAPP_NUMBER = '5511917791871'
const WHATSAPP_MESSAGE = 'Olá! Vi seu portfólio e gostaria de solicitar um orçamento.'

export const whatsappConfig: WhatsAppConfig = {
  number: WHATSAPP_NUMBER,
  message: WHATSAPP_MESSAGE,
  url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
}

/* === Redes Sociais === */

export const socialLinks: SocialLink[] = []

/* === Navegação === */

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Contato', href: '#contato' },
]
