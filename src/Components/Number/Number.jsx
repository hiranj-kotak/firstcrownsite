import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 8000000, label: 'Trusted user', suffix: 'M+' },
  { value: 84000, label: 'Telephonic talk', suffix: 'K' },
  { value: 9000000, label: 'Project Finished', suffix: 'M+' },
  { value: 255, label: 'Award Winning', suffix: '' },
]

export default function Number() {
  const sectionRef = useRef(null)
  const numRefs = useRef([])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        stats.forEach((stat, i) => {
          const obj = { count: 0 }
          gsap.to(obj, {
            count: stat.value,
            duration: 2,
            ease: 'power3.out',
            onUpdate: () => {
              let display = ''
              if (stat.suffix === 'M+') {
                display = `${Math.floor(obj.count / 1_000_000)}M+`
              } else if (stat.suffix === 'K') {
                display = `${Math.floor(obj.count / 1_000)}K`
              } else {
                display = `${Math.floor(obj.count)}`
              }
              if (numRefs.current[i]) {
                numRefs.current[i].textContent = display
              }
            },
          })
        })
      },
    })
  }, [])

  return (
    <section className="w-full py-12 sm:py-16 flex justify-center items-center bg-theme-bg text-theme-text">
      <div
        ref={sectionRef}
        className="w-full max-w-6xl mx-auto rounded-xl border border-white/20 bg-theme-primary shadow-[0_0_50px_rgba(147,51,234,0.2)] flex flex-col sm:flex-row items-center justify-around px-4 sm:px-6 lg:px-16 py-6 sm:py-8 gap-6 sm:gap-8"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            <div
              ref={(el) => (numRefs.current[i] = el)}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 sm:mb-2 text-theme-text"
            >
              0
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium text-theme-text/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
