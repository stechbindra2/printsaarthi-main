'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const AlphaMarquee = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="w-full bg-gradient-to-r from-[#622AD1] via-[#7c4ddb] to-[#F89816] shadow-lg">
            {/* Main Marquee Container */}
            <div className="relative overflow-hidden py-3">
                <div className="flex items-center justify-center space-x-8">
                    {/* Marquee Content */}
                    <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
                        {/* Badge */}
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 flex-shrink-0">
                            <span className="relative flex h-3 w-3 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                            </span>
                            <span className="text-white font-semibold text-sm md:text-base flex-shrink-0">Alpha Testing</span>
                        </div>

                        {/* Link Text */}
                        <span className="text-white font-medium text-sm md:text-base flex-shrink-0">→</span>

                        <Link href="https://delivery1-printrocket.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <span className="text-white font-semibold text-sm md:text-base hover:text-yellow-200 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                                🚀 Try our Alpha: delivery1-printrocket.vercel.app
                            </span>
                        </Link>

                        <span className="text-white font-medium text-sm md:text-base flex-shrink-0">→</span>

                        {/* Divider - repeat for marquee effect */}
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 flex-shrink-0">
                            <span className="relative flex h-3 w-3 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                            </span>
                            <span className="text-white font-semibold text-sm md:text-base flex-shrink-0">Alpha Testing</span>
                        </div>

                        <span className="text-white font-medium text-sm md:text-base flex-shrink-0">→</span>

                        <Link href="https://delivery1-printrocket.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <span className="text-white font-semibold text-sm md:text-base hover:text-yellow-200 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                                🚀 Try our Alpha: delivery1-printrocket.vercel.app
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Close Button */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-200 transition-colors duration-300 z-10"
                aria-label="Close marquee"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default AlphaMarquee;
