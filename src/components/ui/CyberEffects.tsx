import { memo } from 'react';

export default memo(function CyberEffects() {
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 8 : 15;
  const neuralCount = isMobile ? 3 : 5;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-grid-flow"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: isMobile ? '30px 30px' : '20px 20px',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      </div>

      {/* Neural Network Nodes - Reduced on mobile */}
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: neuralCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-neon-cyan animate-neural-pulse will-change-transform"
            style={{
              top: `${(i % 3) * 30 + 20}%`,
              left: `${(i % 2) * 60 + 20}%`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: '0 0 10px currentColor',
              transform: 'translate3d(0, 0, 0)'
            }}
          />
        ))}
      </div>

      {/* Quantum Particles - Reduced on mobile */}
      <div className="absolute inset-0">
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full animate-particle-float opacity-60 will-change-transform"
            style={{
              top: `${(i % 4) * 25}%`,
              left: `${(i % 3) * 33}%`,
              animationDelay: `${(i * 0.3)}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 5px currentColor',
              transform: 'translate3d(0, 0, 0)'
            }}
          />
        ))}
      </div>

      {/* Scanning Lines - Reduced on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan-line opacity-40 will-change-transform"></div>
        {!isMobile && (
          <>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-scan-line opacity-30 will-change-transform" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-scan-line opacity-35 will-change-transform" style={{ animationDelay: '2s' }}></div>
          </>
        )}
      </div>

      {/* Data Streams - Simplified on mobile */}
      <div className="absolute inset-0">
        {Array.from({ length: isMobile ? 2 : 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-neon-emerald via-neon-cyan to-transparent animate-data-stream will-change-transform"
            style={{
              left: `${20 + i * (isMobile ? 40 : 20)}%`,
              top: '0%',
              animationDelay: `${i * 0.8}s`,
              animationDuration: '3s',
              transform: 'translate3d(0, 0, 0)'
            }}
          />
        ))}
      </div>
    </div>
  );
});