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
        bg: 'bg-black-700/40',
        border: 'border-accent-blue/30',
        text: 'text-accent-blue',
        hover: 'hover:bg-black-600/60',
        line: 'bg-accent-blue/50',
      },
      light: {
        bg: 'bg-black-600/40',
        border: 'border-accent-blue/30',
        text: 'text-accent-blue',
        hover: 'hover:bg-black-500/60',
        line: 'bg-accent-blue/50',
      }
    },
    purple: {
      dark: {
        bg: 'bg-black-700/40',
        border: 'border-accent-purple/30',
        text: 'text-accent-purple',
        hover: 'hover:bg-black-600/60',
        line: 'bg-accent-purple/50',
      },
      light: {
        bg: 'bg-black-600/40',
        border: 'border-accent-purple/30',
        text: 'text-accent-purple',
        hover: 'hover:bg-black-500/60',
        line: 'bg-accent-purple/50',
      }
    },
    green: {
      dark: {
        bg: 'bg-black-700/40',
        border: 'border-accent-emerald/30',
        text: 'text-accent-emerald',
        hover: 'hover:bg-black-600/60',
        line: 'bg-accent-emerald/50',
      },
      light: {
        bg: 'bg-black-600/40',
        border: 'border-accent-emerald/30',
        text: 'text-accent-emerald',
        hover: 'hover:bg-black-500/60',
        line: 'bg-accent-emerald/50',
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