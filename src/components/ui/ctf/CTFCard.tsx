import { CTFChallenge } from '../../../types/ctf';
import { Flag, ExternalLink, Target, Trophy, Zap } from 'lucide-react';

interface CTFCardProps {
  challenge: CTFChallenge;
}

export default function CTFCard({ challenge }: CTFCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Easy: 'text-electric-emerald',
      Medium: 'text-electric-amber',
      Hard: 'text-electric-rose',
    };
    return colors[difficulty as keyof typeof colors] || 'text-electric-rose';
  };

  const getDifficultyBorder = (difficulty: string) => {
    const borders = {
      Easy: 'border-electric-emerald/30',
      Medium: 'border-electric-amber/30',
      Hard: 'border-electric-rose/30',
    };
    return borders[difficulty as keyof typeof borders] || 'border-electric-rose/30';
  };

  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-electric-purple/20 via-electric-blue/20 to-electric-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Main Card */}
      <div className="relative premium-card p-6 hover-lift">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg glass-effect">
              <Flag className="w-5 h-5 text-electric-purple" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-electric-purple transition-colors duration-300">
                {challenge.name}
              </h3>
            </div>
          </div>
          
          {/* Difficulty Badge */}
          <div className={`px-3 py-1 rounded-full glass-effect border ${getDifficultyBorder(challenge.difficulty)}`}>
            <span className={`text-sm font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
              {challenge.difficulty}
            </span>
          </div>
        </div>

        {/* Challenge Details */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between p-3 rounded-lg glass-effect">
              <span className="text-slate-400 text-sm">Platform</span>
              <span className="text-electric-blue font-semibold">{challenge.platform}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg glass-effect">
              <span className="text-slate-400 text-sm">Category</span>
              <span className="text-electric-emerald font-semibold">{challenge.category}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg glass-effect">
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-electric-amber" />
                <span className="text-slate-400 text-sm">Points</span>
              </div>
              <span className="text-electric-amber font-bold text-lg">{challenge.points}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {challenge.writeupUrl && (
          <div className="pt-4 border-t border-slate-700/50">
            <a
              href={challenge.writeupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 p-3 rounded-lg glass-effect border border-electric-purple/30 text-electric-purple hover:text-electric-cyan hover:border-electric-cyan/40 transition-all duration-300 group/link"
            >
              <span className="font-semibold">View Writeup</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" />
            </a>
          </div>
        )}

        {/* Corner Accents */}
        <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-electric-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-electric-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Success Indicator */}
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-1">
            <Target className="w-3 h-3 text-electric-emerald" />
            <Zap className="w-3 h-3 text-electric-amber animate-pulse" />
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-purple via-electric-blue to-electric-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}