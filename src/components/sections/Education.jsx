import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationItem = ({ degree, institution, year, score, isLeft }) => (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full ${isLeft ? '' : ''}`}>
        {/* Timeline Dot (Gradient) */}
        <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-1/2 rotate-45 z-10 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"></div>

        {/* Content Box */}
        <div className="w-full md:w-[calc(50%-30px)] pl-12 md:pl-0">
            <div className="bg-white p-6 rounded-xl border-l-4 border-transparent bg-clip-padding relative shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                {/* Gradient Border Trick */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl"></div>

                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{degree}</h3>
                    {year && (
                        <span className="inline-flex items-center text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                            <Calendar size={12} className="mr-1" /> {year}
                        </span>
                    )}
                </div>

                {institution && (
                    <div className="flex items-center text-slate-700 font-medium mb-3">
                        <GraduationCap size={16} className="mr-2 text-purple-600" />
                        {institution}
                    </div>
                )}

                <div className="flex items-center text-slate-600 text-sm font-semibold bg-slate-50 p-2 rounded-lg inline-block border border-slate-100">
                    <Award size={16} className="mr-2 text-pink-500" />
                    Score: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 font-bold ml-1">{score}</span>
                </div>
            </div>
        </div>
    </div>
);

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech",
            institution: "Camellia Institute of Technology",
            year: "2024–2028",
            score: "CGPA 7.17"
        },
        {
            degree: "Class XII",
            institution: "Khanchi Gunadhar Adarsha Vidyapith", // Placeholder as user didn't specify school
            year: "2024",
            score: "70.8%"
        },
        {
            degree: "Class X",
            institution: "Khanchi Gunadhar Adarsha Vidyapith", // Placeholder as user didn't specify school
            year: "2022",
            score: "84.41%"
        }
    ];

    return (
        <section id="education" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-default">Education</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        My academic journey and milestones.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto space-y-8 md:space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 transform -translate-x-1/2"></div>

                    {educationData.map((item, index) => (
                        <EducationItem key={index} {...item} isLeft={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
