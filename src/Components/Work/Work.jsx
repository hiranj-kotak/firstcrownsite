import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import workImage from '../../assets/workImage.png'
import ViewMoreCard from './ViewMore'

gsap.registerPlugin(ScrollTrigger)

const workItems = [
  { title: 'Project Name 1', subtitle: 'Line 1', image: workImage },
  { title: 'Project Name 2', subtitle: 'Line 2', image: workImage },
  { title: 'Project Name 3', subtitle: 'Line 3', image: workImage },
  { title: 'Project Name 4', subtitle: 'Line 4', image: workImage },
  { title: 'Project Name 5', subtitle: 'Line 5', image: workImage },
]

function Work() {
  const scrollRef = useRef(null)
  const wrapperRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollElem = scrollRef.current
      const wrapperElem = wrapperRef.current
      const workItemElements = itemRefs.current

      if (!scrollElem || !wrapperElem) return

      const scrollWidth = wrapperElem.scrollWidth - scrollElem.clientWidth

      // Horizontal scroll via ScrollTrigger
      ScrollTrigger.create({
        trigger: scrollElem,
        start: 'top 20%',
        end: () => `+=${scrollWidth* 0.4}`, // Faster scroll
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          scrollElem.scrollLeft = scrollWidth * self.progress
        },
        markers: false,
      })

      // Animation for cards
      gsap.from(workItemElements, {
        opacity: 0,
        x: 100,
        rotationY: -90,
        scale: 0.8,
        stagger: { each: 0.2, from: 'start' },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: scrollElem,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="px-0 py-20 bg-white" id="work">
      {/* Heading */}
      <div className="px-10 mb-10 flex justify-center">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Recent Work
        </h2>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={scrollRef} className="overflow-hidden ">
        <div
          ref={wrapperRef}
          className="flex space-x-10 px-10 md:px-0 w-max"
        >
          <div className="flex-shrink-0 min-w-[calc(50vw-187.5px)]" />
          {workItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="flex-shrink-0 min-w-[375px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-md w-[375px] h-[480px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          ))}
          <ViewMoreCard />
          <div className="flex-shrink-0 min-w-[calc(50vw-187.5px)]" />
        </div>
      </div>
    </section>
  )
}

export default Work
