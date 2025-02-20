import Image from 'next/image';
import React from 'react';

const ApplicationServices = () => {
    return (
        <div className='w-full h-full bg-[url(/assets/images/section_image.png)] dark:bg-[url(/assets/images/dark_section.png)] bg-cover bg-bottom bg-no-repeat absolute inset-0 pt-8'>
            <div className='flex flex-col-reverse md:flex-row h-full'>
              
                <div className='w-full md:w-1/2 md:flex md:items-start md:justify-center pt-4 '>
                    <div className="bg-white rounded-full p-8 md:p-12 shadow-xl aspect-square flex flex-col justify-center mx-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
                            Visa Services
                        </h2>

                        <div className="space-y-3">

                            <div className="flex items-start">

                                <li>
                                    <ul><span className="text-teal-500 mr-2">•</span> One-hour one-to-one session</ul>
                                    <ul><span className="text-teal-500 mr-2">•</span> Review of visa-related documents</ul>
                                    <ul><span className="text-teal-500 mr-2">•</span> Guidance and on application procedures and requirements</ul>
                                    <ul><span className="text-teal-500 mr-2">•</span> Provision for Sample documents</ul>
                                    <ul><span className="text-teal-500 mr-2">•</span> 24/7 whatsapp/ email support</ul>
                                </li>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex items-start justify-center pt-4 '>
                    <img
                        src="/assets/images/application_service.png"
                        alt='Visa Image'
                        // width={500}
                        // height={500} 
                        className='md:w-[500px] md:h-[500px] w-[300px] h-[300px]'
                        />
                </div>


            </div>
        </div>
    );
};

export default ApplicationServices;