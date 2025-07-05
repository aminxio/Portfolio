import { ExternalLink, Github, Zap } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-electric-emerald/20 via-electric-blue/20 to-electric-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Main Card */}
      <div className="relative premium-card overflow-hidden hover-lift">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-electric-emerald/10 via-transparent to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Action Icons */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect hover:scale-110 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4 text-electric-emerald" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect hover:scale-110 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4 text-electric-blue" />
              </a>
            )}
          </div>
          
          {/* Corner Accents */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-electric-emerald/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-electric-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-white group-hover:text-electric-emerald transition-colors duration-300">
              {title}
            </h3>
            <Zap className="w-5 h-5 text-electric-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Description */}
          <p className="text-slate-300 leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full glass-effect border border-electric-emerald/20 text-electric-emerald hover:border-electric-emerald/40 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Action Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-slate-700/50">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-electric-emerald hover:text-electric-cyan transition-colors duration-300 group/link"
              >
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" />
                <span className="font-semibold">Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-electric-blue hover:text-electric-cyan transition-colors duration-300 group/link"
              >
                <Github className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" />
                <span className="font-semibold">Code</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-emerald via-electric-blue to-electric-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}