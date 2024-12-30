import { useTheme } from '../../../context/ThemeContext';
import { LatestCTF } from '../../../types/ctf';
import { Trophy, Calendar, Users, Target } from 'lucide-react';

interface LatestCTFCardProps {
  ctf: LatestCTF;
}

export default function LatestCTFCard({ ctf }: LatestCTFCardProps) {
  const { theme } = useTheme();

  const progressBarWidth = (solved: number, total: number) => 
    `${(solved / total) * 100}%`;

  return (
    <div className={`rounded-lg p-6 border ${
      theme === 'dark'
        ? 'bg-gray-800/50 border-gray-700'
        : 'bg-white border-navy-200'
    }`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className={`text-xl font-bold ${
            theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
          }`}>
            {ctf.name}
          </h3>
          <div className="flex items-center space-x-2 mt-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
            }`}>
              {ctf.date}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            <Trophy className={`w-5 h-5 ${
              theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
            }`} />
            <span className={`font-bold ${
              theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
            }`}>
              #{ctf.position}
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Users className="w-4 h-4 text-gray-400" />
            <span className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
            }`}>
              of {ctf.totalTeams} teams
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
            Progress
          </span>
          <span className={`font-medium ${
            theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'
          }`}>
            {ctf.solvedChallenges}/{ctf.totalChallenges}
          </span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-500"
            style={{ width: progressBarWidth(ctf.solvedChallenges, ctf.totalChallenges) }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {ctf.categories.map(category => (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-between">
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
                }`}>
                  {category.name}
                </span>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
                }`}>
                  {category.solved}/{category.total}
                </span>
              </div>
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-400 transition-all duration-500"
                  style={{ width: progressBarWidth(category.solved, category.total) }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2 mt-4">
          <Target className={`w-5 h-5 ${
            theme === 'dark' ? 'text-green-400' : 'text-green-600'
          }`} />
          <span className={`font-bold ${
            theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
          }`}>
            {ctf.points} points
          </span>
        </div>
      </div>
    </div>
  );
}