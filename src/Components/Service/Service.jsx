import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Tilt from 'react-parallax-tilt'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Web Design & Development',
    desc:
      'We craft responsive, high-performance websites from concept to launch, ensuring seamless user experience and robust functionality across all devices.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    desc:
      'Creating intuitive user experiences and stunning visual interfaces tailored for engagement, focusing on modern design principles for impactful digital products.',
    icon: '🎨',
  },
  {
    title: 'Mobile App Development',
    desc:
      'From initial wireframes to app store deployment, we build fast, scalable, and beautifully designed mobile applications for iOS and Android platforms.',
    icon: '📱',
  },
  {
    title: 'E-commerce Solutions',
    desc:
      'We develop custom e-commerce platforms with secure payment integration and responsive design, ensuring a smooth online shopping experience.',
    icon: '🛒',
  },
  {
    title: 'Brand Strategy',
    desc:
      'Crafting compelling brand identities and effective market strategies that genuinely resonate with your target audience and drive conversion.',
    icon: '🚀',
  },
  {
    title: 'Maintenance & Support',
    desc:
      'Providing reliable post-launch support and ongoing maintenance to ensure your digital product runs flawlessly, remains secure, and stays updated.',
    icon: '🛠️',
  },
]

export default function Service() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = gsap.utils.toArray('.work-card')

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section
      id="service"
      ref={sectionRef}
      className="py-16 px-4 md:px-10 min-h-screen"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          What we serve
        </h2>
        <p className="mt-2 text-sm md:text-base opacity-80">
          All things design, we got you covered.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.02}
            transitionSpeed={1000}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            className="work-card relative rounded-2xl p-6 bg-[#6B21A8] border border-[#7E22CE] outline outline-1 outline-[#885fe7] shadow-md hover:shadow-2xl transition-shadow duration-300 bg-theme-bg text-theme-text"
          >
            <div className="flex flex-col gap-3">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-lg font-semibold leading-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80">
                {service.desc}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}
