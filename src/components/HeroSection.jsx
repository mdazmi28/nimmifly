import React from 'react';
import LottieAnimation from './animation/LottieHeroAnimation';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='w-full overflow-hidden'>
    <div className='w-full h-full bg-[url(/assets/images/1.png)] bg-cover bg-bottom bg-no-repeat absolute inset-0'>
        <div className='flex flex-col-reverse md:flex-row h-full'>
            <div className='md:w-1/2 items-center justify-center'>12</div>
            <div className='md:w-1/2'>
                <LottieAnimation/>
            </div>
        </div>
    </div>
</div>
    );
};

export default HeroSection;