import React from 'react';
import { Shield, Lock, Code, Search, Server, Database } from 'lucide-react';

const skills = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Web application security testing, network penetration testing, and vulnerability assessment.',
  },
  {
    icon: Search,
    title: 'Bug Hunting',
    description: 'Active participation in bug bounty programs with proven track record of finding critical vulnerabilities.',
  },
  {
    icon: Code,
    title: 'Security Tools',
    description: 'Proficient with Burp Suite, Metasploit, Nmap, Wireshark, and custom script development.',
  },
  {
    icon: Server,
    title: 'Network Security',
    description: 'Deep understanding of network protocols, firewall configurations, and security architecture.',
  },
  {
    icon: Lock,
    title: 'Web Security',
    description: 'Expert in OWASP Top 10, XSS, CSRF, SQL injection, and security best practices.',
  },
  {
    icon: Database,
    title: 'Secure Development',
    description: 'Experience with secure coding practices and code review for vulnerability detection.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Equipped with cutting-edge tools and methodologies to identify, exploit, and secure vulnerabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-green-500 transition-colors group"
            >
              <skill.icon className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}