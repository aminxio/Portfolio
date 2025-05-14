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
  cyan: { text: 'text-accent-blue' },
  purple: { text: 'text-accent-purple' },
  green: { text: 'text-accent-emerald' },
  blue: { text: 'text-gold-400' }
};

export default function SkillCard({ skill, color, delay }: SkillCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorMap[color as keyof typeof colorMap] || { text: 'text-red-500' };

  const getBorderColor = () => {
    switch (color) {
      case 'cyan': return theme === 'dark' ? 'border-accent-blue/30' : 'border-accent-blue/40';
      case 'purple': return theme === 'dark' ? 'border-accent-purple/30' : 'border-accent-purple/40';
      case 'green': return theme === 'dark' ? 'border-accent-emerald/30' : 'border-accent-emerald/40';
      case 'blue': return theme === 'dark' ? 'border-gold-500/30' : 'border-gold-600/40';
      default: return theme === 'dark' ? 'border-red-900/50' : 'border-red-800/50';
    }
  };

  return (
    <div 
      className={`rounded-lg p-6 transition-all duration-500 transform ${
        theme === 'dark'
          ? 'bg-black-800/50 hover:bg-black-700/70'
          : 'bg-black-700 hover:bg-black-600'
      } border ${getBorderColor()} ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <h4 className={`text-lg font-semibold ${colors.text}`}>
          {skill.name}
        </h4>

        <p className={`text-sm ${
          theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
        }`}>
          {skill.description}
        </p>
      </div>
    </div>
  );
}