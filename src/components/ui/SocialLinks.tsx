import { Linkedin, Github, Twitter, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/gewili-moaaz',
    icon: Linkedin,
    color: 'text-blue-400'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github,
    color: 'text-purple-400'
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/yourusername',
    icon: MessageCircle,
    color: 'text-indigo-400'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: Twitter,
    color: 'text-cyan-400'
  }
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
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}