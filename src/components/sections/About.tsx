import { memo } from 'react';
import { Globe, Zap, Brain, Code, Shield, GraduationCap, Award, User } from 'lucide-react';

export default memo(function About() {
  return (
    <section id="about" className="section-padding grid-bg">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Reduced animations for mobile */}
        {Array.from({ length: window.innerWidth < 768 ? 3 : 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float-gentle will-change-transform"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i % 2) * 70}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: '8s',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <User className="w-12 h-12 text-electric-blue" />
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-primary text-4xl md:text-6xl mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Professional Info */}
          <div className="space-y-6 animate-slide-right">
            {/* Education */}
            <div className="premium-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 border border-electric-blue/30">
                  <GraduationCap className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-secondary text-xl text-electric-blue mb-2">
                    Education
                  </h3>
                  <p className="text-lg font-semibold text-slate-200 mb-1">
                    Bachelor's in Solar Energy
                  </p>
                  <p className="text-slate-400">
                    Ifmeree • Completed
                  </p>
                </div>
              </div>
            </div>

            {/* Training */}
            <div className="premium-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-electric-emerald/20 to-electric-cyan/20 border border-electric-emerald/30">
                  <Shield className="w-6 h-6 text-electric-emerald" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-secondary text-xl text-electric-emerald mb-2">
                    Professional Training
                  </h3>
                  <p className="text-lg font-semibold text-slate-200 mb-1">
                    Vulnerability Analysis / Penetration Testing
                  </p>
                  <p className="text-slate-400">
                    Red Nexus • Completed
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="premium-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-electric-purple/20 to-electric-rose/20 border border-electric-purple/30">
                  <Globe className="w-6 h-6 text-electric-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-secondary text-xl text-electric-purple mb-2">
                    Languages
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200">Arabic</span>
                      <span className="text-electric-emerald font-semibold">Native</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200">English</span>
                      <span className="text-electric-blue font-semibold">Fluent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Mission */}
          <div className="space-y-6 animate-slide-left">
            {/* Professional Bio */}
            <div className="premium-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-electric-amber" />
                <h3 className="heading-secondary text-xl text-electric-amber">
                  Professional Profile
                </h3>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Cybersecurity professional transitioning into full-time 
                  <span className="text-electric-blue font-semibold"> bug bounty hunting</span> and 
                  <span className="text-electric-purple font-semibold"> security research</span>. 
                  I specialize in web application penetration testing, Active Directory exploitation, and cloud security, with a proven track record of finding and weaponizing vulnerabilities in real-world environments
                  .
                </p>
                
                <p>
                  My mission is simple: find flaws before the bad actors do. I thrive on the challenge of breaking into systems, not for malice, but to build stronger defenses. Every vulnerability I discover and report is a step toward a more secure digital world.
                </p>
                
                
              </div>
            </div>

            {/* Core Values */}
            <div className="premium-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-electric-rose" />
                <h3 className="heading-secondary text-xl text-electric-rose">
                  Core Values
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: 'Ethical Practice', color: 'text-electric-blue' },
                  { icon: Brain, label: 'Innovation', color: 'text-electric-purple' },
                  { icon: Code, label: 'Excellence', color: 'text-electric-emerald' },
                  { icon: Award, label: 'Integrity', color: 'text-electric-amber' },
                ].map((value) => (
                  <div key={value.label} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30">
                    <value.icon className={`w-5 h-5 ${value.color}`} />
                    <span className="text-slate-200 font-medium">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});