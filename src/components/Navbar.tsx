import React, { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, Terminal, User, Briefcase, Shield, MessageSquare, Home, Award, Flag } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink = memo(({ href, children, isActive, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
        isActive ? 'active text-electric-blue' : ''
      }`}
    >
      <span className="flex items-center space-x-2 font-medium">
        {children}
      </span>
    </a>
  );
});

export default memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'ctf', 'contact'];
    let current = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }

    if (current) {
      setActiveSection(`#${current}`);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-3 glass-effect shadow-premium' 
          : 'py-4 bg-slate-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative p-3 rounded-xl bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 border border-electric-blue/30 group-hover:border-electric-blue/60 transition-all duration-300">
              <Terminal className="w-6 h-6 text-electric-blue group-hover:animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative">
              <span className="font-cyber font-bold text-xl gradient-text">
                AminXio
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-electric-purple group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="#home" isActive={activeSection === '#home'}>
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>
            <NavLink href="#about" isActive={activeSection === '#about'}>
              <User className="w-4 h-4" />
              <span>About</span>
            </NavLink>
            <NavLink href="#skills" isActive={activeSection === '#skills'}>
              <Shield className="w-4 h-4" />
              <span>Skills</span>
            </NavLink>
            <NavLink href="#certifications" isActive={activeSection === '#certifications'}>
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </NavLink>
            <NavLink href="#projects" isActive={activeSection === '#projects'}>
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </NavLink>
            <NavLink href="#ctf" isActive={activeSection === '#ctf'}>
              <Flag className="w-4 h-4" />
              <span>CTF</span>
            </NavLink>
            <NavLink href="#contact" isActive={activeSection === '#contact'}>
              <MessageSquare className="w-4 h-4" />
              <span>Contact</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg glass-effect hover:bg-slate-800/50 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-electric-blue" />
            ) : (
              <Menu className="w-6 h-6 text-electric-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100 mt-6 mb-4' 
              : 'max-h-0 opacity-0 mt-0 mb-0'
          } overflow-hidden`}
        >
          <div className="glass-effect rounded-xl p-4">
            <div className="space-y-2">
              {[
                { href: '#home', icon: <Home className="w-4 h-4" />, label: 'Home' },
                { href: '#about', icon: <User className="w-4 h-4" />, label: 'About' },
                { href: '#skills', icon: <Shield className="w-4 h-4" />, label: 'Skills' },
                { href: '#certifications', icon: <Award className="w-4 h-4" />, label: 'Certifications' },
                { href: '#projects', icon: <Briefcase className="w-4 h-4" />, label: 'Projects' },
                { href: '#ctf', icon: <Flag className="w-4 h-4" />, label: 'CTF' },
                { href: '#contact', icon: <MessageSquare className="w-4 h-4" />, label: 'Contact' },
              ].map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={activeSection === item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2 rounded-lg bg-slate-800/30 mr-3">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});