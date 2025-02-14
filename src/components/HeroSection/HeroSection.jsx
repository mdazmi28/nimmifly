import React from "react";
import HeroLottieAnimation from "../Animations/HeroLottieAnimation";

const HeroSection = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row">
            {/* Left Side of Hero Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="pl-10">
                    <h1
                        className="text-4xl md:text-6xl font-bold text-blue-800"
                        style={{ WebkitTextStroke: "2px black" }}
                    >
                        Welcome to NimmiFly
                    </h1>
                    <p className="text-gray-700">
                        Your One Stop Solution to minimizing cost
                    </p>
                </div>
            </div>
            {/* Right Side of Hero Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                {/* <LottieHeroSectionAnimation/> */}
                <HeroLottieAnimation />
            </div>
        </div>
    );
};

export default HeroSection;
