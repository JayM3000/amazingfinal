'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lapisBlue text-white pt-8 sm:pt-12 pb-4 sm:pb-6">
      <div className="container mx-auto px-4 md:px-8">
        {/* Mobile friendly grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 sm:mb-8">
          {/* Logo & About - more compact on mobile */}
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <Image 
                src="/images/amazinggracedentallogo-removebg-preview.png" 
                alt="Amazing Dental Care Logo" 
                width={40} 
                height={40}
                className="mr-2 sm:mr-3 bg-white rounded-full p-1 w-auto h-auto"
              />
              <h3 className="text-lg sm:text-xl font-bold">Amazing Dental Care</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
              Providing exceptional dental care with a focus on patient comfort and satisfaction.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-white hover:text-persimmon transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-persimmon transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-persimmon transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links - same size for better touch targets on mobile */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 sm:block gap-2">
              {['Home', 'Services', 'Insurance', 'About', 'Contact'].map((item, index) => (
                <li key={index} className={`${index % 2 === 0 ? 'mr-2' : ''} sm:mr-0`}>
                  <button 
                    onClick={() => {
                      const section = document.getElementById(item.toLowerCase());
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base sm:block py-1"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Location sections - consolidated for mobile */}
          <div className="sm:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* NJ Location */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Willingboro, NJ Office</h4>
              <address className="not-italic text-gray-300 text-sm sm:text-base mb-1 sm:mb-2">
                215 Sunset Rd, Suite 308<br />
                Willingboro, NJ 08046
              </address>
              <a 
                href="tel:6096147861" 
                className="text-gray-300 hover:text-white transition-colors font-medium flex items-center text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                609-614-7861
              </a>
            </div>
            
            {/* PA Location */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Philadelphia, PA Office</h4>
              <address className="not-italic text-gray-300 text-sm sm:text-base mb-1 sm:mb-2">
                7439 Frankford Ave, 2nd Floor<br />
                Philadelphia, PA
              </address>
              <a 
                href="tel:2156135808" 
                className="text-gray-300 hover:text-white transition-colors font-medium flex items-center text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                215-613-5808
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright - simplified for mobile */}
        <div className="pt-4 sm:pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} Amazing Dental Care. All Rights Reserved.
          </p>
          <a 
            href="http://www.amazinggracedentalcare.com" 
            className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block mt-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.amazinggracedentalcare.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
