import { Shield, Code, Cloud } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { SkillCategory } from '../../../types/skills';

const icons = { Shield, Code, Cloud };

interface SkillCategoryButtonProps {
  category: SkillCategory;
  isActive: boolean;
  onClick: () => void;
}

export default function SkillCategoryButton({ category, isActive, onClick }: SkillCategoryButtonProps) {
  const { theme } = useTheme();
  const Icon = icons[category.icon as keyof typeof icons];

  // Map category colors to accent colors
  const getCategoryColor = (color: string) => {
    const colorMap: Record<string, { border: string, text: string, shadow: string }> = {
      cyan: {
        border: theme === 'dark' ? 'border-accent-blue' : 'border-accent-blue',
        text: theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue',
        shadow: 'shadow-accent-blue/20'
      },
      purple: {
        border: theme === 'dark' ? 'border-accent-purple' : 'border-accent-purple',
        text: theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple',
        shadow: 'shadow-accent-purple/20'
      },
      green: {
        border: theme === 'dark' ? 'border-accent-emerald' : 'border-accent-emerald',
        text: theme === 'dark' ? 'text-accent-emerald' : 'text-accent-emerald',
        shadow: 'shadow-accent-emerald/20'
      },
      blue: {
        border: theme === 'dark' ? 'border-gold-400' : 'border-gold-500',
        text: theme === 'dark' ? 'text-gold-400' : 'text-gold-500',
        shadow: 'shadow-gold-400/20'
      }
    };
    
    return colorMap[color] || {
      border: theme === 'dark' ? 'border-red-500/50' : 'border-red-400',
      text: theme === 'dark' ? 'text-red-500' : 'text-red-600',
      shadow: 'shadow-red-500/20'
    };
  };

  const categoryColor = getCategoryColor(category.color);

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? theme === 'dark'
            ? `bg-black-700/50 ${categoryColor.border} ${categoryColor.text} shadow-lg ${categoryColor.shadow}`
            : `bg-black-600 ${categoryColor.border} ${categoryColor.text} shadow-lg ${categoryColor.shadow}`
          : theme === 'dark'
            ? 'bg-black-800/30 border-black-600 text-silver-400 hover:border-silver-500'
            : 'bg-black-700/80 border-black-500 text-silver-300 hover:border-silver-400 hover:bg-black-600'
      }`}
    >
      <div className="flex flex-col items-center space-y-2">
        <Icon className={`w-6 h-6 ${
          isActive
            ? categoryColor.text
            : theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
        }`} />
        <span className="text-sm font-medium">{category.title}</span>
      </div>
    </button>
  );
}