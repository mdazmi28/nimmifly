'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
// import ContactSection from '@/components/ContactSection';

const LandingPage = () => {
    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            keyboard={{
                enabled: true,
            }}
            // pagination={{
            //     clickable: true,
            // }}
            modules={[Mousewheel, Pagination, Keyboard]}
            className="h-screen"
        >
            <SwiperSlide>
                <HeroSection />
            </SwiperSlide>
            <SwiperSlide>
                <ServicesSection />
            </SwiperSlide>
            {/* <SwiperSlide>
                <ContactSection />
            </SwiperSlide> */}
        </Swiper>
    );
};

export default LandingPage;