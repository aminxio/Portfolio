import { useEffect, useRef, memo } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
  color: string;
  speed: number;
}

export default memo(function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Enhanced mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = window.innerWidth < 768 || navigator.hardwareConcurrency < 4;
    const isTouchDevice = 'ontouchstart' in window;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mobile-optimized particle system (keep all features but lighter)
    const performanceConfig = {
      maxParticles: isMobile ? 8 : isLowEnd ? 15 : 25,
      connectionDistance: isMobile ? 60 : 80,
      animationQuality: isMobile ? 'low' : 'high',
      mouseInteraction: !isTouchDevice,
      shadowBlur: isMobile ? 4 : 8,
      frameSkip: isMobile ? 2 : 1 // Skip frames on mobile for 30fps instead of 60fps
    };

    let frameCount = 0;

    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = performanceConfig.maxParticles;
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
          dy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
          size: Math.random() * (isMobile ? 1.5 : 2) + 0.5,
          opacity: Math.random() * 0.4 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * (isMobile ? 0.2 : 0.3) + 0.1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!performanceConfig.mouseInteraction) return;
      
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 150);
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      
      if (performanceConfig.animationQuality === 'high') {
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = performanceConfig.shadowBlur;
      }
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      
      ctx.restore();
    };

    const drawConnections = () => {
      // Skip connections on every other frame for mobile
      if (isMobile && frameCount % 2 !== 0) return;
      
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < performanceConfig.connectionDistance) {
            ctx.save();
            
            const opacity = (1 - distance / performanceConfig.connectionDistance) * (isMobile ? 0.15 : 0.2);
            
            if (performanceConfig.animationQuality === 'high') {
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              );
              gradient.addColorStop(0, particle.color);
              gradient.addColorStop(1, otherParticle.color);
              ctx.strokeStyle = gradient;
            } else {
              ctx.strokeStyle = particle.color;
            }
            
            ctx.lineWidth = 1;
            ctx.globalAlpha = opacity;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            
            ctx.restore();
          }
        });
      });
    };

    const animate = () => {
      frameCount++;
      
      // Skip frames on mobile for better performance
      if (isMobile && frameCount % performanceConfig.frameSkip !== 0) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = 'rgba(2, 6, 23, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        if (isMouseMoving && performanceConfig.mouseInteraction) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const angle = Math.atan2(dy, dx);
            const force = (120 - distance) / 120;
            particle.dx -= Math.cos(angle) * force * (isMobile ? 0.1 : 0.2);
            particle.dy -= Math.sin(angle) * force * (isMobile ? 0.1 : 0.2);
          }
        }

        particle.x += particle.dx * particle.speed;
        particle.y += particle.dy * particle.speed;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        drawParticle(particle);
      });

      drawConnections();
      requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)'
      }}
    />
  );
});