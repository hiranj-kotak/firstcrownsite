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
      className="w-full px-[10vw] pb-[10vh] min-h-fit"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        Meet Our Founders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24  mx-auto">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="founder-card group relative text-center rounded-xl min-h-[320px] pt-32 pb-10 px-8 flex flex-col items-center justify-start mt-32"
            style={{
              border: '1.5px solid rgba(255,255,255,0.2)', // optional soft border fallback
              background: 'rgba(255,255,255,0.05)', // fallback card background
            }}
          >
            {/* Overlapping Profile Photo */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-10">
              <div className="w-64 h-64 rounded-full flex items-center justify-center bg-white border border-white">
                <div className="w-[240px] h-[240px] rounded-full overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <div className="text-2xl font-bold mb-0.5">
                {founder.name}
              </div>
              <div className="text-base mb-3 opacity-80">
                {founder.role}
              </div>
              <p className="text-sm leading-normal text-center opacity-70">
                {founder.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
