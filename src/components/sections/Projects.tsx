import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { useTheme } from '../../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  
  return (
    <section id="projects" className={`py-20 px-4 ${
      theme === 'dark' ? 'bg-gray-900/50' : 'bg-navy-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${
          theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'
        }`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}