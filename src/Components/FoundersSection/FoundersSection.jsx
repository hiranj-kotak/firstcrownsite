import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import founders from '../../Data/founders.json'

gsap.registerPlugin(ScrollTrigger)

export default function FoundersSection() {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] pb-[8vh] sm:pb-[10vh] min-h-fit"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">
        Meet Our Founders
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-x-24 lg:gap-y-24 max-w-6xl mx-auto">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="founder-card group relative text-center rounded-xl min-h-[280px] sm:min-h-[320px] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start mt-20 sm:mt-24 lg:mt-32"
            style={{
              border: '1.5px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)',
            }}
          >
            {/* Overlapping Profile Photo */}
            <div className="absolute -top-16 sm:-top-20 lg:-top-32 left-1/2 -translate-x-1/2 z-10">
              <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center bg-white border border-white shadow-lg">
                <div className="w-28 h-28 sm:w-44 sm:h-44 lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-4 sm:mt-6">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-0.5">
                {founder.name}
              </div>
              <div className="text-sm sm:text-base mb-2 sm:mb-3 opacity-80">
                {founder.role}
              </div>
              <p className="text-xs sm:text-sm lg:text-base leading-normal text-center opacity-70 max-w-sm mx-auto">
                {founder.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
