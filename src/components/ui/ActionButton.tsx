import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

export default function ActionButton({ children, onClick, variant }: ActionButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg";
  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-green-500/25",
    secondary: "bg-gray-800 hover:bg-gray-700 text-green-400 shadow-gray-800/25"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}