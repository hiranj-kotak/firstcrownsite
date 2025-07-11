import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPressure from '../Heading/Heading'
import ScrollFloat from '../Heading/Heading'

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
      id='about'
      ref={sectionRef}
      className={`w-full px-[10vw] pt-[10vh] pb-[20vh] min-h-screen bg-white ${className}`}
    >
      {/* Top Intro Text */}
      <div className="w-full mx-auto text-center mb-16">
        <p className="text-xl md:text-2xl font-regular text-gray-800 leading-relaxed">
          <span className="text-purple-500 font-semibold">First Crown</span>{' '}
          dolor sit amet consectetur, adipisicing elit. Illo qui accusamus iusto
          autem officiis debitis, similique aperiam rem possimus eum aliquam a,
          facere ex sequi velit, vero nostrum cum ipsam impedit quas
          necessitatibus.
        </p>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 ">
      <div className="flex justify-center mb-10"> {/* Example: w-1/2 or w-96 for a fixed width */}
        <ScrollFloat
          animationDuration={3}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
            About us
        </ScrollFloat>
      </div>
      </h2>


      {/* <p className="text-gray-500 text-lg">
          Who We Are at First Crown Digital Agency
        </p> */}

      {/* Main Grid */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center max-w-6xl">
        {/* Image Column */}
        <div ref={imageRef} className="flex justify-center md:justify-end">
          <div className="group w-full max-w-[500px] border-2 border-purple-200 rounded-xl shadow-lg p-2 bg-white overflow-hidden transition-all duration-300">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co/FLshRw8F/about.jpg"
                alt="About us"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-purple-800/20 rounded-lg pointer-events-none transition-all duration-500 group-hover:bg-purple-800/40"></div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="space-y-6">
          <h3 className="about-para text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p className="about-para text-gray-700 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo qui
            accusamus iusto autem officiis debitis, similique aperiam rem
            possimus eum aliq nderit laborum corporis quibusdam tempora?
            Officiis dolores quaerat error saepe, consectetur placeat repellat
            quo excepturi voluptate, nisi assumenda culpa sed pariatur?
          </p>
          <p className="about-para text-gray-700 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo qui
            accusamus iusto autem officiis debitis, similique aperiam rem
            possimus eum aliquam a, facere ex sequi velit.
          </p>
          <p className="about-para text-gray-700 text-base md:text-lg">
            Deserunt at, distinctio animi, ad assumenda quaerat tempore ea quasi
            magnam architecto molestias ducimus ratione fuga iste consequatur
            officiis doloremque, reprehenderit laborum corporis quibusdam.
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
