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
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-white">
          <span className="text-white">First</span>Crown
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-base lg:text-lg font-medium text-white">
          <a href="#about" onClick={(e) => handleScrollToSection(e, '#About')} className="hover:text-white/70 transition-colors duration-200">About us</a>
          <a href="#work" onClick={(e) => handleScrollToSection(e, '#work')} className="hover:text-white/70 transition-colors duration-200">Work</a>
          <a href="#service" onClick={(e) => handleScrollToSection(e, '#service')} className="hover:text-white/70 transition-colors duration-200">Service</a>
          <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="hover:text-white/70 transition-colors duration-200">Contact us</a>
          <Link to="/careers" className="hover:text-white/70 transition-colors duration-200">Career</Link>
          <button className="ml-4 bg-[#A855F7] hover:bg-[#9333EA] text-white px-4 py-2 rounded-full transition-colors duration-200">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-[#3B0764] px-4 sm:px-6 py-4 space-y-1 text-base font-medium text-white border-t border-white/10">
          <a 
            href="#about" 
            onClick={(e) => handleScrollToSection(e, '#About')} 
            className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            About us
          </a>
          <a 
            href="#work" 
            onClick={(e) => handleScrollToSection(e, '#work')} 
            className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Work
          </a>
          <a 
            href="#service" 
            onClick={(e) => handleScrollToSection(e, '#service')} 
            className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Service
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollToSection(e, '#contact')} 
            className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Contact us
          </a>
          <Link 
            to="/careers" 
            onClick={() => setIsOpen(false)} 
            className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Career
          </Link>
          <div className="pt-2">
            <button className="w-full bg-[#A855F7] hover:bg-[#9333EA] text-white px-4 py-3 rounded-full font-semibold transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
