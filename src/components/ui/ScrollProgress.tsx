import { useEffect, useState, useCallback } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(Math.min(progress, 100));
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50 will-change-transform">
      <div 
        className="h-full bg-gradient-to-r from-electric-blue via-electric-purple to-electric-emerald transition-all duration-300 ease-out transform-gpu"
        style={{ 
          width: `${scrollProgress}%`,
          transform: 'translate3d(0, 0, 0)' // Hardware acceleration
        }}
      />
    </div>
  );
}