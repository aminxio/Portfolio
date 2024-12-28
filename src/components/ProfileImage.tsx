import React from 'react';

export default function ProfileImage() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-green-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
        alt="Profile"
        className="relative rounded-lg shadow-xl w-32 h-32 object-cover"
      />
    </div>
  );
}