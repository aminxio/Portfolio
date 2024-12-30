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
      Easy: 'text-green-400',
      Medium: 'text-yellow-400',
      Hard: 'text-red-400',
    };
    return colors[difficulty as keyof typeof colors] || 'text-gray-400';
  };

  return (
    <div className={`rounded-lg p-6 border transition-all duration-300 hover:scale-105 ${
      theme === 'dark'
        ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
        : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Flag className={`w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'}`} />
          <h3 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
          }`}>
            {challenge.name}
          </h3>
        </div>
        <span className={`text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
          {challenge.difficulty}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}`}>
          Platform: {challenge.platform}
        </p>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}`}>
          Category: {challenge.category}
        </p>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}`}>
          Points: {challenge.points}
        </p>
      </div>

      {challenge.writeupUrl && (
        <a
          href={challenge.writeupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-flex items-center space-x-2 text-sm ${
            theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-navy-600 hover:text-navy-700'
          }`}
        >
          <span>View Writeup</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}