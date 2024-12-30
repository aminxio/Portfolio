import { FaLinkedin, FaGithub, FaTwitter, FaDiscord,FaFacebook } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/gewili-moaaz',
    icon: FaLinkedin,
    color: 'text-blue-400',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/AmazingMoaaz',
    icon: FaGithub,
    color: 'text-purple-400',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/amazing_moaaz',
    icon: FaDiscord,
    color: 'text-indigo-400',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Amazing.Moaaz',
    icon: FaFacebook,
    color: 'text-indigo-400',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/M_0_A_Z',
    icon: FaTwitter,
    color: 'text-cyan-400',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ name, url, icon: Icon, color }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} hover:scale-110 transition-transform`}
          aria-label={name}
        >
          <Icon className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
}
