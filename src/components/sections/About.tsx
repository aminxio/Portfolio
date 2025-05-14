import { Book, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-accent-purple via-gold-400 to-accent-blue text-transparent bg-clip-text animate-gradient-x'
            : 'bg-gradient-to-r from-accent-purple via-gold-500 to-accent-blue text-transparent bg-clip-text animate-gradient-x'
        }`}>
          About Me
        </h2>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text' : 'bg-gradient-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text'
              }`}>
                Education
              </h3>
              <p className={theme === 'dark' ? 'text-gold-400' : 'text-gold-500'}>
                Bachelor's in Artificial Intelligence
              </p>
              <p className={theme === 'dark' ? 'text-silver-400' : 'text-silver-400'}>
                Delta University
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-gold-400' : 'text-gold-500'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'bg-gradient-to-r from-gold-400 to-accent-purple text-transparent bg-clip-text' : 'bg-gradient-to-r from-gold-500 to-accent-purple text-transparent bg-clip-text'
              }`}>
                Training
              </h3>
              <p className={theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple'}>
                Vulnerability Analysis / Penetration Testing
              </p>
              <p className={theme === 'dark' ? 'text-silver-400' : 'text-silver-400'}>
                Digital Egypt Pioneers Initiative
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Globe className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'bg-gradient-to-r from-accent-blue to-gold-400 text-transparent bg-clip-text' : 'bg-gradient-to-r from-accent-blue to-gold-500 text-transparent bg-clip-text'
              }`}>
                Languages
              </h3>
              <p className={theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue'}>
                Arabic
              </p>
              <p className={theme === 'dark' ? 'text-gold-400' : 'text-gold-500'}>
                English
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}