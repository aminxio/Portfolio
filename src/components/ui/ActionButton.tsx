import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ActionButtonProps {
  href: string;
  variant: 'cyan' | 'purple' | 'green';
  children: React.ReactNode;
  download?: boolean;
}

export default function ActionButton({ href, variant, children, download }: ActionButtonProps) {
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
    green: {
      dark: {
        bg: 'bg-green-900/20',
        border: 'border-green-400/20',
        text: 'text-green-400',
        hover: 'hover:bg-green-900/40',
        line: 'bg-green-400/50',
      },
      light: {
        bg: 'bg-navy-50',
        border: 'border-navy-400',
        text: 'text-navy-800',
        hover: 'hover:bg-navy-100',
        line: 'bg-navy-500',
      }
    },
  };

  const style = theme === 'dark' ? colors[variant].dark : colors[variant].light;

  return (
    <a
      href={href}
      download={download}
      className={`px-6 py-3 ${style.bg} border ${style.border} ${style.text} rounded-lg ${style.hover} transition-all duration-300 group`}
    >
      {children}
      <div className={`w-full h-0.5 ${style.line} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
    </a>
  );
}