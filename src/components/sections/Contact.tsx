import ContactForm from '../ui/ContactForm';
import SocialLinks from '../ui/SocialLinks';
import { Mail, MapPin, Phone, MessageSquare, Send, Globe, Zap, Shield, Terminal, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding bg-slate-900/50">
      {/* Floating Communication Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: MessageSquare, color: 'text-electric-blue', top: '10%', left: '8%', delay: '0s' },
          { icon: Send, color: 'text-electric-purple', top: '25%', right: '10%', delay: '1s' },
          { icon: Mail, color: 'text-electric-emerald', bottom: '30%', left: '12%', delay: '2s' },
          { icon: Globe, color: 'text-electric-amber', bottom: '15%', right: '8%', delay: '3s' },
          { icon: Terminal, color: 'text-electric-cyan', top: '50%', left: '5%', delay: '4s' },
          { icon: Shield, color: 'text-electric-rose', top: '35%', right: '50%', delay: '5s' },
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
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="flex space-x-3">
              {[MessageSquare, Mail, Phone].map((Icon, index) => (
                <div 
                  key={index}
                  className="p-2 rounded-xl glass-effect animate-glow-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-6 h-6 text-electric-blue" />
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="heading-primary text-3xl md:text-5xl mb-4">
            <span className="gradient-text">GET IN TOUCH</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next 
            <span className="text-electric-blue font-semibold"> cybersecurity project</span>? 
            Let's discuss how I can help secure your digital assets.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col space-y-6 animate-slide-right">
            {/* Contact Info Card */}
            <div className="premium-card p-6 hover-lift flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-xl glass-effect">
                  <User className="w-5 h-5 text-electric-blue" />
                </div>
                <h3 className="heading-secondary text-xl text-electric-blue">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg glass-effect hover:scale-105 transition-transform duration-300">
                    <div className="p-2 rounded-lg bg-electric-purple/20 border border-electric-purple/30">
                      <Mail className="w-4 h-4 text-electric-purple" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-sm">Email</p>
                      <a 
                        href="mailto:contact@amazingmoaaz.online" 
                        className="text-electric-purple hover:text-electric-cyan transition-colors duration-300 font-semibold"
                      >
                        contact@amazingmoaaz.online
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg glass-effect hover:scale-105 transition-transform duration-300">
                    <div className="p-2 rounded-lg bg-electric-blue/20 border border-electric-blue/30">
                      <Phone className="w-4 h-4 text-electric-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-sm">Phone</p>
                      <a 
                        href="tel:+201554981750" 
                        className="text-electric-blue hover:text-electric-cyan transition-colors duration-300 font-semibold"
                      >
                        +201554981750
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg glass-effect hover:scale-105 transition-transform duration-300">
                    <div className="p-2 rounded-lg bg-electric-emerald/20 border border-electric-emerald/30">
                      <MapPin className="w-4 h-4 text-electric-emerald" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-sm">Location</p>
                      <span className="text-electric-emerald font-semibold">
                        Talkha, Ad Daqahliyah, Egypt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links Card */}
            <div className="premium-card p-6 hover-lift flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-xl glass-effect">
                  <Globe className="w-5 h-5 text-electric-emerald" />
                </div>
                <h3 className="heading-secondary text-xl text-electric-emerald">
                  Connect With Me
                </h3>
              </div>
              
              <SocialLinks />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-slide-left flex">
            <div className="premium-card p-6 flex-1 h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-xl glass-effect">
                  <Send className="w-5 h-5 text-electric-purple" />
                </div>
                <h3 className="heading-secondary text-xl text-electric-purple">
                  Send Message
                </h3>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="premium-card p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Shield className="w-6 h-6 text-electric-blue" />
              <Terminal className="w-6 h-6 text-electric-purple" />
              <Zap className="w-6 h-6 text-electric-emerald" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Strengthen Your Security?
            </h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Whether you need a penetration test, vulnerability assessment, or security consultation, 
              I'm here to help protect your digital assets with cutting-edge cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:contact@amazingmoaaz.online"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl glass-effect border border-electric-blue/30 text-electric-blue hover:text-electric-cyan transition-colors duration-300 group text-sm"
              >
                <Mail className="w-4 h-4" />
                <span className="font-semibold">Email Me</span>
              </a>
              <a
                href="tel:+201554981750"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl glass-effect border border-electric-purple/30 text-electric-purple hover:text-electric-cyan transition-colors duration-300 group text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}