import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../../public/logo_notBg.svg';
import axios from 'axios';

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
        <footer className="min-h-[50vh] w-full bg-black text-white py-16 px-8 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Logo and Address Section */}
                <div className="w-full md:w-1/2">
                    <div className="h-28 -mt-4 mb-8">
                        <Image 
                            src={logo} 
                            width={200} 
                            height={40} 
                            alt="PrintRocket Logo"
                            className="h-full object-contain"
                        />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold text-gray-200">Address:</h2>
                        <p className="text-gray-300 max-w-md">
                            5th floor, Udhmodya Foundation, 
                            Maharishi Kannad Bhawan, 
                            University of Delhi
                        </p>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="mb-8">
                        <p className="text-lg text-gray-200">
                            💖 {isLoading ? 'Loading...' : (
                                <span>
                                    Loved by <span className="font-bold text-white">{count}</span> Students and Counting!
                                </span>
                            )}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-200">Contact:</h2>
                        <div>
                            <h3 className="text-lg font-medium text-gray-200">Email:</h3>
                            <p className="text-gray-300">PrintRocket78@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-200">Phone:</h3>
                            <p className="text-gray-300">
                                +91 9211202801, +91 8887760911
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
