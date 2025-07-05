/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Professional Dark Palette
        slate: {
          950: '#020617',
          900: '#0f172a',
          850: '#1e293b',
          800: '#334155',
          700: '#475569',
          600: '#64748b',
        },
        // Premium Accent Colors
        electric: {
          blue: '#0ea5e9',
          purple: '#8b5cf6',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
          cyan: '#06b6d4',
        },
        // Professional Gradients
        gradient: {
          primary: '#667eea',
          secondary: '#764ba2',
          accent: '#f093fb',
          success: '#4facfe',
          warning: '#f093fb',
          danger: '#ff6b6b',
        },
        // Corporate Colors
        corporate: {
          blue: '#1e40af',
          indigo: '#4338ca',
          purple: '#7c3aed',
          pink: '#db2777',
          red: '#dc2626',
          orange: '#ea580c',
          amber: '#d97706',
          yellow: '#ca8a04',
          lime: '#65a30d',
          green: '#16a34a',
          emerald: '#059669',
          teal: '#0d9488',
          cyan: '#0891b2',
          sky: '#0284c7',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'cyber': ['Orbitron', 'monospace'],
      },
      animation: {
        // Professional Animations
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'rotate-in': 'rotateIn 0.8s ease-out forwards',
        
        // Premium Effects
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'border-flow': 'borderFlow 3s linear infinite',
        
        // Interactive Animations
        'hover-lift': 'hoverLift 0.3s ease-out forwards',
        'hover-glow': 'hoverGlow 0.3s ease-out forwards',
        'click-scale': 'clickScale 0.15s ease-out forwards',
        
        // Background Effects
        'particle-float': 'particleFloat 6s ease-in-out infinite',
        'energy-pulse': 'energyPulse 2s ease-in-out infinite',
        'neural-network': 'neuralNetwork 4s ease-in-out infinite',
        
        // Text Effects
        'typewriter': 'typewriter 4s steps(40) infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'text-shimmer': 'textShimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        // Basic Animations
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' }
        },
        
        // Premium Effects
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            filter: 'brightness(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
            filter: 'brightness(1.1)'
          }
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        borderFlow: {
          '0%': { 
            borderColor: '#3b82f6',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
          },
          '33%': { 
            borderColor: '#8b5cf6',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
          },
          '66%': { 
            borderColor: '#10b981',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
          },
          '100%': { 
            borderColor: '#3b82f6',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
          }
        },
        
        // Interactive Animations
        hoverLift: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-5px)' }
        },
        hoverGlow: {
          '0%': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
          '100%': { boxShadow: '0 8px 40px rgba(59, 130, 246, 0.3)' }
        },
        clickScale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        },
        
        // Background Effects
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '1'
          }
        },
        energyPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: '1'
          }
        },
        neuralNetwork: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            transform: 'scale(1.05) rotate(2deg)',
            filter: 'hue-rotate(90deg)'
          }
        },
        
        // Text Effects
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' }
        },
        textGlow: {
          '0%': { 
            textShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          },
          '100%': { 
            textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)'
          }
        },
        textShimmer: {
          '0%': { 
            backgroundPosition: '-200% center'
          },
          '100%': { 
            backgroundPosition: '200% center'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'neural-pattern': 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        'grid-pattern': 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
        'shimmer': '200% 100%',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-rose': '0 0 20px rgba(244, 63, 94, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 16px 64px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
};