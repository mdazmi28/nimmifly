'use client'
import React, { useEffect, useState, useRef } from 'react';
import { ImCross } from "react-icons/im";

const ContactModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    return (
        // Add onClick handler directly to the overlay
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose} // Close when clicking the overlay
        >
            <div 
                className="relative w-full md:w-3/4 lg:w-2/3 bg-white shadow-2xl rounded-lg p-4 overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent modal content clicks from closing
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors pb-5"
                    aria-label="Close modal"
                >
                    <ImCross className="w-4 h-4" />
                </button>

                <h2 className="text-3xl font-bold text-center mb-6">Add New Contact</h2>
                
                {/* Add your form content here */}
                <form className="space-y-4">
                    {/* Name Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="input input-bordered w-full" 
                            required 
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="example@email.com" 
                            className="input input-bordered w-full" 
                            required 
                        />
                    </div>

                    {/* Message Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea 
                            className="textarea textarea-bordered h-32" 
                            placeholder="Your message here..."
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-4 mt-6">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="btn btn-outline"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="btn btn-primary"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;