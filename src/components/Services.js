import React from 'react';
import servicesData from '../../public/services';
import Link from 'next/link';
import { Inika } from 'next/font/google';
import Image from 'next/image';
import HoriService from './HoriService';

const inika = Inika({
  weight: ['400'],
  subsets: ['latin'],
});

const Services = () => {
    return (
        <section className={`${inika.className} py-20 px-4 md:px-8 lg:px-16 w-full bg-gradient-to-b from-white to-gray-50`}>
            {/* Browse by Category Section */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-12">
                    Browse by Category
                </h1>
                <HoriService/>

                {/* Services Section */}
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mt-20 mb-12">
                    Our Services
                </h1>
                <div className="grid gap-8 max-w-5xl mx-auto">
                    {servicesData.slice(0,5).map((service, index) => (
                        <div 
                            key={index} 
                            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                                <div className="flex p-6 items-start">
                                    <div className="flex-1 pr-8">
                                        <div className="flex items-center mb-6 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                                            <span className="text-3xl mr-4">{service.icon}</span>
                                            <h2 className="text-2xl font-semibold text-gray-800">
                                                {service.category}
                                            </h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {service.services.map((item, i) => (
                                                <li 
                                                    key={i} 
                                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-48 h-48 relative flex-shrink-0 hidden md:block">
                                        <Image 
                                            src={service.image} 
                                            alt={service.category} 
                                            fill
                                            className="object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 2}
                                        />
                                    </div>
                                </div>
                            </Link> 
                        </div>
                    ))}
                </div>

                {/* More Services Button */}
                <div className="flex justify-center mt-16">
                    <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Explore More Services
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Services;