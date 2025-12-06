import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formDataObj = new FormData(e.target);
        formDataObj.append("access_key", "0c778a0c-ec98-4f1d-b475-3a038a421881");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (data.success) {
                alert("Form Submitted Successfully");
                e.target.reset();
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert("Error sending message: " + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-default">Get In Touch</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Available for freelance opportunities and full-time roles.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border-l-4 border-transparent bg-clip-padding relative shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            {/* Gradient Border Trick */}
                            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl"></div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-colors duration-300 rounded-lg shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Location</p>
                                        <p className="text-lg text-slate-900 dark:text-white font-medium">Kolkata, India</p>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-colors duration-300 rounded-lg shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                                        <p className="text-lg text-slate-900 dark:text-white font-medium">+91 7319127627</p>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-colors duration-300 rounded-lg shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Email</p>
                                        <a href="mailto:maitijoydip888@gmail.com" className="text-lg text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            maitijoydip888@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-colors duration-300 rounded-lg shadow-sm">
                                        <Github size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">GitHub</p>
                                        <a href="https://github.com/remissg" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            github.com/remissg
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-colors duration-300 rounded-lg shadow-sm">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/joydip-maiti-607ba4301/" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            linkedin.com/in/joydip-maiti...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform">
                            <h4 className="text-xl font-bold mb-2">Let's Connect!</h4>
                            <p className="opacity-90 leading-relaxed">
                                I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-transparent focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all placeholder:text-slate-400 rounded-xl"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-transparent focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all placeholder:text-slate-400 rounded-xl"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-transparent focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all placeholder:text-slate-400 rounded-xl resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 px-6 bg-slate-900 text-white font-bold text-lg uppercase tracking-widest hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin mr-2" size={20} /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2" size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
