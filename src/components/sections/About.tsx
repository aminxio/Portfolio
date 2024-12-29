import { Book, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 ${
          theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'
        }`}>
          About Me
        </h2>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-purple-400' : 'text-navy-500'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
              }`}>
                Education
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                Bachelor's in Artificial Intelligence
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
                Delta University
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-green-400' : 'text-navy-600'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
              }`}>
                Training
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                Vulnerability Analysis / Penetration Testing
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
                Digital Egypt Pioneers Initiative
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Globe className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-navy-500'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
              }`}>
                Languages
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                Arabic (Native)
              </p>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                English
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}