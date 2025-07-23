import React from 'react'
import rocket from '../../assets/hero-i.svg'
import cloud from '../../assets/clouds.png'
import WordListSwap from './WordListSwap'
import HeroIcons from './HeroIcons'

const heroWords = ['Results', 'Growth', 'Leads', 'Impact']

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] pt-[15vh] sm:pt-[12vh] lg:pt-[10vh] pb-[15vh] sm:pb-[20vh] min-h-screen w-full overflow-hidden">
      {/* Left Section */}
      <div className="relative z-10 flex flex-col gap-4 lg:flex-[0.5] w-full text-center lg:text-left mt-4 sm:mt-6 lg:mt-0">
        <div className="flex flex-col gap-2 sm:gap-4 min-h-[8rem] sm:min-h-[10rem] lg:min-h-[10rem] items-center lg:items-start">
          <div className="font-thin text-[3rem] xs:text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem] xl:text-[7.5rem] leading-none">
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

        <div className="mt-6 sm:mt-4">
          <button
            type="button"
            className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base px-6 sm:px-5 py-3 sm:py-2.5 w-full sm:w-auto transition-all duration-200"
          >
            Request your free strategy call
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 lg:flex-[0.5] w-full mt-8 lg:mt-0 max-w-md sm:max-w-lg lg:max-w-none mx-auto">
        <img src={rocket} alt="rocket" className="w-full mix-blend-multiply" />
      </div>
    </section>
  )
}

export default Hero
