export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  headline: string;
  keywords: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  summary: string;
}

export interface Career {
  company: string;
  role: string;
  period: string;
  duration: string;
  descriptions: string[];
  techStack?: string[];
}

export interface JourneyPhase {
  phase: number;
  title: string;
  period: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface Capability {
  title: string;
  icon: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  visibility: string;
  updated_at: string;
}
