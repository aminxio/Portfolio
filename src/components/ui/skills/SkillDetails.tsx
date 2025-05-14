import { Shield, Code, Cloud } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { SkillCategory } from '../../../types/skills';
import SkillCard from './SkillCard';

const icons = { Shield, Code, Cloud };

interface SkillDetailsProps {
  category: SkillCategory;
  isAnimating: boolean;
}

export default function SkillDetails({ category, isAnimating }: SkillDetailsProps) {
  const { theme } = useTheme();
  const Icon = icons[category.icon as keyof typeof icons];

  const getCategoryColor = (color: string) => {
    switch(color) {
      case 'cyan': return theme === 'dark' ? 'text-accent-blue' : 'text-accent-blue';
      case 'purple': return theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple';
      case 'green': return theme === 'dark' ? 'text-accent-emerald' : 'text-accent-emerald';
      case 'blue': return theme === 'dark' ? 'text-gold-400' : 'text-gold-500';
      default: return theme === 'dark' ? 'text-red-500' : 'text-red-600';
    }
  };

  return (
    <div className={`transition-all duration-300 ${
      isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="flex items-center space-x-4 mb-8">
        <Icon className={`w-8 h-8 ${getCategoryColor(category.color)}`} />
        <h3 className={`text-2xl font-semibold ${
          theme === 'dark' ? 'text-silver-300' : 'text-silver-400'
        }`}>
          {category.title}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {category.skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            color={category.color}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}