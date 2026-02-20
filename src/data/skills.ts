import { SkillCategory } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const skillsKo: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java / Spring Boot", level: 95 },
      { name: "Node.js", level: 75 },
      { name: "JPA / Hibernate", level: 85 },
      { name: "Kafka", level: 80 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js", level: 80 },
      { name: "React", level: 75 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Electron", level: 70 },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter / Dart", level: 80 },
      { name: "Hybrid App", level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MSSQL", level: 70 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS (EC2, RDS, KMS)", level: 80 },
      { name: "Docker", level: 75 },
      { name: "CI/CD (GitLab, Jenkins)", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "MSA (Spring Cloud)", level: 85 },
      { name: "System Design", level: 90 },
      { name: "DB 설계 / 최적화", level: 90 },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "OpenAI API", level: 80 },
      { name: "Claude Code", level: 85 },
      { name: "AI Agent 개발", level: 80 },
      { name: "Git", level: 90 },
      { name: "Jira / Slack", level: 85 },
    ],
  },
];

const skillsEn: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java / Spring Boot", level: 95 },
      { name: "Node.js", level: 75 },
      { name: "JPA / Hibernate", level: 85 },
      { name: "Kafka", level: 80 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js", level: 80 },
      { name: "React", level: 75 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Electron", level: 70 },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter / Dart", level: 80 },
      { name: "Hybrid App", level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MSSQL", level: 70 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS (EC2, RDS, KMS)", level: 80 },
      { name: "Docker", level: 75 },
      { name: "CI/CD (GitLab, Jenkins)", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "MSA (Spring Cloud)", level: 85 },
      { name: "System Design", level: 90 },
      { name: "DB Design / Optimization", level: 90 },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "OpenAI API", level: 80 },
      { name: "Claude Code", level: 85 },
      { name: "AI Agent Development", level: 80 },
      { name: "Git", level: 90 },
      { name: "Jira / Slack", level: 85 },
    ],
  },
];

export const skillCategories = skillsKo;
export function getSkills(locale: Locale) {
  return locale === "en" ? skillsEn : skillsKo;
}
