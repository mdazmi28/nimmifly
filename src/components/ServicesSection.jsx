import React from 'react';

const ServicesSection = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto  text-center px-4">
                <h2 className="text-4xl font-bold mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                        <p>Creating modern and responsive websites tailored to your needs</p>
                    </div>
                    <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
                        <p>Designing beautiful and intuitive user experiences</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;