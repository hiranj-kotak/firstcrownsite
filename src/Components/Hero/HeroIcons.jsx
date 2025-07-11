import React, { useEffect, useRef, useState } from 'react';
import icon1 from '../../assets/icon-1.svg';
import icon2 from '../../assets/icon-2.svg';
import icon3 from '../../assets/icon-3.svg';
import icon4 from '../../assets/icon-4.svg';
import icon5 from '../../assets/icon-5.svg';
import icon6 from '../../assets/icon-6.svg';
import icon7 from '../../assets/icon-7.svg';
import icon8 from '../../assets/icon-8.svg';
import rocket from '../../assets/rocket.png';
import target from '../../assets/target.png';

// Your original icon definitions
const ICONS = [
  { src: icon1, name: 'icon1' }, // donet
  { src: icon2, name: 'icon2' }, // dollor
  { src: icon3, name: 'icon3' }, // camera
  { src: icon4, name: 'icon4' }, // share
  { src: icon5, name: 'icon5' }, // insta
  { src: icon6, name: 'icon6' }, // yt
  { src: icon7, name: 'icon7' }, // tw
  { src: icon8, name: 'icon8' }, // tlg
];

// Your original fixed positions for each icon (top/left in %)
const ICON_POSITIONS = [
  { top: 10, left: 10 },
  { top: 0, left: 30 },
  { top: 0, left: 80 },
  { top: 40, left: 3 },
  { top: 40, left: 40 },
  { top: 70, left: 15 },
  { top: 65, left: 80 },
  { top: 75, left: 90 },
  { top: 75, left: 55 }, // These last two positions might be for extra icons not in `ICONS`
  { top: 70, left: 70 }, // Make sure ICONS.length doesn't exceed ICON_POSITIONS.length
];

const HeroIcons = ({
  iconSize = 64,
  swingStrength = 15, // max degrees
  floatStrength = 15, // max px
  parallaxStrength = 60, // This strength now applies to the whole div movement
}) => {
  const [time, setTime] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Animate time for swing/float
  useEffect(() => {
    let frame;
    const animate = () => {
      setTime((prevTime) => prevTime + 0.016); // Use previous state for accuracy
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []); // Run once on mount and clean up on unmount

  // Mouse parallax for the whole frame
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the container
        // Normalized from -0.5 to 0.5
        const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
        setParallax({ x, y });
      }
    };

    // Attach listener to window for full page mouse tracking
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Run once on mount and clean up on unmount

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{
        overflow: 'hidden', // Prevents scrollbars if the container moves slightly
        // Apply the parallax transformation to the entire container div
        transform: `translate(${-parallax.x * parallaxStrength}px, ${-parallax.y * parallaxStrength
          }px)`,
        transition: 'transform 0.2s cubic-bezier(.4,0,.2,1)', // Smooth transition for the container movement
      }}
    >
      {ICONS.map((icon, i) => {
        // Ensure there's a position for the current icon index
        const pos = ICON_POSITIONS[i];
        if (!pos) return null; // Skip if no position defined for this icon

        // Each icon gets a unique swing/float animation
        const swing = Math.sin(time * 1.2 + i) * swingStrength;
        const float = Math.sin(time + i) * floatStrength;

        return (
          <img
            key={icon.name}
            src={icon.src}
            alt={icon.name}
            style={{
              position: 'absolute',
              // Apply float animation directly to the 'top' property
              top: `calc(${pos.top}% + ${float}px)`,
              left: `calc(${pos.left}%)`, // Left is static based on initial position
              width: iconSize,
              height: iconSize,
              pointerEvents: 'auto', // As per your original code, if icons are meant to be interactive
              // Apply swing animation via transform (rotation)
              transform: `rotate(${swing}deg)`,
              // Transition for the 'top' property, and for 'transform' (swing)
              transition: 'top 0.2s ease-out, transform 0.2s ease-out',
              zIndex: 20,
            }}
            className="select-none"
            draggable={false}
          />
        );
      })}
    </div>
  );
};

export default HeroIcons;