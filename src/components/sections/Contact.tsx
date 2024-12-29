import ContactForm from '../ui/ContactForm';
import SocialLinks from '../ui/SocialLinks';
import { Mail, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Contact() {
  const {} = useTheme();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-12">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <a href="mailto:Moaz_Awad@outlook.com" 
                    className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    Moaz_Awad@outlook.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>Talkha, Dakahlia</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
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