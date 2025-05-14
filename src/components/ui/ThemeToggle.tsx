import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-black-700/70 hover:bg-black-600/70 border border-gold-400/20' 
          : 'bg-black-600/70 hover:bg-black-500/70 border border-gold-500/20'
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-gold-400 transform transition-transform duration-300 rotate-0 hover:rotate-90" />
        ) : (
          <Moon className="w-5 h-5 text-gold-500 transform transition-transform duration-300 scale-100 hover:scale-110" />
        )}
      </div>
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-black-700 to-accent-purple/20 opacity-0' 
            : 'bg-gradient-to-br from-black-600 to-accent-blue/20 opacity-100'
        }`}
      />
    </button>
  );
}