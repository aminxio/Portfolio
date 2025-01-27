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
  cyan: { text: 'cyan-300' },
  purple: { text: 'purple-300' },
  green: { text: 'green-300' },
  blue: { text: 'blue-300' }
};

export default function SkillCard({ skill, color, delay }: SkillCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorMap[color as keyof typeof colorMap];

  return (
    <div 
      className={`rounded-lg p-6 transition-all duration-500 transform ${
        theme === 'dark'
          ? 'bg-gray-800/50 hover:bg-gray-800/70'
          : 'bg-white hover:bg-gray-50'
      } border ${
        theme === 'dark' ? 'border-gray-700' : 'border-navy-200'
      } ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <h4 className={`text-lg font-semibold ${
          theme === 'dark' ? `text-${colors.text}` : 'text-navy-800'
        }`}>
          {skill.name}
        </h4>

        <p className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
        }`}>
          {skill.description}
        </p>
      </div>
    </div>
  );
}