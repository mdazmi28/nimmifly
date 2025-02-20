// components/ServicesSection.jsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade } from 'swiper/modules';
import { services } from '@/data/servicesData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const ServicesSection = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-full h-full bg-[url(/assets/images/section_image.png)] dark:bg-[url(/assets/images/dark_section.png)] bg-cover bg-bottom bg-no-repeat absolute inset-0'>
                <Swiper
                    modules={[Mousewheel, EffectFade]}
                    direction={'vertical'}
                    slidesPerView={1}
                    mousewheel={true}
                    effect={'fade'}
                    speed={800}
                    nested={true}
                    className="h-full"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col-reverse md:flex-row h-full'>
                                {/* Left side - Image */}
                                <div className='w-full md:w-1/2 flex justify-center items-center p-8'>
                                    <div className="relative w-full max-w-[400px] aspect-square">
                                        <Image
                                            src={service.image}
                                            alt={service.section}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Right side - Content */}
                                <div className='w-full md:w-1/2 flex justify-center items-center p-8'>
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-xl aspect-square w-full max-w-[400px]">
                                        <div className="h-full flex flex-col justify-center p-6 md:p-12">
                                            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                                                {service.section}
                                            </h2>

                                            <div className="space-y-4">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start">
                                                        <span className="text-teal-500 mr-3 text-lg">•</span>
                                                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                            {feature}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ServicesSection;