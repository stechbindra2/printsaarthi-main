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
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Image 
                                src={logo} 
                                alt="PrintRocket Logo" 
                                width={460} 
                                height={90}
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
                                { name: 'Our Services', icon: '🖨️' },
                                { name: 'Pricing', icon: '💰' },
                                { name: 'About Us', icon: '👥' },
                                { name: 'Contact', icon: '📞' },
                                { name: 'FAQ', icon: '❓' }
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
                                {[
                                    { name: 'WhatsApp', icon: '💬', color: 'text-green-400' },
                                    { name: 'Instagram', icon: '📸', color: 'text-pink-400' },
                                    { name: 'Facebook', icon: '👥', color: 'text-blue-400' }
                                ].map((social, index) => (
                                    <Link key={index} href="https://wa.me/message/W22H3ZBHYRG4H1" className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 ${social.color}`}>
                                        <span className="text-lg">{social.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
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
