import heroBg from '../assets/hero1.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Photo background */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay so text remains legible */}
      <div className="absolute inset-0 bg-midnight/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Event badge */}
        <span className="inline-block mb-6 text-xs font-bold tracking-widest uppercase bg-heritage/20 text-heritage border border-heritage/40 px-4 py-1.5 rounded-full">
          Irish Nationals 2026
        </span>

        {/* Headline — Figtree Black weight for large headlines per brand guide */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6">
          Hult Prize
          <br />
          <span className="text-heritage">Ireland</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Ireland's premier student entrepreneurship competition. Watch teams compete for a chance to represent
          Ireland at the Hult Prize Global Accelerator and pitch for{' '}
          <span className="text-sun font-bold">$1 million</span> in funding.
        </p>

        {/* Key details */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/60 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-heritage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            April 2026
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-heritage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            University College Dublin
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-heritage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Open to all Irish students
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://luma.com/01aep11q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-heritage hover:bg-heritage-dark text-white font-black px-8 py-3.5 rounded-full text-base transition-colors shadow-lg"
          >
            Register Interest
          </a>
          <a
            href="#about"
            className="border border-white/30 hover:border-white text-white font-bold px-8 py-3.5 rounded-full text-base transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
