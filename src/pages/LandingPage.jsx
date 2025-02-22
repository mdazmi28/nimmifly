// LandingPage.tsx
'use client'
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DestinationSection from '@/components/DestinationSection';
import LocationSection from '@/components/LocationSection';

const LandingPage = () => {
    return (
        <div className='w-full'>
            <section id='home' className=' '>
                <HeroSection />
            </section>
            
            <section id='services' className=''>
                <ServicesSection />
            </section>
            <section id='destination' className=''>
                <DestinationSection />
            </section>
            <section id='location' className=''>
                <LocationSection />
            </section>
            
            {/* Add other sections as needed */}
        </div>
    );
};

export default LandingPage;