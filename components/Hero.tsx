'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 md:pt-24 min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background Video with mobile optimizations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="/images/blackteamphoto.webp" // Fallback image while video loads
        >
          <source src="/images/istockphoto-1448575679-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay - slightly darker for better text readability on mobile */}
        <div className="absolute inset-0 bg-lapisBlue/60"></div>
      </div>

      {/* Content - improved for mobile */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-xl md:max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Your Smile Deserves the Best Care
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 drop-shadow-md">
            At Amazing Dental Care, we combine cutting-edge technology with compassionate care to deliver the best dental experience for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="tel:6096147861"
              className="bg-persimmon hover:bg-persimmon/90 text-white font-bold py-3 px-4 md:px-6 rounded-md text-center transition-colors shadow-lg text-sm sm:text-base"
            >
              Schedule Now: 609-614-7861
            </a>
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-dentalGreen hover:bg-dentalGreen/90 text-white font-bold py-3 px-4 md:px-6 rounded-md text-center transition-colors shadow-lg text-sm sm:text-base"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
