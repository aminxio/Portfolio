import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg overflow-hidden border transition-all duration-300 group ${
      theme === 'dark'
        ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
        : 'bg-white border-navy-100 hover:border-navy-300 shadow-sm'
    }`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-60" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className={`text-xl font-semibold ${
          theme === 'dark' ? 'text-gray-100' : 'text-navy-700'
        }`}>
          {title}
        </h3>
        <p className={
          theme === 'dark' ? 'text-gray-400' : 'text-navy-600'
        }>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-navy-50 text-navy-600 border border-navy-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 pt-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 ${
                theme === 'dark'
                  ? 'text-cyan-400 hover:text-cyan-300'
                  : 'text-navy-500 hover:text-navy-600'
              }`}
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 ${
                theme === 'dark'
                  ? 'text-purple-400 hover:text-purple-300'
                  : 'text-navy-600 hover:text-navy-700'
              }`}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}