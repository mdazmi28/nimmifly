// LandingPage.tsx
'use client'
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Make sure these component imports are correct and the files exist
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DestinationSection from '@/components/DestinationSection';
import Location from '@/components/Location';



// Define navLinks here since it's used in the Navbar
export const navLinks = [
    { name: 'Home', key: 'home' },
    { name: 'Services', key: 'services' },
    { name: 'Destinations', key: 'destinations' },
    { name: 'We Are At', key: 'location' },
];

const LandingPage = () => {
    const [activeSection, setActiveSection] = useState('home');
    const swiperRef = useRef(null);

    const sectionToIndex = {
        'home': 0,
        'services': 1,
        'destination': 2,
        'location': 3,
    };

    const indexToSection = {
        0: 'home',
        1: 'services',
        2: 'destination',
        3: 'location',
    };

    const handleSlideChange = (swiper) => {
        const index = swiper.activeIndex;
        setActiveSection(indexToSection[index] || 'home');
    };

    const handleNavClick = (section) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const index = sectionToIndex[section];
            if (index !== undefined) {
                swiperRef.current.swiper.slideTo(index);
            }
        }
    };

    return (
        <div className="relative h-screen">
            <div className="fixed top-0 w-full z-50">
                <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
            </div>
            
            <Swiper
                ref={swiperRef}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                keyboard={{
                    enabled: true,
                }}
                modules={[Mousewheel, Pagination, Keyboard]}
                className="h-screen"
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide>
                    <section id="home">
                        <HeroSection />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="services">
                        <ServicesSection />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="destinations">
                        <DestinationSection />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="">
                       <Location/>
                    </section>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <section id="destinations">
                        avf
                    </section>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default LandingPage;