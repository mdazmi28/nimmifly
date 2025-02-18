import React from 'react';
import LottieAnimation from './animation/LottieAnimation';

const HeroSection = () => {
    return (
        <div className='h-screen'>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='md:w-1/2 items-center justify-center'>12</div>
                <div className='md:w-1/2'>
                <LottieAnimation/></div>

            </div>
            
        </div>
    );
};

export default HeroSection;