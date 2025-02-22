'use client';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark'); // This line is crucial
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
        >
            {theme === 'light' 
                ? <span>🌙</span> 
                : <span>☀️</span>
            }
        </button>
    );
};

export default ThemeToggle;