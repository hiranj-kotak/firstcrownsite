import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import stats from '../../Data/stats.json'
import theme from '../../Data/theme'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const sectionRef = useRef(null)
  const numRefs = useRef([])

  useEffect(() => {
    let triggered = false
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        if (triggered) return
        triggered = true
        stats.forEach((stat, i) => {
          gsap.fromTo(
            { val: 0 },
            {
              val: stat.value,
              duration: 1.5,
              ease: 'power1.out',
              onUpdate: function () {
                let val = this.targets()[0].val
                let display = stat.display
                if (stat.suffix === 'M+') {
                  display = (val / 1000000).toFixed(0) + 'M+'
                } else if (stat.suffix === 'K') {
                  display = (val / 1000).toFixed(0) + 'K'
                } else {
                  display = Math.floor(val).toString()
                }
                numRefs.current[i].textContent = display
              },
            },
          )
        })
      },
    })
    return () => trigger && trigger.kill()
  }, [])

  return (
    <section
      className="w-full py-16 flex justify-center items-center"
      style={{ background: theme.colors.secondary }}
    >
      <div
        ref={sectionRef}
        className="w-full max-w-6xl mx-auto rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-8"
        style={{ background: theme.colors.white }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            <div
              ref={(el) => (numRefs.current[i] = el)}
              className="text-4xl md:text-5xl font-extrabold mb-1"
              style={{ color: theme.colors.text }}
            >
              0
            </div>
            <div
              className="text-lg md:text-xl font-normal"
              style={{ color: theme.colors.text }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
