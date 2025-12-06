import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="text-center md:text-left md:max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                    Building digital experiences with <span className="text-blue-600">purpose</span>.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                    I'm Joydip Maiti, a Full Stack Developer specializing in building exceptional digital products.
                    I focus on creating accessible, human-centered products.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <Link
                        to="/projects"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                        View Work <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
