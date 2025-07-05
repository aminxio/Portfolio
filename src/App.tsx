import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './components/sections/Home';

// Lazy load components for better performance
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Projects = lazy(() => import('./components/sections/Projects'));
const CTF = lazy(() => import('./components/sections/CTF'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <Layout>
      <Home />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue"></div>
      </div>}>
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <CTF />
        <Contact />
      </Suspense>
    </Layout>
  );
}

export default App;