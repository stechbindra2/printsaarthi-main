'use client'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

import React from 'react';

const Page = () => {
  return (
    <>
    <div className='min-h-[100vh] w-[100hw]'>
      <Hero/>
      <Services/>
      <Footer/>
    </div>
    </>
  );
}

export default Page;
