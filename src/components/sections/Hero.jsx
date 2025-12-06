import React from 'react';
import { FileText, Github, Linkedin, ArrowRight } from 'lucide-react';
import profileImg from '../../assets/hero_profile.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Background Decor - Vibrant */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
                <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-pink-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content - Order 2 on Mobile (Below Image), Order 1 on Desktop (Left) */}
                    <div className="flex-1 text-center md:text-left order-2 md:order-1">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-4 animate-fade-in-up">
                            <span className="block text-slate-500 text-2xl md:text-3xl font-medium mb-3 tracking-widest uppercase">Hello, I am</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 inline-block transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 cursor-default">
                                Joydip Maiti
                            </span>
                        </h1>

                        <div className="w-max">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8 animate-typewriter pr-5 pb-2">
                                Frontend Developer
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed animate-fade-in-up delay-200">
                            Specializing in building modern, responsive, and performance-driven web applications with a focus on clean code and user experience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                            <a
                                href="https://drive.google.com/file/d/1Wv8sAQbbHHxWB-H84q2LxWgItMIrtcde/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <FileText className="mr-2 w-5 h-5" /> Resume
                            </a>

                            <a
                                href="https://github.com/remissg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border-2 border-slate-200 hover:border-transparent hover:text-white hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-900 rounded-xl shadow-sm group hover:-translate-y-1 relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    <Github className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> GitHub
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/joydip-maiti-607ba4301/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border-2 border-slate-200 hover:border-transparent hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl shadow-sm group hover:-translate-y-1"
                            >
                                <Linkedin className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Profile Image - Order 1 on Mobile (Top), Order 2 on Desktop (Right) */}
                    <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative inline-block">
                            {/* Larger image for desktop layout impact */}
                            <div className="w-60 h-60 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500 ease-in-out">
                                <img
                                    src={profileImg}
                                    alt="Joydip Maiti"
                                    className="w-full h-full object-cover rounded-full border-4 border-white active:scale-95 transition-transform duration-300"
                                />
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[26rem] md:h-[26rem] border-2 border-blue-600/20 rounded-full z-0 animate-pulse"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
