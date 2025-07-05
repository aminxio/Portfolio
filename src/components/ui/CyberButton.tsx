import React from 'react';

interface CyberButtonProps {
  href: string;
  variant: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  download?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function CyberButton({ href, variant, children, download, icon, onClick }: CyberButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20',
          border: 'border-neon-cyan',
          text: 'text-neon-cyan',
          hover: 'hover:from-neon-cyan/30 hover:to-neon-purple/30 hover:border-neon-purple',
          shadow: 'shadow-neon-cyan',
          glow: 'hover:shadow-neon-purple',
        };
      case 'secondary':
        return {
          bg: 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20',
          border: 'border-neon-purple',
          text: 'text-neon-purple',
          hover: 'hover:from-neon-purple/30 hover:to-neon-pink/30 hover:border-neon-pink',
          shadow: 'shadow-neon-purple',
          glow: 'hover:shadow-neon-pink',
        };
      case 'danger':
        return {
          bg: 'bg-gradient-to-r from-neon-pink/20 to-red-500/20',
          border: 'border-neon-pink',
          text: 'text-neon-pink',
          hover: 'hover:from-neon-pink/30 hover:to-red-500/30 hover:border-red-500',
          shadow: 'shadow-neon-pink',
          glow: 'hover:shadow-red-500',
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20',
          border: 'border-neon-cyan',
          text: 'text-neon-cyan',
          hover: 'hover:from-neon-cyan/30 hover:to-neon-purple/30',
          shadow: 'shadow-neon-cyan',
          glow: 'hover:shadow-neon-cyan',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center px-8 py-4 
        ${styles.bg} ${styles.hover} 
        border-2 ${styles.border} ${styles.hover.split(' ')[1]}
        ${styles.text} font-code font-bold text-sm tracking-wider
        rounded-lg transition-all duration-300 transform hover:scale-105
        ${styles.shadow} ${styles.glow}
        overflow-hidden uppercase
      `}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        {icon && <span className="group-hover:animate-pulse">{icon}</span>}
        <span>{children}</span>
      </span>
      
      {/* Corner Brackets */}
      <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-current opacity-60 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-current opacity-60 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-current opacity-60 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-current opacity-60 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Scan Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-current opacity-0 group-hover:opacity-100 animate-scan-line"></div>
    </a>
  );
}