import React from 'react'
import rocket from '../../assets/hero-i.svg'
import cloud from '../../assets/clouds.png'
import WordListSwap from './WordListSwap'
import HeroIcons from './HeroIcons'
import Spline from '@splinetool/react-spline'
import "./Hero.css"

const heroWords = ['Crafting Crowns', 'Not Just Campaigns']

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center px-[5vw] md:px-[10vw] pt-[10vh] pb-[20vh] min-h-screen w-full overflow-hidden">
      {/* Left Section */}
      <div className="relative z-10 flex flex-col gap-4 md:flex-[0.5] lg:flex-[0.5] w-full text-center md:text-left mt-0 md:mt-0">
        <div className="flex flex-col gap-4 min-h-[6rem] md:min-h-[10rem] items-center md:items-start">
          <div className="font-thin text-[5rem] md:text-[5rem] lg:text-[5rem] leading-none">
            First Crown 
          </div>

          <WordListSwap
            texts={heroWords}
            mainClassName="text-[5rem] md:text-[5rem] lg:text-[7rem] font-bold leading-none overflow-hidden relative flex items-end min-h-[4rem] md:min-h-[8rem]"
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

        <div className="text-lg mt-4 px-4 md:px-0">
         We don’t run campaigns we build empires. At
First Crown Media, 
<br />
we turn brands into icons,
stories into headlines, and content into culture.
<br />
 If
you’re ready to rule, we’re ready to crown you.
        </div>

        <div className="mt-4">
        <button className=" bg-[#A855F7]  text-white px-4 py-2 rounded-full  transition">
        Request your free strategy call
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 md:flex-[0.5] lg:flex-[0.5] w-full flex align-center justify-center" id='hero-sp'>
      {/* <Spline className='w-full '
       
         scene="https://prod.spline.design/cWEP9QIQIoUuCXBe/scene.splinecode" 
       />  */}
       {/* <Spline
        scene="https://prod.spline.design/j89rFjD-GaQp0Ucv/scene.splinecode" 
      /> */}
        <img src={rocket} alt="rocket" className="w-full scale-115 mix-blend-multiply" />
      </div>
    </section>
  )
}

export default Hero
