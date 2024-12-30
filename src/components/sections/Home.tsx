import { Shield, Brain } from 'lucide-react';
import TypeWriter from '../ui/TypeWriter';
import ActionButton from '../ui/ActionButton';
import { useTheme } from '../../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8">
          <div className="flex space-x-4">
            <Shield className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-500'} animate-pulse`} />
            <Brain className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-400' : 'text-navy-600'} animate-pulse delay-75`} />
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold ${theme === 'dark' 
            ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 text-transparent bg-clip-text' 
            : 'bg-gradient-to-r from-navy-600 via-navy-500 to-navy-400 text-transparent bg-clip-text'}`}>
            Moaaz Awad
          </h1>
          
          <div className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}`}>
            {/* TypeWriter Component */}
            <TypeWriter words={["Junior Penetration Tester.", "Bug Hunter.", "AI Specialist."]} />
          </div>

          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}`}>
            I'm a passionate penetration tester and AI student at Delta University, focusing on cybersecurity 
            and AI-driven solutions. I enjoy solving complex problems, identifying vulnerabilities, and 
            exploring innovative approaches to secure digital landscapes.
          </p>

          <div className="flex space-x-4">
            <ActionButton href="#contact" variant="purple" aria-label="Contact me">Get in Touch</ActionButton>
            <ActionButton href="/cv.pdf" variant="green" download aria-label="Download CV">Download CV</ActionButton>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 group">
            <div className={`absolute -inset-1 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 ${theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400' 
              : 'bg-gradient-to-r from-navy-400 via-navy-500 to-navy-600'}`}></div>
            <div className="relative rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/123095573?v=4"
                alt="Moaaz Awad"
                className="w-64 h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a 
        href="#home" 
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 ${theme === 'dark' 
          ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
          : 'bg-white text-navy-600 hover:bg-gray-50'}`}
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
