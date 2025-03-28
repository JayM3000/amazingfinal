'use client';

const Insurance = () => {
  // Removed "Payment Arrangements" as requested
  const insurancePlans = [
    'ALL PPO&apos;S',
    'Horizon New Jersey',
    'United Health Care',
    'Care Credit',
    'Well Care',
    'Aetna Better Health',
  ];

  return (
    <section id="insurance" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lapisBlue mb-4">Insurance Plans Accepted</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with a variety of insurance providers to ensure your dental care is affordable and accessible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Changed layout to a simpler, more balanced 2x3 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insurancePlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-lapisBlue rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center"
              >
                <div className="bg-persimmon rounded-full p-4 mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-lapisBlue">{plan}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Don't see your insurance listed? Please contact our office to verify coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:6096147861" 
                className="bg-lapisBlue hover:bg-lapisBlue/90 text-white font-bold py-3 px-6 rounded-md text-center transition-colors shadow"
              >
                NJ: 609-614-7861
              </a>
              <a 
                href="tel:2156135808" 
                className="bg-lapisBlue hover:bg-lapisBlue/90 text-white font-bold py-3 px-6 rounded-md text-center transition-colors shadow"
              >
                PA: 215-613-5808
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
