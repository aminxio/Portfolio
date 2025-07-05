import { useEffect, useState } from 'react';

export default function CyberEffects() {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    // Generate matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    setMatrixChars(charArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-matrix-500 text-xs font-matrix opacity-20 animate-digital-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="block">
                {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 neural-network-bg"></div>

      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-holographic opacity-10 animate-hologram"></div>

      {/* Energy Pulses */}
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-neon-cyan animate-neural-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: '0 0 10px currentColor',
            }}
          />
        ))}
      </div>

      {/* Quantum Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full animate-particle-float opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 5px currentColor',
            }}
          />
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan-line opacity-40"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-scan-line opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-scan-line opacity-35" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-neon-green to-transparent animate-data-stream opacity-25"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent animate-data-stream opacity-20" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-neon-orange to-transparent animate-data-stream opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-neon-yellow to-transparent animate-data-stream opacity-15" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-data-stream opacity-25" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-neon-cyan opacity-60 animate-glow"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-neon-purple opacity-60 animate-glow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-neon-pink opacity-60 animate-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-neon-green opacity-60 animate-glow" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
}