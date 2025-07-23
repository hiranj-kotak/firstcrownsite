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

// Define which sections use which theme
const sectionThemes = {
  hero: 'dark',
  about: 'light',
  founders: 'dark',
  number: 'dark',
  work: 'light',
  service: 'dark',
  client: 'light',
  faq: 'dark',
  contact: 'light',
}

function Home() {
  const mainContainerRef = useRef(null)
  const [currentTheme, setCurrentTheme] = useState('dark')

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

  // Function to toggle theme
  const toggleTheme = (theme) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  useEffect(() => {
    const mainContainer = mainContainerRef.current

    // Set initial theme
    toggleTheme('dark')

    // Iterate over each section to create a ScrollTrigger
    Object.keys(sectionRefs).forEach((sectionKey) => {
      const sectionEl = sectionRefs[sectionKey].current
      if (!sectionEl) return

      ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 70%',
        end: 'bottom 70%',
        markers: true, // Set to true for debugging
        onEnter: () => {
          const theme = sectionThemes[sectionKey]
          toggleTheme(theme)
        },
        onEnterBack: () => {
          const theme = sectionThemes[sectionKey]
          toggleTheme(theme)
        },
      })
    })

    // Cleanup function to kill all ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={mainContainerRef}
      className="bg-theme-bg  text-theme-text min-h-screen"
    >
      Optional: Manual theme toggle button for testing
      <div className="fixed top-32 right-4 z-50">
        <button
          onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}
          className="bg-[#252525] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
        >
          Toggle to {currentTheme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

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
    </div>
  )
}

export default Home