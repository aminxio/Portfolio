import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2023',
    skills: ['Network Security', 'Cryptography', 'Risk Management'],
  },
  {
    name: 'eJPT',
    issuer: 'eLearnSecurity',
    date: '2023',
    skills: ['Penetration Testing', 'Information Gathering', 'Web App Security'],
  },
  {
    name: 'OSCP (In Progress)',
    issuer: 'Offensive Security',
    date: '2024',
    skills: ['Advanced Penetration Testing', 'Exploit Development', 'Privilege Escalation'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-black border border-gray-800 hover:border-green-500 transition-all group"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold text-white">{cert.name}</h3>
              </div>
              <p className="text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
              <div className="space-y-2">
                {cert.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}