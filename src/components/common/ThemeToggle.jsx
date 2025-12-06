import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle dark mode"
        >
            {theme === 'light' ? (
                <Moon size={20} className="hover:text-purple-600 transition-colors" />
            ) : (
                <Sun size={20} className="hover:text-yellow-400 transition-colors" />
            )}
        </button>
    );
};

export default ThemeToggle;
