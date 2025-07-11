import React from 'react'
import rocket from '../../assets/hero-illu.gif'
import cloud from '../../assets/clouds.png'
import WordListSwap from './WordListSwap'
import HeroIcons from './HeroIcons'

const heroWords = ['Results', 'Growth', 'Leads', 'Impact']

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row  justify-between items-center px-[5vw] md:px-[10vw] pt-[10vh] pb-[20vh] min-h-screen w-full overflow-hidden">
      {/* Grid Lines */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-primary" />
      {/* Floating Icons */}
      {/* <HeroIcons/> */}
      {/* <HeroIcons /> */}
      {/* Left Section */}
      <div className="relative z-10 flex flex-col gap-4 md:flex-[0.5] w-full text-black text-center md:text-left mt-10 md:mt-0">
        <div className="flex flex-col gap-4 min-h-[6rem] md:min-h-[10rem] items-center md:items-start">
          <div className="font-thin text-[5rem] md:text-[5rem] lg:text-[7.5rem] leading-none">
            Organic
          </div>

          <WordListSwap
            texts={heroWords}
            mainClassName="text-[5rem] md:text-[5rem] lg:text-[7.5rem] font-bold leading-none text-purple-600 overflow-hidden relative flex items-end min-h-[4rem] md:min-h-[8rem]"
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

        <div className="text-sm mt-4 text-gray-600 px-4 md:px-0">
          We offer flexible pricing plans so that our <br />
          clients can take advantage of services.
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-fit md:w-fit"
          >
            Request your free strategy call
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 md:flex-[0.5] w-full max-w-[500px]">
        <img src={rocket} alt="rocket" className="w-full mix-blend-multiply" />
      </div>

      {/* Cloud
      <div className="absolute bottom-0 left-0 w-full -mb-[1vh] md:mb-[0vh] z-10">
        <img src={cloud} alt="cloud" className="w-full" />
      </div> */}
    </section>
  )
}

export default Hero
