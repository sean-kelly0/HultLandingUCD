import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'

function HomePage() {
  return (
    <>
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
