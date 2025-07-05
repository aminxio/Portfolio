import React from 'react';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';
import ScrollProgress from './ui/ScrollProgress';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-body overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10"></div>
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}