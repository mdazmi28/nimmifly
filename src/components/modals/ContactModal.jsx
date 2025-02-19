'use client'
import React, { useEffect, useState, useRef } from 'react';
import { ImCross } from "react-icons/im";

const ContactModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);

    const modalRef = useRef(null);
    const [isProcessing, setIsProcessing] = useState(false);
   
    

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div ref={modalRef} className="relative w-full md:w-3/4 lg:w-2/3 bg-white shadow-2xl rounded-lg p-4 overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors pb-5"
                    aria-label="Close modal"
                >
                    <ImCross className="w-4 h-4" />
                </button>

                <h2 className="text-3xl font-bold text-center mb-6">Add New Contact</h2>
            </div>
        </div>
    );
};

export default ContactModal;