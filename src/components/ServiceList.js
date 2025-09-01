import React from 'react';
import servicesData from '../../public/services';
import Link from 'next/link';

const ServiceList = () => {
    return (
        <div className="absolute right-0 w-[90vw] md:w-[80vw] lg:w-[60vw] -mt-5 mr-4 md:mr-8 z-50">
            <div className="backdrop-blur-md bg-white/95 border border-gray-200 rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((category, index) => (
                        <div 
                            key={index} 
                            className="group hover:bg-gray-50 rounded-xl p-4 transition-all duration-300"
                        >
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
                                <span className="text-2xl">{category.icon}</span>
                                {category.category}
                            </h3>
                            <ul className="space-y-2">
                                {category.services.map((service, i) => (
                                    <li 
                                        key={i}
                                        className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full group-hover:before:bg-blue-400 before:transition-colors"
                                    >
                                        <Link 
                                            href="https://wa.me/message/W22H3ZBHYRG4H1"
                                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceList;