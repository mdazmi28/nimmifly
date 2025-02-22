// Navbar.tsx
'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', key: 'home' },
        { name: 'Services', key: 'services' },
        { name: 'Destination', key: 'destination' },
        { name: 'About Us', key: 'about-us' },
        { name: 'News & Insights', key: 'news-and-insights' },
        { name: 'We Are At', key: 'location' },
    ];

    // Scroll to section
    const handleClick = (key) => {
        const element = document.getElementById(key);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    // Track scroll position and update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.key));
            const scrollPosition = window.scrollY + 100; // Offset for better accuracy

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(navLinks[index].key);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full flex justify-center pt-2 px-4 fixed top-0 z-50">
            {/* Desktop Navigation */}
            <nav className="hidden md:block bg-[#DFF2EF] backdrop-blur-lg py-3 px-6 rounded-full shadow-lg">
                <ul className="flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.key}>
                            <button
                                onClick={() => handleClick(link.key)}
                                className={`px-3 text-[15px] transition-all duration-300 ${
                                    activeSection === link.key
                                        ? 'text-black font-bold scale-105'
                                        : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="md:hidden w-full relative">
                <div className="bg-[#DFF2EF] backdrop-blur-lg pl-4 py-1 rounded-full shadow-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-black font-medium">
                            {navLinks.find(link => link.key === activeSection)?.name || 'Menu'}
                        </span>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-500 hover:text-gray-800 p-2"
                        >
                            {isMobileMenuOpen ? (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            ) : (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16" 
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute left-0 right-0 mt-2 bg-[#DFF2EF] backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden">
                        <ul className="py-2">
                            {navLinks.map((link) => (
                                <li key={link.key}>
                                    <button
                                        onClick={() => handleClick(link.key)}
                                        className={`block w-full text-left px-6 py-3 text-[15px] transition-all duration-300 ${
                                            activeSection === link.key
                                                ? 'text-black font-bold bg-white/20'
                                                : 'text-gray-500 hover:text-gray-800 hover:bg-white/10'
                                        }`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;