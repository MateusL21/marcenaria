import { Footer } from './components/layout/Footer/Footer'
import { WhatsAppButton } from './components/common/WhatsAppButton/WhatsAppButton'
import { About } from './sections/About/About'
import { ServicesLazy } from './sections/Services/ServicesLazy'
import { Portfolio } from './sections/Portfolio/Portfolio'
import { Videos } from './sections/Videos/Videos'
import { Contact } from './sections/Contact/Contact'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <main id="main-content">
        <About />
        <ServicesLazy />
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
