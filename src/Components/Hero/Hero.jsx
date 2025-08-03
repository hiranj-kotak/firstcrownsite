import React, { useState, useEffect } from 'react'
import rocket from '../../assets/hero-i.svg'
import cloud from '../../assets/clouds.png'
import WordListSwap from './WordListSwap'
import HeroIcons from './HeroIcons'
import Spline from '@splinetool/react-spline'
import "./Hero.css"

const heroWords = ['Results', 'Growth', 'Leads', 'Impact']

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Detect mobile vs desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Set loaded state after component mounts
    setTimeout(() => setIsLoaded(true), 100)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile Hero Component
  const MobileHero = () => (
    <section className="relative flex flex-col justify-center items-center px-4 sm:px-6 pt-[20vh] pb-[10vh] min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-900/20 to-transparent">
      {/* Mobile Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Mobile Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm mx-auto">
        {/* Mobile Title */}
        <div className="mb-8">
          <div className="font-thin text-4xl sm:text-5xl leading-none mb-2">
            Organic
          </div>
          <WordListSwap
            texts={heroWords}
            mainClassName="text-4xl sm:text-5xl font-bold leading-none overflow-hidden relative flex items-end min-h-[3rem] sm:min-h-[4rem]"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        {/* Mobile Description */}
        <div className="text-sm sm:text-base mb-8 px-4 opacity-90 leading-relaxed">
          We offer flexible pricing plans so that our clients can take advantage of services.
        </div>

        {/* Mobile CTA */}
        <div className="w-full">
          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Request your free strategy call
          </button>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Mobile Spline Scene */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-60">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/cWEP9QIQIoUuCXBe/scene.splinecode"
        />
      </div>
    </section>
  )

  // Desktop Hero Component
  const DesktopHero = () => (
    <section className="relative flex flex-row justify-between items-center px-6 lg:px-[10vw] pt-[10vh] pb-[20vh] min-h-screen w-full overflow-hidden">1
      {/* Desktop Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Desktop Left Section */}
      <div className="relative z-10 flex flex-col gap-6 lg:flex-[0.45] w-full text-left">
        <div className="flex flex-col gap-6 min-h-[10rem] items-start">
          <div className="font-thin text-6xl lg:text-7xl xl:text-8xl leading-none">
            Organic
          </div>

          <WordListSwap
            texts={heroWords}
            mainClassName="text-6xl lg:text-7xl xl:text-8xl font-bold leading-none overflow-hidden relative flex items-end min-h-[5rem] lg:min-h-[6rem] xl:min-h-[8rem]"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <div className="text-lg lg:text-xl mt-6 max-w-lg leading-relaxed opacity-90">
          We offer flexible pricing plans so that our clients can take advantage of services.
        </div>

        <div className="mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Request your free strategy call
          </button>
        </div>

        {/* Desktop Additional Features */}
        <div className="mt-12 flex items-center gap-8 text-sm opacity-70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Free Consultation</span>
          </div>
        </div>
      </div>

      {/* Desktop Right Section */}
      <div className="relative z-10 lg:flex-[0.55] w-full h-full" id='hero-sp'>
        <div className="relative w-full h-full min-h-[600px]">
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/cWEP9QIQIoUuCXBe/scene.splinecode"
          />
        </div>
      </div>
    </section>
  )

  // Render based on device type
  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {isMobile ? <MobileHero /> : <DesktopHero />}
    </div>
  )
}

export default Hero
