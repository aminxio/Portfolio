import { Shield, Code, Cloud, Brain, Target, Settings } from 'lucide-react';
import { SkillCategory } from '../../../types/skills';

const icons = { Shield, Code, Cloud, Brain, Target, Settings };

interface SkillCategoryButtonProps {
  category: SkillCategory;
  isActive: boolean;
  onClick: () => void;
}

export default function SkillCategoryButton({ category, isActive, onClick }: SkillCategoryButtonProps) {
  const Icon = icons[category.icon as keyof typeof icons] || Shield;

  const getCategoryColor = (color: string) => {
    const colorMap: Record<string, { border: string, text: string, bg: string, glow: string }> = {
      cyan: {
        border: 'border-electric-blue',
        text: 'text-electric-blue',
        bg: 'bg-electric-blue/10',
        glow: 'shadow-glow'
      },
      purple: {
        border: 'border-electric-purple',
        text: 'text-electric-purple',
        bg: 'bg-electric-purple/10',
        glow: 'shadow-glow-purple'
      },
      green: {
        border: 'border-electric-emerald',
        text: 'text-electric-emerald',
        bg: 'bg-electric-emerald/10',
        glow: 'shadow-glow-emerald'
      },
      blue: {
        border: 'border-electric-cyan',
        text: 'text-electric-cyan',
        bg: 'bg-electric-cyan/10',
        glow: 'shadow-glow'
      }
    };
    
    return colorMap[color] || colorMap.cyan;
  };

  const categoryColor = getCategoryColor(category.color);

  return (
    <button
      onClick={onClick}
      className={`group relative p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? `${categoryColor.bg} ${categoryColor.border} ${categoryColor.glow} scale-105`
          : 'bg-slate-800/30 border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
      }`}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 ${
        isActive ? 'opacity-20' : 'group-hover:opacity-10'
      } ${categoryColor.bg}`}></div>
      
      <div className="relative z-10 flex flex-col items-center space-y-3">
        <div className={`p-3 rounded-lg transition-all duration-300 ${
          isActive 
            ? `${categoryColor.bg} ${categoryColor.border} border`
            : 'bg-transparent group-hover:bg-slate-800/20'
        }`}>
          <Icon className={`w-8 h-8 transition-all duration-300 ${
            isActive
              ? categoryColor.text
              : 'text-slate-400 group-hover:text-slate-300'
          }`} />
        </div>
        
        <div className="text-center">
          <h3 className={`font-semibold transition-colors duration-300 ${
            isActive
              ? categoryColor.text
              : 'text-slate-300 group-hover:text-white'
          }`}>
            {category.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {category.skills.length} skills
          </p>
        </div>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full ${categoryColor.bg.replace('/10', '')}`}></div>
      )}
    </button>
  );
}