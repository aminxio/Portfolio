import React, { useState } from 'react';
import { Menu, X, Terminal, User, Briefcase, Shield, MessageSquare } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="group relative px-4 py-2 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 h-[1px] w-0 bg-cyan-600 dark:bg-cyan-400 bottom-0 group-hover:w-full transition-all duration-300" />
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-sm border-b transition-colors duration-300
      ${theme === 'dark'
        ? 'bg-gray-900/80 border-cyan-900/50'
        : 'bg-white/80 border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400">
            <Terminal className="w-6 h-6" />
            <span className="font-bold">AmazingMoaaz</span>
          </a>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#about"><User className="w-4 h-4 inline mr-1" /> About</NavLink>
            <NavLink href="#skills"><Shield className="w-4 h-4 inline mr-1" /> Skills & Expertise</NavLink>
            <NavLink href="#projects"><Briefcase className="w-4 h-4 inline mr-1" /> Projects</NavLink>
            <NavLink href="#contact"><MessageSquare className="w-4 h-4 inline mr-1" /> Contact</NavLink>
            <ThemeToggle />
          </div>

          <button
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-2 space-y-1">
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <User className="w-4 h-4 inline mr-2" /> About
            </a>
            <a href="#skills" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Shield className="w-4 h-4 inline mr-2" /> Skills & Expertise
            </a>
            <a href="#projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Briefcase className="w-4 h-4 inline mr-2" /> Projects
            </a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <MessageSquare className="w-4 h-4 inline mr-2" /> Contact
            </a>
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}