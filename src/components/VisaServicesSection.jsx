import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const servicesData = [
    {
        id: 1,
        title: 'Visa Services',
        image: '/assets/images/visa_service.png',
        points: [
            'Personalized one-to-one consultation',
            'Detailed document review and optimization',
            'Strategic application approach',
            'End-to-end application support',
            'Post-submission guidance'
        ]
    },
    {
        id: 2,
        title: 'Application Services',
        image: '/assets/images/application_service.png',
        points: [
            'Comprehensive application strategy',
            'Profile evaluation and enhancement',
            'Document preparation and review',
            'Interview preparation',
            'Continuous application tracking'
        ]
    },
    {
        id: 3,
        title: 'SOP Services',
        image: '/assets/images/sop.png',
        points: [
            'Personalized SOP writing',
            'Content optimization',
            'Narrative development',
            'Editing and refinement',
            'Unique storytelling approach'
        ]
    }
];


const ServicesSection = () => {
    return (
        <div className='w-full h-full bg-[url(/assets/images/section_image.png)] dark:bg-[url(/assets/images/dark_section.png)] bg-cover bg-bottom bg-no-repeat absolute inset-0'>
            <div className='flex justify-center md:pt-20 pt-20 text-black md:text-4xl font-bold mb-8 md:mb-0'>OUR SERVICES</div>
            <div className='md:h-[500px] md:px-32 h-fit'>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        // When the screen width is >= 640px
                        640: {
                            slidesPerView: 1, // Show 1 slide on mobile
                        },
                        // When the screen width is >= 768px
                        768: {
                            slidesPerView: 2, // Show 2 slides on medium screens
                        },
                        // When the screen width is >= 1024px
                        1024: {
                            slidesPerView: 3, // Show 3 slides on larger screens
                        },
                    }}
                >
                    {servicesData.map((service) => (
                        <SwiperSlide key={service.id} className="flex flex-col md:flex-row justify-center pb-7">
                            <div className="flex flex-col items-center w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                                <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <h2 className="text-xl font-bold mb-2 text-blue-600">{service.title}</h2>
                                <ul className="space-y-2">
                                    {service.points.map((point, index) => (
                                        <li key={index} className="text-gray-700">
                                            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ServicesSection;