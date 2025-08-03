import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { href: '#about', label: 'About us', onClick: (e) => handleScrollToSection(e, '#About') },
    { href: '#work', label: 'Work', onClick: (e) => handleScrollToSection(e, '#work') },
    { href: '#service', label: 'Service', onClick: (e) => handleScrollToSection(e, '#service') },
    { href: '#contact', label: 'Contact us', onClick: (e) => handleScrollToSection(e, '#contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/10 shadow-lg'
      : 'bg-dark-bg/90 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white flex-shrink-0">
          <span className="text-white">First</span>
          <span className="text-purple-300">Crown</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm xl:text-base font-medium text-white">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={item.onClick}
              className="relative group hover:text-purple-300 transition-colors duration-200"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
          <Link
            to="/careers"
            className="relative group hover:text-purple-300 transition-colors duration-200"
          >
            Career
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <button className="ml-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white p-2.5 rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1'
              }`}></span>
            <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
            <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1'
              }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
        ? 'max-h-screen opacity-100 visible'
        : 'max-h-0 opacity-0 invisible'
        }`}>
        <div className="bg-gradient-to-b from-dark-bg to-purple-900/50 backdrop-blur-md px-4 sm:px-6 py-6 space-y-2 border-t border-white/10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={item.onClick}
              className="block py-4 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-base font-medium text-white border-l-2 border-transparent hover:border-purple-400"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="block py-4 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-base font-medium text-white border-l-2 border-transparent hover:border-purple-400"
          >
            Career
          </Link>

          {/* Mobile CTA Button */}
          <div className="pt-4 pb-2">
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="pt-4 border-t border-white/10 mt-4">
            <div className="text-sm text-white/70 space-y-2">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                hello@firstcrown.com
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>
      )}
    </header>
  );
}

export default Navbar;
