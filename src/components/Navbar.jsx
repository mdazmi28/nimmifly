// // Navbar.tsx
// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('home');
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);

//     const navLinks = [
//         { name: 'Services', key: 'services' },
//         { name: 'Destination', key: 'destination' },
//         { name: 'About Us', key: 'about-us' },
//         { name: 'News & Insights', key: 'news-and-insights' },
//         { name: 'We Are At', key: 'location' },
//     ];

//     // Handle scroll visibility
//     useEffect(() => {
//         const controlNavbar = () => {
//             if (typeof window !== 'undefined') {
//                 const currentScrollY = window.scrollY;
                
//                 // Show navbar when scrolling up or at the top
//                 if (currentScrollY < lastScrollY || currentScrollY < 10) {
//                     setIsVisible(true);
//                 } 
//                 // Hide navbar when scrolling down
//                 else if (currentScrollY > lastScrollY) {
//                     setIsVisible(false);
//                     // Close mobile menu when hiding navbar
//                     setIsMobileMenuOpen(false);
//                 }

//                 // Update last scroll position
//                 setLastScrollY(currentScrollY);
//             }
//         };

//         if (typeof window !== 'undefined') {
//             window.addEventListener('scroll', controlNavbar);

//             // Cleanup
//             return () => {
//                 window.removeEventListener('scroll', controlNavbar);
//             };
//         }
//     }, [lastScrollY]);

//     // Scroll to section
//     const handleClick = (key) => {
//         const element = document.getElementById(key);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//         setIsMobileMenuOpen(false);
//     };

//     // Track active section
//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ['home', ...navLinks.map(link => link.key)];
//             const scrollPosition = window.scrollY + 100;

//             sections.forEach((sectionKey) => {
//                 const section = document.getElementById(sectionKey);
//                 if (section) {
//                     const sectionTop = section.offsetTop;
//                     const sectionBottom = sectionTop + section.offsetHeight;

//                     if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//                         setActiveSection(sectionKey);
//                     }
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div 
//             className={`w-full flex justify-center pt-2 px-4 fixed top-0 z-50 transition-transform duration-300 ${
//                 isVisible ? 'translate-y-0' : '-translate-y-full'
//             }`}
//         >
//             {/* Desktop Navigation */}
//             <nav className="hidden md:block bg-[#DFF2EF] backdrop-blur-lg py-3 px-6 rounded-full shadow-lg">
//                 <ul className="flex items-center space-x-8">
//                     {/* Home Logo */}
//                     <li>
//                         <button
//                             onClick={() => handleClick('home')}
//                             className={`transition-all duration-300 ${
//                                 activeSection === 'home' ? 'scale-105' : ''
//                             }`}
//                         >
//                             <Image
//                                 src="/assets/images/site_logo.png" // Replace with your logo path
//                                 alt="Home"
//                                 width={32}
//                                 height={32}
//                                 className="hover:opacity-80 transition-opacity"
//                             />
//                         </button>
//                     </li>

//                     {/* Other Navigation Links */}
//                     {navLinks.map((link) => (
//                         <li key={link.key}>
//                             <button
//                                 onClick={() => handleClick(link.key)}
//                                 className={`px-3 text-[15px] transition-all duration-300 ${
//                                     activeSection === link.key
//                                         ? 'text-black font-bold scale-105'
//                                         : 'text-gray-500 hover:text-gray-800'
//                                 }`}
//                             >
//                                 {link.name}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>

//             {/* Mobile Navigation */}
//             <nav className="md:hidden w-full relative">
//                 <div className="bg-[#DFF2EF] backdrop-blur-lg pl-4 py-1 rounded-full shadow-lg">
//                     <div className="flex justify-between items-center">
//                         {/* Mobile Home Logo */}
//                         <button
//                             onClick={() => handleClick('home')}
//                             className="py-1"
//                         >
//                             <Image
//                                 src="/your-logo.png" // Replace with your logo path
//                                 alt="Home"
//                                 width={28}
//                                 height={28}
//                                 className="hover:opacity-80 transition-opacity"
//                             />
//                         </button>

//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="text-gray-500 hover:text-gray-800 p-2"
//                         >
//                             {isMobileMenuOpen ? (
//                                 <svg 
//                                     xmlns="http://www.w3.org/2000/svg" 
//                                     className="h-6 w-6" 
//                                     fill="none" 
//                                     viewBox="0 0 24 24" 
//                                     stroke="currentColor"
//                                 >
//                                     <path 
//                                         strokeLinecap="round" 
//                                         strokeLinejoin="round" 
//                                         strokeWidth={2} 
//                                         d="M6 18L18 6M6 6l12 12" 
//                                     />
//                                 </svg>
//                             ) : (
//                                 <svg 
//                                     xmlns="http://www.w3.org/2000/svg" 
//                                     className="h-6 w-6" 
//                                     fill="none" 
//                                     viewBox="0 0 24 24" 
//                                     stroke="currentColor"
//                                 >
//                                     <path 
//                                         strokeLinecap="round" 
//                                         strokeLinejoin="round" 
//                                         strokeWidth={2} 
//                                         d="M4 6h16M4 12h16M4 18h16" 
//                                     />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 {isMobileMenuOpen && (
//                     <div className="absolute left-0 right-0 mt-2 bg-[#DFF2EF] backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden">
//                         <ul className="py-2">
//                             {navLinks.map((link) => (
//                                 <li key={link.key}>
//                                     <button
//                                         onClick={() => handleClick(link.key)}
//                                         className={`block w-full text-left px-6 py-3 text-[15px] transition-all duration-300 ${
//                                             activeSection === link.key
//                                                 ? 'text-black font-bold bg-white/20'
//                                                 : 'text-gray-500 hover:text-gray-800 hover:bg-white/10'
//                                         }`}
//                                     >
//                                         {link.name}
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// };

// export default Navbar;


// // Navbar.tsx
// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('home');
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);

//     const navLinks = [
//         { 
//             name: 'Services', 
//             key: 'services',
//             gradient: 'from-purple-600 to-blue-500'
//         },
//         { 
//             name: 'Destination', 
//             key: 'destination',
//             gradient: 'from-emerald-500 to-teal-400'
//         },
//         { 
//             name: 'About Us', 
//             key: 'about-us',
//             gradient: 'from-orange-500 to-yellow-400'
//         },
//         { 
//             name: 'News & Insights', 
//             key: 'news-and-insights',
//             gradient: 'from-pink-500 to-rose-400'
//         },
//         { 
//             name: 'We Are At', 
//             key: 'location',
//             gradient: 'from-blue-500 to-cyan-400'
//         },
//     ];

//     useEffect(() => {
//         const controlNavbar = () => {
//             if (typeof window !== 'undefined') {
//                 const currentScrollY = window.scrollY;
                
//                 if (currentScrollY < lastScrollY || currentScrollY < 10) {
//                     setIsVisible(true);
//                 } else if (currentScrollY > lastScrollY) {
//                     setIsVisible(false);
//                     setIsMobileMenuOpen(false);
//                 }
//                 setLastScrollY(currentScrollY);
//             }
//         };

//         if (typeof window !== 'undefined') {
//             window.addEventListener('scroll', controlNavbar);
//             return () => window.removeEventListener('scroll', controlNavbar);
//         }
//     }, [lastScrollY]);

//     const handleClick = (key) => {
//         const element = document.getElementById(key);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//         setIsMobileMenuOpen(false);
//     };

//     return (
//         <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//             isVisible ? 'translate-y-0' : '-translate-y-full'
//         }`}>
//             {/* Desktop Navigation */}
//             <nav className="hidden md:block max-w-7xl mx-auto px-4 py-3">
//                 <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
//                     <ul className="flex items-center justify-between px-6 py-3">
//                         {/* Logo */}
//                         <li className="mr-8">
//                             <button
//                                 onClick={() => handleClick('home')}
//                                 className="relative group"
//                             >
//                                 <Image
//                                     src="/assets/images/site_logo.png"
//                                     alt="Home"
//                                     width={40}
//                                     height={40}
//                                     className="transition-transform duration-300 group-hover:scale-110"
//                                 />
//                             </button>
//                         </li>

//                         {/* Nav Links */}
//                         <div className="flex items-center space-x-1">
//                             {navLinks.map((link) => (
//                                 <li key={link.key}>
//                                     <button
//                                         onClick={() => handleClick(link.key)}
//                                         className={`relative px-4 py-2 rounded-xl transition-all duration-300
//                                             ${activeSection === link.key 
//                                                 ? 'text-white bg-gradient-to-r ' + link.gradient
//                                                 : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
//                                             }`}
//                                     >
//                                         <span className="relative z-10">{link.name}</span>
//                                     </button>
//                                 </li>
//                             ))}
//                         </div>
//                     </ul>
//                 </div>
//             </nav>

//             {/* Mobile Navigation */}
//             <nav className="md:hidden px-4 py-2">
//                 <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
//                     <div className="flex items-center justify-between px-4 py-2">
//                         <button
//                             onClick={() => handleClick('home')}
//                             className="relative"
//                         >
//                             <Image
//                                 src="/assets/images/site_logo.png"
//                                 alt="Home"
//                                 width={36}
//                                 height={36}
//                                 className="transition-transform duration-300"
//                             />
//                         </button>

//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className={`p-2 rounded-lg transition-all duration-300 ${
//                                 isMobileMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
//                             }`}
//                         >
//                             <div className="w-6 h-5 relative flex flex-col justify-between">
//                                 <span className={`w-full h-0.5 bg-gray-600 rounded-full transform transition-all duration-300 ${
//                                     isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
//                                 }`}/>
//                                 <span className={`w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
//                                     isMobileMenuOpen ? 'opacity-0' : ''
//                                 }`}/>
//                                 <span className={`w-full h-0.5 bg-gray-600 rounded-full transform transition-all duration-300 ${
//                                     isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
//                                 }`}/>
//                             </div>
//                         </button>
//                     </div>

//                     {/* Mobile Menu */}
//                     <div className={`overflow-hidden transition-all duration-300 ${
//                         isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
//                     }`}>
//                         <div className="px-4 py-2">
//                             {navLinks.map((link) => (
//                                 <button
//                                     key={link.key}
//                                     onClick={() => handleClick(link.key)}
//                                     className={`w-full text-left mb-2 px-4 py-3 rounded-xl transition-all duration-300
//                                         ${activeSection === link.key 
//                                             ? 'text-white bg-gradient-to-r ' + link.gradient
//                                             : 'text-gray-700 hover:bg-gray-100'
//                                         }`}
//                                 >
//                                     {link.name}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;


// Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hoveredItem, setHoveredItem] = useState(null);

    const navLinks = [
        { 
            name: 'About Us', 
            key: 'about-us',
            icon: '✨',
            gradient: 'from-[#FFD93D] to-[#FF6B6B]'
        },
        { 
            name: 'Services', 
            key: 'services',
            icon: '⚡️',
            gradient: 'from-[#FF6B6B] to-[#4ECDC4]'
        },
        { 
            name: 'Destination', 
            key: 'destination',
            icon: '🌈',
            gradient: 'from-[#A8E6CF] to-[#3D84A8]'
        },
        { 
            name: 'News & Insights', 
            key: 'news-and-insights',
            icon: '📈',
            gradient: 'from-[#6C5CE7] to-[#A8E6CF]'
        },
        { 
            name: 'We Are At', 
            key: 'location',
            icon: '🎯',
            gradient: 'from-[#FF8C42] to-[#FF3C38]'
        },
    ];

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                if (currentScrollY < lastScrollY || currentScrollY < 10) {
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                    setIsMobileMenuOpen(false);
                }
                setLastScrollY(currentScrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY]);

    const handleClick = (key) => {
        const element = document.getElementById(key);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={`fixed w-full top-0 z-50 transition-all duration-500 px-4 py-3
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block max-w-7xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    border border-white/20 p-2">
                    <div className="flex items-center justify-between px-4">
                        {/* Logo */}
                        <button
                            onClick={() => handleClick('home')}
                            className="relative group p-2"
                        >
                            <div className="absolute inset-0 bg-white/20 rounded-xl transition-all duration-300 
                                opacity-0 group-hover:opacity-100 group-hover:scale-110"/>
                            <Image
                                src="/assets/images/site_logo.png"
                                alt="Home"
                                width={40}
                                height={40}
                                className="relative z-10"
                            />
                        </button>

                        {/* Nav Links */}
                        <div className="flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <div
                                    key={link.key}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(link.key)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <button
                                        onClick={() => handleClick(link.key)}
                                        className={`relative px-4 py-2 rounded-xl transition-all duration-300 
                                            overflow-hidden group ${
                                            activeSection === link.key 
                                                ? 'text-white' 
                                                : 'text-gray-700 hover:text-white'
                                        }`}
                                    >
                                        {/* Background */}
                                        <div className={`absolute inset-0 transition-all duration-300 
                                            bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 
                                            ${activeSection === link.key ? 'opacity-100' : ''}`}
                                        />
                                        
                                        {/* Content */}
                                        <div className="relative z-10 flex items-center gap-2 dark:text-white">
                                            <span className="text-lg">{link.icon}</span>
                                            <span className="font-medium">{link.name}</span>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-black/10 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-300"/>
                                    </button>

                                    {/* Floating Indicator */}
                                    {hoveredItem === link.key && (
                                        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r 
                                            ${link.gradient} transform scale-x-100 transition-transform duration-300"/>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className="md:hidden">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
                    <div className="flex items-center justify-between p-4">
                        <button
                            onClick={() => handleClick('home')}
                            className="relative group"
                        >
                            <Image
                                src="/assets/images/site_logo.png"
                                alt="Home"
                                width={36}
                                height={36}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative p-3 rounded-xl bg-white/10 hover:bg-white/20 
                                transition-all duration-300"
                        >
                            <div className="w-6 h-4 flex flex-col justify-between">
                                {[1, 2, 3].map((i) => (
                                    <span
                                        key={i}
                                        className={`block h-0.5 bg-gray-600 rounded-full transform 
                                            transition-all duration-300 ${
                                            isMobileMenuOpen
                                                ? i === 1 ? 'rotate-45 translate-y-1.5' 
                                                : i === 2 ? 'opacity-0'
                                                : '-rotate-45 -translate-y-1.5'
                                                : ''
                                        }`}
                                    />
                                ))}
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`overflow-hidden transition-all duration-500 
                        ${isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                        <div className="p-4 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.key}
                                    onClick={() => handleClick(link.key)}
                                    className={`w-full p-3 rounded-xl transition-all duration-300 
                                        flex items-center gap-3 ${
                                        activeSection === link.key
                                            ? 'bg-gradient-to-r ' + link.gradient + ' text-white'
                                            : 'hover:bg-white/10 text-gray-700'
                                    }`}
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    <span className="font-medium dark:text-white">{link.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;