import { SkillCategory } from '../types/skills';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Penetration Testing',
    icon: 'Shield',
    color: 'cyan',
    skills: [
      { name: 'Web Application Testing', description: 'Burp Suite, OWASP ZAP' },
      { name: 'Network Testing', description: 'Nmap, Wireshark' },
      { name: 'Vulnerability Assessment', description: 'Nessus, OpenVAS' },
      { name: 'Exploitation', description: 'Metasploit, Empire' },
    ]
  },
  {
    title: 'Programming',
    icon: 'Code',
    color: 'purple',
    skills: [
      { name: 'Python', description: 'Django, Flask, Automation' },
      { name: 'Golang', description: 'Web Services, CLI Tools' },
      { name: 'Bash Scripting', description: 'Automation, System Admin' },
      { name: 'PowerShell', description: 'Windows Automation' },
    ]
  },
  {
    title: 'Security Tools',
    icon: 'Shield',
    color: 'green',
    skills: [
      { name: 'Kali Linux', description: 'Primary Testing Environment' },
      { name: 'Forensics Tools', description: 'Autopsy, Volatility' },
      { name: 'SIEM', description: 'Splunk, ELK Stack' },
      { name: 'IDS/IPS', description: 'Snort, Suricata' },
    ]
  },
  {
    title: 'Cloud Security',
    icon: 'Cloud',
    color: 'blue',
    skills: [
      { name: 'AWS Security', description: 'IAM, Security Groups' },
      { name: 'Docker Security', description: 'Container Hardening' },
      { name: 'CI/CD Security', description: 'Pipeline Security' },
      { name: 'Cloud Pentesting', description: 'Cloud Infrastructure Testing' },
    ]
  }
];