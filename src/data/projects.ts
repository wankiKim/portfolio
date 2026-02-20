import type { Locale } from "@/context/LanguageContext";

export interface Project {
  name: string;
  company?: string;
  description: string;
  techStack: string[];
  visibility: "private" | "public";
  url?: string;
}

const projectsKo: Project[] = [
  {
    name: "CS 응대 AI Agent",
    company: "휴니크",
    description:
      "해피톡+비즈톡+OpenAI+Notion+Slack 연동 CS 자동 응대 시스템. 아키텍처 설계부터 시나리오·DB 설계, 구현까지 전담.",
    techStack: ["OpenAI", "Notion API", "Slack", "Node.js"],
    visibility: "private",
  },
  {
    name: "무인 머신 시스템",
    company: "휴니크",
    description:
      "Electron + React + 디바이스 연동 무인 머신. 하드웨어 제어부터 관리 UI까지 풀스택 개발.",
    techStack: ["Electron", "React", "TypeScript", "Device API"],
    visibility: "private",
  },
  {
    name: "사내 ERP (MSA)",
    company: "휴니크",
    description:
      "인증·고객·인트라넷·어드민 서비스를 MSA로 분리 설계. DB 구성 및 아키텍처 설계·구현.",
    techStack: ["Java", "Spring Boot", "MSA", "MySQL"],
    visibility: "private",
  },
  {
    name: "메일빈 솔루션",
    company: "휴니크",
    description:
      "메일빈 서비스 솔루션 설계 및 개발. Claude Code Skills/Plugin을 활용한 AI 네이티브 개발.",
    techStack: ["Claude Code", "TypeScript", "React"],
    visibility: "private",
  },
  {
    name: "우즈베키스탄 코인 거래소",
    company: "코베아그룹",
    description:
      "2.0 버전 신규 개발 — 전체 소스 리팩토링, DB 설계, CI/CD 구축. 현지 은행·정부 로그인(One ID), Master/Visa 카드 결제 연동.",
    techStack: ["Java", "Spring Cloud", "Kafka", "Redis", "MongoDB", "MySQL"],
    visibility: "private",
  },
  {
    name: "암호화폐 거래소 플랫폼",
    company: "코어닥스",
    description:
      "거래소 Frontend(Vue.js) / Backend(Java) 개발 및 PM. ISMS-P 인증 대응, 매칭 서버 유지보수(C/C++).",
    techStack: ["Vue.js", "Java", "Spring", "C/C++", "Flutter"],
    visibility: "private",
  },
  {
    name: "인도네시아 키오스크 결제 서버",
    company: "와이온",
    description:
      "텔콤셀/FINNET 결제서버 연동 API, 스케줄러, 매니지먼트 시스템 개발. DOKU PG사 서버 연동 R&D.",
    techStack: ["Java", "Oracle", "AWS", "JPA", "Hibernate"],
    visibility: "private",
  },
  {
    name: "ERC20 & 스텔라 토큰",
    company: "와이온",
    description:
      "ERC20 표준 토큰 및 스텔라 네트워크 토큰 개발. AWS 인프라(Load Balancing, KMS, RDS) 구성.",
    techStack: ["Solidity", "Stellar SDK", "AWS", "Blockchain"],
    visibility: "private",
  },
  {
    name: "bkit-claude-code",
    description:
      "Claude Code를 위한 Vibecoding Kit 플러그인. PDCA 기반 개발 워크플로우 자동화.",
    techStack: ["TypeScript", "Claude Code", "PDCA"],
    visibility: "public",
    url: "https://github.com/wankiKim/bkit-claude-code",
  },
  {
    name: "BUJA",
    description:
      "개인 프로젝트 — 부동산 자산 분석 서비스.",
    techStack: ["TypeScript", "Next.js"],
    visibility: "public",
    url: "https://github.com/wankiKim/BUJA",
  },
];

const projectsEn: Project[] = [
  {
    name: "CS AI Agent",
    company: "Hunik Inc.",
    description:
      "Automated CS response system integrating HappyTalk, BizTalk, OpenAI, Notion & Slack. Sole developer — from architecture to scenario engine to DB design.",
    techStack: ["OpenAI", "Notion API", "Slack", "Node.js"],
    visibility: "private",
  },
  {
    name: "Unmanned Machine System",
    company: "Hunik Inc.",
    description:
      "Electron + React + device integration unmanned machine. Full-stack from hardware control to management UI.",
    techStack: ["Electron", "React", "TypeScript", "Device API"],
    visibility: "private",
  },
  {
    name: "Internal ERP (MSA)",
    company: "Hunik Inc.",
    description:
      "Auth, Customer, Intranet & Admin services designed as MSA. DB configuration and architecture design & implementation.",
    techStack: ["Java", "Spring Boot", "MSA", "MySQL"],
    visibility: "private",
  },
  {
    name: "MailBean Solution",
    company: "Hunik Inc.",
    description:
      "MailBean service solution design and development. AI-native development using Claude Code Skills/Plugin.",
    techStack: ["Claude Code", "TypeScript", "React"],
    visibility: "private",
  },
  {
    name: "Uzbekistan Crypto Exchange",
    company: "Kobea Group",
    description:
      "Full v2.0 rebuild — source refactoring, DB redesign, CI/CD setup. Local bank & gov login (One ID), Mastercard/Visa payment integration.",
    techStack: ["Java", "Spring Cloud", "Kafka", "Redis", "MongoDB", "MySQL"],
    visibility: "private",
  },
  {
    name: "Crypto Exchange Platform",
    company: "Coredax",
    description:
      "Exchange Frontend (Vue.js) / Backend (Java) development & PM. ISMS-P certification, matching engine maintenance (C/C++).",
    techStack: ["Vue.js", "Java", "Spring", "C/C++", "Flutter"],
    visibility: "private",
  },
  {
    name: "Indonesia Kiosk Payment Server",
    company: "Wion",
    description:
      "Telkomsel/FINNET payment server integration API, scheduler, management system. DOKU (PG) server integration R&D.",
    techStack: ["Java", "Oracle", "AWS", "JPA", "Hibernate"],
    visibility: "private",
  },
  {
    name: "ERC20 & Stellar Tokens",
    company: "Wion",
    description:
      "ERC20 standard token and Stellar network token development. AWS infrastructure (Load Balancing, KMS, RDS) setup.",
    techStack: ["Solidity", "Stellar SDK", "AWS", "Blockchain"],
    visibility: "private",
  },
  {
    name: "bkit-claude-code",
    description:
      "Vibecoding Kit plugin for Claude Code. PDCA-based development workflow automation.",
    techStack: ["TypeScript", "Claude Code", "PDCA"],
    visibility: "public",
    url: "https://github.com/wankiKim/bkit-claude-code",
  },
  {
    name: "BUJA",
    description:
      "Personal project — Real estate asset analysis service.",
    techStack: ["TypeScript", "Next.js"],
    visibility: "public",
    url: "https://github.com/wankiKim/BUJA",
  },
];

export const projects = projectsKo;
export function getProjects(locale: Locale) {
  return locale === "en" ? projectsEn : projectsKo;
}
