import { useEffect, useRef, useState } from 'react';
import { Shield, Brain, Terminal } from 'lucide-react';

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Updated word order with no period for "Bug Hunter"
  const words = ["Junior Penetration Tester.", "Bug Hunter."];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const type = () => {
      if (!textRef.current) return;

      const currentWord = words[currentWordIndex];

      // Handle typing and deleting logic
      if (isDeleting) {
        // Deleting characters
        setCurrentChar((prev) => prev - 1);
      } else {
        // Typing characters
        setCurrentChar((prev) => prev + 1);
      }

      // Update text content
      textRef.current.textContent = currentWord.substring(0, currentChar);

      // Word is fully typed
      if (!isDeleting && currentChar === currentWord.length) {
        setIsDeleting(true);
        timeoutId = setTimeout(type, 2000); // Pause after fully typing the word
        return;
      }

      // Word is fully deleted, move to the next word
      if (isDeleting && currentChar === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to next word
        timeoutId = setTimeout(type, 500); // Pause before typing the next word
        return;
      }

      // Set the delay for typing and deleting speed
      timeoutId = setTimeout(type, isDeleting ? 50 : 100); // Faster deletion, slower typing
    };

    type();

    // Cleanup timeout on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Prevent memory leaks
      }
    };
  }, [currentWordIndex, currentChar, isDeleting, words]); // Depend on state to control effect

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
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-green-900/20 border border-green-400/20 text-green-400 rounded-lg hover:bg-green-900/40 transition-all duration-300"
          >
            Download CV
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
