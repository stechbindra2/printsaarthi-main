import React, { useRef } from 'react';
import servicesData from '../../public/services';
import Image from 'next/image';
import Link from 'next/link';

const HoriService = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Navigation Arrows */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hidden md:block"
        aria-label="Scroll left"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hidden md:block"
        aria-label="Scroll right"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Services Carousel */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 pb-8 px-4"
      >
        {servicesData.slice().map((service, index) => (
          <div 
            key={index} 
            className="relative flex-shrink-0 w-72 snap-start group"
          >
            <Link 
              href='https://wa.me/message/W22H3ZBHYRG4H1'
              className="block relative h-80 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={service.image} 
                  alt={service.category} 
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  fill
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-lg font-semibold text-center bg-white/95 backdrop-blur-md rounded-xl px-6 py-3 text-gray-800 shadow-xl">
                  {service.category}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoriService;