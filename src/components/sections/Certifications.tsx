import { Award, ExternalLink, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-gold-400 via-accent-purple to-gold-300 text-transparent bg-clip-text animate-gradient-x' 
            : 'bg-gradient-to-r from-gold-500 via-accent-purple to-gold-400 text-transparent bg-clip-text animate-gradient-x'
        }`}>
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-black-800/50 border-black-600 hover:border-gold-400/50'
                  : 'bg-black-700 border-black-500 hover:border-gold-500/50 shadow-sm'
              }`}
            >
              <div className="flex space-x-4">
                {cert.status === 'completed' ? (
                  <Award className={`w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'text-gold-400' : 'text-gold-500'
                  }`} />
                ) : (
                  <Clock className={`w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue'
                  }`} />
                )}
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-gold-400' : 'text-gold-500'
                    }`}>
                      {cert.name}
                    </h3>
                    {cert.status === 'in-progress' && (
                      <span className={`text-sm px-2 py-0.5 rounded-full whitespace-nowrap ${
                        theme === 'dark' 
                          ? 'bg-black-700/50 text-accent-blue border border-accent-blue/30'
                          : 'bg-black-600 text-accent-blue border border-accent-blue/30'
                      }`}>
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
                  }`}>
                    {cert.issuer}
                  </p>
                  {cert.status === 'completed' ? (
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
                    }`}>
                      Issued: {cert.date}
                    </p>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className={theme === 'dark' ? 'text-silver-400' : 'text-silver-300'}>
                            Progress: {cert.progress}%
                          </span>
                          <span className={theme === 'dark' ? 'text-silver-400' : 'text-silver-300'}>
                            Expected: {cert.expectedCompletion}
                          </span>
                        </div>
                        <div className="h-2 bg-black-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              theme === 'dark' ? 'bg-accent-blue' : 'bg-accent-blue'
                            }`}
                            style={{ width: `${cert.progress}%` }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {cert.status === 'completed' && cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-1 text-sm group-hover:translate-x-1 transition-transform ${
                        theme === 'dark'
                          ? 'text-gold-400 hover:text-gold-300'
                          : 'text-gold-500 hover:text-gold-400'
                      }`}
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}