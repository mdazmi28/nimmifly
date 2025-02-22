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
import Image from 'next/image';


const servicesData = [
    {
        id: 1,
        title: 'Visa Services',
        image: '/assets/images/visa_service.png',
        points: [
            'Personalized one-to-one consultation',
            'Detailed document review',
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
        <div className='w-full  bg-[url(/assets/images/section_image.png)] dark:bg-[url(/assets/images/dark_section.png)] bg-cover bg-bottom bg-no-repeat absolute inset-0'>
            <div className='flex justify-center md:pt-10 pt-10 text-black dark:text-white md:text-4xl font-bold mb-8 md:mb-8'>
                OUR SERVICES
            </div>
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
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {servicesData.map((destination) => (
                        <SwiperSlide key={destination.id} className="flex flex-col md:flex-row justify-center pb-7">
                            <div className="flex flex-col items-center w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                                <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4shadow-2xl">
          
                                    <Image
                                        src={destination.image}
                                        width={500}    // Specify appropriate width
                                        height={300}   // Specify appropriate height
                                        alt={destination.title}
                                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                                        priority      // Optional: for important images
                                        quality={75}  // Optional: adjust quality (default is 75)
                                    />
                                </div>
                                <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                                    {destination.title}
                                </h2>
                                <ul className="space-y-2">
                                    {destination.points.map((point, index) => (
                                        <li key={index} className="text-gray-700 dark:text-gray-300">
                                            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

// Add custom styles for Swiper navigation
const customStyles = `
.swiper-button-next,
.swiper-button-prev {
    color: #3B82F6;
}

.swiper-pagination-bullet {
    background: #3B82F6;
}

.swiper-pagination-bullet-active {
    background: #2563EB;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
}

export default ServicesSection;