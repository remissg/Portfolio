import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#internship' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white rounded-none focus:outline-none focus:ring-2 focus:ring-purple-500 p-1 group">
                        Joydip<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">@remissg</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex h-full">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="inline-flex items-center px-6 h-full text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 border-l border-transparent last:border-r relative group"
                            >
                                <span className="relative">
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                                </span>
                            </a>
                        ))}
                        <div className="flex items-center pl-6 border-l border-transparent">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-6 py-4 text-slate-600 dark:text-slate-300 font-medium uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 transition-all duration-300 group hover:text-slate-900 dark:hover:text-white"
                                onClick={handleNavClick}
                            >
                                <span className="relative inline-block">
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
