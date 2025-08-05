import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPressure from '../Heading/Heading'

gsap.registerPlugin(ScrollTrigger)

function About({ className = '' }) {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const paragraphs = gsap.utils.toArray('.about-para')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    // Image animation
    tl.fromTo(
      image,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
    )

    // Paragraphs reveal one by one
    tl.fromTo(
      paragraphs,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.3,
      },
      '-=0.4',
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`w-full px-[10vw] pt-[10vh] pb-[20vh] bg-theme-bg text-theme-text min-h-screen ${className}`}
    >
      {/* Top Intro Text */}
      <div className="w-full mx-auto text-center mb-16">
        <p className="text-xl md:text-2xl font-regular leading-relaxed">
  <span className="font-semibold text-theme-accent">First Crown</span>{' '}
  isn’t just a name it’s a promise. From Katni roots to a seven-figure brand, we believe every business deserves to shine. Our journey is built on vision, resilience, and real results.
</p>
      </div>

       <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
   About Us
      </h2>

      {/* Main Grid */}
      <div className="flex w-full  gap-10 items-center ">
        {/* Image Column */}
        <div ref={imageRef} className="flex flex-[0.4] justify-center md:justify-end">
          <div className="group w-full max-w-[500px] border-2 border-purple-200 rounded-xl shadow-lg p-2 overflow-hidden transition-all duration-300">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co/FLshRw8F/about.jpg"
                alt="About us"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-purple-800/20 rounded-lg pointer-events-none transition-all duration-500 group-hover:bg-purple-800/40"></div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="space-y-6 flex-[0.6]">
          <h3 className="about-para text-3xl md:text-4xl font-extrabold leading-tight">
           First Crown Media
          </h3>
          <p className="about-para text-base md:text-lg">
      We started back in 2017 — when marketing wasn’t a trend and social media
wasn’t taken seriously, especially outside big cities. But we saw a vision
early. A vision that brands from small towns could shine just as bright.
Born in Katni, Madhya Pradesh, First Crown Media made its mark in the
agriculture and FMCG sectors, and soon expanded into real estate and
hospitality. Fast forward to 2025 — we're now active across Gujarat,
Ahmedabad, Delhi, Jabalpur, and beyond.

          </p>
          <p className="about-para text-base md:text-lg">
       This journey didn’t start with investors or fancy backing. It started with an
idea, pure intent, and the emotional support of my parents. First Crown
Media is a Seven-figure company built on passion, resilience, and real
results.

          </p>
          <p className="about-para text-base md:text-lg">
           We’re not just building campaigns — we’re building crowns. And we’re just
getting started.
          </p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
