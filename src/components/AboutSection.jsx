// // AboutSection.jsx
// 'use client';
// import { useRef, useEffect, useState } from 'react';

// const AboutSection = () => {
//     const containerRef = useRef(null);
//     const [currentCard, setCurrentCard] = useState(0);

//     const features = [
//         {
//             id: 1,
//             title: "Global Education Experts",
//             description: "Leading consultancy specializing in international student recruitment and engagement",
//             icon: "🌏",
//             color: "bg-gradient-to-br from-blue-500 to-cyan-400"
//         },
//         {
//             id: 2,
//             title: "Student Journey Crafting",
//             description: "Personalized strategies from initial outreach to post-enrollment support",
//             icon: "🎓",
//             color: "bg-gradient-to-br from-purple-500 to-pink-500"
//         },
//         {
//             id: 3,
//             title: "Conversion Optimization",
//             description: "Expert techniques to improve enrollment and retention rates",
//             icon: "📈",
//             color: "bg-gradient-to-br from-amber-500 to-orange-500"
//         },
//         {
//             id: 4,
//             title: "Lasting Relationships",
//             description: "Building strong connections between universities and their students",
//             icon: "🤝",
//             color: "bg-gradient-to-br from-emerald-500 to-teal-500"
//         }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!containerRef.current) return;

//             const container = containerRef.current;
//             const containerTop = container.offsetTop;
//             const scrollPosition = window.scrollY;
//             const viewportHeight = window.innerHeight;
            
//             // Adjust the scroll calculation for smoother transitions
//             const scrollProgress = (scrollPosition - containerTop) / viewportHeight;
//             const cardIndex = Math.floor(scrollProgress);
            
//             if (cardIndex < features.length) {
//                 setCurrentCard(cardIndex);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // Initial check
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [features.length]);

//     return (
//         <section 
//             ref={containerRef}
//             className="min-h-[400vh] "
//         >
//             {/* Fixed container for content */}
//             <div className="sticky top-0 h-screen flex items-center justify-center">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//                     {/* Title Section */}
//                     <div className="text-center mb-20 space-y-6">
//                         <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
//                             About Nimifly
//                         </h2>
//                         <p className="text-black dark:text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//                             We're a leading global education consultancy, specializing in student recruitment 
//                             and engagement. We help universities attract, enroll, and retain top-tier students 
//                             through personalized strategies.
//                         </p>
//                     </div>

//                     {/* Cards Container */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {features.map((feature, index) => (
//                             <div
//                                 key={feature.id}
//                                 className={`
//                                     ${feature.color} 
//                                     p-8 rounded-3xl 
//                                     transition-all 
//                                     duration-500 
//                                     ease-out
//                                     transform 
//                                     backdrop-blur-sm
//                                     ${index <= currentCard 
//                                         ? 'opacity-100 translate-y-0 scale-100' 
//                                         : 'opacity-0 translate-y-20 scale-95'}
//                                     shadow-lg 
//                                     hover:shadow-2xl
//                                     border
//                                  border-white/10
//                                 `}
//                             >
//                                 <div className="space-y-4">
//                                     <span className="text-5xl block mb-6">{feature.icon}</span>
//                                     <h3 className="text-2xl font-bold text-white">
//                                         {feature.title}
//                                     </h3>
//                                     <p className="text-white/90 leading-relaxed">
//                                         {feature.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutSection;




'use client';
import { useRef, useEffect, useState } from 'react';

const AboutSection = () => {
    const containerRef = useRef(null);
    const [currentCard, setCurrentCard] = useState(0);

    const features = [
        {
            id: 1,
            title: "Global Education Experts",
            description: "Leading consultancy specializing in international student recruitment and engagement",
            icon: "🌏",
            color: "bg-gradient-to-br from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            title: "Student Journey Crafting",
            description: "Personalized strategies from initial outreach to post-enrollment support",
            icon: "🎓",
            color: "bg-gradient-to-br from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "Conversion Optimization",
            description: "Expert techniques to improve enrollment and retention rates",
            icon: "📈",
            color: "bg-gradient-to-br from-amber-500 to-orange-500"
        },
        {
            id: 4,
            title: "Lasting Relationships",
            description: "Building strong connections between universities and their students",
            icon: "🤝",
            color: "bg-gradient-to-br from-emerald-500 to-teal-500"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const containerTop = container.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight * 0.5; // Center of viewport
            const viewportHeight = window.innerHeight;

            // Calculate progress, ensuring it's within valid range
            let scrollProgress = (scrollPosition - containerTop) / viewportHeight;
            let cardIndex = Math.max(0, Math.min(features.length - 1, Math.floor(scrollProgress)));

            setCurrentCard(cardIndex);
        };

        const onScroll = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', onScroll);
    }, [features.length]);

    return (
        <section ref={containerRef} className="min-h-[400vh]">
            {/* Fixed container for content */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Title Section */}
                    <div className="text-center mb-20 space-y-6">
                        <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
                            About Nimifly
                        </h2>
                        <p className="text-black dark:text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            We're a leading global education consultancy, specializing in student recruitment 
                            and engagement. We help universities attract, enroll, and retain top-tier students 
                            through personalized strategies.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`
                                    ${feature.color} 
                                    p-8 rounded-3xl 
                                    transition-all 
                                    duration-500 
                                    ease-out
                                    transform 
                                    backdrop-blur-sm
                                    ${index <= currentCard 
                                        ? 'opacity-100 translate-y-0 scale-100' 
                                        : 'opacity-0 translate-y-20 scale-95'}
                                    shadow-lg 
                                    hover:shadow-2xl
                                    border
                                    border-white/10
                                `}
                            >
                                <div className="space-y-4">
                                    <span className="text-5xl block mb-6">{feature.icon}</span>
                                    <h3 className="text-2xl font-bold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/90 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
