import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Responsive Design",
        "Git/GitHub",
        "DS Basics",
        "Python",
        "C",
        "Node.js",
        "Express.js"
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-default">Technical Skills</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to build effective solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700 relative overflow-hidden flex items-center justify-center text-center h-32"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex flex-col items-center gap-3 relative z-10">
                                <span className="font-bold text-slate-800 dark:text-slate-200 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
