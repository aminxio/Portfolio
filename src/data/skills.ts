import { SkillCategory } from '../types/skills';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Penetration Testing',
    icon: 'Shield',
    color: 'cyan',
    skills: [
      { 
        name: 'Web Application Testing',
        description: 'Expert in OWASP Top 10, Burp Suite Pro, and advanced web vulnerabilities'
      },
      { 
        name: 'Network Penetration',
        description: 'Proficient with Nmap, Wireshark, and network protocol analysis'
      },
      { 
        name: 'Mobile Security',
        description: 'Android/iOS security assessment and vulnerability research'
      },
      { 
        name: 'API Security',
        description: 'REST/GraphQL API testing and security architecture review'
      }
    ]
  },
  {
    title: 'Security Tools',
    icon: 'Shield',
    color: 'purple',
    skills: [
      { 
        name: 'Burp Suite Pro',
        description: 'Advanced web application security testing and automation'
      },
      { 
        name: 'Metasploit',
        description: 'Exploitation framework and custom module development'
      },
      { 
        name: 'Nessus',
        description: 'Vulnerability scanning and compliance assessment'
      },
      { 
        name: 'IDS/IPS',
        description: 'Snort, Suricata configuration and rule development'
      }
    ]
  },
  {
    title: 'Programming',
    icon: 'Code',
    color: 'green',
    skills: [
      { 
        name: 'Python',
        description: 'Security automation, tool development, and scripting'
      },
      { 
        name: 'Golang',
        description: 'Security tools and high-performance applications'
      },
      { 
        name: 'Bash/PowerShell',
        description: 'System automation and security scripting'
      },
      { 
        name: 'JavaScript/TypeScript',
        description: 'Web security and application development'
      }
    ]
  },
  {
    title: 'Cloud Security',
    icon: 'Cloud',
    color: 'blue',
    skills: [
      { 
        name: 'AWS Security',
        description: 'IAM, Security Groups, CloudTrail, and GuardDuty'
      },
      { 
        name: 'Container Security',
        description: 'Docker/Kubernetes security and best practices'
      },
      { 
        name: 'Cloud Pentesting',
        description: 'Cloud infrastructure and service security assessment'
      },
      { 
        name: 'DevSecOps',
        description: 'Security pipeline integration and automation'
      }
    ]
  }
];