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
    points: 40,
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
    id: 'ctf2',
    name: 'Reverse Engineering Binary',
    platform: 'TryHackMe',
    category: 'Reverse Engineering',
    difficulty: 'Hard',
    points: 50,
    solvedAt: '2024-03-10',
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
];