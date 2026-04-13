import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import hultLogo from '../assets/Hult Logo White Transparent.png'

const homeLinks = [
  { label: 'About', href: '#about' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isGallery = location.pathname === '/gallery'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isGallery ? 'bg-midnight shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand lockup: logo | Ireland */}
        <Link to="/" className="flex items-center gap-3">
          <img src={hultLogo} alt="Hult Prize" className="h-8 w-auto" />
          <span className="text-white/30 font-light text-lg">|</span>
          <span className="font-semibold text-white/80 text-sm">Ireland</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {!isGallery && homeLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/75 hover:text-white text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/gallery"
              className={`text-sm font-semibold transition-colors ${
                isGallery ? 'text-heritage' : 'text-white/75 hover:text-white'
              }`}
            >
              Gallery
            </Link>
          </li>
          {!isGallery && (
            <li>
              <a
                href="#contact"
                className="bg-heritage hover:bg-heritage-dark text-white font-bold text-sm px-5 py-2 rounded-full transition-colors"
              >
                Register Interest
              </a>
            </li>
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-midnight px-6 pb-5 flex flex-col gap-4">
          {!isGallery && homeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/gallery"
            className={`font-semibold transition-colors ${
              isGallery ? 'text-heritage' : 'text-white/80 hover:text-white'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          {!isGallery && (
            <a
              href="#contact"
              className="bg-heritage hover:bg-heritage-dark text-white font-bold text-sm px-5 py-2.5 rounded-full text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Register Interest
            </a>
          )}
        </div>
      )}
    </nav>
  )
}
