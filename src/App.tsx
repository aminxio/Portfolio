import React from 'react';
import Hero from './components/hero/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;