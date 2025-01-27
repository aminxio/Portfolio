import { Award, ExternalLink, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${
          theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'
        }`}>
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
              }`}
            >
              <div className="flex items-start space-x-4">
                {cert.status === 'completed' ? (
                  <Award className={`w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'
                  }`} />
                ) : (
                  <Clock className={`w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-navy-600'
                  }`} />
                )}
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
                    }`}>
                      {cert.name}
                    </h3>
                    {cert.status === 'in-progress' && (
                      <span className={`text-sm px-2 py-0.5 rounded-full whitespace-nowrap ${
                        theme === 'dark' 
                          ? 'bg-purple-900/50 text-purple-400 border border-purple-700'
                          : 'bg-purple-50 text-purple-600 border border-purple-200'
                      }`}>
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  {cert.status === 'completed' ? (
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
                    }`}>
                      Issued: {cert.date}
                    </p>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
                            Progress: {cert.progress}%
                          </span>
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
                            Expected: {cert.expectedCompletion}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
                            }`}
                            style={{ width: `${cert.progress}%` }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {cert.url && cert.status === 'completed' && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-1 text-sm group-hover:translate-x-1 transition-transform ${
                        theme === 'dark'
                          ? 'text-cyan-400 hover:text-cyan-300'
                          : 'text-navy-600 hover:text-navy-700'
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