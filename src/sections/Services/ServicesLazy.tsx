import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import styles from './Services.module.css'

// Carrega a section 3D (Three.js/R3F/Drei) sob demanda, em chunk separado.
const Services = lazy(() => import('./Services'))

/**
 * Só monta a seção 3D quando ela entra (ou está prestes a entrar) na viewport.
 * Combina IntersectionObserver (adia a inicialização do WebGL) com React.lazy
 * + Suspense (baixa o código pesado só nesse momento), mantendo o carregamento
 * inicial leve e a navegação fluida.
 */
export function ServicesLazy() {
  const [shouldRender, setShouldRender] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldRender) return
    const el = placeholderRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldRender])

  if (shouldRender) {
    return (
      <Suspense fallback={<ServicesFallback />}>
        <Services />
      </Suspense>
    )
  }

  return (
    <section id="servicos" className={styles.services} ref={placeholderRef} aria-busy="true">
      <div className={styles.loading}>
        <span className={styles.spinner} aria-hidden="true" />
        <p>Carregando serviços…</p>
      </div>
    </section>
  )
}

function ServicesFallback() {
  return (
    <section id="servicos" className={styles.services} aria-busy="true">
      <div className={styles.loading}>
        <span className={styles.spinner} aria-hidden="true" />
        <p>Carregando serviços…</p>
      </div>
    </section>
  )
}
