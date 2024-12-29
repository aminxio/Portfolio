import { Award, ExternalLink } from 'lucide-react';
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
                <Award className={`w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'
                }`} />
                <div className="space-y-3">
                  <h3 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
                  }`}>
                    {cert.name}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
                  }`}>
                    Issued: {cert.date}
                  </p>
                  {cert.url && (
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