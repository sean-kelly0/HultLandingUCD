import deloitteLogo from '../assets/Deloitte-Logo.svg'
import enterpriseIrelandLogo from '../assets/EnterpriseIreland.png'
import innovationAcademyLogo from '../assets/innovationAcademy.png'

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-heritage text-sm font-black tracking-widest uppercase">
            Our Supporters
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-midnight">
            Sponsors & Partners
          </h2>
        </div>

        {/* Deloitte — front and centre */}
        <div className="flex justify-center mb-12">
          <img src={deloitteLogo} alt="Deloitte" className="h-64 w-auto" />
        </div>

        {/* Enterprise Ireland + Innovation Academy */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          <img src={enterpriseIrelandLogo} alt="Enterprise Ireland" className="h-20 w-auto" />
          <img src={innovationAcademyLogo} alt="Innovation Academy" className="h-20 w-auto" />
        </div>
      </div>
    </section>
  )
}
