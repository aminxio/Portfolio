import React from 'react';
import { Mail, Linkedin, Terminal, ChevronDown } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <ProfilePhoto />
          <Terminal className="w-16 h-16 mb-6 text-green-400 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Moaaz Awad Ali</h1>
          <h2 className="text-xl md:text-2xl text-green-400 mb-4">Junior Penetration Tester | Cybersecurity & AI Specialist</h2>
          <p className="text-gray-300 max-w-2xl mb-8">
            Exploring vulnerabilities and enhancing security with cutting-edge AI solutions.
          </p>
          <div className="flex space-x-4 mb-12">
            <a href="mailto:Moaz_Awad@outlook.com" 
               className="flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all transform hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </a>
            <a href="https://linkedin.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all transform hover:scale-105">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-green-400 hover:text-green-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
}