// A imagem está dentro de `src`, então é importada pelo TypeScript.
// O Vite processa o import e retorna a URL final do asset.
import jardinagemCompleta from '../extra-services/jardinagem completa.jpg'

export interface ExtraService {
  id: number
  title: string
  description: string
  image: string
  alt: string
}

export const extraServices: ExtraService[] = [
  {
    id: 1,
    title: 'Jardinagem Completa',
    description:
      'Cuidamos do seu jardim do início ao fim: poda, plantio, manutenção e paisagismo para deixar o ambiente sempre bonito e bem cuidado.',
    image: jardinagemCompleta,
    alt: 'Jardim bem cuidado após serviço de jardinagem completa',
  },
]
