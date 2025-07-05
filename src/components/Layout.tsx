import React from 'react';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';
import ScrollProgress from './ui/ScrollProgress';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-slate-100 font-body overflow-x-hidden">
      {/* Fallback background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0"></div>
      
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Grid overlay for extra texture */}
      <div className="fixed inset-0 opacity-30 z-0 pointer-events-none" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}