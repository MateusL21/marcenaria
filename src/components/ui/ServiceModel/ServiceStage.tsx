import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { ServiceModel } from './ServiceModel'
import styles from './ServiceStage.module.css'

interface ServiceStageProps {
  url: string
  scale?: number
  /** Elemento observado para calcular o progresso de scroll do bloco */
  progressTargetRef: React.RefObject<HTMLElement | null>
}

export function ServiceStage({
  url,
  scale = 1,
  progressTargetRef,
}: ServiceStageProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Calcula o progresso do bloco na viewport (0 → 1) para a auto-rotação.
  useEffect(() => {
    const el = progressTargetRef.current
    if (!el) return

    let raf = 0
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const viewport = window.innerHeight
        const total = rect.height + viewport
        const progress = (viewport - rect.top) / total
        setScrollProgress(Math.min(1, Math.max(0, progress)))
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [progressTargetRef])

  return (
    <div className={styles.canvasWrapper}>
      <div className={styles.glow} aria-hidden="true" />
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className={styles.canvas}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 3.2]} fov={40} />

        {/* Iluminação de estúdio para reflexos realistas em metal e cabo */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 5]} intensity={2.6} castShadow />
        <directionalLight position={[-5, 2, -4]} intensity={0.9} />
        <spotLight
          position={[0, 8, 2]}
          angle={0.5}
          penumbra={1}
          intensity={1.2}
        />

        <Suspense fallback={null}>
          {/* Float dá um leve movimento de flutuação premium */}
          <Float
            speed={1.4}
            rotationIntensity={0.2}
            floatIntensity={0.6}
            floatingRange={[-0.1, 0.1]}
          >
            <ServiceModel
              url={url}
              scale={scale}
              scrollProgress={scrollProgress}
              isDragging={isDragging}
            />
          </Float>

          {/* Sombra de contato para dar profundidade e "peso" ao objeto */}
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.35}
            scale={12}
            blur={2.6}
            far={4}
          />

          <Environment preset="studio" />
        </Suspense>

        {/* Arrasto para rotacionar — mouse (desktop) e toque (mobile) */}
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.9}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(Math.PI * 2) / 3}
          onStart={() => setIsDragging(true)}
          onEnd={() => setIsDragging(false)}
        />
      </Canvas>
    </div>
  )
}
