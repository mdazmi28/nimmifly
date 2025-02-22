import React, { useState, useRef } from 'react';
import { FiMail, FiPhone, FiMessageSquare, FiUser } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import Footer from './Footer';

const Contact = () => {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formRef.current) return;

        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                formRef.current,
                'YOUR_PUBLIC_KEY'
            );

            console.log('Success:', result.text);
            setIsSent(true);
            formRef.current.reset();
            
            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSent(false);
            }, 3000);

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Have questions? We'd love to hear from you. Send us a message
                            and we'll respond as soon as possible.
                        </p>
                    </div>

                    {/* Success Message */}
                    {isSent && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-200 text-green-700 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            Message sent successfully!
                        </div>
                    )}

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Your Name
                            </label>
                            <div className="relative">
                                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Your Email
                            </label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Phone Number
                            </label>
                            <div className="relative">
                                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    name="user_phone"
                                    placeholder="Enter your phone number"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Your Message
                            </label>
                            <div className="relative">
                                <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows="4"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none transition duration-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:translate-y-[-1px] hover:shadow-lg ${
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
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;