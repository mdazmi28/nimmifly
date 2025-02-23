'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Removed Navigation
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const destinationsData = [
    {
        id: 1,
        title: 'United States of America',
        image: '/assets/images/usa.jpeg',
    },
    {
        id: 2,
        title: 'Canada',
        image: '/assets/images/canada.jpeg',
    },
    {
        id: 3,
        title: 'Australia',
        image: '/assets/images/australia.jpeg',
    },
    {
        id: 4,
        title: 'Germany',
        image: '/assets/images/germany.jpeg',
    },
    // {
    //     id: 5,
    //     title: 'Canada',
    //     image: '/assets/images/canada.jpeg',
    // },
    // {
    //     id: 6,
    //     title: 'Australia',
    //     image: '/assets/images/australia.jpeg',
    // },
];

const DestinationSection = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-[url(/assets/images/section_image.png)] dark:bg-[url(/assets/images/dark_section.png)] bg-cover bg-bottom bg-no-repeat'>
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        STUDY ABROAD DESTINATIONS
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"/>
                </div>

                {/* Swiper Container */}
                <div className="max-w-7xl mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12"
                    >
                        {destinationsData.map((destination) => (
                            <SwiperSlide key={destination.id}>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer mx-2">
                                    {/* Image */}
                                    <Image
                                        src={destination.image}
                                        fill
                                        alt={destination.title}
                                        className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        quality={90}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                                        <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                                            {destination.title}
                                        </h3>
                                        <div className="flex justify-center mt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="custom-pagination flex justify-center items-center mt-8 space-x-2" />
                </div>
            </div>
        </div>
    );
};

// Custom styles - Removed navigation-related styles
const customStyles = `
    .swiper-pagination-bullet {
        width: 30px;
        height: 4px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        opacity: 0.5;
        transition: all 0.3s ease;
    }

    .swiper-pagination-bullet-active {
        background: #3B82F6;
        opacity: 1;
        width: 40px;
    }

    .swiper-slide {
        transition: all 0.3s ease;
    }

    .swiper-slide-active {
        transform: scale(1.02);
    }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
}

export default DestinationSection;