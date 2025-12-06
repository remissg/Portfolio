import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Internship = () => {
    const experiences = [
        {
            role: "Software Engineer Intern",
            company: "Yuga Yatra Retail OPC Pvt Ltd",
            date: "Dec 2025 – Feb 2026",
            details: [
                "Experienced with CursorAI, Firebase, and various AI tools for development optimization.",
                "Collaborated on Upwork freelance projects delivery.",
                "Utilized Google Workspace for team collaboration and project management."
            ]
        }
    ];

    return (
        <section id="internship" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-default">Experience</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Professional roles and internships.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border-l-4 border-transparent bg-clip-padding relative shadow-sm hover:shadow-lg transition-all duration-300 group">
                            {/* Gradient Border Trick */}
                            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">{exp.role}</h3>
                                    <div className="flex items-center text-slate-700 font-semibold text-lg">
                                        <Briefcase size={20} className="mr-2 text-blue-600" />
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 border border-purple-100 text-sm font-bold uppercase tracking-wider shadow-sm rounded-lg">
                                    <Calendar size={16} className="mr-2 text-purple-600" />
                                    {exp.date}
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 size={20} className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-slate-700 text-lg leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internship;
