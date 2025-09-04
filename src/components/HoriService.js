import React, { useRef, useCallback } from 'react';
import servicesData from '../../public/services';
import Image from 'next/image';
import Link from 'next/link';

const HoriService = () => {
  const scrollRef = useRef(null);

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation Arrows */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:flex items-center justify-center"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:flex items-center justify-center"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Services Carousel */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-6 px-2"
      >
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="relative flex-shrink-0 w-80 snap-start group"
          >
            <Link 
              href='https://wa.me/message/W22H3ZBHYRG4H1'
              className="block relative h-72 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={service.image} 
                  alt={`${service.category} printing services`} 
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                  quality={85}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {service.category}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">
                    Professional quality printing services
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Fast delivery</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-sm font-medium">Order now</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile scroll indicator */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2">
          {servicesData.slice(0, 3).map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoriService;
