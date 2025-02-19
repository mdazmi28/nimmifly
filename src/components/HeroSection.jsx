import React from 'react';
import LottieAnimation from './animation/LottieHeroAnimation';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-full h-full bg-[url(/assets/images/hero_image.png)] bg-cover bg-bottom bg-no-repeat absolute inset-0'>
                <div className='flex flex-col-reverse md:flex-row h-full'>
                    <div className='md:w-1/2 flex flex-col gap-4 items-center justify-start'>
                        <img src="/assets/images/logo.png" alt="Image" className='w-20 h-20 md:w-80 md:h-80' />
                        <h1 className='text-2xl'>The future is not something we enter, but something we create.</h1>
                        <button htmlFor="my_modal_7" className="px-8 py-3 text-black font-bold uppercase bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                            CONTACT US
                        </button>

                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <LottieAnimation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;