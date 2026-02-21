import { SkillCategory } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const skillsKo: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java / Spring Boot", level: 95 },
      { name: "Node.js / Express", level: 75 },
      { name: "FastAPI (Python)", level: 70 },
      { name: "JPA / Hibernate", level: 85 },
      { name: "Kafka / RabbitMQ", level: 80 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: 80 },
      { name: "Vue.js", level: 80 },
      { name: "React", level: 75 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Electron", level: 70 },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter / Dart", level: 80 },
      { name: "React Native", level: 70 },
      { name: "Hybrid App", level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MSSQL", level: 70 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS (ECS, EKS, RDS, KMS)", level: 80 },
      { name: "Terraform IaC", level: 75 },
      { name: "Docker", level: 75 },
      { name: "CI/CD (GitHub Actions, GitLab, Jenkins)", level: 80 },
      { name: "Turborepo", level: 70 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "MSA (Spring Cloud)", level: 85 },
      { name: "Clean Architecture", level: 85 },
      { name: "Event-Driven / Saga Pattern", level: 80 },
      { name: "System Design", level: 90 },
      { name: "DB 설계 / 최적화", level: 90 },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "OpenAI API (GPT-4)", level: 80 },
      { name: "Google Gemini", level: 75 },
      { name: "Claude Code / Claude API", level: 85 },
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
      { name: "Node.js / Express", level: 75 },
      { name: "FastAPI (Python)", level: 70 },
      { name: "JPA / Hibernate", level: 85 },
      { name: "Kafka / RabbitMQ", level: 80 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: 80 },
      { name: "Vue.js", level: 80 },
      { name: "React", level: 75 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Electron", level: 70 },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter / Dart", level: 80 },
      { name: "React Native", level: 70 },
      { name: "Hybrid App", level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MSSQL", level: 70 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS (ECS, EKS, RDS, KMS)", level: 80 },
      { name: "Terraform IaC", level: 75 },
      { name: "Docker", level: 75 },
      { name: "CI/CD (GitHub Actions, GitLab, Jenkins)", level: 80 },
      { name: "Turborepo", level: 70 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "MSA (Spring Cloud)", level: 85 },
      { name: "Clean Architecture", level: 85 },
      { name: "Event-Driven / Saga Pattern", level: 80 },
      { name: "System Design", level: 90 },
      { name: "DB Design / Optimization", level: 90 },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "OpenAI API (GPT-4)", level: 80 },
      { name: "Google Gemini", level: 75 },
      { name: "Claude Code / Claude API", level: 85 },
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
