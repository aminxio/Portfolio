export interface CTFChallenge {
  id: string;
  name: string;
  platform: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  solvedAt: string;
  writeupUrl?: string;
}

export interface CTFPlatform {
  name: string;
  url: string;
  icon: string;
}