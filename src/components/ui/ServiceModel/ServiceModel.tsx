import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, useGLTF } from '@react-three/drei'
import type { Group } from 'three'
import { MathUtils } from 'three'

interface ServiceModelProps {
  /** URL do modelo GLB (processada pelo Vite) */
  url: string
  /** Escala-alvo do modelo */
  scale?: number
  /**
   * Progresso de scroll do bloco (0 → 1). Alimenta a auto-rotação em Y para
   * dar movimento cinematográfico conforme o usuário rola a página.
   */
  scrollProgress: number
  /** Se o usuário está arrastando — pausa a auto-rotação para não brigar. */
  isDragging: boolean
}

export function ServiceModel({
  url,
  scale = 1,
  scrollProgress,
  isDragging,
}: ServiceModelProps) {
  const groupRef = useRef<Group>(null)
  const autoRotationRef = useRef(0)

  const { scene } = useGLTF(url)
  // Clona para não mutar o cache compartilhado do useGLTF.
  const model = useMemo(() => scene.clone(true), [scene])

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return

    // Suavização independente de framerate (estável em mobile 30fps).
    const smooth = 1 - Math.exp(-5 * delta)

    // Auto-rotação: uma volta completa proporcional ao scroll do bloco,
    // mais uma leve rotação contínua. Pausada enquanto o usuário arrasta.
    if (!isDragging) {
      autoRotationRef.current += delta * 0.15
    }
    const targetY = scrollProgress * Math.PI * 2 + autoRotationRef.current

    // O OrbitControls controla a câmera; aqui giramos o próprio objeto em Y
    // de forma aditiva e suave, sem conflitar com o arrasto do usuário.
    if (!isDragging) {
      group.rotation.y = MathUtils.lerp(group.rotation.y, targetY, smooth)
    }

    // Anima a escala de entrada (pop-in suave).
    const next = MathUtils.lerp(group.scale.x, scale, smooth)
    group.scale.setScalar(next)
  })

  return (
    <Center>
      <group ref={groupRef} scale={0.001} dispose={null}>
        <primitive object={model} />
      </group>
    </Center>
  )
}
