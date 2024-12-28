import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export default function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-green-400 mr-3" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li 
            key={skill} 
            className="text-gray-300 hover:text-green-400 transition-colors cursor-default flex items-center"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}