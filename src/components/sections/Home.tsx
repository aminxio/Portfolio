import { Shield, ArrowDown, Terminal, Bug, Lock, Zap, Eye, Cpu, Code, MessageSquare } from 'lucide-react';
import ProfessionalTypeWriter from '../ui/ProfessionalTypeWriter';
import PremiumButton from '../ui/PremiumButton';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
        setShowBackToTop(true);
      } else {
        setShowScrollIndicator(true);
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Enhanced Animated Background Layers */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Animated color layer 1 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-electric-purple/20 to-electric-emerald/20 animate-gradient-x"></div>
        </div>
        
        {/* Animated color layer 2 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-l from-electric-rose/30 via-electric-amber/30 to-electric-cyan/30 animate-gradient-y"></div>
        </div>
        
        {/* Animated color layer 3 */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/40 via-transparent to-electric-blue/40 animate-gradient-xy"></div>
        </div>
        
        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            animation: 'grid-flow 20s linear infinite'
          }}></div>
        </div>
        
        {/* Matrix Digital Rain */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 w-px bg-gradient-to-b from-electric-blue/60 via-electric-purple/40 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${200 + Math.random() * 300}px`,
                animationName: 'digital-rain',
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 5}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            />
          ))}
        </div>
        
        {/* Floating Energy Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute bottom-1/4 left-3/4 w-96 h-96 bg-electric-emerald/10 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-electric-amber/8 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Particle System */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-electric-cyan/60 rounded-full animate-particle-drift"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                boxShadow: '0 0 6px currentColor'
              }}
            />
          ))}
        </div>
        
        {/* Hexagonal Tech Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            animation: 'tech-pattern 30s linear infinite'
          }}></div>
        </div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent"
              style={{
                top: `${20 + i * 30}%`,
                animationName: 'scan-line',
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 2}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
              }}
            />
          ))}
        </div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-10 left-10 w-32 h-32 border border-electric-purple/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-electric-blue/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-40 h-20 border border-electric-emerald/20 rounded-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-32 w-28 h-28 border border-electric-amber/20 rounded-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30"></div>
        
        {/* Radial spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-950/40"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="space-y-8 animate-fade-in">
          {/* Floating Tech Icons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Shield, color: 'text-electric-blue', delay: '0s' },
              { icon: Terminal, color: 'text-electric-purple', delay: '0.2s' },
              { icon: Bug, color: 'text-electric-emerald', delay: '0.4s' },
              { icon: Lock, color: 'text-electric-amber', delay: '0.6s' },
              { icon: Cpu, color: 'text-electric-rose', delay: '0.8s' },
              { icon: Code, color: 'text-electric-cyan', delay: '1s' },
            ].map(({ icon: Icon, color, delay }, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: delay }}
              >
                <div className="p-3 rounded-xl glass-effect hover:scale-110 transition-all duration-300 float-animation">
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <div className={`absolute inset-0 rounded-xl ${color.replace('text-', 'bg-')}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="heading-primary text-5xl md:text-7xl lg:text-8xl">
              <span className="block gradient-text">
                MOAAZ
              </span>
              <span className="block gradient-text" style={{ animationDelay: '0.5s' }}>
                AWAD
              </span>
            </h1>
            
            {/* Professional Subtitle */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-mono text-slate-300">
              <ProfessionalTypeWriter 
                words={[
                  "Junior Penetration Tester",
                  "Bug Hunter",
                ]} 
              />
            </div>
          </div>

          {/* Professional Description */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Passionate cybersecurity professional specializing in 
              <span className="text-electric-blue font-semibold"> ethical hacking</span>, 
              <span className="text-electric-purple font-semibold"> vulnerability assessment</span>, and 
              <span className="text-electric-emerald font-semibold"> AI-driven security solutions</span>.
            </p>
            
            {/* Development Notice */}
            <div className="premium-card p-4 border-l-4 border-electric-amber">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-electric-amber mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-electric-amber font-semibold text-sm">Development Notice</p>
                  <p className="text-slate-400 text-sm mt-1">
                    This portfolio is under active development. Some content represents demonstration data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <PremiumButton 
              href="#contact" 
              variant="primary"
              icon={<MessageSquare className="w-5 h-5" />}
            >
              Get In Touch
            </PremiumButton>
            <PremiumButton 
              href="/cv.pdf" 
              variant="secondary"
              download
              icon={<Eye className="w-5 h-5" />}
            >
              View Resume
            </PremiumButton>
          </div>


        </div>

        {/* Right Section - Professional Avatar */}
        <div className="flex justify-center lg:justify-end animate-slide-left">
          <div className="relative group">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-electric-blue via-electric-purple to-electric-emerald opacity-20 blur-2xl animate-glow-pulse"></div>
            
            {/* Main Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-electric-blue via-electric-purple to-electric-emerald animate-border-flow p-1">
                <div className="w-full h-full rounded-full bg-slate-950"></div>
              </div>
              
              {/* Avatar Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://avatars.githubusercontent.com/u/123095573?v=4"
                  alt="Moaaz Awad - Cybersecurity Professional"
                  className="w-full h-full object-cover"
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-electric-purple/5"></div>
              </div>
              
              {/* Corner Indicators */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-electric-blue animate-glow-pulse"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-electric-purple animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-electric-emerald animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-electric-amber animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Floating Particles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-electric-blue rounded-full animate-particle-float opacity-60"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.8}s`,
                    boxShadow: '0 0 10px currentColor',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-gentle">
          <div className="flex flex-col items-center space-y-2 text-slate-400">
            <span className="text-sm font-mono">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <a 
        href="#home" 
        className={`fixed bottom-8 right-8 p-4 rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 z-30 ${
          showBackToTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        } glass-effect hover:shadow-glow`}
        aria-label="Back to top"
      >
        <ArrowDown className="w-6 h-6 text-electric-blue rotate-180" />
      </a>
    </section>
  );
}