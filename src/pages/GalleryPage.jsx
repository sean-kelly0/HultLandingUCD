import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { EVENTS } from '../data/galleryImages'
import Footer from '../components/Footer'

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState(EVENTS[0].id)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const activeEvent = EVENTS.find((e) => e.id === activeTab)
  const slides = activeEvent.images.map((img) => ({ src: img.src, alt: img.alt }))

  return (
    <>
      <main className="min-h-screen bg-midnight pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase bg-heritage/20 text-heritage border border-heritage/40 px-4 py-1.5 rounded-full">
              Photo Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              Hult Prize <span className="text-heritage">Ireland</span>
            </h1>
            <p className="mt-4 text-white/50 font-light max-w-xl mx-auto">
              Behind the scenes and on the stage — moments from our competitions.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {EVENTS.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveTab(event.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                  activeTab === event.id
                    ? 'bg-heritage text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {event.label}
              </button>
            ))}
          </div>

          {/* Empty state */}
          {activeEvent.images.length === 0 && !activeEvent.driveUrl && (
            <div className="text-center py-24 text-white/30">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-semibold">Photos coming soon</p>
            </div>
          )}

          {/* Masonry grid */}
          {activeEvent.images.length > 0 && (
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
              {activeEvent.images.map((img, i) => (
                <button
                  key={img.src}
                  className="break-inside-avoid w-full block overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-heritage"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Google Drive link */}
          {activeEvent.driveUrl && (
            <div className="mt-10 text-center">
              <p className="text-white/40 text-sm mb-4">
                {activeEvent.images.length > 0 ? 'More photos in the full album' : 'Photos available in the full album'}
              </p>
              <a
                href={activeEvent.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 87.3 78" fill="currentColor">
                  <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA"/>
                  <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.55C.4 49.95 0 51.5 0 53.05h27.5z" fill="#00AC47"/>
                  <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.6z" fill="#EA4335"/>
                  <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.1.45-4.5 1.2z" fill="#00832D"/>
                  <path d="M59.8 53.05H27.5L13.75 76.85c1.35.8 2.9 1.15 4.5 1.15h50.8c1.6 0 3.1-.45 4.5-1.2z" fill="#2684FC"/>
                  <path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.15 28.05H87.3c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00"/>
                </svg>
                View full album on Google Drive
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />
    </>
  )
}
