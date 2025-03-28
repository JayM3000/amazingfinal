'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for header styling
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'insurance', 'about', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      sectionElements.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(sections[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Content */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo & Practice Name - Improved mobile layout */}
          <div className="flex items-center">
            <Image 
              src="/images/amazinggracedentallogo-removebg-preview.png" 
              alt="Amazing Dental Care Logo" 
              width={50} 
              height={50}
              className="mr-2 sm:mr-3 w-auto h-auto"
            />
            <div>
              <h1 className="text-persimmon font-bold text-base sm:text-lg md:text-xl">Amazing Dental Care</h1>
              {/* Phone numbers for larger screens */}
              <div className="hidden md:flex space-x-4 text-sm">
                <a href="tel:6096147861" className="text-lapisBlue hover:text-persimmon transition-colors font-medium">
                  NJ: 609-614-7861
                </a>
                <a href="tel:2156135808" className="text-lapisBlue hover:text-persimmon transition-colors font-medium">
                  PA: 215-613-5808
                </a>
              </div>
              {/* Small screen phone number - visible on mobile/small screen only */}
              <div className="block md:hidden">
                <a href="tel:6096147861" className="text-lapisBlue hover:text-persimmon transition-colors text-xs">
                  Call: 609-614-7861
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {['Home', 'Services', 'Insurance', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium hover:text-persimmon transition-colors text-sm lg:text-base ${
                  activeSection === item.toLowerCase() ? 'text-persimmon' : 'text-lapisBlue'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle - better positioned */}
          <button
            className="md:hidden text-persimmon p-2 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu - improved styling */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white mt-2 rounded-md shadow-lg">
            <nav className="flex flex-col">
              {['Home', 'Services', 'Insurance', 'About', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium hover:text-persimmon transition-colors py-3 px-4 text-center ${
                    index !== 0 ? 'border-t border-gray-100' : ''
                  } ${
                    activeSection === item.toLowerCase() ? 'text-persimmon' : 'text-lapisBlue'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-row space-x-4 justify-center py-3 border-t border-gray-200">
                <a href="tel:6096147861" className="bg-lapisBlue hover:bg-persimmon text-white py-2 px-3 rounded-md text-sm transition-colors">
                  NJ: 609-614-7861
                </a>
                <a href="tel:2156135808" className="bg-lapisBlue hover:bg-persimmon text-white py-2 px-3 rounded-md text-sm transition-colors">
                  PA: 215-613-5808
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
