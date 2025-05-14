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
        ? 'bg-black-800/50 border-black-600 hover:border-gold-400/50'
        : 'bg-black-700 border-black-500 hover:border-gold-500/50 shadow-sm'
    }`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-900 to-transparent opacity-60" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className={`text-xl font-semibold ${
          theme === 'dark' ? 'text-gold-400' : 'text-gold-500'
        }`}>
          {title}
        </h3>
        <p className={
          theme === 'dark' ? 'text-silver-400' : 'text-silver-300'
        }>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs rounded-full ${
                theme === 'dark'
                  ? 'bg-black-700 text-gold-300 border border-gold-600/30'
                  : 'bg-black-600 text-gold-300 border border-gold-500/30'
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
                  ? 'text-gold-400 hover:text-gold-300'
                  : 'text-gold-500 hover:text-gold-400'
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
                  ? 'text-accent-purple hover:text-accent-purple/80'
                  : 'text-accent-purple hover:text-accent-purple/90'
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