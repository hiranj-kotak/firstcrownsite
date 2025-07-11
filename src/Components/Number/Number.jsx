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
    <section className="w-full py-20 bg-[#f4eaff] flex justify-center items-center">
      <div
        ref={sectionRef}
        className="w-full max-w-6xl mx-auto rounded-2xl bg-white shadow-lg flex flex-col md:flex-row items-center justify-around px-6 md:px-16 py-10 gap-10"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            <div
              ref={(el) => (numRefs.current[i] = el)}
              className="text-4xl md:text-5xl font-extrabold text-black mb-1"
            >
              0
            </div>
            <div className="text-base md:text-lg text-black font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
