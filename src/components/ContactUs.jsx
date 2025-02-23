'use client'
import React, { useState, useRef } from 'react';
import { ImCross } from "react-icons/im";
import { FiMail, FiPhone, FiMessageSquare, FiUser } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'; // Add toast notifications

const INITIAL_FORM_STATE = {
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
};

const ContactUs = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    const validateForm = () => {
        const newErrors = {};
        
        // Name validation
        if (!formData.user_name.trim()) {
            newErrors.user_name = 'Name is required';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.user_email.trim() || !emailRegex.test(formData.user_email)) {
            newErrors.user_email = 'Valid email is required';
        }

        // Phone validation
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!formData.user_phone.trim() || !phoneRegex.test(formData.user_phone)) {
            newErrors.user_phone = 'Valid phone number is required';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fill all required fields correctly');
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                'service_0uc8h9o',
                'template_qunk4fc',
                formRef.current,
                '6glbjSL6K-b4RfVGl'
            );

            toast.success('Message sent successfully!');
            setFormData(INITIAL_FORM_STATE);
            
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const InputField = ({ icon: Icon, name, type, placeholder, value }) => (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {placeholder}
            </label>
            <div className="relative">
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={`Enter your ${placeholder.toLowerCase()}`}
                    className={`w-full pl-10 pr-4 py-2 border ${
                        errors[name] ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                />
                {errors[name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                )}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left side - Contact Information */}
                    <div className="w-full md:w-1/2 bg-blue-600 text-white rounded-xl p-8">
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="mb-8">We'd love to hear from you. Please fill out this form.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <FiMail className="w-6 h-6 mr-4" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p>contact@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FiPhone className="w-6 h-6 mr-4" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p>+1 (555) 000-0000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <div className="w-full md:w-1/2">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
                            
                            <InputField
                                icon={FiUser}
                                name="user_name"
                                type="text"
                                placeholder="Name"
                                value={formData.user_name}
                            />

                            <InputField
                                icon={FiMail}
                                name="user_email"
                                type="email"
                                placeholder="Email"
                                value={formData.user_email}
                            />

                            <InputField
                                icon={FiPhone}
                                name="user_phone"
                                type="tel"
                                placeholder="Phone"
                                value={formData.user_phone}
                            />

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        rows="4"
                                        className={`w-full pl-10 pr-4 py-2 border ${
                                            errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none`}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] ${
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
                </div>
            </div>
        </div>
    );
};

export default ContactUs;