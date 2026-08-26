import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { WhatsAppButton } from './components/common/WhatsAppButton/WhatsAppButton'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Services } from './sections/Services/Services'
import { Portfolio } from './sections/Portfolio/Portfolio'
import { Videos } from './sections/Videos/Videos'
import { Contact } from './sections/Contact/Contact'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
