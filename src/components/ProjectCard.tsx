import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-green-500 transition-all group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-black rounded-full text-sm text-green-500">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {githubUrl && (
            <a href={githubUrl} className="text-gray-400 hover:text-green-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} className="text-gray-400 hover:text-green-500 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}