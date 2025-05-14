import ContactForm from '../ui/ContactForm';
import SocialLinks from '../ui/SocialLinks';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-accent-blue via-accent-purple to-gold-400 text-transparent bg-clip-text animate-gradient-x' 
            : 'bg-gradient-to-r from-accent-blue via-accent-purple to-gold-500 text-transparent bg-clip-text animate-gradient-x'
        }`}>
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-gold-400' : 'text-gold-500'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className={`flex items-center space-x-3 ${
                  theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
                }`}>
                  <Mail className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple'
                  }`} />
                  <a href="mailto:contact@amazingmoaaz.online" 
                    className={`hover:text-accent-purple dark:hover:text-accent-purple/80 transition-colors`}>
                    contact@amazingmoaaz.online
                  </a>
                </div>
                <div className={`flex items-center space-x-3 ${
                  theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
                }`}>
                  <Phone className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue'
                  }`} />
                  <a href="tel:+201554981750" 
                    className={`hover:text-accent-blue dark:hover:text-accent-blue/80 transition-colors`}>
                    +201554981750
                  </a>
                </div>
                <div className={`flex items-center space-x-3 ${
                  theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
                }`}>
                  <MapPin className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-accent-emerald' : 'text-accent-emerald'
                  }`} />
                  <span>Talkha, Ad Daqahliyah, Egypt</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-gold-400' : 'text-gold-500'
              }`}>
                Connect With Me
              </h3>
              <SocialLinks />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}