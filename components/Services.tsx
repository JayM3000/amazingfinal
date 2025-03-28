'use client';

import ServiceCard from './ServiceCard';

const Services = () => {
  // Service categories
  const generalServices = [
    'Emergency dental care',
    'Check ups',
    'Treatment of periodontal disease',
    'Tooth extraction',
    'Fillings',
    'Root canal',
    'Dental crowns',
    'Dental implants',
    'Teeth whitening',
    'Veneers',
    'Clear aligners',
  ];

  const dentureServices = [
    'Dentures made affordable',
    'Compare dentures',
    'Denture quality',
    'Partial & flexible dentures',
    'Full dentures',
    'SecureFit Implant Dentures',
    'Denture repair & reline',
    'Denture advice',
  ];

  const oralHealthServices = [
    'Cavities',
    'Gum disease',
    'Mouth & throat cancer',
    'Mouth sores & spots',
    'Oral health & overall health',
    'Oral hygiene',
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lapisBlue mb-3 md:mb-4">Our Dental Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs in one convenient location.
          </p>
        </div>

        {/* Responsive grid with improved spacing for mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {/* General Services Card */}
          <ServiceCard
            title="General Services"
            services={generalServices}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            color="bg-persimmon"
          />

          {/* Dentures Card */}
          <ServiceCard
            title="Dentures"
            services={dentureServices}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            color="bg-lapisBlue"
          />

          {/* Oral Health Card */}
          <ServiceCard
            title="Oral Health"
            services={oralHealthServices}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            }
            color="bg-dentalGreen"
          />
        </div>

        {/* CTA section with mobile optimization */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6 px-2">
            At Amazing Dental Care, we're committed to providing comprehensive dental care tailored to your unique needs.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-persimmon hover:bg-persimmon/90 text-white font-bold py-3 px-6 sm:px-8 rounded-md transition-colors shadow text-sm sm:text-base"
          >
            Schedule Your Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
