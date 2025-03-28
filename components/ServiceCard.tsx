'use client';

import { ReactNode, useState } from 'react';

interface ServiceCardProps {
  title: string;
  services: string[];
  icon: ReactNode;
  color: string; // For the icon background
}

const ServiceCard = ({ title, services, icon, color }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // For mobile: initially show only 4 services, expand to show all on click
  const displayServices = isExpanded ? services : services.slice(0, 4);
  const hasMoreServices = services.length > 4;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl sm:hover:scale-[1.01] h-full">
      <div className={`${color} p-4 sm:p-6 flex items-center justify-center`}>
        <div className="text-white">{icon}</div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-lapisBlue mb-3 sm:mb-4">{title}</h3>
        <ul className="space-y-2">
          {displayServices.map((service, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-persimmon mr-2 mt-1 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base text-gray-700">{service}</span>
            </li>
          ))}
        </ul>
        
        {/* Show/Hide services toggle for mobile */}
        {hasMoreServices && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-persimmon hover:text-lapisBlue text-sm font-medium flex items-center transition-colors sm:hidden"
          >
            {isExpanded ? 'Show Less' : `Show ${services.length - 4} More`}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
