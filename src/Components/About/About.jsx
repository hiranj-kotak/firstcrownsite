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
      className={`w-full px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] pt-[8vh] sm:pt-[10vh] pb-[15vh] sm:pb-[20vh] bg-theme-bg text-theme-text min-h-screen ${className}`}
    >
      {/* Top Intro Text */}
      <div className="w-full mx-auto text-center mb-12 sm:mb-16">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-regular leading-relaxed max-w-4xl mx-auto px-2">
          <span className="font-semibold">First Crown</span>{' '}
          dolor sit amet consectetur, adipisicing elit. Illo qui accusamus iusto
          autem officiis debitis, similique aperiam rem possimus eum aliquam a,
          facere ex sequi velit, vero nostrum cum ipsam impedit quas
          necessitatibus.
        </p>
      </div>

       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">
   About Us
      </h2>

      {/* Main Grid */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 sm:gap-10 lg:gap-10 items-center max-w-6xl">
        {/* Image Column */}
        <div ref={imageRef} className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="group w-full max-w-[400px] sm:max-w-[500px] border-2 border-purple-200 rounded-xl shadow-lg p-2 overflow-hidden transition-all duration-300">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
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
        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <h3 className="about-para text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p className="about-para text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo qui
            accusamus iusto autem officiis debitis, similique aperiam rem
            possimus eum aliq nderit laborum corporis quibusdam tempora?
            Officiis dolores quaerat error saepe, consectetur placeat repellat
            quo excepturi voluptate, nisi assumenda culpa sed pariatur?
          </p>
          <p className="about-para text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo qui
            accusamus iusto autem officiis debitis, similique aperiam rem
            possimus eum aliquam a, facere ex sequi velit.
          </p>
          <p className="about-para text-sm sm:text-base lg:text-lg leading-relaxed">
            Deserunt at, distinctio animi, ad assumenda quaerat tempore ea quasi
            magnam architecto molestias ducimus ratione fuga iste consequatur
            officiis doloremque, reprehenderit laborum corporis quibusdam.
          </p>
          <div className="pt-2 sm:pt-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 sm:py-2 rounded-full font-semibold shadow transition-all duration-200 w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
