export default function Footer() {
  return (
    <footer className="bg-hp-black py-10 px-6 text-center text-white/30 text-sm">
      <p className="font-black text-white/60">
        Hult Prize <span className="text-white/20 font-light">|</span> University College Dublin · Irish Nationals 2026
      </p>
      <p className="mt-2 font-light">
        Organised by the <a href="http://www.instagram.com/ucdie" target="_blank" rel="noopener noreferrer" className="hover:text-heritage transition-colors">
          UCD Investors and Entrepreneurs Society
        </a>
        <span className="text-white/20 font-light"> | </span>
        <a href="mailto:sean.kelly7@ucdconnect.ie" className="hover:text-heritage transition-colors">
          sean.kelly7@ucdconnect.ie
        </a>
      </p>
      <p className="mt-3 text-white/15 text-xs">
        Hult Prize is a registered trademark of the Hult Prize Foundation. This event is independently organised by students at UCD.
      </p>
    </footer>
  )
}
