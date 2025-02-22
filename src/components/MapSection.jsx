// // 'use client'
// // import React, { useEffect } from 'react';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const MapSection = () => {
// //     const locations = [
// //         {
// //             name: "North Miami Beach Office",
// //             coordinates: [25.9292287, -80.1810514],
// //             address: "999 NE 167th St, North Miami Beach, FL 33162, USA",
// //             phone: "+1 (123) 456-7890"
// //         },
// //     ];

// //     useEffect(() => {
// //         // Fix for the missing icon issue
// //         delete L.Icon.Default.prototype._getIconUrl;
// //         L.Icon.Default.mergeOptions({
// //             iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
// //             iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
// //             shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// //         });

// //         // Create map centered on North Miami Beach
// //         const map = L.map('map').setView([25.9292287, -80.1810514], 15); // Adjusted zoom level to 15 for better view

// //         // Add OpenStreetMap tiles
// //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //             maxZoom: 19,
// //             attribution: '© OpenStreetMap contributors'
// //         }).addTo(map);

// //         // Custom icon for better visibility
// //         const customIcon = L.icon({
// //             iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
// //             iconSize: [25, 41],
// //             iconAnchor: [12, 41],
// //             popupAnchor: [1, -34],
// //             shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// //             shadowSize: [41, 41]
// //         });

// //         // Add marker with custom popup
// //         locations.forEach((location) => {
// //             const marker = L.marker(location.coordinates, { icon: customIcon })
// //                 .addTo(map)
// //                 .bindPopup(`
// //                     <div class="p-3">
                        
// //                         <p class="text-gray-600 mb-2">${location.address}</p>
// //                         <p class="text-blue-600">${location.phone}</p>
// //                         <a href="https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}" 
// //                            target="_blank" 
// //                            className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
// //                             Get Directions
// //                         </a>
// //                     </div>
// //                 `, {
// //                     maxWidth: 300,
// //                     closeButton: false,
// //                     className: 'custom-popup'
// //                 });

// //             // Open popup by default
// //             marker.openPopup();
// //         });

// //         // Add zoom control
// //         L.control.zoom({
// //             position: 'bottomright'
// //         }).addTo(map);

// //         // Cleanup
// //         return () => {
// //             map.remove();
// //         };
// //     }, []);

// //     return (
// //         <div className="w-full ">
// //             <div className="max-w-7xl mx-auto px-4 py-12">
// //                 <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
// //                     Visit Our Office
// //                 </h2>

// //                 {/* Map Container */}
// //                 <div 
// //                     id="map" 
// //                     className="w-full h-[50vh] md:h-[60vh] rounded-xl overflow-hidden shadow-xl mb-8"
// //                 />

// //                 {/* Location Card */}
// //                 <div className="max-w-md mx-auto">
// //                     {locations.map((location) => (
// //                         <div
// //                             key={location.name}
// //                             className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
// //                         >
// //                             {/* <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
// //                                 {location.name}
// //                             </h3> */}
// //                             <p className="text-gray-600 dark:text-gray-300 mb-2">
// //                                 {location.address}
// //                             </p>
// //                             <p className="text-blue-600 dark:text-blue-400 mb-4">
// //                                 {location.phone}
// //                             </p>
// //                             <div>
// //                             <a 
// //                                 href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="inline-block w-full text-center py-3 px-4 rounded-lg transition-colors text-red-500"
// //                             >
                              
// //                                 Get Directions
// //                             </a>
// //                             </div>
                            
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Add custom styles */}
// //             <style jsx global>{`
// //                 .custom-popup-content {
// //                     padding: 16px;
// //                     min-width: 240px;
// //                 }

// //                 .popup-inner {
// //                     font-family: system-ui, -apple-system, sans-serif;
// //                 }

// //                 .popup-title {
// //                     font-weight: 700;
// //                     font-size: 1.125rem;
// //                     margin-bottom: 8px;
// //                     color: #1f2937;
// //                 }

// //                 .popup-address {
// //                     color: #4b5563;
// //                     margin-bottom: 8px;
// //                     font-size: 0.875rem;
// //                 }

// //                 .popup-phone {
// //                     color: #2563eb;
// //                     margin-bottom: 16px;
// //                     font-size: 0.875rem;
// //                 }

// //                 .popup-button {
// //                     display: inline-block;
// //                     width: 100%;
// //                     padding: 8px 16px;
// //                     background-color: #2563eb;
// //                     color: white;
// //                     text-align: center;
// //                     border-radius: 8px;
// //                     text-decoration: none;
// //                     font-size: 0.875rem;
// //                     transition: background-color 0.2s;
// //                 }

// //                 .popup-button:hover {
// //                     background-color: #1d4ed8;
// //                 }

// //                 .leaflet-popup-content-wrapper {
// //                     padding: 0;
// //                     overflow: hidden;
// //                     border-radius: 12px;
// //                 }

// //                 .leaflet-popup-content {
// //                     margin: 0;
// //                 }

// //                 .custom-popup .leaflet-popup-tip {
// //                     background-color: white;
// //                 }
// //             `}</style>
// //         </div>
// //     );
// // };

// // export default MapSection;


// 'use client'
// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { FaMapMarkerAlt, FaPhone, FaCopy, FaDirections } from 'react-icons/fa';
// import { IoMdTime } from 'react-icons/io';

// const MapSection = () => {
//     const [copied, setCopied] = useState(false);
//     const [isHovering, setIsHovering] = useState(false);

//     const locations = [
//         {
//             name: "North Miami Beach Office",
//             coordinates: [25.9292287, -80.1810514],
//             address: "999 NE 167th St, North Miami Beach, FL 33162, USA",
//             phone: "+1 (123) 456-7890",
//             hours: [
//                 "Monday - Friday: 9:00 AM - 6:00 PM",
//                 "Saturday: 10:00 AM - 4:00 PM",
//                 "Sunday: Closed"
//             ]
//         },
//     ];

//     const copyToClipboard = (text) => {
//         navigator.clipboard.writeText(text);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//     };

//     useEffect(() => {
//         // Custom marker icon
//         const customIcon = L.divIcon({
//             className: 'custom-marker',
//             html: `<div class="marker-pin"></div>`,
//             iconSize: [30, 42],
//             iconAnchor: [15, 42]
//         });

//         const map = L.map('map').setView([25.9292287, -80.1810514], 15);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//         }).addTo(map);

//         locations.forEach((location) => {
//             const marker = L.marker(location.coordinates, { icon: customIcon })
//                 .addTo(map)
//                 .bindPopup(`
//                     <div class="p-3">
//                         <p class="text-gray-600 mb-2">${location.address}</p>
//                         <p class="text-blue-600">${location.phone}</p>
//                         <a href="https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}" 
//                            target="_blank" 
//                            style="background: #2563eb; color: white; padding: 8px 16px; display: block; text-align: center; border-radius: 8px; text-decoration: none; margin-top: 8px;"
//                         >
//                             Navigate
//                         </a>
//                     </div>
//                 `, {
//                     maxWidth: 300,
//                     closeButton: false,
//                     className: 'custom-popup'
//                 });

//             marker.openPopup();
//         });

//         // Add zoom control
//         L.control.zoom({
//             position: 'bottomright'
//         }).addTo(map);

//         return () => map.remove();
//     }, []);

//     return (
//         <div className="w-full bg-gray-50 dark:bg-gray-900">
//             <div className="max-w-7xl mx-auto px-4 py-12">
//                 <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
//                     Visit Our Office
//                 </h2>
//                 <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
//                     We'd love to meet you in person
//                 </p>

//                 {/* Map Container */}
//                 <div className="grid md:grid-cols-3 gap-8 items-start">
//                     <div className="md:col-span-2">
//                         <div 
//                             id="map" 
//                             className="w-full h-[50vh] md:h-[60vh] rounded-xl overflow-hidden shadow-xl"
//                         />
//                     </div>

//                     {/* Location Details */}
//                     <div className="space-y-6">
//                         {locations.map((location) => (
//                             <div
//                                 key={location.name}
//                                 className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4"
//                             >
//                                 {/* Address Section */}
//                                 <div className="flex items-start space-x-3">
//                                     <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
//                                     <div>
//                                         <h3 className="font-semibold text-gray-800 dark:text-white">Address</h3>
//                                         <p className="text-gray-600 dark:text-gray-300">{location.address}</p>
//                                         <button
//                                             onClick={() => copyToClipboard(location.address)}
//                                             className="mt-2 text-blue-500 hover:text-blue-600 flex items-center space-x-1 text-sm"
//                                         >
//                                             <FaCopy />
//                                             <span>{copied ? 'Copied!' : 'Copy address'}</span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Phone Section */}
//                                 <div className="flex items-center space-x-3">
//                                     <FaPhone className="text-blue-500 text-lg" />
//                                     <div>
//                                         <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
//                                         <a 
//                                             href={`tel:${location.phone}`}
//                                             className="text-blue-500 hover:text-blue-600"
//                                         >
//                                             {location.phone}
//                                         </a>
//                                     </div>
//                                 </div>

//                                 {/* Hours Section */}
//                                 <div className="flex items-start space-x-3">
//                                     <IoMdTime className="text-blue-500 text-xl mt-1" />
//                                     <div>
//                                         <h3 className="font-semibold text-gray-800 dark:text-white">Hours</h3>
//                                         <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
//                                             {location.hours.map((hour, index) => (
//                                                 <li key={index}>{hour}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 {/* Directions Button */}
//                                 <a 
//                                     href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="mt-4 flex items-center justify-center space-x-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors duration-200"
//                                     onMouseEnter={() => setIsHovering(true)}
//                                     onMouseLeave={() => setIsHovering(false)}
//                                 >
//                                     <FaDirections className={`text-lg transition-transform duration-200 ${isHovering ? 'transform translate-x-1' : ''}`} />
//                                     <span>Get Directions</span>
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Styles */}
//             <style jsx global>{`
//                 .custom-marker {
//                     background: transparent;
//                 }

//                 .marker-pin {
//                     width: 30px;
//                     height: 30px;
//                     border-radius: 50% 50% 50% 0;
//                     background: #2563eb;
//                     position: absolute;
//                     transform: rotate(-45deg);
//                     left: 50%;
//                     top: 50%;
//                     margin: -15px 0 0 -15px;
//                     animation: bounce 0.5s ease-in-out infinite alternate;
//                 }

//                 .marker-pin::after {
//                     content: '';
//                     width: 24px;
//                     height: 24px;
//                     margin: 3px 0 0 3px;
//                     background: #fff;
//                     position: absolute;
//                     border-radius: 50%;
//                 }

//                 @keyframes bounce {
//                     from {
//                         transform: rotate(-45deg) translate(0, 0);
//                     }
//                     to {
//                         transform: rotate(-45deg) translate(0, -5px);
//                     }
//                 }

//                 .custom-popup .leaflet-popup-content-wrapper {
//                     background: white;
//                     color: #333;
//                     border-radius: 12px;
//                     overflow: hidden;
//                     padding: 0;
//                 }

//                 .popup-container {
//                     padding: 16px;
//                 }

//                 .popup-header {
//                     margin-bottom: 12px;
//                 }

//                 .popup-phone {
//                     color: #2563eb;
//                     margin-bottom: 12px;
//                 }

                
//             `}</style>
//         </div>
//     );
// };

// export default MapSection;