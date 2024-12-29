import { useEffect, useRef } from 'react';
import { Shield, Brain, Terminal } from 'lucide-react';

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const words = ["Penetration Tester.", "AI Specialist.", "Security Researcher."];
  
  useEffect(() => {
    let currentWord = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const current = words[currentWord];
      if (!textRef.current) return;

      if (isDeleting) {
        textRef.current.textContent = current.substring(0, currentChar - 1);
        currentChar--;
      } else {
        textRef.current.textContent = current.substring(0, currentChar + 1);
        currentChar++;
      }

      if (!isDeleting && currentChar === current.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 2000);
        return;
      }

      if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentWord = (currentWord + 1) % words.length;
        timeoutId = setTimeout(type, 500);
        return;
      }

      timeoutId = setTimeout(type, isDeleting ? 50 : 100);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
          <Brain className="w-8 h-8 text-purple-400 animate-pulse delay-75" />
          <Terminal className="w-8 h-8 text-green-400 animate-pulse delay-150" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 text-transparent bg-clip-text">
          Securing Tomorrow's Digital Landscape
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-400 mb-8">
          I'm a <span ref={textRef} className="text-cyan-400"></span>
          <span className="animate-blink">|</span>
        </div>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Exploring the nexus of cybersecurity and AI to build a safer digital future.
          Specializing in ethical hacking, AI security, and innovative defense strategies.
        </p>

        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-900/20 border border-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-900/40 transition-all duration-300 group"
          >
            View Projects
            <div className="w-full h-0.5 bg-cyan-400/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-purple-900/20 border border-purple-400/20 text-purple-400 rounded-lg hover:bg-purple-900/40 transition-all duration-300 group"
          >
            Get in Touch
            <div className="w-full h-0.5 bg-purple-400/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}