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

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? theme === 'dark'
            ? `bg-gray-800/50 border-cyan-400/50 text-cyan-400 shadow-lg shadow-cyan-500/20`
            : `bg-white border-navy-400 text-navy-700 shadow-lg shadow-navy-500/20`
          : theme === 'dark'
            ? 'bg-gray-800/30 border-gray-700 text-gray-400 hover:border-gray-600'
            : 'bg-white/80 border-navy-200 text-navy-600 hover:border-navy-300 hover:bg-white'
      }`}
    >
      <div className="flex flex-col items-center space-y-2">
        <Icon className={`w-6 h-6 ${
          isActive
            ? theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'
            : theme === 'dark' ? 'text-gray-400' : 'text-navy-500'
        }`} />
        <span className="text-sm font-medium">{category.title}</span>
      </div>
    </button>
  );
}