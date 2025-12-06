import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
            <Navbar />

            <main className="flex-grow scroll-smooth">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
