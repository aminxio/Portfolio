import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      opacity: number;
      speed: number;
    }> = [];

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2,
          opacity: Math.random() * 0.5 + 0.2,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 100;
            particle.dx -= Math.cos(angle) * force * 0.2;
            particle.dy -= Math.sin(angle) * force * 0.2;
          }
        }

        particle.x += particle.dx * particle.speed;
        particle.y += particle.dy * particle.speed;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(239, 68, 68, ${particle.opacity})` 
          : `rgba(248, 113, 113, ${particle.opacity})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark'
              ? `rgba(239, 68, 68, ${0.1 * (1 - distance / 100) * particle.opacity})`
              : `rgba(248, 113, 113, ${0.1 * (1 - distance / 100) * particle.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

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
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        background: theme === 'dark' 
          ? 'linear-gradient(to bottom, #000000, #0a0a0a)'
          : 'linear-gradient(to bottom, #171717, #262626)'
      }}
    />
  );
}