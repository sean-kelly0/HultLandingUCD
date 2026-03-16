function ContactItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-heritage/20 flex items-center justify-center shrink-0">
        <svg className="w-5 h-5 text-heritage" fill="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div>
        <p className="text-white font-bold">{label}</p>
        {children}
      </div>
    </div>
  )
}

const emailIcon = <path fillRule="evenodd" d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0l8 5 8-5H4zm0 2.236V20h16V6.236l-8 5-8-5z" clipRule="evenodd" />
const locationIcon = (
  <>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </>
)
const instagramIcon = <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />

const REGISTRATION_URL = 'https://luma.com/01aep11q'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-midnight">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <span className="text-heritage text-sm font-black tracking-widest uppercase">
              Get Involved
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Come Along!
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed font-light">
              Whether you're pitching your idea after your local competition or
              cheering on friends, everyone is welcome at the Hult Prize Irish Nationals at UCD.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem icon={emailIcon} label="Email">
                <a href="mailto:sean.kelly7@ucdconnect.ie" className="text-sky hover:underline text-sm">
                  sean.kelly7@ucdconnect.ie
                </a>
              </ContactItem>

              <ContactItem icon={<>{locationIcon}</>} label="Venue">
                <p className="text-white/60 text-sm">Lochlann Quinn School of Business, University College Dublin, Belfield Campus</p>
              </ContactItem>

              <ContactItem icon={instagramIcon} label="Instagram">
                <a href="https://www.instagram.com/ucdhultprize" className="text-sky hover:underline text-sm">@ucdhultprize</a>
              </ContactItem>
            </div>
          </div>

          {/* Right: Registration CTA */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-heritage/20 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-heritage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-black mb-2">Hult Prize Irish National Competition</h3>
            <p className="text-white/50 font-light mb-8">
              April 2026 · University College Dublin<br />Register now to secure your place.
            </p>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-heritage hover:bg-heritage-dark text-white font-black py-3.5 rounded-lg transition-colors text-center text-base"
            >
              Register Now
            </a>
          </div>
        </div>
        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden h-72">
          <iframe
            title="Lochlann Quinn School of Business, UCD"
            src="https://maps.google.com/maps?q=Lochlann+Quinn+School+of+Business,+University+College+Dublin,+Belfield,+Dublin+4&output=embed&z=17"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
