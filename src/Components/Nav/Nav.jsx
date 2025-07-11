// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // Optional icons (or use Heroicons/any SVG)

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleScrollToSection = (event, sectionId) => {
//     event.preventDefault();
//     const section = document.getElementById(sectionId.substring(1));
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false); // Close menu on mobile after click
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <div className="text-lg font-bold text-gray-800">Logo</div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
//           <a href="#about" onClick={(e) => handleScrollToSection(e, '#About')} className="text-gray-800 hover:text-violet-600 transition">About us</a>
//           <a href="#work" onClick={(e) => handleScrollToSection(e, '#work')} className="text-gray-800 hover:text-violet-600 transition">Work</a>
//           <a href="#service" onClick={(e) => handleScrollToSection(e, '#service')} className="text-gray-800 hover:text-violet-600 transition">Service</a>
//           <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="text-gray-800 hover:text-violet-600 transition">Contact us</a>
//           <Link to="/careers" className="text-gray-800 hover:text-violet-600 transition">Career</Link>
//           <button className="ml-4 bg-[#A855F7] text-white px-4 py-2 rounded-full hover:bg-violet-600 transition">Get Started</button>
//         </nav>

//         {/* Mobile Toggle Button */}
//         <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Nav Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white/80 backdrop-blur-md px-6 py-4 space-y-4 text-sm font-medium">
//           <a href="#about" onClick={(e) => handleScrollToSection(e, '#About')} className="block text-gray-800 hover:text-violet-600 transition">About us</a>
//           <a href="#work" onClick={(e) => handleScrollToSection(e, '#work')} className="block text-gray-800 hover:text-violet-600 transition">Work</a>
//           <a href="#service" onClick={(e) => handleScrollToSection(e, '#service')} className="block text-gray-800 hover:text-violet-600 transition">Service</a>
//           <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="block text-gray-800 hover:text-violet-600 transition">Contact us</a>
//           <Link to="/careers" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-violet-600 transition">Career</Link>
//           <button className="w-full bg-[#A855F7] text-white px-4 py-2 rounded-full hover:bg-violet-600 transition">Get Started</button>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import FlowingMenu from './menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems =  [
    { link: '#', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'About', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Work', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Careers', image: 'https://picsum.photos/600/400?random=4' },
    { link: '#', text: 'Contact Us', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Founders', image: 'https://picsum.photos/600/400?random=4' },
  ];

  return (
    <div className="relative z-[100]">
      {/* Navbar */}
      <div className="w-full  mx-auto flex items-center justify-between px-[10vw] py-4 fixed top-0 left-0 right-0 z-[100]  backdrop-blur-md bg-white/10  border-b border-white/20 shadow-md">
        <div className="text-xl font-bold text-gray-800">
          <span className="text-black">Creative</span>fuel
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 flex items-center justify-center text-black text-3xl font-light"
        >
          {isOpen ? '×' : (
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="w-2 h-2 bg-black rounded-full" />
              ))}
            </div>
          )}
        </button>
      </div>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0  z-[99] flex justify-center pt-20  backdrop-blur-md bg-white/10  border-b border-white/20 shadow-md">
          <div className="w-full h-full">
            <FlowingMenu items={menuItems} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

