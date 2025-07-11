import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Number from '../../Components/Number/Number'
import FoundersSection from '../../Components/FoundersSection/FoundersSection'
import Work from '../../Components/Work/Work'
import Client from '../../Components/Client/Client'
import { motion } from 'framer-motion'
import Footer from '../../Components/Footer/Footer'
import Service from '../../Components/Service/Service'
import FAQ from '../../Components/Faq'
import ContactForm from '../../Components/ContactForm/ContactForm'

function Home() {
  return (
    <div className="w-auto">
      <Hero className="p-4" />
      <About className="mt-8" />
      <FoundersSection />
      <Number />
      <Work />
      <Service />
      <Client />
      <FAQ />
      <ContactForm/>
      <Footer />
    </div>
  )
}

export default Home
