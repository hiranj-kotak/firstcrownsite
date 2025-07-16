import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

const sectionColors = {
  hero: { bg: '#3B0764', text: '#ffffff' },
  about: { bg: '#ffffff', text: '#000000' },
  founders: { bg: '#3B0764', text: '#ffffff' },
  number: { bg: '#3B0764', text: '#ffffff' },
  work: { bg: '#ffffff', text: '#000000' },
  service: { bg: '#3B0764', text: '#ffffff' },
  client: { bg: '#ffffff', text: '#000000' },
  faq: { bg: '#3B0764', text: '#ffffff' },
  contact: { bg: '#ffffff', text: '#000000' },
}

function Home() {
  const mainContainerRef = useRef(null)
  const [textColor, setTextColor] = useState('#ffffff')
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
    const mainContainer = mainContainerRef.current

    // Iterate over each section to create a ScrollTrigger
    Object.keys(sectionRefs).forEach((sectionKey) => {
      const sectionEl = sectionRefs[sectionKey].current
      if (!sectionEl) return

      ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 70%', // When the top of the section hits the middle of the screen
        end: 'bottom 70%', // When the bottom of the section leaves the middle of the screen
        markers: true,
        // Animate the background color on enter
        onEnter: () => {
          gsap.to(mainContainer, {
            backgroundColor: sectionColors[sectionKey].bg,
            duration: 0.5,
            ease: 'power1.inOut',
          });
          setTextColor(sectionColors[sectionKey].text);
        },
        onEnterBack: () => {
          gsap.to(mainContainer, {
            backgroundColor: sectionColors[sectionKey].bg,
            duration: 0.5,
            ease: 'power1.inOut',
          });
          setTextColor(sectionColors[sectionKey].text);
        },
      })
    })

    // Cleanup function to kill all ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, []) // Empty dependency array ensures this runs only once on mount

  return (
    <div
      ref={mainContainerRef}
      style={{
        backgroundColor: sectionColors.hero.bg,
        color: textColor,
        transition: 'color 0.5s ease',
      }} // Set initial background color
    >
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
      <div ref={sectionRefs.client} style={{ border: '2px solid red' }} className='overflow-visible'>
        <Client ref={sectionRefs.client} />
      </div>
      <div ref={sectionRefs.faq}>
        <FAQ />
      </div>
      <div ref={sectionRefs.contact}>
        <ContactForm />
      </div>
      {/* <div ref={sectionRefs.footer}>
        <Footer />
      </div> */}
    </div>
  )
}

export default Home