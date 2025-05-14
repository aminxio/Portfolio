import { CTFChallenge } from '../../../types/ctf';
import { useTheme } from '../../../context/ThemeContext';
import { Flag, ExternalLink } from 'lucide-react';

interface CTFCardProps {
  challenge: CTFChallenge;
}

export default function CTFCard({ challenge }: CTFCardProps) {
  const { theme } = useTheme();
  
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Easy: 'text-accent-emerald',
      Medium: 'text-gold-400',
      Hard: 'text-red-500',
    };
    return colors[difficulty as keyof typeof colors] || 'text-red-400';
  };

  return (
    <div className={`rounded-lg p-6 border transition-all duration-300 hover:scale-105 ${
      theme === 'dark'
        ? 'bg-black-800/50 border-black-600 hover:border-accent-purple/50'
        : 'bg-black-700 border-black-500 hover:border-accent-purple/50 shadow-sm'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Flag className={`w-5 h-5 ${theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple'}`} />
          <h3 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple'
          }`}>
            {challenge.name}
          </h3>
        </div>
        <span className={`text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
          {challenge.difficulty}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <p className={`text-sm ${theme === 'dark' ? 'text-silver-400' : 'text-silver-300'}`}>
          Platform: <span className="text-gold-400">{challenge.platform}</span>
        </p>
        <p className={`text-sm ${theme === 'dark' ? 'text-silver-400' : 'text-silver-300'}`}>
          Category: <span className="text-gold-400">{challenge.category}</span>
        </p>
        <p className={`text-sm ${theme === 'dark' ? 'text-silver-400' : 'text-silver-300'}`}>
          Points: <span className="text-accent-emerald">{challenge.points}</span>
        </p>
      </div>

      {challenge.writeupUrl && (
        <a
          href={challenge.writeupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-flex items-center space-x-2 text-sm ${
            theme === 'dark' ? 'text-accent-purple hover:text-accent-purple/80' : 'text-accent-purple hover:text-accent-purple/80'
          }`}
        >
          <span>View Writeup</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}