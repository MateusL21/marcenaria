export interface Professional {
  name: string
  company: string
  role: string
  location: string
  slogan: string
  description: string
  experience: string
  highlights: string[]
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface Project {
  id: number
  title: string
  description: string
  category: ProjectCategory
  image: string
  alt: string
}

export type ProjectCategory =
  | 'Cozinha'
  | 'Dormitório'
  | 'Closet'
  | 'Sala'
  | 'Home Office'
  | 'Área Gourmet'

export interface PortfolioVideo {
  id: number
  title: string
  description: string
  src?: string
  poster: string
}

export interface SocialLink {
  id: number
  platform: string
  url: string
  label: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: string
  hours: string
}

export interface WhatsAppConfig {
  number: string
  message: string
  url: string
}

export interface NavItem {
  label: string
  href: string
}
