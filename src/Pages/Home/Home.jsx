import { useRef } from 'react'
import { motion } from 'framer-motion'
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
import { div, h1 } from 'motion/react-client'

const sectionColors = {
  hero: '#2a015b',
  about: '#3c1361',
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

  return (
    // <div>
    //   <div ref={sectionRefs.hero} data-section="hero">
    //     <Hero />
    //   </div>
    //   <div ref={sectionRefs.about} data-section="about">
    //     <About />
    //   </div>
    //   <div ref={sectionRefs.founders} data-section="founders">
    //     <FoundersSection />
    //   </div>
    //   <div ref={sectionRefs.number} data-section="number">
    //     <Number />
    //   </div>
    //   <div ref={sectionRefs.work} data-section="work">
    //     <Work />
    //   </div>
    //   <div ref={sectionRefs.service} data-section="service">
    //     <Service />
    //   </div>
    //   <div ref={sectionRefs.client} data-section="client">
    //     <Client />
    //   </div>
    //   <div ref={sectionRefs.faq} data-section="faq">
    //     <FAQ />
    //   </div>
    //   <div ref={sectionRefs.contact} data-section="contact">
    //     <ContactForm />
    //   </div>
    //   <div ref={sectionRefs.footer} data-section="footer">
    //     <Footer />
    //   </div>
    // </div>
   <div>
    <Hero/>
    <About/>
    <FoundersSection/>
    <Number/>
    <Work/>
    <Service/>
    <Client/>
    <FAQ/>
    <ContactForm/>
    <Footer/> 
   </div>
  )
}

export default Home
