import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Web Security Scanner',
    description: 'Automated vulnerability scanner for web applications, detecting common security flaws and OWASP Top 10 vulnerabilities.',
    tags: ['Python', 'Security', 'OWASP'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
    githubUrl: '#',
  },
  {
    title: 'Network Traffic Analyzer',
    description: 'Real-time network traffic analysis tool with intrusion detection capabilities and detailed packet inspection.',
    tags: ['Go', 'Networking', 'Security'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    githubUrl: '#',
  },
  {
    title: 'Security Dashboard',
    description: 'Interactive dashboard for monitoring security metrics, vulnerabilities, and threat intelligence data.',
    tags: ['React', 'TypeScript', 'Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1000',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of security tools, vulnerability research, and open-source contributions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}