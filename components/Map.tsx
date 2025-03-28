'use client';

const Map = () => {
  return (
    <section id="locations" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lapisBlue mb-3 md:mb-4">Our Locations</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Visit us at one of our convenient locations in New Jersey or Pennsylvania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* New Jersey Location - Mobile optimized */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="h-60 sm:h-72 md:h-80 relative">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Map of Willingboro, NJ Office</p>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-persimmon mb-1 sm:mb-2">Willingboro, NJ Office</h3>
              <address className="not-italic text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
                215 Sunset Rd, Suite 308<br />
                Willingboro, NJ 08046
              </address>
              <a 
                href="tel:6096147861" 
                className="text-lapisBlue hover:text-persimmon transition-colors text-base sm:text-lg font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                609-614-7861
              </a>
            </div>
          </div>

          {/* Pennsylvania Location - Mobile optimized */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="h-60 sm:h-72 md:h-80 relative">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Map of Philadelphia, PA Office</p>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-persimmon mb-1 sm:mb-2">Philadelphia, PA Office</h3>
              <address className="not-italic text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
                7439 Frankford Ave, 2nd Floor<br />
                Philadelphia, PA
              </address>
              <a 
                href="tel:2156135808" 
                className="text-lapisBlue hover:text-persimmon transition-colors text-base sm:text-lg font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                215-613-5808
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
