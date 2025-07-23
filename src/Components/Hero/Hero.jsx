import React from 'react'
import rocket from '../../assets/hero-i.svg'
import cloud from '../../assets/clouds.png'
import WordListSwap from './WordListSwap'
import HeroIcons from './HeroIcons'
import Spline from '@splinetool/react-spline'
import "./Hero.css"

const heroWords = ['Results', 'Growth', 'Leads', 'Impact']

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] pt-[15vh] sm:pt-[12vh] lg:pt-[10vh] pb-[15vh] sm:pb-[20vh] min-h-screen w-full overflow-hidden">
      {/* Left Section */}
      <div className="relative z-10 flex flex-col gap-4 md:flex-[0.5] lg:flex-[0.45] w-full text-center md:text-left mt-0 md:mt-0">
        <div className="flex flex-col gap-4 min-h-[6rem] md:min-h-[10rem] items-center md:items-start">
          <div className="font-thin text-[5rem] md:text-[5rem] lg:text-[7.5rem] leading-none">
            Organic
          </div>

          <WordListSwap
            texts={heroWords}
            mainClassName="text-[3rem] xs:text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem] xl:text-[7.5rem] font-bold leading-none overflow-hidden relative flex items-end min-h-[3rem] xs:min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[8rem]"
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

        <div className="text-sm sm:text-base mt-4 px-2 sm:px-4 lg:px-0 max-w-md mx-auto lg:mx-0">
          We offer flexible pricing plans so that our <br className="hidden sm:block" />
          clients can take advantage of services.
        </div>

        <div className="mt-4">
          <button className=" bg-[#A855F7]  text-white px-4 py-2 rounded-full  transition">
            Request your free strategy call
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 md:flex-[0.5] lg:flex-[0.55] w-full" id='hero-sp'>
        <Spline className='w-full '

          scene="https://prod.spline.design/cWEP9QIQIoUuCXBe/scene.splinecode"
        />
        {/* <Spline
        scene="https://prod.spline.design/j89rFjD-GaQp0Ucv/scene.splinecode" 
      /> */}
        {/* <img src={rocket} alt="rocket" className="w-full mix-blend-multiply" /> */}
      </div>
    </section>
  )
}

export default Hero
