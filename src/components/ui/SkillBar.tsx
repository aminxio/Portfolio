interface SkillBarProps {
  name: string;
  level: number;
  color: 'cyan' | 'purple' | 'green';
}

export default function SkillBar({ name, level, color }: SkillBarProps) {
  const colors = {
    cyan: 'from-cyan-400',
    purple: 'from-purple-400',
    green: 'from-green-400',
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colors[color]} to-transparent transition-all duration-500`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}