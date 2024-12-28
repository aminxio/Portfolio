import React from 'react';
import { Mail, Linkedin, ChevronDown, Shield } from 'lucide-react';
import HeroBackground from './HeroBackground';
import TypewriterText from './TypewriterText';
import ActionButton from '../ui/ActionButton';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-400/50 shadow-lg shadow-green-400/20 transform hover:scale-105 transition-all duration-300">
            <img
              src="https://avatars.githubusercontent.com/u/123095573?v=4"
              alt="Moaaz Awad Ali"
              className="w-full h-full object-cover"
            />
          </div>
          <Shield className="absolute -bottom-4 -right-4 w-12 h-12 text-green-400 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Moaaz Awad Ali
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Junior Penetration Tester | Cybersecurity & AI Specialist
        </h2>

        <div className="mb-8 text-green-400/90 text-lg">
          <TypewriterText text="Unveiling vulnerabilities, fortifying security, and enhancing defenses with AI." />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ActionButton onClick={() => scrollToSection('skills')} variant="primary">
            View Skills
          </ActionButton>
          <ActionButton onClick={() => scrollToSection('contact')} variant="secondary">
            Contact Me
          </ActionButton>
        </div>

        <div className="flex justify-center gap-4">
          <a href="mailto:Moaz_Awad@outlook.com" 
             className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6 text-green-400" />
          </a>
          <a href="https://linkedin.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6 text-green-400" />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400 hover:text-green-300 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}