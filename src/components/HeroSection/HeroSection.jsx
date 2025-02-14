import React from "react";
import HeroLottieAnimation from "../Animations/HeroLottieAnimation";

const HeroSection = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row">
            {/* Left Side of Hero Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 p-4">
                {/* Logo */}
                <img
                    src="/images/logo.png"
                    alt="NimmiFly Logo"
                    className="w-20 h-20 object-contain"
                />

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    {/* Heading */}
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-800 text-center md:text-left"
                        style={{
                            WebkitTextStroke: "2px black",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        Welcome to NimmiFly
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-700 font-medium text-center md:text-left">
                        Your One Stop Solution to Minimizing Cost
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
