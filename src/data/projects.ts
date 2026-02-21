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
    name: "KoCoin 암호화폐 거래소",
    description:
      "17개 마이크로서비스로 구성된 풀스택 암호화폐 거래소. 스팟 매칭 엔진, 선물 거래, P2P OTC, 마켓메이킹 봇 등 거래소 핵심 기능 전체 구현. Terraform으로 AWS 인프라를 코드로 관리하고, GitHub Actions로 12개 백엔드 + 2개 프론트엔드를 병렬 빌드·배포.",
    techStack: ["Spring Boot 3.4", "Java 21", "Next.js", "AWS ECS", "Terraform", "Kafka", "Redis"],
    visibility: "public",
  },
  {
    name: "DDangZip 부동산 급매 알림",
    description:
      "7개 마이크로서비스(API Gateway, 인증, 크롤러, 알림, 위치, 매물 등)로 구성된 부동산 급매 알림 플랫폼. Spring Cloud Gateway + Eureka + Resilience4j MSA 인프라 구현. MongoDB GeoJSON 위치 기반 매물 검색.",
    techStack: ["Spring Boot 3.2", "Flutter", "Spring Cloud Gateway", "Eureka", "MySQL", "MongoDB", "Redis", "RabbitMQ"],
    visibility: "public",
  },
  {
    name: "Auto-Claude",
    description:
      "AI 에이전트가 소프트웨어를 자율적으로 계획·구축·검증하는 멀티 에이전트 프레임워크. 최대 12개 병렬 터미널에서 동시 작업, 격리된 Git Worktree 환경에서 안전한 코드 생성. 자체 검증 QA 루프와 AI 기반 충돌 해결.",
    techStack: ["Python", "Electron", "Claude API", "Git Worktrees"],
    visibility: "public",
  },
  {
    name: "Hunik Web 기업 홈페이지",
    company: "휴니크",
    description:
      "Turborepo 기반 모노레포 구조로 프론트엔드(Next.js), 백엔드(Express), 어드민(React Admin), 공유 패키지를 하나의 저장소에서 관리. 보안 점수 98/100, 코드 품질 96/100 달성.",
    techStack: ["Next.js 14", "Express.js", "React Admin", "Turborepo", "MongoDB"],
    visibility: "private",
  },
  {
    name: "Zelotek 레거시 MSA 전환",
    description:
      "레거시 PHP 키오스크 시스템을 12개 Java Spring Boot 마이크로서비스로 현대화. Clean Architecture 4계층 적용, Strangler Pattern 점진적 마이그레이션. REST(동기) + RabbitMQ(비동기 이벤트) 혼합 통신, Saga Pattern(Orchestration) 분산 트랜잭션.",
    techStack: ["Spring Boot 3.x", "Java 17", "PostgreSQL", "Redis", "RabbitMQ", "Kong", "AWS EKS"],
    visibility: "public",
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
      "OpenAI와 Google Gemini 듀얼 AI 분석 시스템 기반 부동산 투자분석 플랫폼. 실거래가 데이터 기반 아파트 투자 분석, 선형 회귀 가격 예측, 카카오맵 주변 인프라 분석, 네이버 뉴스 부동산 정책 모니터링.",
    techStack: ["Node.js", "Flutter", "MongoDB", "GPT-4o-mini", "Gemini", "Docker"],
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
    name: "KoCoin Crypto Exchange",
    description:
      "Full-stack crypto exchange with 17 microservices. Spot matching engine, futures trading, P2P OTC, market-making bots — all core exchange features. AWS infra managed via Terraform, 12 backend + 2 frontend parallel build/deploy with GitHub Actions.",
    techStack: ["Spring Boot 3.4", "Java 21", "Next.js", "AWS ECS", "Terraform", "Kafka", "Redis"],
    visibility: "public",
  },
  {
    name: "DDangZip Property Alert",
    description:
      "Real estate deal alert platform with 7 microservices (API Gateway, Auth, Crawler, Notification, Location, Listing). Spring Cloud Gateway + Eureka + Resilience4j MSA. MongoDB GeoJSON location-based property search.",
    techStack: ["Spring Boot 3.2", "Flutter", "Spring Cloud Gateway", "Eureka", "MySQL", "MongoDB", "Redis", "RabbitMQ"],
    visibility: "public",
  },
  {
    name: "Auto-Claude",
    description:
      "Autonomous multi-agent coding framework where AI agents plan, build & verify software. Up to 12 parallel terminals, isolated Git Worktree environments for safe code generation. Self-verifying QA loop and AI-powered conflict resolution.",
    techStack: ["Python", "Electron", "Claude API", "Git Worktrees"],
    visibility: "public",
  },
  {
    name: "Hunik Web Corporate Site",
    company: "Hunik Inc.",
    description:
      "Turborepo monorepo managing Frontend (Next.js), Backend (Express), Admin (React Admin), and shared packages. Achieved 98/100 security score and 96/100 code quality.",
    techStack: ["Next.js 14", "Express.js", "React Admin", "Turborepo", "MongoDB"],
    visibility: "private",
  },
  {
    name: "Zelotek Legacy-to-MSA",
    description:
      "Modernized legacy PHP kiosk system into 12 Java Spring Boot microservices. Clean Architecture 4-layer, Strangler Pattern migration. REST (sync) + RabbitMQ (async event) hybrid, Saga Pattern (Orchestration) distributed transactions.",
    techStack: ["Spring Boot 3.x", "Java 17", "PostgreSQL", "Redis", "RabbitMQ", "Kong", "AWS EKS"],
    visibility: "public",
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
      "AI-powered real estate investment analysis platform with dual AI (OpenAI + Google Gemini). Real transaction data analysis, linear regression price prediction, Kakao Map infrastructure analysis, Naver News policy monitoring.",
    techStack: ["Node.js", "Flutter", "MongoDB", "GPT-4o-mini", "Gemini", "Docker"],
    visibility: "public",
    url: "https://github.com/wankiKim/BUJA",
  },
];

export const projects = projectsKo;
export function getProjects(locale: Locale) {
  return locale === "en" ? projectsEn : projectsKo;
}
