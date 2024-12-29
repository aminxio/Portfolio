import { Info, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface SkillCardProps {
  skill: {
    name: string;
    description: string;
  };
  color: string;
}

const colorMap = {
  cyan: 'primary',
  purple: 'secondary',
  green: 'accent',
  blue: 'cloud'
};

export default function SkillCard({ skill, color }: SkillCardProps) {
  const { theme } = useTheme();
  const mappedColor = colorMap[color as keyof typeof colorMap];

  return (
    <div className={`rounded-lg p-6 transition-all duration-300 group
      ${theme === 'dark'
        ? 'bg-gray-800/50 border border-gray-700 hover:border-opacity-50'
        : 'bg-white border border-navy-200 hover:border-opacity-50 shadow-sm'
      } hover:border-${mappedColor}-${theme === 'dark' ? 'dark' : 'light'}`}
    >
      <div className="flex items-start space-x-3">
        <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 text-${mappedColor}-${theme === 'dark' ? 'dark' : 'light'}`} />
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
            {skill.name}
          </h4>
          <div className="flex items-start space-x-2 text-sm text-navy-600 dark:text-gray-400">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>{skill.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}