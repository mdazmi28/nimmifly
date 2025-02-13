import React from 'react';
import LottieHeroSectionAnimation from './LottieHeroSectionAnimation';

const HeroSection = () => {
    return (
        <div className='h-screen flex flex-col md:flex-row'>
            {/* Left Side of Hero Section */}
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-gray-800 items-center'>Welcome to my NimmiFly</h1>
                <p className='text-gray-700'>Your One Stop Solution to minimizing cost</p>
            </div>
            {/* Right Side of Hero Section */}
            <div className='w-full md:w-1/2'>
                {/* <LottieHeroSectionAnimation/> */}
            
            </div>


        </div>
    );
};

export default HeroSection;