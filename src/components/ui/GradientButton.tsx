import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface GradientButtonProps {
  href: string;
  variant: 'cyan' | 'purple';
  children: React.ReactNode;
}

export default function GradientButton({ href, variant, children }: GradientButtonProps) {
  const { theme } = useTheme();
  
  const colors = {
    cyan: {
      dark: {
        bg: 'bg-cyan-900/20',
        border: 'border-cyan-400/20',
        text: 'text-cyan-400',
        hover: 'hover:bg-cyan-900/40',
        line: 'bg-cyan-400/50',
      },
      light: {
        bg: 'bg-navy-50',
        border: 'border-navy-200',
        text: 'text-navy-600',
        hover: 'hover:bg-navy-100',
        line: 'bg-navy-300',
      }
    },
    purple: {
      dark: {
        bg: 'bg-purple-900/20',
        border: 'border-purple-400/20',
        text: 'text-purple-400',
        hover: 'hover:bg-purple-900/40',
        line: 'bg-purple-400/50',
      },
      light: {
        bg: 'bg-navy-50',
        border: 'border-navy-300',
        text: 'text-navy-700',
        hover: 'hover:bg-navy-100',
        line: 'bg-navy-400',
      }
    },
  };

  const style = theme === 'dark' ? colors[variant].dark : colors[variant].light;

  return (
    <a
      href={href}
      className={`px-6 py-3 ${style.bg} border ${style.border} ${style.text} rounded-lg ${style.hover} transition-all duration-300 group`}
    >
      {children}
      <div className={`w-full h-0.5 ${style.line} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
    </a>
  );
}