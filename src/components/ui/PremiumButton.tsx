import React from 'react';

interface PremiumButtonProps {
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  download?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function PremiumButton({ href, variant, children, download, icon, onClick }: PremiumButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'btn-premium bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-blue/90 hover:to-electric-purple/90';
      case 'secondary':
        return 'btn-premium bg-gradient-to-r from-electric-purple to-electric-emerald hover:from-electric-purple/90 hover:to-electric-emerald/90';
      case 'outline':
        return 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white bg-transparent';
      default:
        return 'btn-premium bg-gradient-to-r from-electric-blue to-electric-purple';
    }
  };

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center px-8 py-4 
        ${getVariantStyles()}
        rounded-xl font-semibold text-sm tracking-wide
        transition-all duration-300 transform hover:scale-105
        focus-ring overflow-hidden
      `}
    >
      <span className="relative z-10 flex items-center space-x-2">
        {icon && <span className="group-hover:animate-pulse">{icon}</span>}
        <span>{children}</span>
      </span>
    </a>
  );
}