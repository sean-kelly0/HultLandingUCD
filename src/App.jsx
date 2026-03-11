import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
