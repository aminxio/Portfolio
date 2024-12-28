import React from 'react';
import { Terminal, Shield, Bug, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-green-500" />
            <span className="text-white font-mono font-bold">Moaaz Awad</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const baseStyles = mobile
    ? "block px-3 py-2 text-white hover:text-green-500 transition-colors"
    : "text-white hover:text-green-500 transition-colors";

  return (
    <>
      <a href="#about" className={baseStyles}>About</a>
      <a href="#skills" className={baseStyles}>Skills</a>
      <a href="#certifications" className={baseStyles}>Certifications</a>
      <a href="#projects" className={baseStyles}>Projects</a>
      <a href="#contact" className={baseStyles}>Contact</a>
    </>
  );
}