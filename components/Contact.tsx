'use client';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lapisBlue mb-3 md:mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and help you schedule your next dental appointment.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form - Mobile optimized */}
            <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-persimmon mb-4 sm:mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lapisBlue"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lapisBlue"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lapisBlue"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Preferred Location</label>
                  <select
                    id="location"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lapisBlue"
                  >
                    <option value="">Select Location</option>
                    <option value="nj">Willingboro, NJ</option>
                    <option value="pa">Philadelphia, PA</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lapisBlue"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-persimmon hover:bg-persimmon/90 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors shadow text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information - Mobile optimized */}
            <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-persimmon mb-4 sm:mb-6">Get in Touch</h3>
              
              <div className="space-y-5 sm:space-y-6">
                {/* NJ Location */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-lapisBlue mb-1 sm:mb-2">Willingboro, NJ Office</h4>
                  <address className="not-italic text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                    215 Sunset Rd, Suite 308<br />
                    Willingboro, NJ 08046
                  </address>
                  <a 
                    href="tel:6096147861" 
                    className="text-lapisBlue hover:text-persimmon transition-colors font-medium flex items-center text-sm sm:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    609-614-7861
                  </a>
                </div>
                
                {/* PA Location */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-lapisBlue mb-1 sm:mb-2">Philadelphia, PA Office</h4>
                  <address className="not-italic text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                    7439 Frankford Ave, 2nd Floor<br />
                    Philadelphia, PA
                  </address>
                  <a 
                    href="tel:2156135808" 
                    className="text-lapisBlue hover:text-persimmon transition-colors font-medium flex items-center text-sm sm:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    215-613-5808
                  </a>
                </div>
                
                {/* Hours - Mobile responsive table */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-lapisBlue mb-1 sm:mb-2">Business Hours</h4>
                  <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                    <li className="grid grid-cols-2">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="grid grid-cols-2">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </li>
                    <li className="grid grid-cols-2">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                {/* Website */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-lapisBlue mb-1 sm:mb-2">Online</h4>
                  <a 
                    href="http://www.amazinggracedentalcare.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lapisBlue hover:text-persimmon transition-colors font-medium flex items-center text-sm sm:text-base break-words"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="break-all">www.amazinggracedentalcare.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
