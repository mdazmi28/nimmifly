'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Pagination, Navigation, Autoplay, EffectCards } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ... servicesData remains the same ...
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
    },
    // {
    //     id: 4,
    //     title: 'Visa Services',
    //     image: '/assets/images/visa_service.png',
    //     points: [
    //         'Personalized one-to-one consultation',
    //         'Detailed document review',
    //         'Strategic application approach',
    //         'End-to-end application support',
    //         'Post-submission guidance'
    //     ]
    // },
    // {
    //     id: 5,
    //     title: 'Application Services',
    //     image: '/assets/images/application_service.png',
    //     points: [
    //         'Comprehensive application strategy',
    //         'Profile evaluation and enhancement',
    //         'Document preparation and review',
    //         'Interview preparation',
    //         'Continuous application tracking'
    //     ]
    // },
    // {
    //     id: 6,
    //     title: 'SOP Services',
    //     image: '/assets/images/sop.png',
    //     points: [
    //         'Personalized SOP writing',
    //         'Content optimization',
    //         'Narrative development',
    //         'Editing and refinement',
    //         'Unique storytelling approach'
    //     ]
    // }
];

const ServicesSection = () => {
    const [isHovered, setIsHovered] = useState(null);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-cover bg-bottom bg-no-repeat'>
        {/* <div className='h-screen flex justify-center items-center bg-[url(/assets/images/section_image.png)] dark:bg-[url(/assets/images/dark_section.png)] bg-cover bg-bottom bg-no-repeat'> */}
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-12'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-black dark:text-white'>
                        Our Services
                    </h2>
                    <div className='w-24 h-1 bg-blue-600 mx-auto mt-4'></div>
                </motion.div>

                <div className='w-full max-w-7xl mx-auto'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper !pb-12" // Added padding bottom for pagination
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
                        {servicesData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <motion.div 
                                    initial="hidden"
                                    animate="visible"
                                    variants={cardVariants}
                                    className="h-full"
                                >
                                    <div className="flex flex-col items-center h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                                        <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                                            <Image
                                                src={service.image}
                                                width={128}
                                                height={128}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                                priority
                                            />
                                        </div>
                                        <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                                            {service.title}
                                        </h2>
                                        <ul className="space-y-2 flex-grow">
                                            {service.points.map((point, index) => (
                                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};


// Custom Swiper styles with more modern look
const customStyles = `
.swiper-button-next,
.swiper-button-prev {
    color: #3B82F6;
    background: rgba(255, 255, 255, 0.9);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-size: 20px;
}

.swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #3B82F6;
    opacity: 0.5;
    transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
    opacity: 1;
    width: 20px;
    border-radius: 5px;
}

.swiper-container {
    padding: 20px 0;
}
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
}


export default ServicesSection;