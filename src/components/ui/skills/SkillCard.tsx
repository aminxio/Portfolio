import { useState } from 'react';
import { CheckCircle, Star, Zap } from 'lucide-react';

interface SkillCardProps {
  skill: {
    name: string;
    description: string;
  };
  color: string;
  delay: number;
}

const colorMap = {
  cyan: { 
    text: 'text-electric-blue',
    bg: 'bg-electric-blue/10',
    border: 'border-electric-blue/30',
    glow: 'shadow-glow'
  },
  purple: { 
    text: 'text-electric-purple',
    bg: 'bg-electric-purple/10',
    border: 'border-electric-purple/30',
    glow: 'shadow-glow-purple'
  },
  green: { 
    text: 'text-electric-emerald',
    bg: 'bg-electric-emerald/10',
    border: 'border-electric-emerald/30',
    glow: 'shadow-glow-emerald'
  },
  blue: { 
    text: 'text-electric-cyan',
    bg: 'bg-electric-cyan/10',
    border: 'border-electric-cyan/30',
    glow: 'shadow-glow'
  }
};

export default function SkillCard({ skill, color, delay }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorMap[color as keyof typeof colorMap] || colorMap.cyan;

  return (
    <div 
      className={`group premium-card p-6 transition-all duration-500 transform hover:scale-105 ${
        isHovered ? colors.glow : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border} transition-all duration-300 group-hover:scale-110`}>
            <CheckCircle className={`w-5 h-5 ${colors.text}`} />
          </div>
          <h4 className={`text-lg font-semibold ${colors.text} group-hover:text-glow transition-all duration-300`}>
            {skill.name}
          </h4>
        </div>
        
        {/* Proficiency Stars */}
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i}
              className={`w-3 h-3 ${colors.text} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              fill="currentColor"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-300 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors duration-300">
        {skill.description}
      </p>

      {/* Skill Level Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className={`w-4 h-4 ${colors.text} opacity-60`} />
          <span className="text-sm text-slate-400">Professional Level</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colors.bg.replace('/10', '')} transition-all duration-1000 group-hover:animate-shimmer`}
            style={{ 
              width: `${85 + Math.random() * 15}%`,
              animationDelay: `${delay}ms`
            }}
          />
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${colors.bg.replace('/10', '/20')}`}></div>
    </div>
  );
}