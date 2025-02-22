import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import additional Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const destinationsData = [
    {
        id: 1,
        title: 'United States of America',
        image: '/assets/images/usa.jpeg', // Image of Manhattan Bridge
        overlayPosition: 'left'
    },
    {
        id: 2,
        title: 'Canada',
        image: '/assets/images/canada.jpeg', // Image of CN Tower
        overlayPosition: 'center'
    },
    {
        id: 3,
        title: 'Australia',
        image: '/assets/images/australia.jpeg', // Image of Sydney Opera House
        overlayPosition: 'right'
    }
];

const DestinationSection = () => {
    return (
        <div className='w-full h-full flex flex-col items-center px-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-center text-black dark:text-white my-10'>
                STUDY ABROAD DESTINATIONS
            </h1>

            <div className='w-full max-w-6xl'>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                        bulletClass: 'w-8 h-1 bg-gray-300 dark:bg-gray-600 mx-1 rounded-full cursor-pointer transition-all duration-300',
                        bulletActiveClass: '!bg-blue-600 dark:!bg-blue-400',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {destinationsData.map((destination) => (
                        <SwiperSlide key={destination.id}>
                            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg group cursor-pointer">
                                {/* Image */}
                                <img
                                    src={destination.image}
                                    alt={destination.title}
                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40">
                                    {/* Text Overlay */}
                                    <div className={`absolute bottom-6 w-full text-center text-white text-xl md:text-2xl font-semibold px-4`}>
                                        {destination.title}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination */}
                <div className="custom-pagination flex justify-center items-center mt-6 space-x-2" />
            </div>
        </div>
    );
};

// Add custom styles for smooth transitions
const customStyles = `
.swiper-slide {
    transition: all 0.3s ease;
}

.swiper-slide:hover {
    transform: translateY(-10px);
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
}

export default DestinationSection;