// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="w-full flex justify-center pt-2 px-4">
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-[#DFF2EF] backdrop-blur-lg px-8 py-4 rounded-full shadow-lg">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`px-3 py-2 text-[15px] transition-colors duration-300 ${
                  pathname === link.path
                    ? 'text-black font-medium'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden w-full">
        <div className="bg-white/30 backdrop-blur-lg px-4 py-3 rounded-full shadow-lg">
          <div className="flex justify-between items-center">
            <span className="text-black font-medium">
              {navLinks.find(link => link.path === pathname)?.name || 'Menu'}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-800"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-white/30 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-3 text-[15px] transition-colors duration-300 ${
                      pathname === link.path
                        ? 'text-black font-medium bg-white/20'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
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