// Colors are inline style values (data-driven), not Tailwind classes
const stats = [
  { value: '100+', label: 'Countries competing', color: '#EC2088' },
  { value: '$1M', label: 'Prize for global winner', color: '#FDD40E' },
  { value: '25k+', label: 'Students worldwide', color: '#12B1E7' },
  { value: '2009', label: 'Year it all began', color: '#EC2088' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-heritage text-sm font-black tracking-widest uppercase">
            What is Hult Prize?
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-midnight">
            Change the World,<br />Win a Million
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-5 text-hp-black/65 text-base leading-relaxed">
            <p>
              Hult Prize is the world's largest student social entrepreneurship competition, partnered
              with the United Nations. Each year, a global challenge is set that asks student teams to
              solve one of humanity's most pressing problems through a sustainable, scalable business
              model.
            </p>
            <p>
              The journey begins on campuses around the world. Teams that win their On-Campus Programme
              earn a coveted spot at a Regional Summit — and the chance to compete for a place at the
              Global Accelerator, where the final prize of{' '}
              <span className="font-bold text-hp-black">$1 million USD</span> is awarded.
            </p>
            <p>
              The <span className="font-bold text-midnight">Irish Nationals at UCD</span> is your
              gateway: bring your team, your idea, and your drive — and compete to represent Ireland on
              the global stage.
            </p>
            <a
              href="https://www.hultprize.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-heritage font-bold hover:underline"
            >
              Learn more at hultprize.org
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 text-center border border-midnight/8 bg-white shadow-sm"
              >
                <p className="text-4xl font-black" style={{ color: s.color }}>{s.value}</p>
                <p className="mt-2 text-sm text-hp-black/50 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
