import React, { useState } from 'react';
import { Shield, Code, Cloud } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import SkillCard from '../ui/SkillCard';
import { useTheme } from '../../context/ThemeContext';

const icons = {
  Shield,
  Code,
  Cloud,
};

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

  const category = skillCategories[activeCategory];
  const Icon = icons[category.icon as keyof typeof icons];

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
          {skillCategories.map((cat, index) => {
            const CategoryIcon = icons[cat.icon as keyof typeof icons];
            
            return (
              <button
                key={cat.title}
                onClick={() => handleCategoryChange(index)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  index === activeCategory
                    ? theme === 'dark'
                      ? `bg-gray-800/50 border-cyan-400/50 text-cyan-400`
                      : `bg-white border-navy-400 text-navy-700 shadow-md`
                    : theme === 'dark'
                      ? 'bg-gray-800/30 border-gray-700 text-gray-400 hover:border-gray-600'
                      : 'bg-white/80 border-navy-200 text-navy-600 hover:border-navy-300 hover:bg-white'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <CategoryIcon className={`w-6 h-6 ${
                    index === activeCategory
                      ? theme === 'dark' ? 'text-cyan-400' : 'text-navy-600'
                      : theme === 'dark' ? 'text-gray-400' : 'text-navy-500'
                  }`} />
                  <span className="text-sm font-medium">{cat.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
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
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}