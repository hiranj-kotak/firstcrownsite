import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-bg">
      <div className=" mx-auto flex items-center justify-between px-[5vw] md:px-[10vw] py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <span className="text-white">First</span>Crown
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium text-white">
          <a href="#about" onClick={(e) => handleScrollToSection(e, '#About')} className="hover:text-white/70 transition">About us</a>
          <a href="#work" onClick={(e) => handleScrollToSection(e, '#work')} className="hover:text-white/70 transition">Work</a>
          <a href="#service" onClick={(e) => handleScrollToSection(e, '#service')} className="hover:text-white/70 transition">Service</a>
          <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="hover:text-white/70 transition">Contact us</a>
          <Link to="/careers" className="hover:text-white/70 transition">Career</Link>
          <button className="ml-4 bg-[#A855F7] text-white px-4 py-2 rounded-full  transition">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary px-6 py-4 space-y-4 text-sm font-medium text-white">
          <a href="#about" onClick={(e) => handleScrollToSection(e, '#About')} className="block hover:text-white/70 transition">About us</a>
          <a href="#work" onClick={(e) => handleScrollToSection(e, '#work')} className="block hover:text-white/70 transition">Work</a>
          <a href="#service" onClick={(e) => handleScrollToSection(e, '#service')} className="block hover:text-white/70 transition">Service</a>
          <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="block hover:text-white/70 transition">Contact us</a>
          <Link to="/careers" onClick={() => setIsOpen(false)} className="block hover:text-white/70 transition">Career</Link>
          <button className="w-full bg-white text-primary px-4 py-2 rounded-full hover:bg-white/90 transition">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
