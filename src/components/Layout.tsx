import React from 'react';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';
import { useTheme } from '../context/ThemeContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen font-mono transition-colors duration-300
      ${theme === 'dark' 
        ? 'bg-black-900 text-red-500' 
        : 'bg-black-800 text-red-400'}`}
    >
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}