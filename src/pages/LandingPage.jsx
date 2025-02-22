// LandingPage.tsx
'use client'
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/VisaServicesSection';

const LandingPage = () => {
    const [activeSection, setActiveSection] = useState('home');
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        const index = swiper.activeIndex;
        setActiveSection(index === 0 ? 'home' : 'services');
    };

    const handleNavClick = (section) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const index = section === 'home' ? 0 : 1;
            swiperRef.current.swiper.slideTo(index);
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
            </Swiper>
        </div>
    );
};

export default LandingPage;