import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience & Education</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Training & Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-green-400 pl-4">
                <h4 className="text-white font-medium">Digital Egypt Pioneers Initiative (DEPI)</h4>
                <p className="text-gray-400">Dec 2023 - Dec 2024</p>
                <p className="text-gray-300">Vulnerability Analyst / Penetration Tester - Infrastructure and Security</p>
              </div>
              <div className="border-l-2 border-green-400 pl-4">
                <h4 className="text-white font-medium">Certifications</h4>
                <ul className="text-gray-300">
                  <li>Cybersecurity For Beginners Certificate - May 2023</li>
                  <li>Ethical Hacking - May 2023</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Volunteer Roles</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-green-400 pl-4">
                <h4 className="text-white font-medium">Head of Media, BioCodeDU</h4>
                <p className="text-gray-400">Aug 2023 - Present</p>
              </div>
              <div className="border-l-2 border-green-400 pl-4">
                <h4 className="text-white font-medium">Head of Media, ICPC DELTA Community</h4>
                <p className="text-gray-400">Mar 2024 - Oct 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="border-l-2 border-green-400 pl-4">
              <h4 className="text-white font-medium">Delta University for Science and Technology</h4>
              <p className="text-gray-400">Oct 2022 - Present</p>
              <p className="text-gray-300">Bachelor's in Artificial Intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}