import React from 'react';
import servicesData from '../../public/services';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo_notBg.svg';

const ServiceList = () => {
    const categoryIcons = {
        0: (
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
        ),
        1: (
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
        ),
        2: (
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4"/>
            </svg>
        ),
        3: (
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
        ),
        4: (
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
        )
    };

    return (
        <div className="absolute right-0 w-[95vw] md:w-[85vw] lg:w-[70vw] -mt-5 mr-2 md:mr-8 z-50">
            <div className="backdrop-blur-lg bg-white/98 border border-gray-200/80 rounded-3xl shadow-2xl p-6 md:p-8 animate-in slide-in-from-top-2 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <Image 
                            src={logo} 
                            alt="PrintRocket Logo" 
                            width={200} 
                            height={50}
                            className="h-12 w-auto object-contain"
                        />
                    </div>
                    <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                        Fast & Reliable
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {servicesData.slice(0, 5).map((category, index) => (
                        <div 
                            key={index} 
                            className="group hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 rounded-2xl p-4 transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-md"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                                    {categoryIcons[index] || (
                                        <span className="text-lg">{category.icon}</span>
                                    )}
                                </div>
                                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors duration-300">
                                    {category.category}
                                </h4>
                            </div>
                            
                            <ul className="space-y-2">
                                {category.services.slice(0, 4).map((service, i) => (
                                    <li key={i}>
                                        <Link 
                                            href="https://wa.me/message/W22H3ZBHYRG4H1"
                                            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm group/item"
                                        >
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover/item:bg-blue-400 transition-colors duration-200"></div>
                                            <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                                                {service.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                                {category.services.length > 4 && (
                                    <li className="text-xs text-gray-500 italic">
                                        +{category.services.length - 4} more services
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <p className="text-sm text-gray-600">
                                Need custom printing? We've got you covered!
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Available 24/7 • Fast delivery • Best prices
                            </p>
                        </div>
                        <Link href="https://wa.me/message/W22H3ZBHYRG4H1">
                            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                                <span>Get Quote Now</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceList;
