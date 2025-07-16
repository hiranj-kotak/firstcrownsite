'use client'

import Marquee from 'react-fast-marquee'
import clients from '../../Data/clients.json'

const rotations = ['-0.4deg', '1.5deg', '-0.3deg']
const yOffsets = ['0px', '0px', '40px'] // third row shifted down

export default function Client({ sectionRef }) {
  return (
    <section ref={sectionRef} className="w-full py-20 overflow-visible">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Our client
        </h2>
        <p className="mt-2 opacity-80">
          The best ideas aren't made with clients, they're made with partners.
        </p>
      </div>
      <div className="space-y-12">
        {rotations.map((rotate, index) => (
          <ScrollingRow
            key={index}
            items={[...clients, ...clients]}
            direction={index % 2 === 0 ? 'right' : 'left'}
            rotate={rotate}
            offsetY={yOffsets[index]}
          />
        ))}
      </div>
    </section>
  )
}

function ScrollingRow({ items, direction, rotate, offsetY = '0px' }) {
  return (
    <div
      className="transform origin-left w-full"
      style={{
        transform: `rotate(${rotate}) translateY(${offsetY})`,
      }}
    >
      <Marquee
        direction={direction}
        speed={40}
        pauseOnHover={true}
        gradient={false}
        className="flex"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[150px] h-[80px] flex items-center justify-center text-sm font-medium rounded-md mr-5"
            style={{
              background: 'rgba(147,51,234,1)', // replace with CSS variable if needed
              color: 'white', // Optional: or let it inherit if your ScrollTrigger handles text color
            }}
          >
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  )
}
