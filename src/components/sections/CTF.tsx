import { recentChallenges } from '../../data/ctf';
import CTFCard from '../ui/ctf/CTFCard';
import { useTheme } from '../../context/ThemeContext';
import { Flag } from 'lucide-react';

export default function CTF() {
  const { theme } = useTheme();

  return (
    <section id="ctf" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <Flag className={`w-8 h-8 ${
            theme === 'dark' ? 'text-accent-purple' : 'text-accent-purple'
          }`} />
          <h2 className={`text-3xl font-bold ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-accent-purple via-gold-400 to-accent-purple text-transparent bg-clip-text animate-gradient-x' 
              : 'bg-gradient-to-r from-accent-purple via-gold-500 to-accent-purple text-transparent bg-clip-text animate-gradient-x'
          }`}>
            Latest CTF Challenges
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentChallenges.map((challenge) => (
            <CTFCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}