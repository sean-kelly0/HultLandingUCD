// accent values are used in inline styles (dynamic colors), not Tailwind classes
const timeline = [
  {
    time: 'TBD',
    title: 'Registration Opens',
    description: 'Team registration goes live. Form your team of 2–4 students and submit your details.',
    accent: '#EC2088',
  },
  {
    time: 'TBD',
    title: 'Registration Closes',
    description: 'Final deadline for team sign-ups. Late registrations cannot be accepted.',
    accent: '#12B1E7',
  },
  {
    time: 'Day of Event',
    title: 'Check-in & Networking',
    description: 'Arrive, collect your materials, and meet fellow competitors and judges.',
    accent: '#EC2088',
  },
  {
    time: 'Day of Event',
    title: 'Opening Ceremony',
    description: 'Welcome address, event briefing, and introduction to the 2026 challenge theme.',
    accent: '#12B1E7',
  },
  {
    time: 'Day of Event',
    title: 'Pitching Rounds',
    description: 'Teams present their business concepts to a panel of expert judges.',
    accent: '#EC2088',
  },
  {
    time: 'Day of Event',
    title: 'Awards & Closing',
    description: 'Winners announced. The winning team advances to the Hult Prize Regional Summit.',
    accent: '#FDD40E',
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-midnight">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-heritage text-sm font-black tracking-widest uppercase">
            April 2026
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Event Schedule
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto font-light">
            Exact times will be confirmed closer to the event date. Register your interest to stay updated.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.title} className="flex gap-6 items-start group">
                {/* Dot */}
                <div
                  className="hidden sm:flex shrink-0 w-10 h-10 rounded-full items-center justify-center z-10 mt-1"
                  style={{ backgroundColor: `${item.accent}22`, border: `2px solid ${item.accent}` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.accent }} />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5 group-hover:border-white/20 transition-colors">
                  <span
                    className="text-xs font-black tracking-widest uppercase"
                    style={{ color: item.accent }}
                  >
                    {item.time}
                  </span>
                  <h3 className="text-white font-black text-lg mt-1">{item.title}</h3>
                  <p className="text-white/50 text-sm mt-1 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
