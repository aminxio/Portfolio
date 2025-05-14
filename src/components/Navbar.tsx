import React, { useState, ReactElement, useEffect } from 'react';
import { Menu, X, Terminal, User, Briefcase, Shield, MessageSquare, Home, Award, Flag } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

// Get gradient text color for each navigation link
const getNavLinkGradient = (href: string, theme: string) => {
  switch(href) {
    case '#home': return theme === 'dark' 
      ? 'bg-gradient-to-r from-gold-300 to-gold-400 text-transparent bg-clip-text' 
      : 'bg-gradient-to-r from-gold-500 to-gold-400 text-transparent bg-clip-text';
    case '#about': return theme === 'dark' 
      ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text' 
      : 'bg-gradient-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text';
    case '#skills': return theme === 'dark' 
      ? 'bg-gradient-to-r from-accent-blue to-accent-emerald text-transparent bg-clip-text' 
      : 'bg-gradient-to-r from-accent-blue to-accent-emerald text-transparent bg-clip-text';
    case '#certifications': return theme === 'dark' 
      ? 'bg-gradient-to-r from-gold-400 to-accent-purple text-transparent bg-clip-text' 
      : 'bg-gradient-to-r from-gold-500 to-accent-purple text-transparent bg-clip-text';
    case '#projects': return theme === 'dark' 
      ? 'bg-gradient-to-r from-accent-emerald to-accent-blue text-transparent bg-clip-text' 
      : 'bg-gradient-to-r from-accent-emerald to-accent-blue text-transparent bg-clip-text';
    case '#ctf': return theme === 'dark' 
      ? 'bg-gradient-to-r from-accent-purple to-gold-400 text-transparent bg-clip-text' 
      : 'bg-gradient-to-r from-accent-purple to-gold-500 text-transparent bg-clip-text';
    case '#contact': return theme === 'dark' 
      ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text' 
      : 'bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text';
    default: return '';
  }
};

// Get icon color based on link
const getIconColor = (href: string, theme: string) => {
  switch(href) {
    case '#home': return theme === 'dark' ? 'text-gold-400' : 'text-gold-500';
    case '#about': return theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple';
    case '#skills': return theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue';
    case '#certifications': return theme === 'dark' ? 'text-gold-400' : 'text-gold-500';
    case '#projects': return theme === 'dark' ? 'text-accent-emerald' : 'text-accent-emerald';
    case '#ctf': return theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple';
    case '#contact': return theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue';
    default: return theme === 'dark' ? 'text-red-500' : 'text-red-600';
  }
};

// Get border color for active link indicator
const getBorderColor = (href: string, theme: string) => {
  switch(href) {
    case '#home': return theme === 'dark' ? 'bg-gold-400' : 'bg-gold-500';
    case '#about': return theme === 'dark' ? 'bg-accent-purple' : 'bg-accent-purple';
    case '#skills': return theme === 'dark' ? 'bg-accent-blue' : 'bg-accent-blue';
    case '#certifications': return theme === 'dark' ? 'bg-gold-400' : 'bg-gold-500';
    case '#projects': return theme === 'dark' ? 'bg-accent-emerald' : 'bg-accent-emerald';
    case '#ctf': return theme === 'dark' ? 'bg-accent-purple' : 'bg-accent-purple';
    case '#contact': return theme === 'dark' ? 'bg-accent-blue' : 'bg-accent-blue';
    default: return theme === 'dark' ? 'bg-red-500' : 'bg-red-600';
  }
};

// Helper to check if element is a Lucide icon
const isLucideIcon = (element: ReactElement): boolean => {
  const iconTypes = [Home, User, Shield, Award, Briefcase, Flag, MessageSquare];
  return iconTypes.some(iconType => element.type === iconType);
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const { theme } = useTheme();
  const iconColor = getIconColor(href, theme);
  const textGradient = getNavLinkGradient(href, theme);
  const borderColor = getBorderColor(href, theme);
  
  return (
    <a
      href={href}
      className={`group relative px-4 py-3 rounded-md transition-all duration-300 hover:scale-105 font-medium`}
    >
      <span className={`relative z-10 flex items-center ${textGradient}`}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && isLucideIcon(child as ReactElement)) {
            return React.cloneElement(child as ReactElement, { 
              className: `w-4 h-4 inline mr-2 ${iconColor} group-hover:animate-pulse`
            });
          }
          return child;
        })}
      </span>
      <div
        className={`absolute h-[3px] w-full bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-md ${borderColor}`}
      />
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:bg-black-700/30 rounded-md transition-all duration-300`}></div>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { theme } = useTheme();

  // Update the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // For sticky navbar effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find active section
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-1 backdrop-blur-xl shadow-lg border-b' 
          : 'py-3 backdrop-blur-md'
      } ${
        theme === 'dark'
          ? 'bg-black-900/70 border-gold-400/10'
          : 'bg-black-800/70 border-gold-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-black-800/80 group-hover:bg-black-700/80'
                : 'bg-black-700/80 group-hover:bg-black-600/80'
            }`}>
              <Terminal className={`w-6 h-6 ${
                theme === 'dark' 
                  ? 'text-gold-400 group-hover:animate-pulse' 
                  : 'text-gold-500 group-hover:animate-pulse'
              }`} />
            </div>
            <div>
              <span className={`relative font-bold text-xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-gold-300 via-accent-purple to-accent-blue text-transparent bg-clip-text animate-gradient-x' 
                  : 'bg-gradient-to-r from-gold-500 via-accent-purple to-accent-blue text-transparent bg-clip-text animate-gradient-x'
              }`}>
                AmazingMoaaz
              </span>
              <div className={`h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                theme === 'dark' ? 'bg-gradient-to-r from-gold-300 via-accent-purple to-accent-blue' : 'bg-gradient-to-r from-gold-500 via-accent-purple to-accent-blue'
              }`}></div>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="#home">
              <Home className="w-4 h-4 inline mr-1" /> Home
            </NavLink>
            <NavLink href="#about">
              <User className="w-4 h-4 inline mr-1" /> About
            </NavLink>
            <NavLink href="#skills">
              <Shield className="w-4 h-4 inline mr-1" /> Skills
            </NavLink>
            <NavLink href="#certifications">
              <Award className="w-4 h-4 inline mr-1" /> Certifications
            </NavLink>
            <NavLink href="#projects">
              <Briefcase className="w-4 h-4 inline mr-1" /> Projects
            </NavLink>
            <NavLink href="#ctf">
              <Flag className="w-4 h-4 inline mr-1" /> CTF
            </NavLink>
            <NavLink href="#contact">
              <MessageSquare className="w-4 h-4 inline mr-1" /> Contact
            </NavLink>
            <div className="ml-2 pl-2 border-l border-silver-400/20">
              <ThemeToggle />
            </div>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-black-800/80 text-gold-400 hover:bg-black-700/80' 
                : 'bg-black-700/80 text-gold-500 hover:bg-black-600/80'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Slide Down */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'max-h-[500px] opacity-100 mt-4 mb-2' 
              : 'max-h-0 opacity-0 mt-0 mb-0'
          } overflow-hidden`}
        >
          <div className={`rounded-xl p-2 ${
            theme === 'dark' 
              ? 'bg-black-800/90 backdrop-blur-xl border border-gold-400/10' 
              : 'bg-black-700/90 backdrop-blur-xl border border-gold-500/10'
          }`}>
            <div className="space-y-1 p-2">
              {[
                { href: '#home', icon: <Home />, label: 'Home' },
                { href: '#about', icon: <User />, label: 'About' },
                { href: '#skills', icon: <Shield />, label: 'Skills' },
                { href: '#certifications', icon: <Award />, label: 'Certifications' },
                { href: '#projects', icon: <Briefcase />, label: 'Projects' },
                { href: '#ctf', icon: <Flag />, label: 'CTF' },
                { href: '#contact', icon: <MessageSquare />, label: 'Contact' },
              ].map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 
                    ${getNavLinkGradient(item.href, theme)}
                    ${activeSection === item.href 
                      ? theme === 'dark' ? 'bg-black-700/60' : 'bg-black-600/60' 
                      : 'hover:bg-black-700/40'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`p-2 rounded-full mr-3 ${
                    theme === 'dark' 
                      ? 'bg-black-700/80' 
                      : 'bg-black-600/80'
                  }`}>
                    {React.cloneElement(item.icon as ReactElement, { 
                      className: `w-4 h-4 ${getIconColor(item.href, theme)}`
                    })}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-silver-400/10 px-4 flex justify-between items-center">
              <span className={`text-sm ${theme === 'dark' ? 'text-silver-400' : 'text-silver-400'}`}>
                Toggle Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}