import { useEffect, useRef } from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Number from '../../Components/Number/Number'
import FoundersSection from '../../Components/FoundersSection/FoundersSection'
import Work from '../../Components/Work/Work'
import Client from '../../Components/Client/Client'
import Footer from '../../Components/Footer/Footer'
import Service from '../../Components/Service/Service'
import FAQ from '../../Components/Faq'
import ContactForm from '../../Components/ContactForm/ContactForm'

const sectionColors = {
  hero: '#2a015b',
  about: '#fffff',
  founders: '#4c1d95',
  number: '#5b21b6',
  work: '#6b21a8',
  service: '#7e22ce',
  client: '#8b5cf6',
  faq: '#9333ea',
  contact: '#d8b4fe',
  footer: '#2a015b',
}

function Home() {
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    founders: useRef(null),
    number: useRef(null),
    work: useRef(null),
    service: useRef(null),
    client: useRef(null),
    faq: useRef(null),
    contact: useRef(null),
    footer: useRef(null),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) {
          const sectionId = visible.target.getAttribute('data-section')
          const bgColor = sectionColors[sectionId]

          // 💡 Apply directly to the body
          document.body.style.transition = 'background-color 0.6s ease'
          document.body.style.backgroundColor = bgColor
        }
      },
      {
        threshold: 0.3,
      }
    )

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', key)
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full transition-colors duration-500">
      <div ref={sectionRefs.hero}>
        <Hero />
      </div>
      <div ref={sectionRefs.about}>
        <About />
      </div>
      <div ref={sectionRefs.founders}>
        <FoundersSection />
      </div>
      <div ref={sectionRefs.number}>
        <Number />
      </div>
      <div ref={sectionRefs.work}>
        <Work />
      </div>
      <div ref={sectionRefs.service}>
        <Service />
      </div>
      <div ref={sectionRefs.client}>
        <Client />
      </div>
      <div ref={sectionRefs.faq}>
        <FAQ />
      </div>
      <div ref={sectionRefs.contact}>
        <ContactForm />
      </div>
      <div ref={sectionRefs.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Home
