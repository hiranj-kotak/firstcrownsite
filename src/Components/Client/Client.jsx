'use client'

import Marquee from 'react-fast-marquee'
import clients from '../../Data/clients.json'
import theme from '../../Data/theme'

const rotations = ['-0.4deg', '1.5deg', '-0.3deg']
const yOffsets = ['0px', '0px', '40px'] // third row shifted down

export default function Client() {
  return (
    <section
      className="w-full py-20"
      style={{ background: theme.colors.white }}
    >
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold"
          style={{ color: theme.colors.text }}
        >
          Our client
        </h2>
        <p className="mt-2" style={{ color: theme.colors.textSecondary }}>
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
            className="min-w-[150px] h-[80px] flex items-center justify-center text-white text-sm font-medium rounded-md mr-5"
            style={{ background: theme.colors.primary }}
          >
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  )
}
