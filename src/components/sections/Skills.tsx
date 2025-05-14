import { useState } from 'react';
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
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black-800/50 to-black-900/70' 
        : 'bg-gradient-to-b from-black-700/50 to-black-800/70'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-accent-blue via-gold-400 to-accent-purple text-transparent bg-clip-text animate-gradient-x' 
            : 'bg-gradient-to-r from-accent-blue via-gold-500 to-accent-purple text-transparent bg-clip-text animate-gradient-x'
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

        <div className="relative">
          <div className={`transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className={`p-6 rounded-lg ${
              theme === 'dark' 
                ? 'bg-black-800/70 border border-accent-blue/20' 
                : 'bg-black-700/70 border border-accent-blue/20'
            }`}>
              <SkillDetails
                category={skillCategories[activeCategory]}
                isAnimating={isAnimating}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}