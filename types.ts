
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  problem: string[];
  solution: string[];
  impact: string[];
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
