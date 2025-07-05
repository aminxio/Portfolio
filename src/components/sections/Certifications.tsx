import { Award, ExternalLink, Clock, Shield, Lock, Cpu, Code, Terminal, Zap, CheckCircle, Target } from 'lucide-react';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  const completedCerts = certifications.filter(cert => cert.status === 'completed');
  const inProgressCerts = certifications.filter(cert => cert.status === 'in-progress');

  return (
    <section id="certifications" className="relative section-padding bg-slate-900/50">
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: Shield, color: 'text-electric-blue', top: '10%', left: '5%', delay: '0s' },
          { icon: Lock, color: 'text-electric-purple', top: '20%', right: '10%', delay: '1s' },
          { icon: Cpu, color: 'text-electric-emerald', bottom: '25%', left: '8%', delay: '2s' },
          { icon: Code, color: 'text-electric-amber', bottom: '15%', right: '5%', delay: '3s' },
          { icon: Terminal, color: 'text-electric-cyan', top: '50%', left: '3%', delay: '4s' },
          { icon: Zap, color: 'text-electric-rose', top: '30%', left: '50%', delay: '5s' },
        ].map(({ icon: Icon, color, delay, ...position }, index) => (
          <div 
            key={index}
            className="absolute opacity-5 animate-float-gentle"
            style={{ 
              ...position,
              animationDelay: delay,
              animationDuration: '6s'
            }}
          >
            <Icon className={`w-16 h-16 ${color}`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-4">
              {[Award, Shield, Lock].map((Icon, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-xl glass-effect animate-glow-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-8 h-8 text-electric-blue" />
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="heading-primary text-4xl md:text-6xl mb-6">
            <span className="gradient-text">CERTIFICATIONS</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and credentials in 
            <span className="text-electric-blue font-semibold"> cybersecurity</span>, 
            <span className="text-electric-purple font-semibold"> ethical hacking</span>, and 
            <span className="text-electric-emerald font-semibold"> cloud security</span>
          </p>
        </div>

        {/* Completed Certifications Section */}
        <div className="mb-20 animate-slide-right">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 rounded-xl glass-effect">
              <CheckCircle className="w-6 h-6 text-electric-emerald" />
            </div>
            <h3 className="heading-secondary text-2xl text-electric-emerald">
              Completed Certifications
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-electric-emerald/50 to-transparent ml-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCerts.map((cert, index) => (
              <div
                key={cert.id}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Success Glow Effect */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-electric-emerald/20 via-electric-blue/20 to-electric-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Main Card */}
                <div className="relative premium-card p-6 hover-lift border-l-4 border-electric-emerald">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg glass-effect">
                        <Award className="w-6 h-6 text-electric-emerald" />
                      </div>
                      <div className="px-2 py-1 rounded-full glass-effect border border-electric-emerald/30">
                        <span className="text-electric-emerald text-xs font-semibold">
                          ✓ CERTIFIED
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-electric-blue font-semibold">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-slate-400 text-sm">Certified:</span>
                      <span className="text-electric-emerald font-semibold">{cert.date}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {cert.url && cert.url !== '#' && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-electric-emerald hover:text-electric-cyan transition-colors duration-300 group/link text-sm"
                      >
                        <span className="font-semibold">View Certificate</span>
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  )}

                  {/* Corner Accent */}
                  <div className="absolute top-3 right-3 w-3 h-3 bg-electric-emerald rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Certifications Section */}
        {inProgressCerts.length > 0 && (
          <div className="animate-slide-left">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl glass-effect">
                <Target className="w-6 h-6 text-electric-amber" />
              </div>
              <h3 className="heading-secondary text-2xl text-electric-amber">
                Currently Pursuing
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-electric-amber/50 to-transparent ml-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {inProgressCerts.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Progress Glow Effect */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-electric-amber/20 via-electric-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Main Card */}
                  <div className="relative premium-card p-6 hover-lift border-l-4 border-electric-amber">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg glass-effect">
                          <Clock className="w-6 h-6 text-electric-amber animate-pulse" />
                        </div>
                        <div className="px-2 py-1 rounded-full glass-effect border border-electric-amber/30">
                          <span className="text-electric-amber text-xs font-semibold">
                            IN PROGRESS
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-electric-blue font-semibold">
                          {cert.issuer}
                        </p>
                      </div>
                      
                      {/* Enhanced Progress Section */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-300">Progress</span>
                          <span className="text-electric-amber font-semibold">{cert.progress}%</span>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="relative h-3 rounded-full overflow-hidden glass-effect">
                          <div className="absolute inset-0 bg-slate-800/50"></div>
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-electric-amber via-electric-purple to-electric-blue transition-all duration-1000 ease-out"
                            style={{ width: `${cert.progress}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                          </div>
                          {/* Progress indicator */}
                          <div 
                            className="absolute top-0 h-full w-1 bg-white/60 transition-all duration-1000 ease-out"
                            style={{ left: `${cert.progress}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Expected Completion:</span>
                          <span className="text-electric-purple font-semibold">{cert.expectedCompletion}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Ring Accent */}
                    <div className="absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-600"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="transparent"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-electric-amber"
                          strokeWidth="3"
                          strokeDasharray={`${cert.progress}, 100`}
                          stroke="currentColor"
                          fill="transparent"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}