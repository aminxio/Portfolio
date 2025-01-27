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

  return (
    <div className={`transition-all duration-300 ${
      isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="flex items-center space-x-4 mb-8">
        <Icon className={`w-8 h-8 ${
          theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'
        }`} />
        <h3 className={`text-2xl font-semibold ${
          theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
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