import { Info, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { useState } from 'react';

interface SkillCardProps {
  skill: {
    name: string;
    description: string;
  };
  color: string;
  delay: number;
}

const colorMap = {
  cyan: 'primary',
  purple: 'secondary',
  green: 'accent',
  blue: 'cloud'
};

export default function SkillCard({ skill, color, delay }: SkillCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const mappedColor = colorMap[color as keyof typeof colorMap];

  return (
    <div 
      className={`rounded-lg p-6 transition-all duration-500 transform group cursor-pointer
        ${theme === 'dark'
          ? 'bg-gray-800/50 border border-gray-700 hover:border-opacity-50'
          : 'bg-white border border-navy-200 hover:border-opacity-50 shadow-sm'
        } hover:border-${mappedColor}-${theme === 'dark' ? 'dark' : 'light'}
        ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-3">
        <CheckCircle2 
          className={`w-5 h-5 mt-1 flex-shrink-0 transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          } text-${mappedColor}-${theme === 'dark' ? 'dark' : 'light'}`} 
        />
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
            {skill.name}
          </h4>
          <div className={`flex items-start space-x-2 text-sm transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-80'
          } text-navy-600 dark:text-gray-400`}>
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>{skill.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}