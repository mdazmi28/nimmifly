import React from 'react';

const ServicesSection = () => {
    return (
        <div className='w-full overflow-hidden'>
        <div className='w-full h-full bg-[url(/assets/images/section_image.png)] dark:bg-[url(/assets/images/dark_section.png)] bg-cover bg-bottom bg-no-repeat absolute inset-0'>
            <div className='flex flex-col-reverse md:flex-row h-full'>
               <div className='w-full md:w-1/2 bg-red-500'></div>
               <div className='w-full md:w-1/2 bg-green-500'></div>
            </div>
        </div>
        
    </div>
    );
};

export default ServicesSection;