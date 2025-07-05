import { SkillCategory } from '../types/skills';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Penetration Testing',
    icon: 'Target',
    color: 'cyan',
    skills: [
      { 
        name: 'Web Application Security',
        description: 'Expert in OWASP Top 10, SQL injection, XSS, CSRF, and advanced web vulnerabilities. Proficient with Burp Suite Pro, OWASP ZAP, and custom exploitation techniques.'
      },
      { 
        name: 'Network Penetration Testing',
        description: 'Comprehensive network security assessment using Nmap, Wireshark, Metasploit, and custom scripts. Experience with internal and external network testing.'
      },
      { 
        name: 'Mobile Application Security',
        description: 'Android and iOS security assessment including static/dynamic analysis, reverse engineering, and runtime manipulation using Frida, MobSF, and custom tools.'
      },
      { 
        name: 'API Security Testing',
        description: 'REST/GraphQL API security assessment, authentication bypass, authorization flaws, and rate limiting vulnerabilities using specialized tools and methodologies.'
      },
      { 
        name: 'Wireless Security',
        description: 'WiFi security assessment, WPA/WEP cracking, rogue access point detection, and wireless network penetration testing using Aircrack-ng suite.'
      },
      { 
        name: 'Social Engineering',
        description: 'Phishing campaigns, pretexting, physical security assessment, and human factor analysis using SET, Gophish, and custom social engineering frameworks.'
      }
    ]
  },
  {
    title: 'Security Tools',
    icon: 'Settings',
    color: 'purple',
    skills: [
      { 
        name: 'Burp Suite Professional',
        description: 'Advanced web application security testing, custom extension development, macro creation, and automated scanning with manual verification techniques.'
      },
      { 
        name: 'Metasploit Framework',
        description: 'Exploitation framework mastery including custom module development, payload generation, post-exploitation techniques, and evasion strategies.'
      },
      { 
        name: 'Nessus & OpenVAS',
        description: 'Vulnerability scanning, compliance assessment, custom policy creation, and vulnerability management with detailed reporting and remediation guidance.'
      },
      { 
        name: 'Wireshark & tcpdump',
        description: 'Network protocol analysis, traffic inspection, malware communication analysis, and network forensics with custom filters and analysis techniques.'
      },
      { 
        name: 'SIEM Solutions',
        description: 'Security Information and Event Management using Splunk, ELK Stack, and QRadar for log analysis, threat detection, and incident response.'
      },
      { 
        name: 'IDS/IPS Systems',
        description: 'Intrusion Detection/Prevention systems including Snort, Suricata configuration, rule development, and signature creation for threat detection.'
      }
    ]
  },
  {
    title: 'Programming & Scripting',
    icon: 'Code',
    color: 'green',
    skills: [
      { 
        name: 'Python Security Development',
        description: 'Security automation, exploit development, tool creation, and scripting using libraries like Scapy, Requests, BeautifulSoup, and custom security frameworks.'
      },
      { 
        name: 'Bash & PowerShell',
        description: 'System automation, security scripting, log analysis, and administrative tasks across Linux and Windows environments with advanced scripting techniques.'
      },
      { 
        name: 'JavaScript & Node.js',
        description: 'Web security testing, browser exploitation, XSS payload development, and security tool creation using modern JavaScript frameworks and APIs.'
      },
      { 
        name: 'Go (Golang)',
        description: 'High-performance security tools, network programming, concurrent security scanners, and system-level security applications development.'
      },
      { 
        name: 'SQL & Database Security',
        description: 'SQL injection techniques, database security assessment, query optimization, and database hardening across MySQL, PostgreSQL, and MSSQL.'
      },
      { 
        name: 'Assembly & Reverse Engineering',
        description: 'Low-level analysis, malware reverse engineering, binary exploitation, and vulnerability research using IDA Pro, Ghidra, and debugging tools.'
      }
    ]
  },
  {
    title: 'Cloud & DevSecOps',
    icon: 'Cloud',
    color: 'blue',
    skills: [
      { 
        name: 'AWS Security Services',
        description: 'IAM management, Security Groups, CloudTrail analysis, GuardDuty threat detection, and AWS security best practices implementation and assessment.'
      },
      { 
        name: 'Container Security',
        description: 'Docker and Kubernetes security, container image scanning, runtime protection, and orchestration security using tools like Twistlock and Aqua.'
      },
      { 
        name: 'Infrastructure as Code',
        description: 'Terraform and CloudFormation security, infrastructure security scanning, and secure deployment pipeline creation with automated security checks.'
      },
      { 
        name: 'CI/CD Security',
        description: 'Jenkins, GitLab CI, and GitHub Actions security integration, SAST/DAST implementation, and secure software development lifecycle practices.'
      },
      { 
        name: 'Cloud Penetration Testing',
        description: 'Cloud infrastructure security assessment, misconfiguration detection, privilege escalation, and cloud-specific attack techniques and methodologies.'
      },
      { 
        name: 'Monitoring & Logging',
        description: 'CloudWatch, Azure Monitor, and GCP logging security analysis, threat detection rule creation, and security metrics dashboard development.'
      }
    ]
  }
];