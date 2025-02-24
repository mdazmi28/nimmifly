// components/LocationSection/LocationSection.jsx
'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const LocationSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-cover bg-bottom bg-no-repeat px-4'>
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">We Are At</h2>
      <div className='md:h-[450px] w-full flex flex-col md:flex-row gap-5 md:gap-6'>
        <div className='w-full md:w-3/4 rounded-3xl overflow-hidden shadow-lg'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.0627320821613!2d-80.18845092424439!3d25.928479977727688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad5aa2dced3b%3A0x3ee54030d592f89c!2s999%20NE%20167th%20St%2C%20North%20Miami%20Beach%2C%20FL%2033162%2C%20USA!5e0!3m2!1sen!2s!4v1708588288086!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
        {/* Card */}
        <div className='w-full md:w-1/4 text-black'>
          <div className="card bg-slate-200 dark:bg-base-100 shadow-xl text-black">
            <div className="card-body text-black ">
              <h3 className="card-title flex items-center gap-2 dark:text-white">
                <FaMapMarkerAlt className="text-black dark:text-white" />
                Visit Us
              </h3>

              <address className="not-italic dark:text-white">
                <p>999 NE 167th St</p>
                <p>North Miami Beach, FL 33162</p>
              </address>

              <div className="divider"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-black dark:text-white" />
                  <p className='dark:text-white'>(555) 123-4567</p>
                </div>

                <div className="flex items-center gap-2 dark:text-white">
                  <FaEnvelope className="text-black dark:text-white" />
                  <p>info@example.com</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 dark:text-white">
                    <FaClock className="text-black dark:text-white" />
                    <h4 className="font-semibold">Business Hours</h4>
                  </div>
                  <ul className="menu dark:text-white">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>

              <div className="card-actions justify-end mt-4">
                <button
                  className="btn w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=25.92848,-80.18589`)}
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default LocationSection;