import Image from 'next/image';
import React, { useState } from 'react';
import img from '../../public/img.png';
import ServiceList from './ServiceList';
import logo from '../../public/logo_notBg.svg';
import Link from 'next/link';

const Hero = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleHover = () => {
        setToggleMenu(true);
    }

    const handleHoverOutside = (e) => {
        if (!e.target.closest('.service-list-container') && !e.target.closest('button')) {
            setToggleMenu(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener('mouseover', handleHoverOutside);
        return () => {
            document.removeEventListener('mouseover', handleHoverOutside);
        };
    }, []);

  return (
        <>
        <div className='relative h-[100vh] w-full bg-white transition not-sm:h-[90vh] overflow-clip'>
            <nav className='flex justify-between items-center w-full h-20 px-16 border-b-2 border-gray-100 not-sm:flex-col'>
                <h1 id='logo' className='mt-7 not-sm:text-center not-sm:-mt-10'>
                    <Image src={logo} width={300} height={40} alt='logo'/>
                </h1>    
                <button 
                    onMouseEnter={handleHover}
                    className='h-10 my-auto px-4 border-2 text-gray-800 font-semibold transition border-gray-300 rounded-md hover:bg-gray-50 hover:border-blue-500 hover:text-blue-600 not-sm:hidden'
                >
                    Services
                </button>
                <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                    <button className='h-10 my-auto px-4 border-2 text-gray-800 font-semibold transition border-gray-300 rounded-md hover:bg-gray-50 hover:border-blue-500 hover:text-blue-600 not-sm:scale-140 not-sm:-ml-1 not-sm:mt-[-20px] sm:hidden'>
                        Order Now
                    </button>
                </Link>
                {toggleMenu && (
                    <div className="service-list-container absolute top-20 right-8 z-50">
                        <ServiceList />
                    </div>
                )}
            </nav>
            <div className='z-10 mx-auto lg:mx-16 mt-40 w-fit text-4xl lg:text-7xl lg:font-bold text-gray-800 tracking-tighter relative flex flex-col items-end'>
                <div className='flex flex-col items-end lg:flex-row gap-1.5'>
                    <h1>Hassle free <span className='bg-blue-600 rounded-sm px-1 text-white'>prints</span></h1>
                    <h1>in your hand.</h1>
                </div>
                <h1>Real Fast.</h1>
            </div>
            <h1 className='w-200 ml-16 my-4 not-sm:hidden text-gray-600 text-lg absolute'>
                PrintRocket, lets you order prints online with ease. Whether it's assignments, notes, banners, posters, or custom prints, just upload your file, choose your preferences, and get it delivered or ready for pickup—quick, affordable, and hassle-free!
            </h1>
            <Link href='https://wa.me/message/W22H3ZBHYRG4H1'>
                <button className='absolute top-130 ml-16 h-11 my-auto px-6 border-2 text-gray-800 font-semibold transition border-gray-300 rounded-md hover:bg-gray-50 hover:border-blue-500 hover:text-blue-600 not-sm:hidden'>
                    Order Now
                </button>
            </Link>
            <div className='h-fit top-0 w-full flex justify-center relative'>
                <Image 
                    className='absolute top-15 left-[52%] w-[50vw] not-sm:m-0 not-sm:left-[30%] not-sm:scale-200 sm:top-[-150px]' 
                    src={img} 
                    alt='vector'
                />
            </div>
        </div>
        </>
    );
}

export default Hero;