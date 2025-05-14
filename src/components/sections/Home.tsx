import { Shield, ArrowDown, Terminal, Bug, Lock } from 'lucide-react';
import TypeWriter from '../ui/TypeWriter';
import ActionButton from '../ui/ActionButton';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme } = useTheme();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
        setShowBackToTop(true);
      } else {
        setShowScrollIndicator(true);
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center px-4 py-20 ${
      theme === 'dark' 
        ? 'bg-gradient-radial from-black-800/20 to-black-900/40' 
        : 'bg-gradient-radial from-black-700/20 to-black-800/40'
    }`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8">
          <div className="flex space-x-4">
            <Shield 
              className={`w-8 h-8 ${theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue'} 
              animate-pulse hover:scale-110`} 
            />
            <Terminal 
              className={`w-8 h-8 ${theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple'} 
              animate-pulse [animation-delay:0.5s] hover:scale-110`} 
            />
            <Bug 
              className={`w-8 h-8 ${theme === 'dark' ? 'text-accent-emerald' : 'text-accent-emerald'} 
              animate-pulse [animation-delay:1s] hover:scale-110`} 
            />
            <Lock 
              className={`w-8 h-8 ${theme === 'dark' ? 'text-gold-400' : 'text-gold-500'} 
              animate-pulse [animation-delay:1.5s] hover:scale-110`} 
            />
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold ${theme === 'dark' 
            ? 'bg-gradient-to-r from-gold-300 via-accent-purple to-accent-blue text-transparent bg-clip-text animate-gradient-x' 
            : 'bg-gradient-to-r from-gold-500 via-accent-purple to-accent-blue text-transparent bg-clip-text animate-gradient-x'}`}>
            Moaaz Awad
          </h1>
          
          <div className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gold-400' : 'text-gold-500'}`}>
            <TypeWriter words={["Junior Penetration Tester.", "Bug Hunter."]} />
          </div>

          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-silver-400' : 'text-silver-300'}`}>
            Passionate about securing digital landscapes through ethical hacking and AI-driven solutions. 
            Let's work together to protect your systems and build a safer digital future.
          </p>

          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-red-500 bg-black-800/50 p-2 rounded-md border border-red-500/30' : 'text-red-500 bg-black-700/50 p-2 rounded-md border border-red-500/30'}`}>
          THIS SITE IS UNDER DEVELOPMENT. SOME DATA IS JUST A MOCKUP.
          </p>

          <div className="flex space-x-4">
            <ActionButton 
              href="#contact" 
              variant="purple" 
              aria-label="Contact me"
            >
              Let's Collaborate
            </ActionButton>
            <ActionButton 
              href="/cv.pdf" 
              variant="green" 
              download 
              aria-label="Download CV"
            >
              View My Resume
            </ActionButton>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 group">
            <div className={`absolute -inset-1 rounded-full blur-md opacity-25 group-hover:opacity-75 transition duration-1000 ${theme === 'dark' 
              ? 'bg-gradient-to-r from-gold-300 via-accent-purple to-accent-blue animate-pulse-slow' 
              : 'bg-gradient-to-r from-gold-400 via-accent-purple to-accent-blue animate-pulse-slow'}`}></div>
            <div className="relative rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/123095573?v=4"
                alt="Moaaz Awad"
                className="w-64 h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className={`w-6 h-6 ${theme === 'dark' ? 'text-gold-400' : 'text-gold-500'}`} />
        </div>
      )}

      {/* Back to Top Button */}
      <a 
        href="#home" 
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 ${
          showBackToTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        } ${theme === 'dark' 
          ? 'bg-black-700 text-gold-400 hover:bg-black-600 border border-gold-400/20' 
          : 'bg-black-600 text-gold-500 hover:bg-black-500 border border-gold-500/20'}`}
        aria-label="Back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </a>
    </section>
  );
}