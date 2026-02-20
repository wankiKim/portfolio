import type { Locale } from "@/context/LanguageContext";

export interface WorkflowStat {
  value: string;
  label: string;
  description: string;
}

export interface WorkflowCase {
  title: string;
  scale: string;
  duration: string;
  solo: boolean;
  techStack: string[];
  description: string;
  highlight?: boolean;
  liveUrl?: string;
  blogUrl?: string;
  metrics?: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

interface AIWorkflowData {
  stats: WorkflowStat[];
  cases: WorkflowCase[];
  process: WorkflowStep[];
}

const data: Record<Locale, AIWorkflowData> = {
  ko: {
    stats: [
      { value: "10x", label: "개발 속도", description: "AI 페어 프로그래밍으로 기존 대비 10배 빠른 구현" },
      { value: "1", label: "개발자", description: "엔터프라이즈급 시스템을 혼자서 설계부터 배포까지" },
      { value: "0", label: "타협", description: "속도를 높여도 아키텍처 품질에 타협 없음" },
      { value: "24/7", label: "AI 파트너", description: "Claude Code가 시니어 개발자 역할을 상시 수행" },
    ],
    cases: [
      {
        title: "암호화폐 거래소 — Claude Code로 처음부터 구축",
        scale: "풀스택 거래소 플랫폼",
        duration: "Solo",
        solo: true,
        highlight: true,
        liveUrl: "https://exchange.agentmichael.me",
        blogUrl: "https://michaelkim80.tistory.com/5",
        techStack: ["Next.js", "Node.js", "WebSocket", "Terraform", "Kubernetes", "AWS"],
        metrics: ["12개 트레이딩 봇 동시 운영", "초당 100+ 주문 처리, 딜레이 없음", "2~3초마다 체결, 10~15초 호가 갱신"],
        description: "5년간의 거래소 개발 경험을 바탕으로, Claude Code와 함께 암호화폐 거래소를 처음부터 구축. 실시간 호가·체결 엔진, 12개 봇 동시 운영, 초당 100건 이상의 주문을 딜레이 없이 처리. Terraform + Kubernetes로 AWS 인프라 자동화까지 1인 완성.",
      },
      { title: "CS 응대 AI Agent 시스템", scale: "멀티채널 자동화 플랫폼", duration: "2주", solo: true, techStack: ["OpenAI", "Slack", "Notion API", "Node.js"], description: "해피톡 · 비즈톡 · OpenAI · Notion · Slack 연동 CS 자동 응대 시스템. 아키텍처 설계 → DB 스키마 → 시나리오 엔진 → API 서버까지 전 과정을 Claude Code와 협업으로 단독 개발." },
      { title: "사내 ERP 마이크로서비스", scale: "MSA 4개 서비스", duration: "3주", solo: true, techStack: ["Java", "Spring Boot", "MSA", "MySQL", "Redis"], description: "인증 · 고객 · 인트라넷 · 어드민 서비스를 마이크로서비스로 분리 설계. 도메인 모델링부터 API Gateway, 서비스 간 통신, CI/CD 파이프라인까지 원맨 아키텍처." },
      { title: "이 포트폴리오 사이트", scale: "풀스택 + 인프라", duration: "1일", solo: true, techStack: ["Next.js 15", "Terraform", "AWS", "GitHub Actions"], description: "이 사이트 자체가 증거입니다. Next.js 15 앱 개발 → Terraform 인프라(S3 + CloudFront + Route53 + ACM) → GitHub Actions CI/CD → 커스텀 도메인 연결까지 하루 만에 완성." },
    ],
    process: [
      { step: "01", title: "AI와 아키텍처 설계", description: "요구사항 분석 → Claude Code와 함께 시스템 설계 · 기술 스택 결정 · PDCA 기반 계획 수립" },
      { step: "02", title: "초고속 구현", description: "AI 페어 프로그래밍으로 보일러플레이트 제거, 핵심 로직에만 집중. 하루 만에 수천 줄 품질 코드 생산" },
      { step: "03", title: "자동 검증 & 배포", description: "AI 코드 리뷰 · Gap 분석 · Terraform 인프라 · CI/CD 파이프라인까지 원스톱 자동화" },
    ],
  },
  en: {
    stats: [
      { value: "10x", label: "Dev Speed", description: "10x faster implementation through AI pair programming" },
      { value: "1", label: "Developer", description: "Enterprise-grade systems from design to deployment — solo" },
      { value: "0", label: "Compromise", description: "Speed up without compromising architecture quality" },
      { value: "24/7", label: "AI Partner", description: "Claude Code serves as a senior developer around the clock" },
    ],
    cases: [
      {
        title: "Crypto Exchange — Built from Scratch with Claude Code",
        scale: "Full-Stack Exchange Platform",
        duration: "Solo",
        solo: true,
        highlight: true,
        liveUrl: "https://exchange.agentmichael.me",
        blogUrl: "https://michaelkim80.tistory.com/5",
        techStack: ["Next.js", "Node.js", "WebSocket", "Terraform", "Kubernetes", "AWS"],
        metrics: ["12 trading bots running simultaneously", "100+ orders/sec with zero delay", "Execution every 2-3s, orderbook refresh 10-15s"],
        description: "Leveraging 5 years of exchange development experience, built a full crypto exchange from scratch with Claude Code. Real-time orderbook & matching engine, 12 concurrent bots, 100+ orders/sec with zero latency. Solo completion including Terraform + Kubernetes AWS infrastructure automation.",
      },
      { title: "CS AI Agent System", scale: "Multi-channel Automation", duration: "2 weeks", solo: true, techStack: ["OpenAI", "Slack", "Notion API", "Node.js"], description: "Automated CS response system integrating HappyTalk, BizTalk, OpenAI, Notion & Slack. Solo development with Claude Code — from architecture to DB schema to scenario engine to API server." },
      { title: "Internal ERP Microservices", scale: "4 MSA Services", duration: "3 weeks", solo: true, techStack: ["Java", "Spring Boot", "MSA", "MySQL", "Redis"], description: "Designed Auth, Customer, Intranet & Admin as separate microservices. One-man architecture from domain modeling to API Gateway, inter-service communication, and CI/CD pipeline." },
      { title: "This Portfolio Site", scale: "Full-Stack + Infra", duration: "1 day", solo: true, techStack: ["Next.js 15", "Terraform", "AWS", "GitHub Actions"], description: "This site itself is the proof. Next.js 15 app → Terraform infra (S3 + CloudFront + Route53 + ACM) → GitHub Actions CI/CD → custom domain — all completed in a single day." },
    ],
    process: [
      { step: "01", title: "Architecture with AI", description: "Requirements analysis → System design with Claude Code · Tech stack decisions · PDCA-based planning" },
      { step: "02", title: "Rapid Implementation", description: "AI pair programming eliminates boilerplate, focus on core logic. Thousands of lines of quality code in a single day" },
      { step: "03", title: "Auto Verify & Deploy", description: "AI code review · Gap analysis · Terraform infra · CI/CD pipeline — one-stop automation" },
    ],
  },
};

export function getAIWorkflow(locale: Locale) {
  return data[locale];
}

// backward compat
export const workflowStats = data.ko.stats;
export const workflowCases = data.ko.cases;
export const workflowProcess = data.ko.process;
