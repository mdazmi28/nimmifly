// Navbar.tsx
'use client';
import { useState } from 'react';

const Navbar = ({ activeSection, onNavClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', key: 'home' },
        { name: 'Services', key: 'services' },
        { name: 'Projects', key: 'projects' },
        { name: 'Skills', key: 'skills' },
        { name: 'Experience', key: 'experience' },
        { name: 'Education', key: 'education' },
        { name: 'Contact', key: 'contact' }
    ];

    const handleClick = (key) => {
        onNavClick(key);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="w-full flex justify-center pt-2 px-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:block bg-[#DFF2EF] backdrop-blur-lg py-3 px-6 rounded-full shadow-lg">
                <ul className="flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.key}>
                            <button
                                onClick={() => handleClick(link.key)}
                                className={`px-3 text-[15px] transition-colors duration-300 ${
                                    activeSection === link.key
                                        ? 'text-black font-medium'
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
            <nav className="md:hidden w-full">
                <div className="bg-white/30 backdrop-blur-lg px-4 py-3 rounded-full shadow-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-black font-medium">
                            {navLinks.find(link => link.key === activeSection)?.name || 'Menu'}
                        </span>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-500 hover:text-gray-800"
                        >
                            {/* Your existing SVG */}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="mt-2 bg-white/30 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden">
                        <ul className="py-2">
                            {navLinks.map((link) => (
                                <li key={link.key}>
                                    <button
                                        onClick={() => handleClick(link.key)}
                                        className={`block w-full text-left px-6 py-3 text-[15px] transition-colors duration-300 ${
                                            activeSection === link.key
                                                ? 'text-black font-medium bg-white/20'
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