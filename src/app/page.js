'use client'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import AlphaMarquee from '@/components/AlphaMarquee';

import React from 'react';

const Page = () => {
  return (
    <>
    <AlphaMarquee />
    <div className='min-h-[100vh] w-[100hw]'>
      <Hero/>
      <Services/>
      <Footer/>
    </div>
    </>
  );
}

export default Page;
