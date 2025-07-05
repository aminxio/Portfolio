import { useState, memo, useMemo } from 'react';
import { skillCategories } from '../../data/skills';
import SkillCategoryButton from '../ui/skills/SkillCategoryButton';
import SkillDetails from '../ui/skills/SkillDetails';
import { Shield, Code, Zap, Lock } from 'lucide-react';

export default memo(function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoize skills array to prevent recreation on every render
  const skillsArray = useMemo(() => [
    'Ethical Hacking',
    'Cloud Security',
    'AI/ML Security',
    'DevSecOps',
    'Incident Response',
    'Threat Intelligence'
  ], []);

  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Shield className="w-8 h-8 text-electric-blue" />
            <h2 className="heading-primary text-4xl md:text-6xl gradient-text">
              Skills & Expertise
            </h2>
            <Code className="w-8 h-8 text-electric-purple" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-emerald mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive expertise across cybersecurity domains, from penetration testing to AI-driven security solutions
          </p>
        </div>
        
        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategoryButton
              key={category.title}
              category={category}
              isActive={index === activeCategory}
              onClick={() => handleCategoryChange(index)}
            />
          ))}
        </div>



        {/* Active Category Details */}
        <div className="relative">
          <div className={`transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className="premium-card p-8 border-l-4 border-electric-blue">
              <SkillDetails
                category={skillCategories[activeCategory]}
                isAnimating={isAnimating}
              />
            </div>
          </div>
        </div>

        {/* Professional Certifications Preview */}
        <div className="mt-16 text-center">
          <div className="premium-card p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-electric-amber" />
              <h3 className="heading-secondary text-2xl text-electric-amber">
                Continuous Learning
              </h3>
              <Zap className="w-6 h-6 text-electric-amber" />
            </div>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Committed to staying ahead of emerging threats and technologies through continuous education and hands-on practice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsArray.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 border border-electric-blue/30 text-electric-blue text-sm font-medium hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});