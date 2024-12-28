import React from 'react';
import { Shield, Code, Globe, Network, Brain } from 'lucide-react';
import SkillCard from './SkillCard';

const skillCategories = [
  {
    title: 'Penetration Testing Tools',
    icon: Shield,
    skills: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'Nessus'],
  },
  {
    title: 'Programming & Scripting',
    icon: Code,
    skills: ['Python', 'Bash', 'Golang', 'PowerShell'],
  },
  {
    title: 'Web Security',
    icon: Globe,
    skills: ['OWASP Top 10', 'Web Application Security', 'Vulnerability Assessment'],
  },
  {
    title: 'Network Security',
    icon: Network,
    skills: ['TCP/IP', 'Network Protocols', 'Firewall Evasion'],
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    skills: ['Problem-solving', 'Critical Thinking', 'Attention to Detail', 'Communication'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}