import { useState } from 'react';
import { Shield, Code, Cloud } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import SkillCategoryButton from '../ui/skills/SkillCategoryButton';
import SkillDetails from '../ui/skills/SkillDetails';
import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme } = useTheme();

  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="skills" className={`py-20 px-4 ${
      theme === 'dark' ? 'bg-gray-900/50' : 'bg-navy-50/50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${
          theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'
        }`}>
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategoryButton
              key={category.title}
              category={category}
              isActive={index === activeCategory}
              onClick={() => handleCategoryChange(index)}
            />
          ))}
        </div>

        <SkillDetails
          category={skillCategories[activeCategory]}
          isAnimating={isAnimating}
        />
      </div>
    </section>
  );
}