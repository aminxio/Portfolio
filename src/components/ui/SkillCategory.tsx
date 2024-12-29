import SkillBar from './SkillBar';
import { Skill } from '../../types/skills';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  color: 'cyan' | 'purple' | 'green';
}

export default function SkillCategory({ title, skills, color }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            color={color} 
          />
        ))}
      </div>
    </div>
  );
}