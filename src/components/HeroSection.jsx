// components/HeroSection.tsx
import { motion } from 'framer-motion'; // For animations
import { useState } from 'react';
import ContactModal from './modals/ContactModal';

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('/assets/images/Hero-section.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 h-full flex flex-col items-start justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Main Text */}
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    The future is not something we enter, but something we create.
                </motion.h1>

                {/* Apply Button */}
                <motion.button
                onClick={() => setIsModalOpen(true)} htmlFor="my_modal_7"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-8 py-4 bg-indigo-600 text-white rounded-full
                     font-semibold transition-all duration-300 ease-in-out
                     hover:bg-indigo-700 hover:shadow-xl
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Contact Now
                </motion.button>

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="text-white text-center">
                        <span className="block text-sm font-medium mb-2">Scroll to explore</span>
                        <svg
                            className="w-6 h-6 mx-auto animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </motion.div>
            </motion.div>

            {/* Interactive Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Add your particle effect here */}
            </div>
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default HeroSection;