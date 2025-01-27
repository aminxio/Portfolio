export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: 'cyan' | 'purple' | 'green' | 'blue';
  skills: Skill[];
}