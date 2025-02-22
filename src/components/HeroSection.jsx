'use client'
import React, { useState } from 'react';
import LottieAnimation from './animation/LottieHeroAnimation';
import Image from 'next/image';
import ContactModal from './modals/ContactModal';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='h-screen flex flex-col md:flex-row bg-[url(/assets/images/hero_image.png)] dark:bg-[url(/assets/images/dark_hero.png)] bg-cover bg-bottom bg-no-repeat'>
            <div className='w-full md:w-1/2 flex flex-col justify-start items-center px-9'>
                <div>
                    <Image
                        src="/assets/images/logo.png"
                        width={500}    // Specify appropriate width
                        height={300}   // Specify appropriate height
                        alt="Image"
                        className='w-20 h-20 md:w-80 md:h-80'
                        priority      // Optional: for important images
                        quality={75}  // Optional: adjust quality (default is 75)
                    />
                </div>
                <div>
                    <h1 className='text-2xl text-black dark:text-white'>The future is not something we enter, but something we create.</h1>

                </div>
                <div>
                    <button onClick={() => setIsModalOpen(true)} htmlFor="my_modal_7" className="px-8 py-3 text-black font-bold uppercase bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                        CONTACT US
                    </button>
                </div>



            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <LottieAnimation />
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </div>
    );
};

export default HeroSection;