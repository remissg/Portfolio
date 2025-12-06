import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Internship from './components/sections/Internship';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Internship />
      <Contact />
    </Layout>
  );
}

export default App;
