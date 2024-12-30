import { useTheme } from '../../../context/ThemeContext';
import { Trophy, Target, Percent, Hash } from 'lucide-react';
import { CTFStats } from '../../../types/ctf';

interface CTFStatsProps {
  stats: CTFStats;
}

export default function CTFStats({ stats }: CTFStatsProps) {
  const { theme } = useTheme();

  const statItems = [
    { icon: Trophy, label: 'Challenges Solved', value: stats.totalSolved },
    { icon: Target, label: 'Total Points', value: stats.totalPoints },
    { icon: Percent, label: 'Success Rate', value: `${stats.successRate}%` },
    { icon: Hash, label: 'Favorite Category', value: stats.favoriteCategory }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map(({ icon: Icon, label, value }) => (
        <div key={label} className={`p-4 rounded-lg border ${
          theme === 'dark'
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white border-navy-200'
        }`}>
          <Icon className={`w-6 h-6 mb-2 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'
          }`} />
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
          }`}>
            {label}
          </p>
          <p className={`text-xl font-bold ${
            theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
          }`}>
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}