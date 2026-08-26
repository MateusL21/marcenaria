import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { VideoCard } from '../../components/ui/VideoCard/VideoCard'
import { videos } from '../../data/videos'
import styles from './Videos.module.css'

export function Videos() {
  return (
    <section id="videos" className={styles.videos}>
      <Container>
        <SectionTitle
          title="Vídeos"
          subtitle="Acompanhe de perto os detalhes e o processo dos nossos projetos"
        />
        <div className={styles.grid}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </Container>
    </section>
  )
}
