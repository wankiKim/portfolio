import { SkillCategory } from "@/types";
import type { Locale } from "@/context/LanguageContext";

const skillsKo: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java / Spring Boot·Cloud", level: 95 },
      { name: "Go (Gin, gRPC)", level: 75 },
      { name: "Node.js / Express", level: 80 },
      { name: "Python (Django·FastAPI)", level: 75 },
      { name: "Kafka / RabbitMQ", level: 85 },
      { name: "JPA / Hibernate / QueryDSL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js / React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 70 },
      { name: "Electron", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Low-Level · Game · Mobile",
    skills: [
      { name: "C/C++ (AVR 임베디드)", level: 75 },
      { name: "Rust (매칭 엔진)", level: 60 },
      { name: "Kotlin (게임 서버)", level: 70 },
      { name: "Unity / C#", level: 65 },
      { name: "Flutter / Dart", level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL / MariaDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 80 },
      { name: "Oracle", level: 80 },
      { name: "SQLite (엣지·임베디드)", level: 75 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS (ECS, EKS, RDS, MSK)", level: 85 },
      { name: "Terraform IaC", level: 80 },
      { name: "Docker", level: 80 },
      { name: "CI/CD (GitHub Actions·OIDC, Jenkins)", level: 85 },
      { name: "관측 (Prometheus·Grafana·OTel)", level: 75 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "MSA (Spring Cloud, Eureka, Gateway)", level: 90 },
      { name: "레거시 현대화 (스트랭글러)", level: 90 },
      { name: "Clean / Hexagonal Architecture", level: 85 },
      { name: "Event-Driven (Saga·Outbox)", level: 85 },
      { name: "System Design", level: 90 },
      { name: "DB 설계 / 최적화", level: 90 },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "Claude Code / Claude API", level: 90 },
      { name: "AI Agent 설계", level: 85 },
      { name: "OpenAI API", level: 80 },
      { name: "Google Gemini", level: 75 },
      { name: "멀티 LLM 통합 (14개 프로바이더)", level: 75 },
      { name: "Git / Jira / Slack", level: 90 },
    ],
  },
];

const skillsEn: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java / Spring Boot·Cloud", level: 95 },
      { name: "Go (Gin, gRPC)", level: 75 },
      { name: "Node.js / Express", level: 80 },
      { name: "Python (Django·FastAPI)", level: 75 },
      { name: "Kafka / RabbitMQ", level: 85 },
      { name: "JPA / Hibernate / QueryDSL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js / React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 70 },
      { name: "Electron", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Low-Level · Game · Mobile",
    skills: [
      { name: "C/C++ (AVR embedded)", level: 75 },
      { name: "Rust (matching engines)", level: 60 },
      { name: "Kotlin (game servers)", level: 70 },
      { name: "Unity / C#", level: 65 },
      { name: "Flutter / Dart", level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL / MariaDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 80 },
      { name: "Oracle", level: 80 },
      { name: "SQLite (edge · embedded)", level: 75 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS (ECS, EKS, RDS, MSK)", level: 85 },
      { name: "Terraform IaC", level: 80 },
      { name: "Docker", level: 80 },
      { name: "CI/CD (GitHub Actions·OIDC, Jenkins)", level: 85 },
      { name: "Observability (Prometheus·Grafana·OTel)", level: 75 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "MSA (Spring Cloud, Eureka, Gateway)", level: 90 },
      { name: "Legacy Modernization (Strangler)", level: 90 },
      { name: "Clean / Hexagonal Architecture", level: 85 },
      { name: "Event-Driven (Saga·Outbox)", level: 85 },
      { name: "System Design", level: 90 },
      { name: "DB Design / Optimization", level: 90 },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "Claude Code / Claude API", level: 90 },
      { name: "AI Agent Design", level: 85 },
      { name: "OpenAI API", level: 80 },
      { name: "Google Gemini", level: 75 },
      { name: "Multi-LLM Integration (14 providers)", level: 75 },
      { name: "Git / Jira / Slack", level: 90 },
    ],
  },
];

export const skillCategories = skillsKo;
export function getSkills(locale: Locale) {
  return locale === "en" ? skillsEn : skillsKo;
}
