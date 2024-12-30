import { LatestCTF, CTFStats } from '../types/ctf';

export const latestCTF: LatestCTF = {
  name: "HackTheBox CTF 2024",
  date: "2024-03-15",
  platform: "HackTheBox",
  position: 156,
  totalTeams: 1234,
  points: 2500,
  solvedChallenges: 12,
  totalChallenges: 25,
  categories: [
    { name: "Web", solved: 4, total: 8 },
    { name: "Crypto", solved: 3, total: 6 },
    { name: "Pwn", solved: 2, total: 5 },
    { name: "Forensics", solved: 3, total: 6 }
  ]
};

export const ctfStats: CTFStats = {
  totalSolved: 45,
  totalPoints: 12500,
  successRate: 75,
  favoriteCategory: "Web"
};