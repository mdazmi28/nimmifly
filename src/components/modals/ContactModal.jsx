'use client'
import React, { useState, useRef } from 'react';
import { ImCross } from "react-icons/im";
import { FiMail, FiPhone, FiMessageSquare, FiUser } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formRef.current) return;

        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                'service_0uc8h9o',
                'template_qunk4fc',
                formRef.current,
                '6glbjSL6K-b4RfVGl'
            );

            console.log('Success:', result.text);
            setIsSent(true);
            formRef.current.reset();
            
            // Optional: Close modal after successful submission
            setTimeout(() => {
                onClose();
                setIsSent(false);
            }, 2000);

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Close modal"
                >
                    <ImCross className="w-3 h-3" />
                </button>

                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-0">
                    Get in Touch
                </h2>

                {isSent ? (
                    <div className="text-center py-8">
                        <div className="text-green-500 text-5xl mb-4">✓</div>
                        <p className="text-gray-700 dark:text-gray-300">
                            Thank you! Your message has been sent successfully.
                        </p>
                    </div>
                ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                        <div className="">
                            <label className="text-sm text-gray-600 dark:text-gray-300">
                                Your Name
                            </label>
                            <div className="relative">
                                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="name"
                                    name="user_name" // EmailJS template parameter
                                    placeholder="Enter your Name"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                            </div>
                        </div>
                        <div className="">
                            <label className="text-sm text-gray-600 dark:text-gray-300">
                                Your Email
                            </label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="user_email" // EmailJS template parameter
                                    placeholder="Enter your email address"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        <div className="">
                            <label className="text-sm text-gray-600 dark:text-gray-300">
                                Your Phone Number
                            </label>
                            <div className="relative">
                                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    name="user_phone" // EmailJS template parameter
                                    placeholder="Enter your phone number"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        <div className="">
                            <label className="text-sm text-gray-600 dark:text-gray-300">
                                Your Message
                            </label>
                            <div className="relative">
                                <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    name="message" // EmailJS template parameter
                                    placeholder="Write your message here..."
                                    rows="3"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 ${
                                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                            }`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                    Sending...
                                </div>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactModal;