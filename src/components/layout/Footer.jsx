import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-slate-900 font-bold text-lg mb-1 tracking-tight">Joydip Maiti</p>
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/remissg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-none transition-all"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joydip-maiti-607ba4301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-none transition-all"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:maitijoydip888@gmail.com"
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-none transition-all"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
