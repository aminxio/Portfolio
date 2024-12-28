import React from 'react';

export default function ProfilePhoto() {
  return (
    <div className="mb-8 relative">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-400 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczO7XXMimsRK40K3x5yPOSGmNb3UiCrFFgtFpP6WESpVr6n6rM6A4sBbFx3fWxYkMVL9dsbt5GdK6_E-VkKzy2XPTba6oDE0sQ0GHINTn_ST02W14d2AmRl3dxq8fg2MsC5G3_r7IpTJdaNWxPbZoW3A=w683-h911-s-no-gm?authuser=0"
          alt="Moaaz Awad Ali"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
}