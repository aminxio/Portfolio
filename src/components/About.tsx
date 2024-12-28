import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            I'm a passionate Junior Penetration Tester and AI student at Delta University, focusing on cybersecurity. 
            My expertise lies in identifying vulnerabilities and solving complex security challenges using tools and 
            techniques that leverage AI and advanced penetration testing strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2 text-green-400" />
              <span>Talkha, Dakahlia</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2 text-green-400" />
              <span>01554981750</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2 text-green-400" />
              <span>Moaz_Awad@outlook.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}