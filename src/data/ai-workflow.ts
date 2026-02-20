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

export const workflowStats: WorkflowStat[] = [
  {
    value: "10x",
    label: "개발 속도",
    description: "AI 페어 프로그래밍으로 기존 대비 10배 빠른 구현",
  },
  {
    value: "1",
    label: "개발자",
    description: "엔터프라이즈급 시스템을 혼자서 설계부터 배포까지",
  },
  {
    value: "0",
    label: "타협",
    description: "속도를 높여도 아키텍처 품질에 타협 없음",
  },
  {
    value: "24/7",
    label: "AI 파트너",
    description: "Claude Code가 시니어 개발자 역할을 상시 수행",
  },
];

export const workflowCases: WorkflowCase[] = [
  {
    title: "암호화폐 거래소 — Claude Code로 처음부터 구축",
    scale: "풀스택 거래소 플랫폼",
    duration: "Solo",
    solo: true,
    highlight: true,
    liveUrl: "https://exchange.agentmichael.me",
    blogUrl: "https://michaelkim80.tistory.com/5",
    techStack: ["Next.js", "Node.js", "WebSocket", "Terraform", "Kubernetes", "AWS"],
    metrics: [
      "12개 트레이딩 봇 동시 운영",
      "초당 100+ 주문 처리, 딜레이 없음",
      "2~3초마다 체결, 10~15초 호가 갱신",
    ],
    description:
      "5년간의 거래소 개발 경험을 바탕으로, Claude Code와 함께 암호화폐 거래소를 처음부터 구축. 실시간 호가·체결 엔진, 12개 봇 동시 운영, 초당 100건 이상의 주문을 딜레이 없이 처리. Terraform + Kubernetes로 AWS 인프라 자동화까지 1인 완성.",
  },
  {
    title: "CS 응대 AI Agent 시스템",
    scale: "멀티채널 자동화 플랫폼",
    duration: "2주",
    solo: true,
    techStack: ["OpenAI", "Slack", "Notion API", "Node.js"],
    description:
      "해피톡 · 비즈톡 · OpenAI · Notion · Slack 연동 CS 자동 응대 시스템. 아키텍처 설계 → DB 스키마 → 시나리오 엔진 → API 서버까지 전 과정을 Claude Code와 협업으로 단독 개발.",
  },
  {
    title: "사내 ERP 마이크로서비스",
    scale: "MSA 4개 서비스",
    duration: "3주",
    solo: true,
    techStack: ["Java", "Spring Boot", "MSA", "MySQL", "Redis"],
    description:
      "인증 · 고객 · 인트라넷 · 어드민 서비스를 마이크로서비스로 분리 설계. 도메인 모델링부터 API Gateway, 서비스 간 통신, CI/CD 파이프라인까지 원맨 아키텍처.",
  },
  {
    title: "이 포트폴리오 사이트",
    scale: "풀스택 + 인프라",
    duration: "1일",
    solo: true,
    techStack: ["Next.js 15", "Terraform", "AWS", "GitHub Actions"],
    description:
      "이 사이트 자체가 증거입니다. Next.js 15 앱 개발 → Terraform 인프라(S3 + CloudFront + Route53 + ACM) → GitHub Actions CI/CD → 커스텀 도메인 연결까지 하루 만에 완성.",
  },
];

export const workflowProcess = [
  {
    step: "01",
    title: "AI와 아키텍처 설계",
    description: "요구사항 분석 → Claude Code와 함께 시스템 설계 · 기술 스택 결정 · PDCA 기반 계획 수립",
  },
  {
    step: "02",
    title: "초고속 구현",
    description: "AI 페어 프로그래밍으로 보일러플레이트 제거, 핵심 로직에만 집중. 하루 만에 수천 줄 품질 코드 생산",
  },
  {
    step: "03",
    title: "자동 검증 & 배포",
    description: "AI 코드 리뷰 · Gap 분석 · Terraform 인프라 · CI/CD 파이프라인까지 원스톱 자동화",
  },
];
