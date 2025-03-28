import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lapisBlue mb-4">About Amazing Dental Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide exceptional dental care with a focus on patient comfort and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/dr_andrew-removebg-preview.png"
              alt="Dr. Abolarin"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-persimmon mb-6">Our Core Values and Commitment to You</h3>
            <p className="text-gray-700 mb-6">
              At Amazing Grace Dental Care, we adhere to core principles that guide our practice and ensure outstanding service for all our patients:
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-persimmon rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-lapisBlue mb-2">Integrity</h4>
                  <p className="text-gray-700">
                    We prioritize your best interests, treating you with the same care and respect as we would our own family members.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dentalGreen rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-lapisBlue mb-2">Reliability</h4>
                  <p className="text-gray-700">
                    Our patients trust us because we are there when they need us most, providing consistent, exceptional service and dental care.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-lapisBlue rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-lapisBlue mb-2">Honesty</h4>
                  <p className="text-gray-700">
                    We work closely with you as partners in your dental health, ensuring you have the final say in your treatment decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-700 mb-6">
                Our mission is to lead oral healthcare in our communities by bringing you the best that dentistry has to offer, including advanced techniques, technology, and services.
              </p>
              <h3 className="text-xl font-bold text-persimmon mb-4">Modern Dentistry and Advanced Technology to Protect Your Smile</h3>
              <p className="text-gray-700 mb-4">
                Dr. Abolarin combines his extensive training and expertise to offer a comprehensive range of dental services, making it convenient for families to receive care in one location.
              </p>
              <p className="text-gray-700 mb-4">
                In addition to routine preventive teeth cleanings and checkups, we provide services such as comprehensive implant dentistry and orthodontic treatment with clear aligners.
              </p>
              <p className="text-gray-700 mb-6">
                We understand that visiting the dentist can be challenging for some patients, so we offer various types of dental sedation to help you receive the care you need in the most comfortable manner possible.
              </p>
              <h3 className="text-xl font-bold text-persimmon mb-4">Delivering a Patient-Centered Dental Experience</h3>
              <p className="text-gray-700 mb-4">
                Our patients are at the heart of everything we do. We are dedicated to providing personalized, compassionate dental care for every member of your family.
              </p>
              <p className="text-gray-700">
                If you're looking for an exceptional family dentist in Willingboro, NJ, or Philadelphia, PA, look no further than Amazing Grace Dental Care. You can book your next visit with us online at <a href="http://www.amazinggracedentalcare.com" className="text-lapisBlue hover:text-persimmon transition-colors font-medium">www.amazinggracedentalcare.com</a> or by calling our offices directly. We look forward to meeting you and helping you achieve a healthy, beautiful smile!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
