export interface Skill {
  level: number;
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: 'cyan' | 'purple' | 'green' | 'blue';
  skills: Skill[];
}