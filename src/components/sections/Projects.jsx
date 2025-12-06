import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
// Import images
import quizAppImg from '../../assets/quiz-app.png';
import calculatorImg from '../../assets/calculator.png';
import todoListImg from '../../assets/todo-list.png';

const ProjectCard = ({ title, tech, liveUrl, repoUrl, image }) => (
    <div className="group bg-white p-0 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-transparent relative flex flex-col h-full overflow-hidden">
        {/* Gradient Border on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 -z-10 blur-[2px] transition-opacity duration-300"></div>
        <div className="absolute inset-[2px] rounded-2xl bg-white -z-10"></div>

        {/* Image Section */}
        <div className="h-48 w-full overflow-hidden bg-slate-200 relative">
            {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                    <Code2 size={48} />
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-8 flex flex-col flex-grow">
            <div className="mb-4 flex flex-col items-start">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto mb-8">
                {tech.map((t, index) => (
                    <span key={index} className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-50 px-2 py-1 shadow-sm border border-slate-100 rounded-lg group-hover:bg-white group-hover:border-blue-100 transition-colors">
                        {t}
                    </span>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-auto">
                <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all text-sm font-bold uppercase tracking-wider rounded-xl group-hover:shadow-md"
                >
                    <Github size={16} className="mr-2" /> GitHub
                </a>
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transition-all text-sm font-bold uppercase tracking-wider rounded-xl"
                >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projectList = [
        {
            title: "Scientific Calculator",
            tech: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://remissg.github.io/Scientific-Calculator/",
            repoUrl: "https://github.com/remissg/Scientific-Calculator",
            image: calculatorImg
        },
        {
            title: "To-Do List",
            tech: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://remissg.github.io/To-Do-List-App/",
            repoUrl: "https://github.com/remissg/To-Do-List-App",
            image: todoListImg
        },
        {
            title: "Quiz App",
            tech: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://remissg.github.io/MyDailyWork_Task3/",
            repoUrl: "https://github.com/remissg/MyDailyWork_Task3/",
            image: quizAppImg
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-default">Featured Projects</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A selection of my web development work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
