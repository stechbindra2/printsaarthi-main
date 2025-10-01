import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import img from '../../public/img.png';
import ServiceList from './ServiceList';
import logo from '../../public/logo_notBg.svg';
import Link from 'next/link';

const Hero = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleHover = () => {
        setToggleMenu(true);
    }

    const handleHoverOutside = (e) => {
        if (!e.target.closest('.service-list-container') && !e.target.closest('button')) {
            setToggleMenu(false);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        document.addEventListener('mouseover', handleHoverOutside);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            document.removeEventListener('mouseover', handleHoverOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
        <div className='relative min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-orange-50 overflow-hidden'>
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
                <div className='flex justify-between items-center w-full h-20 px-4 md:px-16'>
                    <div className='logo-container flex items-center'>
                        <Image 
                            src={logo} 
                            alt="PrintRocket Logo" 
                            width={2500} 
                            height={600}
                            className="h-16 md:h-20 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <button 
                            onMouseEnter={handleHover}
                            className='flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50'
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span>Services</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                            <button className='flex items-center space-x-2 bg-gradient-to-r from-[#622AD1] to-[#7c4ddb] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#F89816] hover:to-[#ffad3c]'>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                                <span>Order Now</span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold'>
                                Order
                            </button>
                        </Link>
                    </div>
                </div>

                {toggleMenu && (
                    <div className="service-list-container absolute top-full right-8 z-50">
                        <ServiceList />
                    </div>
                )}
            </nav>

            {/* Hero Content */}
            <div className='pt-32 pb-20 px-4 md:px-16'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Content */}
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-[#622AD1] rounded-full text-sm font-medium">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                                </svg>
                                #1 Student Choice
                            </div>
                            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight'>
                                Hassle-free{' '}
                                <span className='bg-gradient-to-r from-[#622AD1] to-[#4f21aa] bg-clip-text text-transparent'>
                                    prints
                                </span>
                                <br />
                                delivered{' '}
                                <span className='relative'>
                                    fast
                                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-400" viewBox="0 0 100 12" fill="currentColor">
                                        <path d="M2 8c20-4 40-4 60 0s40 4 60 0" stroke="currentColor" strokeWidth="3" fill="none"/>
                                    </svg>
                                </span>
                            </h1>
                        </div>

                        <p className='text-xl text-gray-600 max-w-2xl leading-relaxed'>
                            PrintRocket delivers professional printing services to your doorstep. From assignments to business cards, banners to custom prints—we've got you covered with quality, speed, and affordability.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                                <button className='flex items-center justify-center space-x-2 bg-gradient-to-r from-[#622AD1] to-[#7c4ddb] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#F89816] hover:to-[#ffad3c] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-lg'>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Start Printing</span>
                                </button>
                            </Link>

                        </div>

                        {/* Trust indicators */}
                        <div className='flex items-center space-x-8 pt-8'>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-gray-900'>1000+</div>
                                <div className='text-sm text-gray-600'>Happy Students</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-gray-900'>24/7</div>
                                <div className='text-sm text-gray-600'>Service</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-gray-900'>30min</div>
                                <div className='text-sm text-gray-600'>Delivery</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className='relative'>
                        <div className='relative z-10'>
                            <Image 
                                className='w-full h-auto animate-float' 
                                src={img} 
                                alt='PrintRocket printing services illustration'
                                priority
                                width={800}
                                height={600}
                            />
                        </div>
                        
                        {/* Background decorations */}
                        <div className='absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse'></div>
                        <div className='absolute bottom-10 left-10 w-16 h-16 bg-orange-200 rounded-full opacity-50 animate-pulse delay-1000'></div>
                        <div className='absolute top-1/2 left-0 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-pulse delay-500'></div>
                    </div>
                </div>
            </div>

            {/* Features highlight */}
            <div className='px-4 md:px-16 pb-20'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
                            <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4'>
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>Lightning Fast</h3>
                            <p className='text-gray-600'>Get your prints ready in 30 minutes or delivered within hours.</p>
                        </div>

                        <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
                            <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                                </svg>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>Student Friendly</h3>
                            <p className='text-gray-600'>Affordable pricing designed specifically for students and small businesses.</p>
                        </div>

                        <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
                            <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4'>
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>Quality Guaranteed</h3>
                            <p className='text-gray-600'>Professional-grade printing with 100% satisfaction guarantee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
