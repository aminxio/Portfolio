import { CTFChallenge, CTFPlatform } from '../types/ctf';

export const platforms: CTFPlatform[] = [
  {
    name: 'HackTheBox',
    url: 'https://www.hackthebox.com',
    icon: 'htb',
  },
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com',
    icon: 'thm',
  },
];

export const recentChallenges: CTFChallenge[] = [
  {
    id: 'ctf1',
    name: 'Web Exploitation Challenge',
    platform: 'HackTheBox',
    category: 'Web',
    difficulty: 'Medium',
    points: 4,
    solvedAt: '2024-03-15',
    writeupUrl: '#',
  },
  {
    id: 'ctf2',
    name: 'Reverse Engineering Binary',
    platform: 'TryHackMe',
    category: 'Reverse Engineering',
    difficulty: 'Hard',
    points: 50,
    solvedAt: '2024-03-10',
  },
  {
    id: 'ctf3',
    name: 'Cryptography Challenge',
    platform: 'HackTheBox',
    category: 'Crypto',
    difficulty: 'Medium',
    points: 45,
    solvedAt: '2024-03-08',
  },
  {
    id: 'ctf4',
    name: 'Network Forensics',
    platform: 'TryHackMe',
    category: 'Forensics',
    difficulty: 'Easy',
    points: 35,
    solvedAt: '2024-03-05',
  },
  {
    id: 'ctf5',
    name: 'SQL Injection Challenge',
    platform: 'HackTheBox',
    category: 'Web',
    difficulty: 'Hard',
    points: 60,
    solvedAt: '2024-03-12',
    writeupUrl: '#',
  },
  {
    id: 'ctf6',
    name: 'Buffer Overflow Exploit',
    platform: 'TryHackMe',
    category: 'Pwn',
    difficulty: 'Hard',
    points: 55,
    solvedAt: '2024-03-07',
  },
];