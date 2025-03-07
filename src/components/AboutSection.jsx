// AboutSection.jsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
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

    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About Nimifly
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        We're a leading global education consultancy, specializing in student recruitment 
                        and engagement. We help universities attract, enroll, and retain top-tier students 
                        through personalized strategies.
                    </p>
                </motion.div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature) => (
                        <CardWithAnimation key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Separate Card Component with its own animation logic
const CardWithAnimation = ({ feature }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        delay: 100
    });

    return (
        <motion.div
            ref={ref}
            className=''
            initial={{ opacity: 0, x: feature.id % 2 === 0 ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
                duration: 0.8,
                delay: feature.id * 0.2,
                ease: "easeOut"
            }}
        >
            <div className={` ${feature.color} p-6 rounded-2xl h-full transform transition-transform 
                hover:scale-105 duration-300 cursor-pointer`}>
                <div className="flex flex-col h-full">
                    <span className="text-4xl mb-4">{feature.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                    </h3>
                    <p className="text-white/80 flex-grow">
                        {feature.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutSection;