import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../../public/logo_notBg.svg';
import axios from 'axios';
import Link from 'next/link';

const Footer = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVisitCount = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://api.counterapi.dev/v1/printss/pagesaarthi/up');
                setCount(response.data?.count || 0);
            } catch (error) {
                console.error('Failed to fetch visit count:', error);
                setCount(0);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVisitCount();
    }, []);

    return (
        <footer className="bg-gradient-to-br from-[#1a1333] via-[#2a1c4d] to-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Image 
                                src={logo} 
                                alt="PrintRocket Logo" 
                                width={360} 
                                height={80}
                                className="h-14 md:h-16 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Your trusted partner for professional printing services. We deliver quality prints fast and affordable, making printing hassle-free for students and businesses.
                        </p>
                        
                        {/* Stats */}
                        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                            <div className="flex items-center space-x-2 mb-2">
                                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-xl font-semibold text-white">
                                    {isLoading ? 'Loading...' : `Loved by ${count} Students`}
                                </span>
                            </div>
                            <p className="text-gray-400">and counting every day!</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                            </svg>
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Our Services'},
                                { name: 'Pricing'},
                                { name: 'About Us'},
                                { name: 'Contact'},
                                { name: 'FAQ', }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href="https://wa.me/message/W22H3ZBHYRG4H1" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group">
                                        <span className="mr-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            Get in Touch
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Address</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        5th floor, Udhmodya Foundation,<br />
                                        Maharishi Kannad Bhawan,<br />
                                        University of Delhi
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Email</h4>
                                    <Link href="mailto:PrintRocket@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                        PrintRocket78@gmail.com
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                                    <div className="space-y-1">
                                        <Link href="tel:+919211202801" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                            +91 9211202801
                                        </Link>
                                        <Link href="tel:+918887760911" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                            +91 8887760911
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links & CTA */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        <div className="flex items-center space-x-6">
                            <span className="text-gray-400 font-medium">Follow us:</span>
                            <div className="flex items-center space-x-4">
                                <Link 
                                    href="https://wa.me/message/W22H3ZBHYRG4H1" 
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                                    aria-label="WhatsApp"
                                >
                                    <svg 
                                        className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </Link>
                                <Link 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                                    aria-label="Instagram"
                                >
                                    <svg 
                                        className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </Link>
                                <Link 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                                    aria-label="Facebook"
                                >
                                    <svg 
                                        className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        
                        <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                            <button className="bg-gradient-to-r from-[#622AD1] to-[#7c4ddb] hover:from-[#F89816] hover:to-[#ffad3c] flex items-center space-x-2 text-white px-6 py-3 rounded-xl font-semibold transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                                <span>Order Now</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-black/50">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © 2025 PrintRocket. All rights reserved. Made with ❤️ for students.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
