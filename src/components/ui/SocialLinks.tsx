import { FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amin-ouagi/',
    icon: FaLinkedin,
    color: 'text-electric-blue',
    hoverColor: 'hover:text-electric-cyan',
    bgColor: 'bg-electric-blue/20',
    borderColor: 'border-electric-blue/30',
    description: 'Professional Network'
  },
  {
    name: 'GitHub',
    url: '',
    icon: FaGithub,
    color: 'text-electric-purple',
    hoverColor: 'hover:text-electric-cyan',
    bgColor: 'bg-electric-purple/20',
    borderColor: 'border-electric-purple/30',
    description: 'Open Source Projects'
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/x_d5230',
    icon: FaDiscord,
    color: 'text-electric-emerald',
    hoverColor: 'hover:text-electric-cyan',
    bgColor: 'bg-electric-emerald/20',
    borderColor: 'border-electric-emerald/30',
    description: 'Community Chat'
  },
  {
    name: 'Facebook',
    url: '',
    icon: FaFacebook,
    color: 'text-electric-amber',
    hoverColor: 'hover:text-electric-cyan',
    bgColor: 'bg-electric-amber/20',
    borderColor: 'border-electric-amber/30',
    description: 'Social Updates'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/ougi_xd',
    icon: FaTwitter,
    color: 'text-electric-cyan',
    hoverColor: 'hover:text-electric-blue',
    bgColor: 'bg-electric-cyan/20',
    borderColor: 'border-electric-cyan/30',
    description: 'Tech Insights'
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-6">
      {/* Grid Layout for Social Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {socialLinks.map(({ name, url, icon: Icon, color, hoverColor, bgColor, borderColor, description }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label={name}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-1 rounded-xl ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`}></div>
            
            {/* Main Card */}
            <div className={`relative p-4 rounded-xl glass-effect border ${borderColor} hover:scale-105 transition-all duration-300`}>
              <div className="flex flex-col items-center space-y-2">
                <Icon className={`w-8 h-8 ${color} ${hoverColor} transition-colors duration-300`} />
                <div className="text-center">
                  <div className={`font-semibold text-sm ${color} ${hoverColor} transition-colors duration-300`}>
                    {name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {description}
                  </div>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          </a>
        ))}
      </div>


    </div>
  );
}
