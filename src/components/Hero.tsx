import { Terminal, Bug } from 'lucide-react';
import ProfileImage from './ProfileImage';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <ProfileImage />
              <div>
                <h2 className="text-xl font-bold text-white">{personalInfo.name}</h2>
                <div className="flex items-center space-x-2 text-green-500">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm font-mono">{personalInfo.title}</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Securing Digital
              <span className="block text-green-500">Frontiers</span>
            </h1>
            <p className="text-gray-400 text-lg">{personalInfo.summary}</p>
            <div className="flex space-x-4">
              <a href="#projects" className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-medium transition-colors">
                View Projects
              </a>
              <a href="#contact" className="border border-green-500 text-green-500 hover:bg-green-500/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="Cybersecurity Visualization"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-black p-4 rounded-lg shadow-xl z-20">
              <div className="flex items-center space-x-2">
                <Bug className="w-5 h-5 text-green-500" />
                <span className="font-mono text-sm">Bug Hunter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}